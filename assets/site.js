/* Shared navigation and explicit math rendering. No remote scripts or fonts. */
(() => {
  'use strict';
  window.renderMath = function renderMath(root = document.body) {
    if (typeof window.renderMathInElement !== 'function') return;
    window.renderMathInElement(root, {
      delimiters: [
        { left: '\\[', right: '\\]', display: true },
        { left: '\\(', right: '\\)', display: false }
      ],
      ignoredClasses: ['katex', 'math-inline'],
      throwOnError: false, trust: false, maxSize: 20, maxExpand: 1000,
      strict: 'warn', output: 'htmlAndMathml'
    });
    // A long inline formula scrolls on its own, without widening the page.
    root.querySelectorAll('.katex:not(.katex-display > .katex):not(.math-inline > .katex)').forEach(math => {
      const container = document.createElement('span');
      container.className = 'math-inline';
      math.replaceWith(container);
      container.append(math);
    });
  };
  document.addEventListener('DOMContentLoaded', () => {
    const wrap = document.querySelector('.wrap');
    if (!wrap) return;
    const path = location.pathname.split('/').pop() || 'index.html';
    const active = path === 'course-detail.html' ? 'courses.html' : path;
    const links = [['index.html', 'Accueil'], ['courses.html', 'Cours'], ['qcm.html', 'QCM'], ['exam-questions.html', 'Épreuves']];
    const nav = document.createElement('nav');
    nav.className = 'site-nav';
    nav.setAttribute('aria-label', 'Navigation principale');
    nav.innerHTML = links.map(([url, label]) => `<a href="${url}"${active === url ? ' aria-current="page"' : ''}>${label}</a>`).join('');
    wrap.prepend(nav);
    const main = wrap.querySelector('main, .card');
    if (main) {
      if (main.tagName !== 'MAIN') main.setAttribute('role', 'main');
      if (!main.id) main.id = 'main-content';
      const skip = document.createElement('a');
      skip.className = 'skip-link';
      skip.href = `#${main.id}`;
      skip.textContent = 'Aller au contenu';
      document.body.prepend(skip);
    }
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.textContent = 'Mathématiques Prépa · Comprendre, pratiquer, progresser';
    wrap.append(footer);
    const labels = {yearFilter:'Année', moduleFilter:'Module', themeFilter:'Thème', levelFilter:'Difficulté', difficultyFilter:'Difficulté'};
    document.querySelectorAll('.filters select, .filters input').forEach(input => {
      const field = document.createElement('label');
      field.className = 'filter-field';
      field.htmlFor = input.id;
      const label = document.createElement('span');
      label.textContent = labels[input.id] || 'Filtrer';
      input.replaceWith(field);
      field.append(label, input);
    });
    document.querySelectorAll('.two input, .two textarea, .two select').forEach(input => {
      if (!input.labels.length) input.setAttribute('aria-label', input.placeholder || 'Bonne réponse');
    });
    window.renderMath();
  });
})();
