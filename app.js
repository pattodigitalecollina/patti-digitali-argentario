// ============================================================
// PATTO DIGITALE ARGENTARIO · COMENIUS
// Script di Gestione UI ed Eventi/News
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  renderEvents();
  renderNews("tutte");
  initNewsFilters();
  initSmoothScroll();
});

// ------------------------------------------------------------
// 1. Mobile Menu Toggle
// ------------------------------------------------------------
function initNavToggle() {
  const toggleBtn = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    const isExpanded = navLinks.classList.contains("active");
    toggleBtn.setAttribute("aria-expanded", isExpanded);
    toggleBtn.innerHTML = isExpanded 
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
  });

  // Chiudi il menu quando si clicca un link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      toggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
    });
  });
}

// ------------------------------------------------------------
// 2. Rendering Eventi
// ------------------------------------------------------------
function renderEvents() {
  const container = document.getElementById("eventsContainer");
  if (!container || !PATTO_DATA || !PATTO_DATA.events) return;

  if (PATTO_DATA.events.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-glass);">
        <p style="color: var(--text-muted); font-size: 1.1rem;">Nessun nuovo evento in programma al momento. Iscriviti al canale WhatsApp per ricevere le novità!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = PATTO_DATA.events.map(ev => `
    <article class="event-card" id="${ev.id}">
      <div class="event-top">
        <span class="event-badge ${ev.badgeType || 'warning'}">${ev.badge || 'Evento'}</span>
        <span class="event-category">${ev.category}</span>
      </div>
      <h3 class="event-title">${escapeHTML(ev.title)}</h3>
      <div class="event-meta">
        <div class="event-meta-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          <span><strong>${escapeHTML(ev.date)}</strong> &middot; ${escapeHTML(ev.time)}</span>
        </div>
        <div class="event-meta-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>${escapeHTML(ev.location)}</span>
        </div>
      </div>
      <p class="event-desc">${escapeHTML(ev.summary)}</p>
      <div class="event-footer">
        <a href="${ev.actionLink || '#contatti'}" class="btn btn-secondary btn-sm" style="width: 100%;">
          ${escapeHTML(ev.actionLabel || 'Maggiori Informazioni')}
        </a>
      </div>
    </article>
  `).join("");
}

// ------------------------------------------------------------
// 3. Rendering Notizie con Filtri
// ------------------------------------------------------------
function renderNews(filter = "tutte") {
  const container = document.getElementById("newsContainer");
  if (!container || !PATTO_DATA || !PATTO_DATA.news) return;

  const filteredNews = PATTO_DATA.news.filter(item => {
    if (filter === "tutte") return true;
    return item.type === filter;
  });

  if (filteredNews.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 2.5rem; background: var(--bg-card); border-radius: var(--radius-md);">
        <p style="color: var(--text-muted);">Nessuna notizia trovata in questa categoria.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredNews.map(item => `
    <article class="news-card" id="${item.id}">
      <div class="news-header">
        <span class="news-badge ${item.type === 'nazionale' ? 'nazionale' : ''}">${escapeHTML(item.categoryLabel)}</span>
        <span class="news-date">${escapeHTML(item.date)}</span>
      </div>
      <h3 class="news-title">${escapeHTML(item.title)}</h3>
      <p class="news-summary">${escapeHTML(item.summary)}</p>
      <a href="${item.link}" class="news-link" ${item.isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>
        ${escapeHTML(item.readMoreText || 'Leggi di più')} 
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </article>
  `).join("");
}

function initNewsFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderNews(filter);
    });
  });
}

// ------------------------------------------------------------
// 4. Smooth Scroll
// ------------------------------------------------------------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

// ------------------------------------------------------------
// Utility
// ------------------------------------------------------------
function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
