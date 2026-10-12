/* ===== Configuración: reemplazar por los datos reales ===== */
const SITE = {
  ig: "https://www.instagram.com/sociedaditalianagalvez/"
};


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

