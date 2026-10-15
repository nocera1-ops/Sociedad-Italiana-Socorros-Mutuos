/* Añade miniaturas y diseño de tarjeta a las noticias generadas por script.js.
   No reemplaza el contenido o los filtros existentes: mejora las filas que ya se renderizan. */
(() => {
  const imageChoices = {
    history: 'img/cosmos_1830981906.webp',
    culture: 'img/cosmos_593252605.webp',
    local: 'img/1540202352200.jpg',
    default: 'img/cosmos_84277699.webp'
  };

  function chooseImage(row, index) {
    const text = (row.innerText || '').toLocaleLowerCase('es');
    if (/historia|archivo|memoria|aniversario|fundaci[oó]n|or[ií]genes/.test(text)) return imageChoices.history;
    if (/cultura|tradici[oó]n|idioma|arte|m[uú]sica|gastronom[ií]a|italian/.test(text)) return imageChoices.culture;
    if (/sociedad|comunidad|noticia|evento|consulado|voto|socio/.test(text)) return imageChoices.local;
    return [imageChoices.local, imageChoices.culture, imageChoices.history][index % 3] || imageChoices.default;
  }

  function enhanceNews() {
    const news = document.getElementById('news');
    if (!news) return;

    news.querySelectorAll('.row').forEach((row, index) => {
      if (row.dataset.imageCard === 'true') return;
      const title = row.querySelector('.row-t');
      if (!title) return;

      const date = row.querySelector('.dt');
      const arrow = row.querySelector('.arr');
      const children = Array.from(row.children);
      const content = children.find(child => child !== date && child !== arrow && child.contains(title));
      if (!content) return;

      const image = document.createElement('img');
      image.className = 'news-thumb';
      image.loading = 'lazy';
      image.alt = '';
      image.setAttribute('aria-hidden', 'true');
      image.src = chooseImage(row, index);
      image.addEventListener('error', () => {
        if (!image.dataset.fallbackTried) {
          image.dataset.fallbackTried = '1';
          image.src = imageChoices.default;
        } else {
          image.removeAttribute('src');
          image.classList.add('news-thumb-fallback');
        }
      }, { once: false });

      const body = document.createElement('div');
      body.className = 'news-card-body';
      if (date) body.appendChild(date);
      body.appendChild(content);

      // Preserve any other useful content/metadata the site's script has added.
      children.forEach(child => {
        if (child !== date && child !== arrow && child !== content && child.parentElement === row) body.appendChild(child);
      });

      row.replaceChildren(image, body);
      if (arrow) row.appendChild(arrow);
      row.dataset.imageCard = 'true';
      row.setAttribute('aria-label', (title.textContent || 'Noticia').trim());
    });
  }

  function init() {
    enhanceNews();
    const news = document.getElementById('news');
    if (news) {
      const observer = new MutationObserver(() => enhanceNews());
      observer.observe(news, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
