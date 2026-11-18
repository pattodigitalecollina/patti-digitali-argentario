// ============================================================
// PATTO DIGITALE ARGENTARIO · COMENIUS
// Script di Gestione UI ed Eventi/News
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  renderFutureEvents();
  renderPastEventsPreview();
  renderNews("tutte");
  initNewsFilters();
  renderPress();
  initPressModal();
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

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      toggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`;
    });
  });
}

// ------------------------------------------------------------
// 2. Rendering Eventi Futuri
// ------------------------------------------------------------
function renderFutureEvents() {
  const container = document.getElementById("eventsContainer");
  if (!container || !PATTO_DATA || !PATTO_DATA.futureEvents) return;

  if (PATTO_DATA.futureEvents.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-glass);">
        <p style="color: var(--text-muted); font-size: 1.1rem;">Nessun nuovo evento in programma al momento. Iscriviti al canale WhatsApp per ricevere le novità!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = PATTO_DATA.futureEvents.map(ev => {
    const locBadgeClass = ev.locationBadge || 'cognola';
    
    // Zoom box se è online
    const zoomHTML = ev.isOnline && ev.zoomPasscode ? `
      <div class="zoom-box">
        <span style="font-size: 0.85rem; color: var(--text-secondary);">Accesso Zoom</span>
        <div>Passcode: <span class="zoom-passcode">${escapeHTML(ev.zoomPasscode)}</span></div>
      </div>
    ` : '';

    // Relatori / Speakers se presenti
    const speakersHTML = ev.speakers ? `
      <div class="event-speaker-line">
        <strong>Con:</strong> ${escapeHTML(ev.speakers)}
      </div>
    ` : '';

    // Nota opzionale
    const noteHTML = ev.note ? `
      <p style="font-size: 0.85rem; color: var(--amber); margin-bottom: 0.8rem; font-weight: 500;">
        ℹ️ ${escapeHTML(ev.note)}
      </p>
    ` : '';

    // Link PDF Locandina
    const pdfHTML = ev.posterPdf ? `
      <a href="${ev.posterPdf}" target="_blank" rel="noopener noreferrer" class="event-pdf-link">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
        Scarica Locandina PDF
      </a>
    ` : '';

    return `
      <article class="event-card" id="${ev.id}">
        <div class="event-top">
          <span class="loc-badge ${locBadgeClass}">${escapeHTML(ev.territory || ev.badge)}</span>
          <span class="event-category">${escapeHTML(ev.category)}</span>
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

        ${zoomHTML}
        ${speakersHTML}
        <p class="event-desc">${escapeHTML(ev.summary)}</p>
        ${noteHTML}

        <div class="event-actions-group">
          <a href="${ev.actionLink || '#contatti'}" ${ev.actionLink.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="btn btn-primary btn-sm" style="width: 100%;">
            ${escapeHTML(ev.actionLabel || 'Partecipa')}
          </a>
          ${pdfHTML}
        </div>
      </article>
    `;
  }).join("");
}

// ------------------------------------------------------------
// 3. Rendering Anteprima Eventi Passati (Homepage: ultimi 2)
// ------------------------------------------------------------
function renderPastEventsPreview() {
  const container = document.getElementById("pastEventsContainer");
  if (!container || !PATTO_DATA || !PATTO_DATA.pastEvents) return;

  // Mostra solo i primi 2 eventi passati in homepage
  const previewList = PATTO_DATA.pastEvents.slice(0, 2);

  container.innerHTML = previewList.map(ev => `
    <article class="past-event-card" id="${ev.id}">
      <span class="past-tag">${escapeHTML(ev.badge || 'Svolto')} &middot; ${escapeHTML(ev.date)}</span>
      <h4 style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--text-primary); margin-bottom: 0.5rem;">${escapeHTML(ev.title)}</h4>
      <div style="font-size: 0.84rem; color: var(--text-dim); margin-bottom: 0.8rem;">
        📍 ${escapeHTML(ev.location)}
      </div>
      <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">${escapeHTML(ev.summary)}</p>
      ${ev.posterPdf ? `
        <a href="${ev.posterPdf}" target="_blank" rel="noopener noreferrer" style="font-size: 0.82rem; color: var(--amber); margin-top: auto; display: inline-flex; align-items: center; gap: 4px;">
          📄 Vedi locandina passata ↗
        </a>
      ` : ''}
    </article>
  `).join("");
}

// ------------------------------------------------------------
// 4. Rendering Notizie con Filtri (Senza link per la biblioteca!)
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

  container.innerHTML = filteredNews.map(item => {
    // Se hasLink è false (come per la biblioteca), non mostriamo il tasto Approfondisci
    const actionHTML = item.hasLink ? `
      <a href="${item.link}" class="news-link" ${item.isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''}>
        ${escapeHTML(item.readMoreText || 'Leggi di più')} 
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    ` : '';

    return `
      <article class="news-card" id="${item.id}">
        <div class="news-header">
          <span class="news-badge ${item.type === 'nazionale' ? 'nazionale' : ''}">${escapeHTML(item.categoryLabel)}</span>
          <span class="news-date">${escapeHTML(item.date)}</span>
        </div>
        <h3 class="news-title">${escapeHTML(item.title)}</h3>
        <p class="news-summary">${escapeHTML(item.summary)}</p>
        ${actionHTML}
      </article>
    `;
  }).join("");
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
// 5. Smooth Scroll
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

// ------------------------------------------------------------
// 6. Rendering Dicono di Noi (Rassegna Stampa)
// ------------------------------------------------------------
function renderPress() {
  const container = document.getElementById("pressContainer");
  if (!container || !PATTO_DATA || !PATTO_DATA.press) return;

  container.innerHTML = PATTO_DATA.press.map(item => `
    <article class="press-card" id="${item.id}">
      <div class="press-top">
        <span class="press-source-tag">📰 ${escapeHTML(item.source)}</span>
        <span class="press-date">${escapeHTML(item.date)}</span>
      </div>

      <div class="press-thumb-container" onclick="openPressModal('${item.image}', '${escapeHTML(item.title)} - ${escapeHTML(item.source)}')">
        <img src="${item.image}" alt="${escapeHTML(item.title)}" class="press-thumb-img" loading="lazy">

      </div>

      <h3 class="press-title">${escapeHTML(item.title)}</h3>
      ${item.subtitle ? `<div class="press-subtitle">${escapeHTML(item.subtitle)}</div>` : ''}
      <p class="press-summary">${escapeHTML(item.summary)}</p>

      <div class="press-actions">
        <a href="${item.image}" target="_blank" rel="noopener noreferrer" class="press-link">
          Apri file intero ↗
        </a>
      </div>
    </article>
  `).join("");
}

// ------------------------------------------------------------
// 7. Lightbox Modal per Rassegna Stampa
// ------------------------------------------------------------
function initPressModal() {
  const modal = document.getElementById("pressModal");
  if (!modal) return;

  const closeBtn = document.getElementById("pressModalClose");
  if (closeBtn) {
    closeBtn.addEventListener("click", closePressModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closePressModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closePressModal();
    }
  });
}

function openPressModal(imgSrc, caption) {
  const modal = document.getElementById("pressModal");
  const modalImg = document.getElementById("pressModalImg");
  const modalCaption = document.getElementById("pressModalCaption");
  if (!modal || !modalImg) return;

  modalImg.src = imgSrc;
  if (modalCaption) modalCaption.textContent = caption || "";
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePressModal() {
  const modal = document.getElementById("pressModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

