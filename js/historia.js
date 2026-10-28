/* ───────────────────────────────────────────────────────────
   Página Historia · Sociedad Italiana de Socorros Mutuos de Gálvez
   1. Parallax por capas
   2. Aparición del texto
   3. Pestaña «volver arriba»
   4. Comparador antes / después
   ─────────────────────────────────────────────────────────── */
(() => {
  "use strict";

  const raiz = document.documentElement;
  const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pantallaChica = window.matchMedia("(max-width: 759px)");
  raiz.classList.add("js");

  /* ── 1. Parallax ──────────────────────────────────────
     data-parallax="fondo"    capa decorativa: se mide con su sección y avanza lento.
     data-parallax="marco"    la foto completa respecto del texto (solo en pantallas grandes).
     data-parallax="interior" la imagen dentro de su recuadro: nunca sale del marco.
     data-velocidad > 0 avanza más lento que el texto; < 0, más rápido.
     data-recorrido: fracción del alto que puede desplazarse una capa interior. */
  const LIMITE_MARCO = 80;
  const capas = [...document.querySelectorAll("[data-parallax]")].map(el => {
    const tipo = el.dataset.parallax;
    return {
      el, tipo,
      v: parseFloat(el.dataset.velocidad) || 0,
      recorrido: parseFloat(el.dataset.recorrido) || 0.15,
      ref: tipo === "fondo" ? el.closest("section") : tipo === "interior" ? el.parentElement : el,
      centro: 0, limite: Infinity, visible: false
    };
  });
  const capasPorRef = new Map();
  capas.forEach(c => {
    if (!capasPorRef.has(c.ref)) capasPorRef.set(c.ref, []);
    capasPorRef.get(c.ref).push(c);
  });

  // offsetTop no incluye transformaciones: medir así evita que el propio efecto altere la medida.
  const topDocumento = el => { let y = 0; for (let n = el; n; n = n.offsetParent) y += n.offsetTop; return y; };

  function medir(){
    for (const c of capas){
      const alto = c.ref.offsetHeight;
      c.centro = topDocumento(c.ref) + alto / 2;
      c.limite = c.tipo === "interior" ? alto * c.recorrido : c.tipo === "marco" ? LIMITE_MARCO : Infinity;
    }
  }

  let programado = false;
  function aplicar(){
    programado = false;
    const centroVista = window.scrollY + window.innerHeight / 2;
    const chica = pantallaChica.matches;
    for (const c of capas){
      if (!c.visible) continue;
      if (chica && c.tipo === "marco"){ c.el.style.transform = ""; continue; }
      let t = (centroVista - c.centro) * c.v * (chica ? 0.5 : 1);
      if (t > c.limite) t = c.limite; else if (t < -c.limite) t = -c.limite;
      c.el.style.transform = `translate3d(0,${t.toFixed(1)}px,0)`;
    }
  }
  const programar = () => { if (!programado){ programado = true; requestAnimationFrame(aplicar); } };
  const remedir = () => { medir(); programar(); };

  // Solo se recalculan las capas cercanas a la pantalla.
  const observadorCapas = "IntersectionObserver" in window ? new IntersectionObserver(entradas => {
    for (const e of entradas) for (const c of capasPorRef.get(e.target)) c.visible = e.isIntersecting;
    programar();
  }, { rootMargin: "25% 0px" }) : null;

  let activo = false;
  function activarParallax(){
    if (activo || sinMovimiento.matches || !observadorCapas || !capas.length) return;
    activo = true;
    raiz.classList.add("parallax-activo");
    medir();
    capasPorRef.forEach((_, ref) => observadorCapas.observe(ref));
    window.addEventListener("scroll", programar, { passive: true });
    window.addEventListener("resize", remedir);
  }
  function desactivarParallax(){
    if (!activo) return;
    activo = false;
    raiz.classList.remove("parallax-activo");
    observadorCapas.disconnect();
    window.removeEventListener("scroll", programar);
    window.removeEventListener("resize", remedir);
    capas.forEach(c => { c.visible = false; c.el.style.transform = ""; });
  }

  // Fuentes e imágenes que terminan de cargar cambian la altura de la página.
  if ("ResizeObserver" in window) new ResizeObserver(() => { if (activo) remedir(); }).observe(document.body);
  sinMovimiento.addEventListener("change", () => (sinMovimiento.matches ? desactivarParallax() : activarParallax()));
  pantallaChica.addEventListener("change", programar);
  activarParallax();

  /* ── 2. Aparición del texto ───────────────────────────── */
  const revelables = document.querySelectorAll(".revelar");
  if (sinMovimiento.matches || !("IntersectionObserver" in window)){
    revelables.forEach(el => el.classList.add("visible"));
  } else {
    const observadorTexto = new IntersectionObserver((entradas, obs) => {
      for (const e of entradas){
        if (!e.isIntersecting) continue;
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    }, { rootMargin: "0px 0px -10% 0px" });
    revelables.forEach(el => observadorTexto.observe(el));
  }

  /* ── 3. Pestaña «volver arriba» ───────────────────────
     Visible solo cuando la zona superior (#centinela, 60 % de la pantalla) ya no se ve. */
  const volver = document.getElementById("volver-arriba");
  const centinela = document.getElementById("centinela");
  const cabecera = document.getElementById("inicio");
  if (volver && centinela && "IntersectionObserver" in window){
    new IntersectionObserver(([e]) => volver.classList.toggle("visible", !e.isIntersecting)).observe(centinela);
    volver.addEventListener("click", ev => {
      ev.preventDefault();
      window.scrollTo({ top: 0, behavior: sinMovimiento.matches ? "auto" : "smooth" });
      cabecera.focus({ preventScroll: true });
    });
  }

  /* ── 4. Comparador antes / después ───────────────────── */
  const comparador = document.getElementById("comparador");
  if (comparador){
    const control = comparador.querySelector(".comparador-control");
    const actualizar = () => {
      const v = Number(control.value);
      comparador.style.setProperty("--pos", v + "%");
      const texto = window.Sitio ? Sitio.t("comparadorValor", { a: v, d: 100 - v }) : `Antes ${v} %, después ${100 - v} %`;
      control.setAttribute("aria-valuetext", texto);
    };
    control.addEventListener("input", actualizar);
    document.addEventListener("sitio:idioma", actualizar);
    actualizar();
  }
})();
