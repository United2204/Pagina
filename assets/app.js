(() => {
  const site = window.SITE;
  if (!site) return;

  document.title = `${site.brand} — Descargas oficiales`;
  document.querySelector('meta[name="description"]').content = site.tagline;
  document.querySelectorAll('[data-brand]').forEach((element) => { element.textContent = site.brand; });
  document.querySelector('[data-tagline]').textContent = site.tagline;
  document.querySelectorAll('[data-github-profile]').forEach((element) => { element.href = site.githubProfile; });

  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[character]));

  const list = document.querySelector('#software-list');
  list.innerHTML = site.software.map((app) => {
    const releasesUrl = app.downloadUrl || `https://github.com/${app.repo}/releases/latest`;
    const repoUrl = `https://github.com/${app.repo}`;
    const isComingSoon = app.version.toLowerCase().includes('próxim');
    return `
      <article class="software-card ${escapeHtml(app.accent || 'violet')}">
        <div class="card-topline">
          <span class="app-icon" aria-hidden="true">${escapeHtml(app.icon || '✦')}</span>
          <span class="version ${isComingSoon ? 'soon' : ''}">${escapeHtml(app.version)}</span>
        </div>
        <div class="card-content">
          <h3>${escapeHtml(app.name)}</h3>
          <p>${escapeHtml(app.description)}</p>
        </div>
        <div class="card-footer">
          <span class="platform">${escapeHtml(app.platform || '')}</span>
          <div class="card-links">
            <a href="${escapeHtml(repoUrl)}" target="_blank" rel="noreferrer" aria-label="Abrir repositorio de ${escapeHtml(app.name)}">Código ↗</a>
            ${isComingSoon ? '<span class="not-available">Próximamente</span>' : `<a class="download-link" href="${escapeHtml(releasesUrl)}" target="_blank" rel="noreferrer">Descargar <span aria-hidden="true">↓</span></a>`}
          </div>
        </div>
      </article>`;
  }).join('');
})();
