/* ───────────────────────────────────────────────────────────
   Menú, selector de idioma y pie compartidos por todas las páginas.

   Cada página incluye, donde va el menú:
     <nav class="navigation" aria-label="Navegación principal" data-sitio="menu" data-pagina="historia"></nav>
     <script src="js/sitio.js"></script>
   y, donde va el pie:
     <footer class="foot" data-sitio="pie"></footer>
   (lo que haya dentro del <footer>, como un crédito propio de la página,
   se conserva al final del pie).

   Cuando el menú tiene poco espacio (celulares, o la portada en pantallas
   medianas), las secciones se esconden detrás del botón «Menú» y se
   despliegan debajo de la barra (ver css/base.css).

   El idioma elegido se guarda en localStorage («lang»), se indica en
   <html lang> y se avisa con el evento «sitio:idioma» para que cada
   página traduzca su propio contenido.

   Contenido de cada página: el español está en el HTML. Los textos
   traducibles llevan data-t="clave" (y data-t-attr="atributo:clave;…"
   para atributos como aria-label o placeholder); las traducciones van en
   js/i18n/<página>.js, que define window.SITIO_TRADUCCIONES =
   { es:{…}, it:{…}, en:{…} } y se carga al final del <body>. En «es» solo
   van los textos que arma JavaScript. Si falta una clave, queda el español.
   Para esos textos armados por JavaScript: Sitio.t("clave", { valor }).
   ─────────────────────────────────────────────────────────── */
(() => {
  "use strict";

  const IDIOMAS = ["es", "it", "en"];
  const REDES = {
    facebook: "https://www.facebook.com/TeatroMarconiGalvezItaliaUnida/?locale=es_LA",
    instagram: "https://www.instagram.com/sociedaditalianagalvez/"
  };
  const CONTACTO = {
    direccion: "Belgrano 664, Gálvez, Santa Fe",
    telefono: "Tel: (3404) 408843",
    correo: "contacto@sociedad.org.ar"
  };

  const TEXTOS = {
    es: {
      menu: "Navegación principal", menuBoton: "Menú", inicio: "Inicio", historia: "Historia", consulado: "Consulado", cultura: "Cultura", colabora: "Colaborá",
      idioma: "Idioma", es: "Español", it: "Italiano", en: "Inglés",
      orgName: "Sociedad Italiana de Socorros Mutuos", footAbout: "Trabajamos desde hace generaciones por la comunidad ítalo-argentina.",
      fNav: "Navegación", fAbout: "Sobre nosotros", fCons: "Consulado y voto", fCult: "Cultura italiana", fNews: "Noticias",
      fContact: "Contacto", fFollow: "Seguinos", fSugg: "Dejá una sugerencia",
      copy: "© 2026 Sociedad Italiana de Socorros Mutuos. Todos los derechos reservados."
    },
    it: {
      menu: "Navigazione principale", menuBoton: "Menu", inicio: "Home", historia: "Storia", consulado: "Consolato", cultura: "Cultura", colabora: "Collabora",
      idioma: "Lingua", es: "Spagnolo", it: "Italiano", en: "Inglese",
      orgName: "Società Italiana di Mutuo Soccorso", footAbout: "Da generazioni lavoriamo per la comunità italo-argentina.",
      fNav: "Menu", fAbout: "Chi siamo", fCons: "Consolato e voto", fCult: "Cultura italiana", fNews: "Notizie",
      fContact: "Contatti", fFollow: "Seguici", fSugg: "Lascia un suggerimento",
      copy: "© 2026 Società Italiana di Mutuo Soccorso. Tutti i diritti riservati."
    },
    en: {
      menu: "Main navigation", menuBoton: "Menu", inicio: "Home", historia: "History", consulado: "Consulate", cultura: "Culture", colabora: "Get involved",
      idioma: "Language", es: "Spanish", it: "Italian", en: "English",
      orgName: "Italian Mutual Aid Society", footAbout: "For generations we have worked for the Italian-Argentine community.",
      fNav: "Menu", fAbout: "About us", fCons: "Consulate and vote", fCult: "Italian culture", fNews: "News",
      fContact: "Contact", fFollow: "Follow us", fSugg: "Leave a suggestion",
      copy: "© 2026 Italian Mutual Aid Society. All rights reserved."
    }
  };

  const ICONOS = {
    historia: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/><path d="M8 7h8M8 11h8"/>',
    consulado: '<path d="m3 9 9-6 9 6"/><path d="M4 10h16M5 10v9M9 10v9M15 10v9M19 10v9M3 21h18M2 19h20"/>',
    cultura: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="7" r=".8" fill="currentColor" stroke="none"/>',
    colabora: '<path d="M12 21s-7-4.35-9-9.2C1.5 8.2 3.8 5 7.2 5c2 0 3.4 1.1 4.8 2.8C13.4 6.1 14.8 5 16.8 5 20.2 5 22.5 8.2 21 11.8 19 16.65 12 21 12 21Z"/><path d="M3 13h4l2-3 3 5 2-3h7"/>',
    noticias: '<path d="M4 5h13v14H6a2 2 0 0 1-2-2V5Z"/><path d="M17 8h3v9a2 2 0 0 1-2 2"/><path d="M7 9h7M7 12h7M7 15h4"/>',
    facebook: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M15.5 8H14a2 2 0 0 0-2 2v11M9.5 13h5.5"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>',
    sugerencia: '<path d="M12 21s-7-4.35-9-9.2C1.5 8.2 3.8 5 7.2 5c2 0 3.4 1.1 4.8 2.8C13.4 6.1 14.8 5 16.8 5 20.2 5 22.5 8.2 21 11.8 19 16.65 12 21 12 21Z"/>',
    abrir: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    cerrar: '<path d="M6 6l12 12M18 6 6 18"/>'
  };
  const icono = (nombre, clase = "") =>
    `<svg class="${clase}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONOS[nombre]}</svg>`;

  let idioma = "es";
  try { const guardado = localStorage.getItem("lang"); if (IDIOMAS.includes(guardado)) idioma = guardado; } catch (_) {}

  /* ── Menú ─────────────────────────────────────────── */
  const PESTANAS = [
    { clave: "historia", href: "historia.html" },
    { clave: "consulado", href: "consulado.html" },
    { clave: "cultura", href: "cultura.html" },
    { clave: "colabora", href: "contacto.html" }
  ];
  const PAGINA_DE = { contacto: "colabora" };   // la pestaña «Colaborá» lleva a Contacto
  let menus = 0;

  function armarMenu(nav){
    const pagina = PAGINA_DE[nav.dataset.pagina] || nav.dataset.pagina;
    const opciones = "sitio-opciones-" + (++menus);
    const atributos = clave => `class="nav-tab nav-tab--${clave}${clave === pagina ? ' active" aria-current="page"' : '"'}`;
    // Orden: logo, botón «Menú» (solo visible con poco espacio), secciones e idiomas.
    nav.innerHTML = `<div class="menu-pestanas">` +
      `<a ${atributos("inicio")} href="index.html" data-sitio-aria="inicio"><img src="img/logo.png" class="icon-logo" alt=""></a>` +
      `<button class="menu-boton" type="button" aria-expanded="false" aria-controls="${opciones}">` +
        icono("abrir", "menu-boton-icono menu-boton-icono--abrir") + icono("cerrar", "menu-boton-icono menu-boton-icono--cerrar") +
        `<span data-sitio-texto="menuBoton"></span></button>` +
      `<div class="menu-opciones" id="${opciones}">` +
      PESTANAS.map(p => `<a ${atributos(p.clave)} href="${p.href}">${icono(p.clave, "nav-icon")}<span data-sitio-texto="${p.clave}"></span></a>`).join("") +
      `</div>` +
      `<div class="idiomas" role="group" data-sitio-aria="idioma">` +
      IDIOMAS.map(l => `<button class="idioma" type="button" data-idioma="${l}" lang="${l}" data-sitio-aria="${l}">${l.toUpperCase()}</button>`).join("") +
      `</div></div>`;
    if (pagina === "inicio") {
      // En la portada, el logo sube al principio en lugar de recargar la página.
      nav.querySelector(".nav-tab").addEventListener("click", e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      });
    }
    nav.querySelector(".idiomas").addEventListener("click", e => {
      const boton = e.target.closest("[data-idioma]");
      if (boton) cambiarIdioma(boton.dataset.idioma);
    });

    // Botón «Menú»: abre y cierra las secciones. Se cierra con Escape, al tocar
    // o enfocar algo fuera del menú y al volver a la página con «Atrás».
    const boton = nav.querySelector(".menu-boton");
    const desplegar = abierto => {
      nav.classList.toggle("menu-abierto", abierto);
      boton.setAttribute("aria-expanded", String(abierto));
    };
    boton.addEventListener("click", () => desplegar(boton.getAttribute("aria-expanded") !== "true"));
    nav.addEventListener("keydown", e => {
      if (e.key === "Escape" && nav.classList.contains("menu-abierto")) { desplegar(false); boton.focus(); }
    });
    const afuera = e => { if (!nav.contains(e.target)) desplegar(false); };
    document.addEventListener("pointerdown", afuera);
    document.addEventListener("focusin", afuera);
    window.addEventListener("pageshow", () => desplegar(false));
  }

  /* ── Pie ──────────────────────────────────────────── */
  function armarPie(pie){
    const notas = [...pie.childNodes].filter(n => n.nodeType === 1 || n.textContent.trim());
    const enlace = (nombre, href, clave, externo) =>
      `<li>${icono(nombre)}<a href="${href}"${externo ? ' target="_blank" rel="noopener"' : ""}${clave ? ` data-sitio-texto="${clave}"` : ""}>${clave ? "" : nombre[0].toUpperCase() + nombre.slice(1)}</a></li>`;
    pie.innerHTML =
      `<div class="foot-in">` +
        `<div class="foot-grid">` +
          `<div><p class="foot-logo" data-sitio-texto="orgName"></p><p class="foot-sub" data-sitio-texto="footAbout"></p></div>` +
          `<div><h2 data-sitio-texto="fNav"></h2><ul>` +
            enlace("historia", "historia.html", "fAbout") + enlace("consulado", "consulado.html", "fCons") +
            enlace("cultura", "cultura.html", "fCult") + enlace("noticias", "index.html#noticias", "fNews") +
          `</ul></div>` +
          `<div><h2 data-sitio-texto="fContact"></h2><ul>` +
            `<li>${CONTACTO.direccion}</li><li>${CONTACTO.telefono}</li><li><a href="mailto:${CONTACTO.correo}">${CONTACTO.correo}</a></li>` +
          `</ul></div>` +
          `<div><h2 data-sitio-texto="fFollow"></h2><ul>` +
            enlace("facebook", REDES.facebook, "", true) + enlace("instagram", REDES.instagram, "", true) +
            enlace("sugerencia", "contacto.html", "fSugg") +
          `</ul></div>` +
        `</div>` +
        `<div class="foot-notas"></div>` +
        `<div class="copy" data-sitio-texto="copy"></div>` +
      `</div>`;
    const contenedor = pie.querySelector(".foot-notas");
    if (notas.length) contenedor.append(...notas); else contenedor.remove();
  }

  /* ── Idioma ───────────────────────────────────────── */
  function traducir(){
    const tx = TEXTOS[idioma];
    document.documentElement.lang = idioma;
    document.querySelectorAll("[data-sitio-texto]").forEach(el => { el.textContent = tx[el.dataset.sitioTexto]; });
    document.querySelectorAll("[data-sitio-aria]").forEach(el => { el.setAttribute("aria-label", tx[el.dataset.sitioAria]); });
    document.querySelectorAll('[data-sitio="menu"]').forEach(nav => nav.setAttribute("aria-label", tx.menu));
    document.querySelectorAll("[data-idioma]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.idioma === idioma)));
  }

  /* ── Contenido de la página ───────────────────────── */
  const originales = new WeakMap();                 // español original de cada texto y atributo
  const textos = () => window.SITIO_TRADUCCIONES || {};
  const tituloOriginal = document.title;

  // Traducción de una clave para los textos que arma JavaScript; {nombre} se reemplaza por valores[nombre].
  function t(clave, valores){
    const tx = textos(), propio = tx[idioma] && tx[idioma][clave];
    let texto = propio != null ? propio : (tx.es && tx.es[clave] != null ? tx.es[clave] : clave);
    if (valores) texto = texto.replace(/\{(\w+)\}/g, (m, k) => (valores[k] != null ? valores[k] : m));
    return texto;
  }

  function traducirContenido(){
    const tx = idioma === "es" ? null : textos()[idioma];
    document.querySelectorAll("[data-t]").forEach(el => {
      if (!originales.has(el)) { if (!tx) return; originales.set(el, el.innerHTML); }
      const nuevo = tx && tx[el.dataset.t] != null ? tx[el.dataset.t] : originales.get(el);
      if (el.innerHTML !== nuevo) el.innerHTML = nuevo;
    });
    document.querySelectorAll("[data-t-attr]").forEach(el => {
      el.dataset.tAttr.split(";").forEach(par => {
        const [attr, clave] = par.split(":").map(s => s.trim());
        if (!attr || !clave) return;
        const guardados = originales.get(el) || {};
        if (!(attr in guardados)) { if (!tx) return; guardados[attr] = el.getAttribute(attr); originales.set(el, guardados); }
        el.setAttribute(attr, tx && tx[clave] != null ? tx[clave] : guardados[attr]);
      });
    });
    // La portada traduce su título desde script.js; acá solo las páginas con traducciones propias.
    if (window.SITIO_TRADUCCIONES) document.title = tx && tx.titulo ? tx.titulo : tituloOriginal;
  }

  function cambiarIdioma(nuevo){
    if (!IDIOMAS.includes(nuevo)) return;
    idioma = nuevo;
    try { localStorage.setItem("lang", nuevo); } catch (_) {}
    traducir();
    traducirContenido();
    document.dispatchEvent(new CustomEvent("sitio:idioma", { detail: { idioma: nuevo } }));
  }

  window.Sitio = { get idioma(){ return idioma; }, cambiarIdioma, t };

  // El menú se arma enseguida (este script va justo después de él); el pie y el contenido, cuando termina de cargar la página.
  document.querySelectorAll('[data-sitio="menu"]').forEach(armarMenu);
  traducir();
  const alCargar = () => { document.querySelectorAll('[data-sitio="pie"]').forEach(armarPie); traducir(); traducirContenido(); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", alCargar);
  else alCargar();
})();
