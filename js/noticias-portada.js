/* ───────────────────────────────────────────────────────────
   Sección «Noticias» de la portada (index.html).
   Muestra los titulares de js/noticias.js, que GitHub Actions actualiza
   dos veces por día. Los títulos llegan en español desde Google News;
   los textos de la sección siguen el idioma elegido en el menú
   (script.js lo indica en el atributo lang de <html>).
   ─────────────────────────────────────────────────────────── */
(() => {
  "use strict";

  const seccion = document.getElementById("noticias");
  const lista = document.getElementById("noticias-lista");
  const estado = document.getElementById("noticias-estado");
  if (!seccion || !lista || !estado) return;

  const datos = window.NOTICIAS || { actualizado: null, items: [] };
  const items = (datos.items || []).filter(n => n && n.titulo && /^https:\/\//.test(n.enlace || ""));

  const LOCALES = { es: "es-AR", it: "it-IT", en: "en-US" };
  const TEXTOS = {
    es: {
      eyebrow: "Actualidad", titulo: "Lo que está pasando", tituloEm: "en la comunidad italiana.",
      nota: "Titulares de Google News sobre la colectividad, el consulado, la cultura y el patrimonio italianos. Se actualizan solos dos veces por día.",
      actualizado: "Actualizado el", fuente: "Fuente: Google News. Cada titular lleva a la nota en su medio.",
      vacio: "Los titulares se cargan automáticamente. Volvé a visitar esta sección en unas horas.",
      pestana: "se abre en una pestaña nueva",
      temas: { "Comunidad": "Comunidad", "Consulado": "Consulado", "Cultura": "Cultura", "Patrimonio": "Patrimonio", "Italia y Argentina": "Italia y Argentina" }
    },
    it: {
      eyebrow: "Attualità", titulo: "Cosa sta succedendo", tituloEm: "nella comunità italiana.",
      nota: "Titoli di Google News su collettività, consolato, cultura e patrimonio italiani. Si aggiornano da soli due volte al giorno. I titoli sono in spagnolo.",
      actualizado: "Aggiornato il", fuente: "Fonte: Google News. Ogni titolo porta all'articolo sul suo giornale.",
      vacio: "I titoli si caricano automaticamente. Torna a visitare questa sezione tra qualche ora.",
      pestana: "si apre in una nuova scheda",
      temas: { "Comunidad": "Comunità", "Consulado": "Consolato", "Cultura": "Cultura", "Patrimonio": "Patrimonio", "Italia y Argentina": "Italia e Argentina" }
    },
    en: {
      eyebrow: "News", titulo: "What's happening", tituloEm: "in the Italian community.",
      nota: "Google News headlines about the Italian community, consulate, culture and heritage. They update themselves twice a day. Headlines are in Spanish.",
      actualizado: "Updated on", fuente: "Source: Google News. Each headline links to the story on its outlet.",
      vacio: "Headlines load automatically. Please check this section again in a few hours.",
      pestana: "opens in a new tab",
      temas: { "Comunidad": "Community", "Consulado": "Consulate", "Cultura": "Culture", "Patrimonio": "Heritage", "Italia y Argentina": "Italy and Argentina" }
    }
  };

  const idioma = () => (TEXTOS[document.documentElement.lang] ? document.documentElement.lang : "es");
  const fecha = (iso, l, conHora) => {
    const d = new Date(iso);
    if (isNaN(d)) return "";
    const opciones = conHora ? { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" } : { day: "numeric", month: "short" };
    return d.toLocaleString(LOCALES[l], opciones);
  };
  const crear = (etiqueta, clase, texto) => {
    const el = document.createElement(etiqueta);
    if (clase) el.className = clase;
    if (texto) el.textContent = texto;
    return el;
  };

  function tarjeta(n, i, tx, l){
    const li = crear("li", "noticia");
    li.append(crear("span", "noticia-num", String(i + 1).padStart(2, "0")));
    li.append(crear("p", "noticia-tema", tx.temas[n.tema] || n.tema || ""));
    const h3 = crear("h3");
    const a = crear("a", "", n.titulo);
    a.href = n.enlace;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.append(crear("span", "noticia-sr", ` (${n.medio ? n.medio + ", " : ""}${tx.pestana})`));
    h3.append(a);
    li.append(h3);
    li.append(crear("p", "noticia-meta", [n.medio, fecha(n.fecha, l)].filter(Boolean).join(" · ")));
    return li;
  }

  function render(){
    const l = idioma();
    const tx = TEXTOS[l];
    seccion.querySelectorAll("[data-noticias]").forEach(el => { el.textContent = tx[el.dataset.noticias]; });
    lista.replaceChildren(...items.map((n, i) => tarjeta(n, i, tx, l)));
    lista.hidden = !items.length;
    estado.textContent = items.length
      ? `${datos.actualizado ? `${tx.actualizado} ${fecha(datos.actualizado, l, true)} · ` : ""}${tx.fuente}`
      : tx.vacio;
  }

  render();
  new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
})();
