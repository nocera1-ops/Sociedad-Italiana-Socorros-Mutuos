/* ===== Configuración: reemplazar por los datos reales ===== */
const SITE = {
  fb: "https://www.facebook.com/",
  ig: "https://www.instagram.com/"
};

/* Orden en que la bandera cambia al tocarla: Argentina → Italia → Estados Unidos */
const LANG_ORDER = ["es", "it", "en"];
const LANG_NAMES = { es: "Español", it: "Italiano", en: "English" };
const LOCALES = { es: "es-AR", it: "it-IT", en: "en-US" };

/* ===== Textos de la interfaz ===== */
const I18N = {
  es: {
    skip: "Ir al contenido",
    orgName: "Sociedad Italiana de Socorros Mutuos",
    navHistory: "Historia", navConsulate: "Consulado y voto electoral", navCulture: "Cultura italiana",
    heroEyebrow: "Una comunidad que une",
    heroTitle: 'Creemos un mundo donde <em>nadie</em> quede atrás.',
    heroText: "Sumate a nuestra causa y trabajemos juntos por el respeto y la igualdad de todos los seres humanos.",
    heroBtn: "Nuestra historia",
    tSug: "Sugerencias", tHist: "Historia", tCons: "Consulado y voto electoral", tNoti: "Noticias",
    tSobre: "Sobre nosotros", tColab: "Colaborá", tConv: "Convertite en socio", tCult: "Cultura italiana",
    newsEyebrow: "Desde Italia", newsTitle: "Noticias de Italia", filterAll: "Todas",
    newsNote: "Titulares de ejemplo. Para noticias en tiempo real, conectar los feeds RSS de cada medio.",
    readIn: "Leer en",
    socialEyebrow: "Comunidad", socialTitle: "Seguinos en redes",
    fbTitle: "Facebook", igTitle: "Instagram", viewPage: "Ver página", followUs: "Seguinos",
    comments: "comentarios", author: "Sociedad Italiana",
    footAbout: "Trabajamos desde hace generaciones por la comunidad ítalo-argentina.",
    fNav: "Navegación", fHist: "Historia", fCons: "Consulado y voto", fCult: "Cultura italiana",
    fNews: "Noticias", fAbout: "Sobre nosotros", fContact: "Contacto",
    fAddress: "Dirección de la sociedad, Ciudad, Argentina", fPhone: "Tel: (011) 0000-0000",
    fFollow: "Seguinos", fSugg: "Dejá una sugerencia",
    copy: "© 2026 Sociedad Italiana de Socorros Mutuos. Todos los derechos reservados.",
    moreNav: "Más opciones",
    worksEyebrow: "Nuestros proyectos",
    worksTitle: "¿En qué estamos trabajando?",
    worksSub: "Para lograr la habilitación de La Galería y el Microcine, la nueva gestión lleva adelante obras de infraestructura fundamental:"
  },
  en: {
    skip: "Skip to content",
    orgName: "Italian Mutual Aid Society",
    navHistory: "History", navConsulate: "Consulate and electoral vote", navCulture: "Italian culture",
    heroEyebrow: "A community that unites",
    heroTitle: 'We believe in a world where <em>no one</em> is left behind.',
    heroText: "Join us in working for respect and equality for all human beings.",
    heroBtn: "Our story",
    tSug: "Suggestions", tHist: "History", tCons: "Consulate and electoral vote", tNoti: "News",
    tSobre: "About us", tColab: "Get involved", tConv: "Become a member", tCult: "Italian culture",
    newsEyebrow: "From Italy", newsTitle: "News from Italy", filterAll: "All",
    newsNote: "Sample headlines. To show live news, connect each outlet's RSS feed.",
    readIn: "Read on",
    socialEyebrow: "Community", socialTitle: "Follow us on social media",
    fbTitle: "Facebook", igTitle: "Instagram", viewPage: "Visit page", followUs: "Follow us",
    comments: "comments", author: "Italian Society",
    footAbout: "For generations we have worked for the Italian-Argentine community.",
    fNav: "Menu", fHist: "History", fCons: "Consulate and vote", fCult: "Italian culture",
    fNews: "News", fAbout: "About us", fContact: "Contact",
    fAddress: "Society address, City, Argentina", fPhone: "Phone: (011) 0000-0000",
    fFollow: "Follow us", fSugg: "Leave a suggestion",
    copy: "© 2026 Italian Mutual Aid Society. All rights reserved.",
    moreNav: "More options",
    worksEyebrow: "Our projects",
    worksTitle: "What are we working on?",
    worksSub: "To open La Galería and the Microcine, the new leadership is carrying out essential infrastructure works:"
  },
  it: {
    skip: "Vai al contenuto",
    orgName: "Società Italiana di Mutuo Soccorso",
    navHistory: "Storia", navConsulate: "Consolato e voto elettorale", navCulture: "Cultura italiana",
    heroEyebrow: "Una comunità che unisce",
    heroTitle: 'Crediamo in un mondo dove <em>nessuno</em> venga lasciato indietro.',
    heroText: "Unisciti a noi per lavorare insieme al rispetto e all'uguaglianza di tutti gli esseri umani.",
    heroBtn: "La nostra storia",
    tSug: "Suggerimenti", tHist: "Storia", tCons: "Consolato e voto elettorale", tNoti: "Notizie",
    tSobre: "Chi siamo", tColab: "Collabora", tConv: "Diventa socio", tCult: "Cultura italiana",
    newsEyebrow: "Dall'Italia", newsTitle: "Notizie dall'Italia", filterAll: "Tutte",
    newsNote: "Titoli di esempio. Per notizie in tempo reale, collegare i feed RSS di ogni testata.",
    readIn: "Leggi su",
    socialEyebrow: "Comunità", socialTitle: "Seguici sui social",
    fbTitle: "Facebook", igTitle: "Instagram", viewPage: "Vai alla pagina", followUs: "Seguici",
    comments: "commenti", author: "Società Italiana",
    footAbout: "Da generazioni lavoriamo per la comunità italo-argentina.",
    fNav: "Menu", fHist: "Storia", fCons: "Consolato e voto", fCult: "Cultura italiana",
    fNews: "Notizie", fAbout: "Chi siamo", fContact: "Contatti",
    fAddress: "Indirizzo della società, Città, Argentina", fPhone: "Tel: (011) 0000-0000",
    fFollow: "Seguici", fSugg: "Lascia un suggerimento",
    copy: "© 2026 Società Italiana di Mutuo Soccorso. Tutti i diritti riservati.",
    moreNav: "Altre opzioni",
    worksEyebrow: "I nostri progetti",
    worksTitle: "A cosa stiamo lavorando?",
    worksSub: "Per l'apertura de La Galería e del Microcine, la nuova gestione sta portando avanti lavori di infrastruttura fondamentali:"
  }
};

/* ===== Contenido: cada texto tiene su versión en cada idioma ===== */
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

const FB_POSTS = [
  { date:"2026-10-01", likes:128, comments:14,
    text:{ es:"¡Gracias a todos los que nos acompañaron en la charla sobre ciudadanía italiana!",
           en:"Thank you to everyone who joined our talk on Italian citizenship!",
           it:"Grazie a tutti coloro che hanno partecipato all'incontro sulla cittadinanza italiana!" } },
  { date:"2026-09-26", likes:214, comments:31,
    text:{ es:"Este fin de semana celebramos la cultura italiana con música, comida y actividades para toda la familia.",
           en:"This weekend we celebrate Italian culture with music, food and activities for the whole family.",
           it:"Questo fine settimana festeggiamo la cultura italiana con musica, cibo e attività per tutta la famiglia." } }
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

  document.querySelectorAll("[data-flag]").forEach(f => {
    f.style.display = (f.dataset.flag === lang) ? "" : "none";
  });
  $("#lang-btn").setAttribute("aria-label", `Cambiar idioma. Actual: ${LANG_NAMES[lang]}`);
  $("#burger").setAttribute("aria-label", t("moreNav"));

  document.querySelector("#fb-link").href = SITE.fb;
  document.querySelector("#ig-link").href = SITE.ig;
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
  $("#fb-posts").innerHTML = FB_POSTS.map(p => `
    <article class="post">
      <div class="who"><span class="av">S</span><div>${t("author")}<small>${fmtDate(p.date)}</small></div></div>
      <p>${L(p.text)}</p>
      <div class="react">♥ ${p.likes} · ${p.comments} ${t("comments")}</div>
    </article>`).join("");

  $("#ig-grid").innerHTML = IG_POSTS.map(p => {
    const bg = p.img ? `url('${p.img}') center/cover no-repeat` : p.g;
    return `<a class="ig" href="${SITE.ig}" target="_blank" rel="noopener" style="background:${bg}"><span>${L(p.caption)}</span></a>`;
  }).join("");
}

function renderWorks(){
  $("#works-grid").innerHTML = WORKS.map(w => `
    <article class="ticket">
      <span class="notch notch-top" aria-hidden="true"></span>
      <span class="notch notch-bottom" aria-hidden="true"></span>
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
// Cada toque en la bandera pasa al siguiente idioma: Argentina → Italia → Estados Unidos → Argentina
$("#lang-btn").addEventListener("click", () => {
  const i = LANG_ORDER.indexOf(lang);
  lang = LANG_ORDER[(i + 1) % LANG_ORDER.length];
  try { localStorage.setItem("lang", lang); } catch(_) {}
  render();
  const btn = $("#lang-btn");
  btn.classList.remove("pop");
  void btn.offsetWidth; // reinicia la animación aunque se toque varias veces seguidas
  btn.classList.add("pop");
});

// Botón "más opciones": muestra u oculta el menú secundario del encabezado
$("#burger").addEventListener("click", () => {
  const moreNav = $("#more-nav");
  const show = moreNav.hidden;
  moreNav.hidden = !show;
  $("#burger").setAttribute("aria-expanded", String(show));
});

$("#filters").addEventListener("click", e => {
  const btn = e.target.closest("[data-src]");
  if(!btn) return;
  filter = btn.dataset.src;
  renderFilters();
  renderNews();
});

/* ===== Inicio: recordar el último idioma elegido ===== */
try {
  const saved = localStorage.getItem("lang");
  if(saved && I18N[saved]) lang = saved;
} catch(_) {}

render();


const navTabs = [...document.querySelectorAll('.nav-tab')];
const languageButtons = [...document.querySelectorAll('.language')];
const description = document.getElementById('description');
const headline = document.getElementById('headline');
const exploreLabel = document.getElementById('explore-label');
const notice = document.getElementById('notice');
const exploreButton = document.getElementById('explore');
let noticeTimer;
let activeSection = 'greens';
let currentLanguage = 'es';

const translations = {
  es: {
    sections: {
      greens: 'Greens.',
      historia: 'Historia',
      consulado: 'Consulado',
      cultura: 'Cultura',
      colabora: 'Colaborá'
    },
    pages: {
      greens: {
        description: 'Golf Club es el lugar donde<br>el deporte, la comodidad y la naturaleza<br>se encuentran a la perfección.',
        headline: '<span class="accent-red">G</span><span class="ink">olf</span><br><span class="ink">cl</span><span class="accent-green">ub.</span>',
        cta: 'Explorar',
        notice: 'Descubrí el espíritu de Greens.'
      },
      historia: {
        description: 'Una historia de encuentro, raíces y compromiso que sigue creciendo generación tras generación.',
        headline: '<span class="accent-red">His</span><span class="ink">to</span><br><span class="ink">ri</span><span class="accent-green">a.</span>',
        cta: 'Conocé más',
        notice: 'Pronto vas a poder conocer nuestra historia.'
      },
      consulado: {
        description: 'Información y orientación para acercarte a los trámites y servicios consulares italianos.',
        headline: '<span class="accent-red">Con</span><span class="ink">su</span><br><span class="ink">la</span><span class="accent-green">do.</span>',
        cta: 'Ver información',
        notice: 'Consultá los canales oficiales del Consulado Italiano para información actualizada.'
      },
      cultura: {
        description: 'Celebramos la lengua, las tradiciones, el arte y las historias que mantienen viva la cultura italiana.',
        headline: '<span class="accent-red">Cul</span><span class="ink">tu</span><br><span class="ink">ra</span><span class="accent-green">.</span>',
        cta: 'Descubrir',
        notice: 'Pronto vas a encontrar acá nuestras actividades culturales.'
      },
      colabora: {
        description: 'Cada aporte cuenta. Sumate a una comunidad que crece gracias a la participación de todos.',
        headline: '<span class="accent-red">Co</span><span class="ink">la</span><br><span class="ink">bo</span><span class="accent-green">rá.</span>',
        cta: 'Sumarme',
        notice: 'Gracias por tu interés. Muy pronto vas a poder conocer las formas de colaborar.'
      }
    }
  },
  it: {
    sections: {
      greens: 'Greens.',
      historia: 'Storia',
      consulado: 'Consolato',
      cultura: 'Cultura',
      colabora: 'Collabora'
    },
    pages: {
      greens: {
        description: 'Golf Club è il luogo dove<br>sport, comfort e natura<br>si incontrano alla perfezione.',
        headline: '<span class="accent-red">G</span><span class="ink">olf</span><br><span class="ink">cl</span><span class="accent-green">ub.</span>',
        cta: 'Scopri',
        notice: 'Scopri lo spirito di Greens.'
      },
      historia: {
        description: 'Una storia di incontro, radici e impegno che continua a crescere di generazione in generazione.',
        headline: '<span class="accent-red">Sto</span><span class="ink">ri</span><br><span class="ink">a</span><span class="accent-green">.</span>',
        cta: 'Scopri di più',
        notice: 'Presto potrai conoscere la nostra storia.'
      },
      consulado: {
        description: 'Informazioni e orientamento per avvicinarti alle pratiche e ai servizi consolari italiani.',
        headline: '<span class="accent-red">Con</span><span class="ink">so</span><br><span class="ink">la</span><span class="accent-green">to.</span>',
        cta: 'Informazioni',
        notice: 'Consulta i canali ufficiali del Consolato Italiano per informazioni aggiornate.'
      },
      cultura: {
        description: 'Celebriamo la lingua, le tradizioni, l’arte e le storie che mantengono viva la cultura italiana.',
        headline: '<span class="accent-red">Cul</span><span class="ink">tu</span><br><span class="ink">ra</span><span class="accent-green">.</span>',
        cta: 'Scopri',
        notice: 'Presto troverai qui le nostre attività culturali.'
      },
      colabora: {
        description: 'Ogni contributo conta. Unisciti a una comunità che cresce grazie alla partecipazione di tutti.',
        headline: '<span class="accent-red">Col</span><span class="ink">la</span><br><span class="ink">bo</span><span class="accent-green">ra.</span>',
        cta: 'Partecipa',
        notice: 'Grazie per il tuo interesse. Presto scoprirai come collaborare.'
      }
    }
  }
};

function showNotice(message) {
  notice.textContent = message;
  notice.classList.add('visible');
  window.clearTimeout(noticeTimer);
  noticeTimer = window.setTimeout(() => notice.classList.remove('visible'), 3200);
}

function renderSection(sectionKey) {
  const language = translations[currentLanguage];
  const page = language.pages[sectionKey];
  activeSection = sectionKey;

  navTabs.forEach((tab) => {
    const selected = tab.dataset.section === sectionKey;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-pressed', String(selected));
  });

  description.innerHTML = page.description;
  headline.innerHTML = page.headline;
  exploreLabel.textContent = page.cta;
  notice.textContent = page.notice;
}

navTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    renderSection(tab.dataset.section);
    // Keep navigation responsive while giving a small preview of the selected section.
    showNotice(translations[currentLanguage].pages[tab.dataset.section].notice);
  });
});

languageButtons.forEach((button) => {
  button.setAttribute('aria-pressed', String(button.dataset.lang === currentLanguage));
  button.addEventListener('click', () => {
    currentLanguage = button.dataset.lang;
    languageButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });

    document.documentElement.lang = currentLanguage;
    document.querySelectorAll('[data-label]').forEach((label) => {
      const key = label.dataset.label;
      label.textContent = translations[currentLanguage].sections[key];
    });
    renderSection(activeSection);
    notice.classList.remove('visible');
  });
});

exploreButton.addEventListener('click', () => {
  showNotice(translations[currentLanguage].pages[activeSection].notice);
});
