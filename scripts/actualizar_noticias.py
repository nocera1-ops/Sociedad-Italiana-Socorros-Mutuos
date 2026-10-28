#!/usr/bin/env python3
"""Descarga titulares de Google News (en español) y los guarda en js/noticias.js.

Lo ejecuta GitHub Actions dos veces por día (.github/workflows/noticias.yml).
Solo usa la biblioteca estándar de Python: no hace falta instalar nada.

Para cambiar los temas, editar TEMAS: cada tema es una búsqueda de Google News
(admite comillas para frases exactas y OR entre alternativas).
"""
import html
import json
import re
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

# Un tema por sección del sitio. La etiqueta se muestra en la tarjeta.
TEMAS = [
    ("Comunidad", '"colectividad italiana" OR "inmigración italiana" OR "inmigrantes italianos" OR "sociedad italiana de socorros mutuos"'),
    ("Consulado", '"ciudadanía italiana" OR "consulado italiano" OR "consulado de Italia" OR "voto de los italianos en el exterior"'),
    ("Cultura", '"cultura italiana" OR "cocina italiana" OR "cine italiano" OR "música italiana" OR "literatura italiana"'),
    ("Patrimonio", '"sociedad italiana" teatro OR restauración OR "puesta en valor" OR patrimonio'),
    ("Italia y Argentina", '"Embajada de Italia" OR "italianos en Argentina" OR "Italia y Argentina"'),
]
CANTIDAD = 6          # titulares que se publican
ANTIGUEDAD_DIAS = 21  # se descartan titulares más viejos
URL = "https://news.google.com/rss/search?q={q}&hl=es-419&gl=AR&ceid=AR:es-419"
SALIDA = Path(__file__).resolve().parent.parent / "js" / "noticias.js"
ENCABEZADO = ("/* Archivo generado automáticamente por .github/workflows/noticias.yml "
              "(scripts/actualizar_noticias.py). No editar a mano. */\n")


def descargar(url):
    pedido = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Noticias Sociedad Italiana Galvez)"})
    for intento in range(2):
        try:
            with urllib.request.urlopen(pedido, timeout=20) as respuesta:
                return respuesta.read()
        except Exception:
            if intento:
                raise
            time.sleep(5)


def leer_tema(etiqueta, consulta, limite):
    xml = descargar(URL.format(q=urllib.parse.quote(f"{consulta} when:{ANTIGUEDAD_DIAS}d")))
    items = []
    for item in ET.fromstring(xml).iter("item"):
        titulo = html.unescape((item.findtext("title") or "").strip())
        enlace = (item.findtext("link") or "").strip()
        medio = html.unescape((item.findtext("source") or "").strip())
        try:
            fecha = parsedate_to_datetime(item.findtext("pubDate") or "")
        except (TypeError, ValueError):
            continue
        if fecha.tzinfo is None:
            fecha = fecha.replace(tzinfo=timezone.utc)
        if not titulo or not enlace.startswith("https://") or fecha < limite:
            continue
        # Google News agrega « - Medio» al final del título.
        if medio and titulo.endswith(f" - {medio}"):
            titulo = titulo[: -len(medio) - 3].rstrip()
        items.append({"titulo": titulo, "enlace": enlace, "medio": medio,
                      "fecha": fecha.astimezone(timezone.utc).isoformat(timespec="minutes"), "tema": etiqueta})
    return sorted(items, key=lambda n: n["fecha"], reverse=True)


def clave(titulo):
    return re.sub(r"\W+", "", titulo.lower())[:80]


def elegir(por_tema):
    """Toma los titulares en ronda (uno por tema, luego el segundo de cada tema...)
    para que todas las secciones estén representadas, sin repetir noticias."""
    elegidos, vistos = [], set()
    ronda = 0
    while len(elegidos) < CANTIDAD and any(len(lista) > ronda for lista in por_tema):
        for lista in por_tema:
            if ronda < len(lista) and len(elegidos) < CANTIDAD:
                n = lista[ronda]
                if clave(n["titulo"]) not in vistos and n["enlace"] not in vistos:
                    vistos.update({clave(n["titulo"]), n["enlace"]})
                    elegidos.append(n)
        ronda += 1
    return elegidos


def leer_anterior():
    try:
        texto = SALIDA.read_text(encoding="utf-8")
        return json.loads(texto[texto.index("{"): texto.rindex("}") + 1]).get("items", [])
    except (OSError, ValueError):
        return None


def main():
    limite = datetime.now(timezone.utc) - timedelta(days=ANTIGUEDAD_DIAS)
    por_tema, fallos = [], 0
    for etiqueta, consulta in TEMAS:
        try:
            por_tema.append(leer_tema(etiqueta, consulta, limite))
        except Exception as error:  # un tema que falla no detiene a los demás
            fallos += 1
            por_tema.append([])
            print(f"Aviso: no se pudo leer el tema «{etiqueta}»: {error}", file=sys.stderr)

    if fallos == len(TEMAS):
        print("Error: no se pudo leer ningún tema. Se conserva el archivo anterior.", file=sys.stderr)
        return 1

    items = elegir(por_tema)
    if not items:
        print("No hay titulares nuevos en el período. Se conserva el archivo anterior.")
        return 0
    if items == leer_anterior():
        print("Sin cambios en los titulares.")
        return 0

    datos = {"actualizado": datetime.now(timezone.utc).isoformat(timespec="minutes"), "items": items}
    SALIDA.write_text(ENCABEZADO + "window.NOTICIAS = " + json.dumps(datos, ensure_ascii=False, indent=2) + ";\n",
                      encoding="utf-8")
    print(f"Se guardaron {len(items)} titulares en {SALIDA.name}.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
