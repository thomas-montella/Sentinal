/* SENTINEL — Main JavaScript */

// ── NAV ACTIVE STATE ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  initPlatformFilter();
  initScenarioToggles();
  initScrollReveal();
  initTickerPause();
});

// ── PLATFORM FILTER ───────────────────────────────────────────────────────────
function initPlatformFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const cards  = document.querySelectorAll('.platform-card');

      cards.forEach(card => {
        if (filter === 'all') {
          card.style.display = '';
        } else if (filter === 'critical-only') {
          card.style.display = card.dataset.risk === 'critical' ? '' : 'none';
        } else {
          card.style.display = card.dataset.category === filter ? '' : 'none';
        }
      });
    });
  });
}

// ── SCENARIO TOGGLES ──────────────────────────────────────────────────────────
function toggleScenario(header) {
  const body   = header.nextElementSibling;
  const toggle = header.querySelector('.scenario-toggle');
  const isOpen = body.classList.contains('open');

  body.classList.toggle('open', !isOpen);
  toggle.style.transform = isOpen ? '' : 'rotate(180deg)';
}

function initScenarioToggles() {
  // First scenario open by default
  const firstBody = document.querySelector('.scenario-body');
  const firstToggle = document.querySelector('.scenario-toggle');
  if (firstBody) {
    firstBody.classList.add('open');
    if (firstToggle) firstToggle.style.transform = 'rotate(180deg)';
  }
}

// ── SCROLL REVEAL ─────────────────────────────────────────────────────────────
function initScrollReveal() {
  const revealEls = document.querySelectorAll(
    '.finding-card, .module-card, .platform-card, .company-card, .sub-card, .scenario-card, .matrix-row, .stat-block'
  );

  if (!('IntersectionObserver' in window)) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = '1';
        entry.target.style.transform  = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = `opacity 0.5s ease ${(i % 6) * 0.07}s, transform 0.5s ease ${(i % 6) * 0.07}s`;
    obs.observe(el);
  });
}

// ── TICKER PAUSE ON HOVER ─────────────────────────────────────────────────────
function initTickerPause() {
  const track = document.querySelector('.ticker-track');
  if (!track) return;
  track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
  track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
}

// ── FILTER BUTTON STYLES (injected) ──────────────────────────────────────────
const filterStyle = document.createElement('style');
filterStyle.textContent = `
  .filter-btn {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.4rem 1rem;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text2);
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .filter-btn:hover {
    border-color: var(--border2);
    color: var(--amber);
    background: var(--amber-dim);
  }
  .filter-btn.active {
    background: var(--amber);
    border-color: var(--amber);
    color: var(--bg);
  }
`;
document.head.appendChild(filterStyle);

// ── SCORE BAR COLORS ──────────────────────────────────────────────────────────
document.querySelectorAll('.score-bar').forEach(bar => {
  const pct = parseInt(bar.dataset.pct || '50');
  let color = '#4DB848';
  if (pct >= 90) color = '#e03830';
  else if (pct >= 70) color = '#e06020';
  else if (pct >= 50) color = '#e8a020';
  bar.style.width = pct + '%';
  bar.style.background = color;
  bar.style.maxWidth = '80px';
});

// ── SMOOTH ANCHOR SCROLL ──────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── COPY CODE HINT (about page) ───────────────────────────────────────────────
document.querySelectorAll('.score-weight-row').forEach(row => {
  row.style.cursor = 'default';
});
