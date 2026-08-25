/* ============================================================
   DANI. PORTFOLIO — Jarvis Animation System
============================================================ */

/* ── Typewriter ─────────────────────────────────────────── */
function typeWrite(el, text, speed, onDone) {
    el.textContent = '';
    let i = 0;
    const t = setInterval(() => {
        el.textContent += text[i++];
        if (i >= text.length) {
            clearInterval(t);
            if (onDone) onDone();
        }
    }, speed);
}

/* ── Floating Particles ─────────────────────────────────── */
function spawnParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 28; i++) {
        const p = document.createElement('div');
        p.className = 'particle';

        const big  = Math.random() > 0.72;
        const size = big ? 3 : 1.5;

        p.style.cssText = `
            left:              ${Math.random() * 100}%;
            top:               ${Math.random() * 100}%;
            width:             ${size}px;
            height:            ${size}px;
            animation-delay:   ${(Math.random() * 5).toFixed(2)}s;
            animation-duration:${(3 + Math.random() * 5).toFixed(2)}s;
            opacity:           0;
        `;
        container.appendChild(p);
    }
}

/* ── HUD Corners ────────────────────────────────────────── */
function injectHudCorners() {
    document.querySelectorAll('.hud-card').forEach(card => {
        const b  = document.createElement('div');
        const bl = document.createElement('div');
        b.className  = 'hc-b';
        bl.className = 'hc-bl';
        card.appendChild(b);
        card.appendChild(bl);
    });
}

/* ── Hero Animations ─────────────────────────────────────── */
function startHeroAnimations() {
    const lastName = document.getElementById('heroLastName');
    const cursor   = document.getElementById('nameCursor');

    // Typewriter for last name
    typeWrite(lastName, 'BERDON', 95, () => {
        // Hide cursor after typing finishes
        setTimeout(() => {
            if (cursor) cursor.classList.add('hidden');
        }, 1400);
    });

    // Reveal scan line
    const scanLine = document.querySelector('.scan-line');
    if (scanLine) scanLine.style.opacity = '1';
}

/* ── Active Nav on Scroll ───────────────────────────────── */
function initNav() {
    const links    = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id], header');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 90) current = s.id || '';
        });
        links.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
        });
    }, { passive: true });
}

/* ── Scroll Reveal ──────────────────────────────────────── */
function initScrollReveal() {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(
        '.info-card, .hobby-card, .inner-card, .pic-item, .social-btn, .side-label, .pictures-label, .skill-item'
    ).forEach(el => {
        el.classList.add('fade-up');
        io.observe(el);
    });
}

/* ── Random data flicker on side labels ─────────────────── */
function initLabelFlicker() {
    const labels = document.querySelectorAll('.side-label, .pictures-label');
    labels.forEach(label => {
        setInterval(() => {
            if (Math.random() > 0.85) {
                label.style.opacity = '0.6';
                setTimeout(() => { label.style.opacity = '1'; }, 80);
            }
        }, 3000 + Math.random() * 4000);
    });
}

/* ── Cursor trail (subtle Jarvis feel) ─────────────────── */
function initCursorTrail() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const dot  = document.createElement('div');

        dot.style.cssText = `
            position: absolute;
            left:   ${e.clientX - rect.left}px;
            top:    ${e.clientY - rect.top}px;
            width:  4px;
            height: 4px;
            border-radius: 50%;
            background: rgba(0,212,255,0.5);
            pointer-events: none;
            z-index: 5;
            transform: translate(-50%, -50%);
            transition: opacity .6s, transform .6s;
        `;

        hero.appendChild(dot);

        requestAnimationFrame(() => {
            dot.style.opacity  = '0';
            dot.style.transform = 'translate(-50%, -50%) scale(3)';
        });

        setTimeout(() => dot.remove(), 650);
    });
}

/* ── Hamburger Menu ─────────────────────────────────────── */
function initHamburger() {
    const btn   = document.getElementById('hamburger');
    const links = document.getElementById('navLinks');
    if (!btn || !links) return;

    const close = () => {
        btn.classList.remove('open');
        links.classList.remove('open');
        document.body.style.overflow = '';
    };

    btn.addEventListener('click', () => {
        const opening = !links.classList.contains('open');
        btn.classList.toggle('open');
        links.classList.toggle('open');
        document.body.style.overflow = opening ? 'hidden' : '';
    });

    // Close on any nav link click
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

/* ── Photo Accordion ────────────────────────────────────── */
function initPhotoAccordion() {
    const items = document.querySelectorAll('.pic-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            items.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

/* ── Skill Bar Animations ───────────────────────────────── */
function initSkillBars() {
    const items = document.querySelectorAll('.skill-item');
    if (!items.length) return;

    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const fill = e.target.querySelector('.skill-bar-fill');
                // small delay so the fade-in plays first, then bar fills
                if (fill) setTimeout(() => fill.classList.add('animated'), 200);
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.2 });

    items.forEach(item => io.observe(item));
}

/* ── Project detail modal ──────────────────────────────────
   Clicking a project card opens a modal with its photo,
   title, and description instead of navigating away.        */
function initProjectModal() {
    const cards = document.querySelectorAll('.inner-card');
    const modal = document.getElementById('project-modal');
    if (!cards.length || !modal) return;

    const imgEl   = document.getElementById('project-modal-img');
    const mediaEl = modal.querySelector('.project-modal-media');
    const cardEl  = modal.querySelector('.project-modal-card');
    const tagEl   = document.getElementById('project-modal-tag');
    const titleMainEl = document.getElementById('project-modal-title-main');
    const titleSubEl  = document.getElementById('project-modal-title-sub');
    const descEl  = document.getElementById('project-modal-desc');
    const collabEl = document.getElementById('project-modal-collab');

    function openModal(card) {
        const tag    = card.dataset.tag    || card.querySelector('.inner-tag')?.textContent || '';
        const title  = card.dataset.title  || card.querySelector('strong')?.textContent || '';
        const desc   = card.dataset.desc   || card.querySelector('p')?.textContent || '';
        const img    = card.dataset.img    || card.querySelector('img')?.getAttribute('src') || '';
        const collab = card.dataset.descCollab || '';

        // Split "MAIN — SUBTITLE" into a big headline + smaller subline.
        const [main, ...rest] = title.split('—').map(s => s.trim());
        titleMainEl.textContent = main;
        titleSubEl.textContent = rest.join(' — ');

        tagEl.textContent = tag;
        descEl.textContent = desc;
        collabEl.textContent = collab ? `Collab with: ${collab}` : '';

        if (img) {
            imgEl.src = img;
            imgEl.alt = title;
            cardEl.classList.remove('no-media');
        } else {
            imgEl.src = '';
            cardEl.classList.add('no-media');
        }

        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        modal.querySelector('.project-modal-close').focus();
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
    }

    cards.forEach(card => {
        card.addEventListener('click', () => openModal(card));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(card);
            }
        });
    });

    modal.querySelectorAll('[data-close]').forEach(el => {
        el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
}

/* ── INIT ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    spawnParticles();
    injectHudCorners();
    initNav();
    initHamburger();
    initScrollReveal();
    initSkillBars();
    initPhotoAccordion();
    initLabelFlicker();
    initProjectModal();
    startHeroAnimations();
});
