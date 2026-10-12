/* ===== Configuración: reemplazar por los datos reales ===== */
const SITE = {
  fb: "https://www.facebook.com/",
  ig: "https://www.instagram.com/sociedaditalianagalvez/"
};

/* Páginas a las que navega cada pestaña del menú (excepto "inicio", que es esta misma página) */
const SECTION_PAGES = {
  historia: "historia.html",
  consulado: "consulado.html",
  cultura: "cultura.html",
  colabora: "colabora.html"
};

const LANG_NAMES = { es: "Español", it: "Italiano", en: "English" };
const LOCALES = { es: "es-AR", it: "it-IT", en: "en-US" };

/* ===== Textos de la interfaz ===== */
const I18N = {
  es: {
    skip: "Ir al contenido",
    orgName: "Sociedad Italiana de Socorros Mutuos",
    navHome: "Inicio", navHistory: "Historia", navConsulate: "Consulado", navCulture: "Cultura", navCollab: "Colaborá",
    heroDesc: "Más que una institución, somos un espacio de encuentro donde las generaciones comparten sus historias, las tradiciones cobran vida y la cultura se convierte en un vínculo que nos une.",
    heroHeadline: '<span class="accent-red">Sociedad</span> <span class="ink">Italiana de</span> <span class="accent-green">Socorros Mutuos</span>',
    exploreLabel: "Más detalles",
    tSug: "Sugerencias", tHist: "Historia", tCons: "Consulado y voto electoral", tNoti: "Noticias",
    tSobre: "Sobre nosotros", tColab: "Colaborá", tConv: "Convertite en socio", tCult: "Cultura italiana",
    newsEyebrow: "Comunidad", newsTitle: "Nuestras redes y noticias relevantes de Italia", filterAll: "Todas",
    readIn: "Leer en",
    igTitle: "Instagram", followUs: "Seguinos",
    worksEyebrow: "Nuestros proyectos",
    worksTitle: "¿En qué estamos trabajando?",
    worksSub: "Para lograr la habilitación de la galería y el microcine, la nueva gestión lleva adelante obras de infraestructura fundamental:",
    mapEyebrow: "Encontranos", mapTitle: "Dónde estamos",
    footAbout: "Trabajamos desde hace generaciones por la comunidad ítalo-argentina.",
    fNav: "Navegación", fHist: "Historia", fCons: "Consulado y voto", fCult: "Cultura italiana",
    fNews: "Noticias", fAbout: "Sobre nosotros", fContact: "Contacto",
    fAddress: "Belgrano 664", fPhone: "Tel: (011) 0000-0000",
    fFollow: "Seguinos", fSugg: "Dejá una sugerencia",
    copy: "© 2026 Sociedad Italiana de Socorros Mutuos. Todos los derechos reservados."
  },
  en: {
    skip: "Skip to content",
    orgName: "Italian Mutual Aid Society",
    navHome: "Home", navHistory: "History", navConsulate: "Consulate", navCulture: "Culture", navCollab: "Get involved",
    heroDesc: "More than an institution, we are a meeting place where generations share their stories, traditions come alive, and culture becomes a bond that unites us.",
    heroHeadline: '<span class="accent-red">Italian</span> <span class="ink">Mutual Aid</span> <span class="accent-green">Society</span>',
    exploreLabel: "Learn more",
    tSug: "Suggestions", tHist: "History", tCons: "Consulate and electoral vote", tNoti: "News",
    tSobre: "About us", tColab: "Get involved", tConv: "Become a member", tCult: "Italian culture",
    newsEyebrow: "Community", newsTitle: "Our social media and relevant news from Italy", filterAll: "All",
    readIn: "Read on",
    igTitle: "Instagram", followUs: "Follow us",
    worksEyebrow: "Our projects",
    worksTitle: "What are we working on?",
    worksSub: "To open the gallery and the microcinema, the new leadership is carrying out essential infrastructure works:",
    mapEyebrow: "Find us", mapTitle: "Where we are",
    footAbout: "For generations we have worked for the Italian-Argentine community.",
    fNav: "Menu", fHist: "History", fCons: "Consulate and vote", fCult: "Italian culture",
    fNews: "News", fAbout: "About us", fContact: "Contact",
    fAddress: "Belgrano 664", fPhone: "Phone: (011) 0000-0000",
    fFollow: "Follow us", fSugg: "Leave a suggestion",
    copy: "© 2026 Italian Mutual Aid Society. All rights reserved."
  },
  it: {
    skip: "Vai al contenuto",
    orgName: "Società Italiana di Mutuo Soccorso",
    navHome: "Home", navHistory: "Storia", navConsulate: "Consolato", navCulture: "Cultura", navCollab: "Collabora",
    heroDesc: "Più di un'istituzione, siamo uno spazio d'incontro dove le generazioni condividono le loro storie, le tradizioni prendono vita e la cultura diventa un legame che ci unisce.",
    heroHeadline: '<span class="accent-red">Società</span> <span class="ink">Italiana di</span> <span class="accent-green">Mutuo Soccorso</span>',
    exploreLabel: "Scopri di più",
    tSug: "Suggerimenti", tHist: "Storia", tCons: "Consolato e voto elettorale", tNoti: "Notizie",
    tSobre: "Chi siamo", tColab: "Collabora", tConv: "Diventa socio", tCult: "Cultura italiana",
    newsEyebrow: "Comunità", newsTitle: "I nostri social e le notizie rilevanti dall'Italia", filterAll: "Tutte",
    readIn: "Leggi su",
    igTitle: "Instagram", followUs: "Seguici",
    worksEyebrow: "I nostri progetti",
    worksTitle: "A cosa stiamo lavorando?",
    worksSub: "Per l'apertura della galleria e del microcinema, la nuova gestione sta portando avanti lavori di infrastruttura fondamentali:",
    mapEyebrow: "Dove siamo", mapTitle: "Dove ci troviamo",
    footAbout: "Da generazioni lavoriamo per la comunità italo-argentina.",
    fNav: "Menu", fHist: "Storia", fCons: "Consolato e voto", fCult: "Cultura italiana",
    fNews: "Notizie", fAbout: "Chi siamo", fContact: "Contatti",
    fAddress: "Belgrano 664", fPhone: "Tel: (011) 0000-0000",
    fFollow: "Seguici", fSugg: "Lascia un suggerimento",
    copy: "© 2026 Società Italiana di Mutuo Soccorso. Tutti i diritti riservati."
  }
};

/* ===== Noticias de ejemplo ===== */
const NEWS = [
  { src:"ANSA", url:"https://www.ansa.it", date:"2026-10-02",
    title:{ es:"Italia refuerza los programas de cooperación con América Latina",
            en:"Italy strengthens cooperation programs with Latin America",
            it:"L'Italia rafforza i programmi di cooperazione con l'America Latina" } },
  { src:"Corriere", url:"https://www.corriere.it", date:"2026-10-02",
    title:{ es:"El turismo de otoño supera las previsiones",
            en:"Autumn tourism beats expectations",
            it:"Il turismo autunnale supera le previsioni" } },
  { src:"Repubblica", url:"https://www.repubblica.it", date:"2026-10-01",
    title:{ es:"Elecciones regionales: así se perfila el escenario",
            en:"Regional elections: the outlook so far",
            it:"Elezioni regionali: lo scenario che si delinea" } },
  { src:"Il Post", url:"https://www.ilpost.it", date:"2026-09-30",
    title:{ es:"La gastronomía italiana, entre tradición e innovación",
            en:"Italian cuisine between tradition and innovation",
            it:"La cucina italiana tra tradizione e innovazione" } }
];

/* img: opcional. Si ponés una ruta (ej. "img/ig1.jpg") la foto reemplaza el color de fondo */
const IG_POSTS = [
  { g:"#1E7F55", img:"", caption:{ es:"Tarde de cine italiano", en:"Italian film afternoon", it:"Pomeriggio di cinema italiano" } },
  { g:"#B8323A", img:"", caption:{ es:"Clases de idioma", en:"Language classes", it:"Corsi di lingua" } },
  { g:"#D9A23A", img:"", caption:{ es:"Colecta solidaria", en:"Solidarity drive", it:"Raccolta solidale" } },
  { g:"#5b1020", img:"", caption:{ es:"Vino y tradición", en:"Wine and tradition", it:"Vino e tradizione" } },
  { g:"#2b5ea8", img:"", caption:{ es:"Día de la familia", en:"Family day", it:"Giornata della famiglia" } },
  { g:"#2e5e3a", img:"", caption:{ es:"Nuestra sede", en:"Our headquarters", it:"La nostra sede" } }
];

/* ===== En qué estamos trabajando (entradas de cine) ===== */
const WORK_ICONS = {
  techos: '<path d="M3 11 12 4l9 7"/><path d="M5 10v9a1 1 0 0 0 1 1h3v-5h6v5h3a1 1 0 0 0 1-1v-9"/>',
  banos: '<rect x="7" y="3" width="10" height="18" rx="1.5"/><circle cx="13.3" cy="12" r=".9" fill="currentColor" stroke="none"/>',
  cloacas: '<path d="M12 3s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11Z"/>',
  electrica: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
  pisos: '<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>',
  aporte: '<path d="M12 21s-7.5-4.35-10-8.8C.3 8.4 2.8 5 6.3 5c2 0 3.7 1.1 5.7 3.2C14 6.1 15.7 5 17.7 5c3.5 0 6 3.4 4.3 7.2C19.5 16.65 12 21 12 21Z"/>'
};

const WORKS = [
  { icon:"techos", label:{ es:"Obra", en:"Works", it:"Lavori" },
    title:{ es:"Renovación de Techos", en:"Roof Renovation", it:"Rinnovo dei Tetti" },
    text:{ es:"Reparación e impermeabilización para frenar filtraciones y proteger el edificio.",
           en:"Repair and waterproofing to stop leaks and protect the building.",
           it:"Riparazione e impermeabilizzazione per fermare le infiltrazioni e proteggere l'edificio." } },
  { icon:"banos", label:{ es:"Obra", en:"Works", it:"Lavori" },
    title:{ es:"Baños Nuevos", en:"New Restrooms", it:"Nuovi Bagni" },
    text:{ es:"Construcción e instalación completa de sanitarios modernos e higiénicos.",
           en:"Full construction and installation of modern, hygienic restrooms.",
           it:"Costruzione e installazione completa di servizi igienici moderni." } },
  { icon:"cloacas", label:{ es:"Obra", en:"Works", it:"Lavori" },
    title:{ es:"Red de Cloacas", en:"Sewage Network", it:"Rete Fognaria" },
    text:{ es:"Reinstalación completa del sistema de desagües sanitarios y cloacales.",
           en:"Complete reinstallation of the sanitary and sewage drainage system.",
           it:"Reinstallazione completa del sistema di scarico sanitario e fognario." } },
  { icon:"electrica", label:{ es:"Obra", en:"Works", it:"Lavori" },
    title:{ es:"Instalación Eléctrica", en:"Electrical Wiring", it:"Impianto Elettrico" },
    text:{ es:"Nuevo cableado, tableros e iluminación segura adaptada a eventos.",
           en:"New wiring, panels and safe lighting adapted for events.",
           it:"Nuovo cablaggio, quadri e illuminazione sicura adatta agli eventi." } },
  { icon:"pisos", label:{ es:"Obra", en:"Works", it:"Lavori" },
    title:{ es:"Restauración de Pisos", en:"Floor Restoration", it:"Restauro dei Pavimenti" },
    text:{ es:"Nivelación y colocación de nuevos revestimientos para circulación continua.",
           en:"Leveling and new flooring for smooth, continuous circulation.",
           it:"Livellamento e nuova pavimentazione per una circolazione continua." } },
  { icon:"aporte", label:{ es:"Bonus", en:"Bonus", it:"Bonus" },
    title:{ es:"Tu Aporte Suma", en:"Your Contribution Counts", it:"Il Tuo Contributo Conta" },
    text:{ es:"Cada cuota social o donación se destina directamente a la compra de materiales.",
           en:"Every membership fee or donation goes directly to buying materials.",
           it:"Ogni quota sociale o donazione viene destinata direttamente all'acquisto di materiali." } }
];

/* ===== Estado y utilidades ===== */
let lang = "es";
let filter = "all";

const $ = sel => document.querySelector(sel);
const t = key => (I18N[lang] && I18N[lang][key]) ?? I18N.es[key];
const L = obj => obj[lang] ?? obj.es;
const fmtDate = iso => new Date(iso + "T12:00:00").toLocaleDateString(LOCALES[lang], { day:"numeric", month:"long", year:"numeric" });
const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>';

/* ===== Render ===== */
function applyStatic(){
  document.documentElement.lang = lang;
  document.title = t("orgName");
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-html]").forEach(el => el.innerHTML = t(el.dataset.i18nHtml));

  document.querySelectorAll(".language").forEach(b => {
    const on = b.dataset.lang === lang;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", String(on));
  });

  const igLink = $("#ig-link");
  if (igLink) igLink.href = SITE.ig;
  document.querySelectorAll("[data-link='fb']").forEach(a => a.href = SITE.fb);
  document.querySelectorAll("[data-link='ig']").forEach(a => a.href = SITE.ig);
}

function renderFilters(){
  const keys = ["all", ...new Set(NEWS.map(n => n.src))];
  $("#filters").innerHTML = keys.map(k =>
    `<button type="button" data-src="${k}" aria-pressed="${k === filter}">${k === "all" ? t("filterAll") : k}</button>`
  ).join("");
}

function renderNews(){
  const items = NEWS.filter(n => filter === "all" || n.src === filter);
  $("#news").innerHTML = items.map(n => {
    const d = new Date(n.date + "T12:00:00");
    const day = d.getDate();
    const month = d.toLocaleDateString(LOCALES[lang], { month:"short" }).replace(".", "");
    return `
    <a class="row" href="${n.url}" target="_blank" rel="noopener" aria-label="${t("readIn")} ${n.src}">
      <div class="dt"><span class="date-n">${day}</span><span class="date-m">${month}</span></div>
      <div><p class="meta">${n.src}</p><h3 class="row-t">${L(n.title)}</h3></div>
      <span class="arr" aria-hidden="true">${ARROW}</span>
    </a>`;
  }).join("");
}

function renderSocial(){
  $("#ig-grid").innerHTML = IG_POSTS.map(p => {
    const bg = p.img ? `url('${p.img}') center/cover no-repeat` : p.g;
    return `<a class="ig" href="${SITE.ig}" target="_blank" rel="noopener" style="background:${bg}"><span>${L(p.caption)}</span></a>`;
  }).join("");
}

function renderWorks(){
  $("#works-grid").innerHTML = WORKS.map(w => `
    <article class="ticket">
      <div class="t-stub">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${WORK_ICONS[w.icon]}</svg>
        <span>${L(w.label)}</span>
      </div>
      <div class="t-body">
        <h3>${L(w.title)}</h3>
        <p>${L(w.text)}</p>
      </div>
    </article>`).join("");
}

function render(){
  applyStatic();
  renderFilters();
  renderNews();
  renderSocial();
  renderWorks();
}

/* ===== Eventos ===== */

// Pestañas del menú: "Inicio" te deja en esta página, el resto navega a su página propia
document.querySelectorAll(".nav-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    const section = tab.dataset.section;
    if (section === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (SECTION_PAGES[section]) {
      window.location.href = SECTION_PAGES[section];
    }
  });
});

// Los 3 botones de idioma: cada uno pone directamente ese idioma
document.querySelectorAll(".language").forEach(btn => {
  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    try { localStorage.setItem("lang", lang); } catch(_) {}
    render();
  });
});

$("#filters").addEventListener("click", e => {
  const btn = e.target.closest("[data-src]");
  if(!btn) return;
  filter = btn.dataset.src;
  renderFilters();
  renderNews();
});

$("#explore").addEventListener("click", () => {
  window.scrollTo({ top: document.getElementById("accesos").offsetTop - 20, behavior: "smooth" });
});

/* ===== Inicio: recordar el último idioma elegido ===== */
try {
  const saved = localStorage.getItem("lang");
  if(saved && I18N[saved]) lang = saved;
} catch(_) {}

render();
