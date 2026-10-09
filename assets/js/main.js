// ═══════════════════════════════════════════════════════════════════════════════
//  DE REGENBOOGGIDS — INTERACTIE
//  Alle inhoud (tools, organisaties, begrippen, casussen …) staat in data.js.
//  Dit bestand bouwt daaruit de pagina's op en regelt alles wat beweegt.
//
//  1 hulpjes · 2 weergave (licht/donker/toegankelijk) · 3 navigatie · 4 dialogen ·
//  5 zoeken · 6 onthullen & tellers · 7 home · 8 kaarten & filters · 9 praktijk ·
//  10 wegwijzer · 11 over · 12 acties & start
// ═══════════════════════════════════════════════════════════════════════════════
'use strict';

// ── 1. HULPJES ─────────────────────────────────────────────────────────────────
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const ico = (name, cls) => `<svg class="i${cls ? ' ' + cls : ''}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isA11y = () => document.documentElement.classList.contains('a11y');
const calm = () => prefersReduced() || isA11y();
const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
const slug = s => norm(s).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const kort = (s, n = 150) => {
  if (s.length <= n) return s;
  const t = s.slice(0, n).replace(/\s+\S*$/, '');
  return /[.!?]["”’']?$/.test(t) ? t : t.replace(/[,;:]+$/, '') + '…';
};
const zonderTags = html => String(html).replace(/<[^>]+>/g, '');
const ext = '<span class="sr-only"> (opent in nieuw tabblad)</span>';
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const QP = new URLSearchParams(location.search);

const THEMA_TONE = { 'Seksualiteit & Identiteit': 'teal', 'Gender & Trans': 'violet', 'Beleid & Organisatie': 'amber' };
const TYPE_TONE = {
  'Begeleiding & Advies': 'teal', 'Ontmoeting & Activiteiten': 'violet', 'Info & Ondersteuning': 'blue', 'Anonieme steun': 'rose',
  'Juridisch kader': 'violet', 'Beleidskader': 'amber', 'Wetenschappelijk kader': 'blue', 'Good Practice': 'teal',
  'Praktijkkader': 'rose', 'Nascholing': 'amber', 'Teamtool': 'teal',
};
const GROEP_STIJL = {
  'Praktijk & vorming': ['teal', 'cap'], 'Rechten & wetgeving': ['violet', 'scale'],
  'Vlaams zorgbeleid': ['amber', 'doc'], 'Wetenschappelijke onderbouwing': ['blue', 'flask'],
};
const DOELGROEP_ICO = { 'Cliënten': 'user', 'Begeleiders': 'badge', 'Cliënten & Begeleiders': 'users', 'Organisaties': 'layers' };
const WW_REGIO = WW_STAPPEN.find(s => s.key === 'regio').opties;
const REGIO_KORT = r => { const o = WW_REGIO.find(x => x.val === r); return o ? o.kort || o.t : r; };
const REGIO_VOLGORDE = WW_REGIO.map(o => o.val);
const NU = new Date().getFullYear();

// Regenboogkleur op positie t (0–1), dezelfde stops als de boog
const BOOG = [[0, '#ee6f9c'], [0.2, '#f4a44a'], [0.4, '#f5d23f'], [0.6, '#5bbf7a'], [0.8, '#46b3d6'], [1, '#7b6fd4']];
function boogKleur(t) {
  t = Math.max(0, Math.min(1, t));
  const hex = c => [1, 3, 5].map(o => parseInt(c.substr(o, 2), 16));
  for (let k = 1; k < BOOG.length; k++) {
    const [p1, c1] = BOOG[k - 1], [p2, c2] = BOOG[k];
    if (t <= p2) { const f = (t - p1) / (p2 - p1), a = hex(c1), b = hex(c2); return `rgb(${a.map((v, j) => Math.round(v + (b[j] - v) * f)).join(',')})`; }
  }
  return BOOG[BOOG.length - 1][1];
}

// ── 2. WEERGAVE ────────────────────────────────────────────────────────────────
// 'rg-modus' in localStorage: 'dark', 'light' of 'a11y'. Niets = volg het toestel.
const Weergave = {
  lees() { try { return localStorage.getItem('rg-modus'); } catch (e) { return null; } },
  bewaar(v) { try { v ? localStorage.setItem('rg-modus', v) : localStorage.removeItem('rg-modus'); } catch (e) { /* privémodus */ } },
  huidig() { const m = this.lees(); return ['dark', 'light', 'a11y'].includes(m) ? m : 'auto'; },
  toestelDonker: () => window.matchMedia('(prefers-color-scheme: dark)').matches,
  pas(mode) {
    const h = document.documentElement;
    h.classList.toggle('a11y', mode === 'a11y');
    h.classList.toggle('dark', mode === 'dark' || (mode === 'auto' && this.toestelDonker()));
    this.bewaar(mode === 'auto' ? null : mode);
    this.sync();
  },
  kies(mode, e) {
    if (mode === this.huidig()) return;
    const wasDark = document.documentElement.classList.contains('dark');
    const run = () => this.pas(mode);
    const wordtDark = mode === 'dark' || (mode === 'auto' && this.toestelDonker());
    // Cirkel die openvloeit vanaf de knop (enkel als er echt van licht↔donker gewisseld wordt)
    if (!document.startViewTransition || calm() || mode === 'a11y' || wasDark === wordtDark) { run(); return; }
    const x = e && e.clientX ? e.clientX : innerWidth - 60, y = e && e.clientY ? e.clientY : 40;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const h = document.documentElement;
    h.classList.add('vt-theme');
    const t = document.startViewTransition(run);
    t.ready.then(() => h.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
      { duration: 700, easing: 'cubic-bezier(.65,0,.35,1)', pseudoElement: '::view-transition-new(root)' }
    )).catch(() => {});
    t.finished.finally(() => h.classList.remove('vt-theme'));
  },
  toggleA11y(e) { this.kies(isA11y() ? 'auto' : 'a11y', e); },
  sync() {
    const m = this.huidig();
    $$('[data-theme-set]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.themeSet === m)));
    $$('[data-action="a11y"]').forEach(b => b.setAttribute('aria-checked', String(m === 'a11y')));
    const kleur = getComputedStyle(document.documentElement).getPropertyValue('--paper').trim();
    if (kleur) $$('meta[name="theme-color"]').forEach(mt => mt.setAttribute('content', kleur));
  },
  init() {
    this.sync();
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const opVerandering = () => { if (this.huidig() === 'auto') this.pas('auto'); };
    if (mq.addEventListener) mq.addEventListener('change', opVerandering);
  },
};

// ── 3. NAVIGATIE ───────────────────────────────────────────────────────────────
function initNav() {
  const nav = $('#nav');
  if (nav) {
    const opScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
    addEventListener('scroll', opScroll, { passive: true });
    opScroll();
  }
  const mac = /Mac|iPhone|iPad/.test((navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || '');
  $$('[data-kbd]').forEach(k => { k.textContent = mac ? '⌘K' : 'Ctrl K'; });

  // Popover API ontbreekt (oudere browsers): eenvoudige terugval met .is-open
  if (!HTMLElement.prototype.hasOwnProperty('popover')) {
    document.addEventListener('click', e => {
      const btn = e.target.closest('[popovertarget]');
      const open = $$('.pop.is-open');
      if (btn) {
        const doel = document.getElementById(btn.getAttribute('popovertarget'));
        const was = doel && doel.classList.contains('is-open');
        open.forEach(p => p.classList.remove('is-open'));
        if (doel && !was) doel.classList.add('is-open');
        return;
      }
      if (!e.target.closest('.pop')) open.forEach(p => p.classList.remove('is-open'));
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') $$('.pop.is-open').forEach(p => p.classList.remove('is-open')); });
  }
  // Mobiel menu: de knop toont een kruisje zolang het menu open is
  const sheet = $('#nav-sheet'), burger = $('.nav-burger');
  if (sheet && burger) {
    sheet.addEventListener('toggle', e => {
      const open = e.newState === 'open';
      burger.innerHTML = ico(open ? 'x' : 'menu');
      burger.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    });
  }
}

// ── 4. DIALOGEN ────────────────────────────────────────────────────────────────
const Dlg = {
  open(id) {
    const d = document.getElementById(id);
    if (!d || d.open) return;
    $$('.pop').forEach(p => { try { if (p.matches(':popover-open')) p.hidePopover(); } catch (e) { p.classList.remove('is-open'); } });
    d._terug = document.activeElement;
    if (d.showModal) d.showModal(); else d.setAttribute('open', '');
  },
  sluit(d) { if (d && d.open) { if (d.close) d.close(); else d.removeAttribute('open'); } },
  init() {
    $$('dialog.dlg').forEach(d => {
      // Klik op de achtergrond sluit
      d.addEventListener('click', e => {
        if (e.target !== d) return;
        const r = d.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) this.sluit(d);
      });
      d.addEventListener('close', () => { if (d._terug && d._terug.focus) d._terug.focus({ preventScroll: true }); });
    });
    document.addEventListener('click', e => { const c = e.target.closest('[data-close]'); if (c) this.sluit(c.closest('dialog')); });
  },
};

function renderHulp() {
  const el = $('#help-list');
  if (!el) return;
  el.innerHTML = HULPLIJNEN.map(l => `
    <div class="help-line tone-${l.kleur || 'teal'}">
      <span class="help-line-ic">${ico(l.icon || 'heart')}</span>
      <div class="help-line-name">${l.naam}</div>
      <div class="help-line-desc">${l.desc}</div>
      <div class="help-line-actions">
        ${l.tel ? `<a class="help-call" href="tel:${l.tel.replace(/\s/g, '')}" aria-label="Bel ${l.naam} op ${l.tel}">${ico('phone')}${l.tel}</a>` : ''}
        ${l.chat ? `<a class="help-chat" href="${l.chat}" target="_blank" rel="noopener noreferrer">${ico('chat')}Chat${ext}</a>` : ''}
      </div>
    </div>`).join('');
}

function openFunFact(woord) {
  const t = TERMEN.find(x => x.woord === woord);
  if (!t) return;
  $('#fun-title').textContent = t.woord;
  $('#fun-body').textContent = t.tip;
  Dlg.open('dlg-fun');
}

// ── 5. ZOEKEN (Ctrl K / ⌘K) ───────────────────────────────────────────────────
const Zoek = {
  index: null, items: [], sel: 0,
  GROEPEN: { pagina: "Pagina's", tool: 'Tools', org: 'Organisaties', term: 'Begrippen', casus: 'Casuïstiek', beleid: 'Beleid', mijlpaal: 'Mijlpalen', hulp: 'Hulplijnen' },
  bouw() {
    const idx = [];
    const add = (type, o) => idx.push(Object.assign({ type }, o, { _t: norm(o.title), _s: norm((o.sub || '') + ' ' + (o.text || '')) }));
    [
      ['Tools & methodieken', 'Alle praktische instrumenten', '/tools/', 'tool', 'teal'],
      ['Organisaties & contacten', 'Verenigingen, steunpunten en diensten per regio', '/organisaties/', 'users', 'blue'],
      ['Praktijk', 'Casuïstiek, taalgids, Vlaggensysteem, team-zelfscan en test jezelf', '/praktijk/', 'bulb', 'violet'],
      ['Casuïstiek', 'Herkenbare situaties met handvatten', '/praktijk/?tab=casus', 'bubble', 'violet'],
      ['Taalgids', 'Begrippen rond seksuele en genderdiversiteit', '/praktijk/?tab=taal', 'book', 'teal'],
      ['Vlaggensysteem in het kort', 'Seksueel gedrag inschatten en gepast reageren (Sensoa)', '/praktijk/?tab=vlag', 'flag', 'rose'],
      ['Team-zelfscan', 'Waar staat je team of voorziening?', '/praktijk/?tab=scan', 'clipboard', 'amber'],
      ['Test jezelf', 'Korte zelftest over je eigen reflexen', '/praktijk/?tab=quiz', 'help', 'rose'],
      ['Beleid & vorming', 'Wetgeving, zorgbeleid en wetenschappelijke onderbouwing', '/beleid/', 'scale', 'amber'],
      ['Mijlpalen-tijdlijn', 'Rechten en erkenning, van 1897 tot nu', '/beleid/#tijdlijn', 'clock', 'blue'],
      ['Wegwijzer', 'Een paar vragen, een selectie op maat', '/wegwijzer/', 'compass', 'teal'],
      ['Over dit project', 'Graduaatsproef UCLL · achtergrond', '/over/', 'info', 'slate'],
      ['Contact & aanvullingen', 'Mis je iets? Laat het weten', '/over/#contact', 'mail', 'slate'],
    ].forEach(([title, sub, href, icon, tone]) => add('pagina', { title, sub, href, icon, tone }));
    add('pagina', { title: 'Hulp nodig?', sub: 'Crisis- en hulplijnen', text: 'zelfmoord crisis noodnummer', action: 'help', icon: 'heart', tone: 'rose' });
    add('pagina', { title: 'Steun een organisatie', sub: 'Doneren aan het werkveld', text: 'gift doneren', action: 'doneer', icon: 'heart', tone: 'rose' });
    TOOLS.forEach(t => add('tool', { title: t.title, sub: `${t.org} · ${t.doelgroep}`, text: t.thema + ' ' + t.beschrijving, href: '/tools/#t-' + slug(t.title), icon: 'tool', tone: THEMA_TONE[t.thema] || 'teal' }));
    ORGS.forEach(o => add('org', { title: o.naam, sub: `${REGIO_KORT(o.regio)} · ${o.type}`, text: o.beschrijving + ' ' + o.regio, href: '/organisaties/#o-' + slug(o.naam), icon: 'users', tone: TYPE_TONE[o.type] || 'blue' }));
    TERMEN.forEach(t => add('term', { title: t.woord.replace(/"/g, ''), sub: `Taalgids · ${t.cat}`, text: t.def, href: '/praktijk/?tab=taal#term-' + slug(t.woord), icon: 'book', tone: TERM_CAT_COLOR[t.cat] || 'teal' }));
    CASUS.forEach((c, i) => add('casus', { title: c.titel, sub: `Casus ${i + 1} · ${c.tag}`, text: c.blokken.map(b => b.tekst).join(' '), href: `/praktijk/?tab=casus#casus-${i + 1}`, icon: 'bubble', tone: 'violet' }));
    BELEID.forEach(b => add('beleid', { title: b.titel, sub: `${b.groep} · ${b.type}`, text: b.beschrijving, href: '/beleid/#b-' + slug(b.titel), icon: (GROEP_STIJL[b.groep] || ['amber', 'scale'])[1], tone: (GROEP_STIJL[b.groep] || ['amber'])[0] }));
    TIJDLIJN.forEach(m => add('mijlpaal', { title: `${m.type === 'dossier' ? 'Open dossier' : m.jaar} · ${zonderTags(m.titel)}`, sub: m.type === 'dossier' ? 'Tijdlijn · wat nog moet gebeuren' : m.type === 'weetje' ? 'Tijdlijn · weetje' : 'Tijdlijn', text: zonderTags(m.desc), href: `/beleid/#tijdlijn-${m.id ?? m.jaar}`, icon: 'clock', tone: 'blue' }));
    HULPLIJNEN.forEach(l => add('hulp', { title: l.naam, sub: l.tel ? `Bel ${l.tel}` : 'Hulplijn', text: l.desc, action: 'help', icon: l.icon || 'heart', tone: l.kleur || 'rose' }));
    this.index = idx;
  },
  score(e, terms, q) {
    let s = 0;
    for (const w of terms) {
      if (e._t.startsWith(w)) s += 14;
      else if (e._t.includes(' ' + w)) s += 10;
      else if (e._t.includes(w)) s += 7;
      else if (e._s.includes(w)) s += 2;
      else return 0;
    }
    if (e._t === q) s += 30;
    if (e.type === 'pagina') s += 3;
    return s;
  },
  // Markeer de zoekterm, ook als de bezoeker accenten weglaat (client ↔ cliënt)
  markeer(text, terms) {
    let out = esc(text);
    const klassen = { a: '[aàáâä]', e: '[eèéêë]', i: '[iìíîï]', o: '[oòóôö]', u: '[uùúûü]', c: '[cç]', n: '[nñ]' };
    terms.filter(t => t.length > 1).forEach(t => {
      const pat = t.split('').map(ch => klassen[ch] || ch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('');
      try { out = out.replace(new RegExp(`(${pat})(?![^<]*>)`, 'gi'), '<mark>$1</mark>'); } catch (e) { /* ongeldig patroon */ }
    });
    return out;
  },
  render() {
    const box = $('#search-results'), inp = $('#search-input');
    const q = norm(inp.value.trim());
    const terms = q.split(/\s+/).filter(Boolean);
    let res;
    if (!terms.length) {
      res = ['Wegwijzer', 'Taalgids', 'Casuïstiek', 'Team-zelfscan', 'Hulp nodig?', 'Organisaties & contacten']
        .map(t => this.index.find(e => e.title === t)).filter(Boolean).map(e => ({ e, s: 1, groep: 'Snel naar' }));
    } else {
      res = this.index.map(e => ({ e, s: this.score(e, terms, q) })).filter(x => x.s > 0).sort((a, b) => b.s - a.s);
    }
    // Groeperen per type, in de volgorde van het beste resultaat
    const groepen = new Map();
    res.forEach(x => {
      const g = x.groep || this.GROEPEN[x.e.type];
      if (!groepen.has(g)) groepen.set(g, []);
      if (groepen.get(g).length < (terms.length ? 5 : 6)) groepen.get(g).push(x.e);
    });
    this.items = [];
    let html = '';
    groepen.forEach((lijst, g) => {
      html += `<div class="sr-group" role="presentation">${g}</div>`;
      lijst.forEach(e => {
        const i = this.items.length;
        this.items.push(e);
        const inner = `<span class="sr-ic tone-${e.tone}">${ico(e.icon)}</span>
          <span><span class="sr-title">${this.markeer(e.title, terms)}</span><span class="sr-sub">${esc(e.sub || '')}</span></span>${ico('corner', 'sr-go')}`;
        html += e.href
          ? `<a class="sr-item" id="sr-${i}" role="option" href="${e.href}" data-i="${i}" aria-selected="false">${inner}</a>`
          : `<div class="sr-item" id="sr-${i}" role="option" data-i="${i}" aria-selected="false">${inner}</div>`;
      });
    });
    box.innerHTML = html || `<div class="sr-empty"><b>Geen resultaten voor “${esc(inp.value.trim())}”</b>Probeer een ander woord, of start de <a href="/wegwijzer/">Wegwijzer</a>.</div>`;
    this.kies(0);
  },
  kies(i) {
    const els = $$('.sr-item', $('#search-results'));
    if (!els.length) { $('#search-input').removeAttribute('aria-activedescendant'); return; }
    this.sel = (i + els.length) % els.length;
    els.forEach((el, k) => el.setAttribute('aria-selected', String(k === this.sel)));
    $('#search-input').setAttribute('aria-activedescendant', els[this.sel].id);
    els[this.sel].scrollIntoView({ block: 'nearest' });
  },
  activeer(i) {
    const e = this.items[i];
    if (!e) return;
    Dlg.sluit($('#dlg-search'));
    if (e.action) { setTimeout(() => ACT[e.action](), 60); return; }
    const doel = new URL(e.href, location.href);
    if (doel.pathname === location.pathname && doel.search === location.search && doel.hash) {
      if (location.hash === doel.hash) focusHash(); else location.hash = doel.hash;
    } else {
      location.href = e.href;
    }
  },
  open() {
    if (!this.index) this.bouw();
    const inp = $('#search-input');
    inp.value = '';
    this.render();
    Dlg.open('dlg-search');
    inp.focus();
  },
  init() {
    const inp = $('#search-input'), box = $('#search-results');
    if (!inp) return;
    inp.addEventListener('input', () => this.render());
    inp.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); this.kies(this.sel + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); this.kies(this.sel - 1); }
      else if (e.key === 'Enter') { e.preventDefault(); this.activeer(this.sel); }
      // In een zoekveld wist Esc eerst de tekst; hier sluit Esc meteen het venster
      else if (e.key === 'Escape') { e.preventDefault(); Dlg.sluit($('#dlg-search')); }
    });
    box.addEventListener('click', e => {
      const it = e.target.closest('.sr-item');
      if (!it || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      this.activeer(+it.dataset.i);
    });
    box.addEventListener('mousemove', e => { const it = e.target.closest('.sr-item'); if (it && +it.dataset.i !== this.sel) this.kies(+it.dataset.i); });
    document.addEventListener('keydown', e => {
      const typ = e.target.closest && e.target.closest('input, textarea, select, [contenteditable]');
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) { e.preventDefault(); this.open(); }
      else if (e.key === '/' && !typ && !document.querySelector('dialog[open]')) { e.preventDefault(); this.open(); }
    });
  },
};

// ── 6. ONTHULLEN & TELLERS ─────────────────────────────────────────────────────
function initReveal(root = document) {
  const els = $$('.reveal:not(.is-in)', root);
  if (!els.length) return;
  if (!('IntersectionObserver' in window) || calm()) { els.forEach(el => el.classList.add('is-in')); return; }
  $$('[data-stagger]', root).forEach(p => $$(':scope > .reveal', p).forEach((c, i) => c.style.setProperty('--rd', `${i * 90}ms`)));
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
  els.forEach(el => io.observe(el));
}

function initTellers() {
  const BRON = { TOOLS, ORGS, BELEID, TERMEN, CASUS, SCAN_VRAGEN, QUIZ_VRAGEN, TIJDLIJN, VLAG_CRITERIA };
  $$('[data-count]').forEach(el => {
    const lijst = BRON[el.dataset.count];
    if (!lijst) return;
    const n = lijst.length;
    el.textContent = n;
    if (calm() || !el.closest('.hero-stats') || !('IntersectionObserver' in window)) return;
    el.textContent = '0';
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), duur = 1500;
      const stap = t => {
        const p = Math.min(1, (t - t0) / duur), e = 1 - Math.pow(2, -10 * p);
        el.textContent = Math.round(e * n);
        if (p < 1) requestAnimationFrame(stap); else el.textContent = n;
      };
      requestAnimationFrame(stap);
    }, { threshold: 0.6 });
    io.observe(el);
  });
}

function initSpot() {
  if (calm() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.documentElement.classList.add('has-spot');
  document.addEventListener('pointermove', e => {
    const k = e.target.closest && e.target.closest('.bento-card, .item, .strip-card');
    if (!k) return;
    const r = k.getBoundingClientRect();
    k.style.setProperty('--mx', `${e.clientX - r.left}px`);
    k.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, { passive: true });
}

// ── 7. HOME ────────────────────────────────────────────────────────────────────
function initHero() {
  const art = $('#hero-art'), hero = $('#hero');
  if (!art || !hero) return;
  // Vonkjes die uit de kern van de boog opstijgen
  const g = $('#hero-sparks');
  if (g && !calm()) {
    g.innerHTML = Array.from({ length: 16 }, (_, i) => {
      const dx = Math.round((Math.random() - 0.5) * 220);
      const dur = (5 + Math.random() * 5).toFixed(2), delay = (2.2 + Math.random() * 7).toFixed(2);
      const r = (1.6 + Math.random() * 2.6).toFixed(1), cx = (320 + (Math.random() - 0.5) * 36).toFixed(1);
      return `<circle class="spark" cx="${cx}" cy="334" r="${r}" style="fill:var(--r${(i % 6) + 1});--dx:${dx}px;--dur:${dur}s;--delay:${delay}s"/>`;
    }).join('');
  }
  if (calm()) return;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => hero.classList.toggle('is-off', !en.isIntersecting)).observe(hero);
  }
  // Diepte: de banden en kaartjes volgen de cursor, de boog zakt mee bij het scrollen
  let tx = 0, ty = 0, x = 0, y = 0, sy = 0, raf = 0;
  const fijn = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const tick = () => {
    x += (tx - x) * 0.07; y += (ty - y) * 0.07;
    art.style.setProperty('--px', x.toFixed(3));
    art.style.setProperty('--py', y.toFixed(3));
    art.style.setProperty('--sy', sy.toFixed(3));
    raf = (Math.abs(tx - x) > 0.002 || Math.abs(ty - y) > 0.002) ? requestAnimationFrame(tick) : 0;
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
  if (fijn) {
    hero.addEventListener('pointermove', e => {
      const r = art.getBoundingClientRect();
      tx = Math.max(-1.2, Math.min(1.2, (e.clientX - (r.left + r.width / 2)) / (innerWidth / 2)));
      ty = Math.max(-1.2, Math.min(1.2, (e.clientY - (r.top + r.height / 2)) / (innerHeight / 2)));
      kick();
    });
    hero.addEventListener('pointerleave', () => { tx = ty = 0; kick(); });
  }
  addEventListener('scroll', () => {
    const v = Math.min(1, Math.max(0, window.scrollY / (hero.offsetHeight || 1)));
    if (Math.abs(v - sy) > 0.001) { sy = v; kick(); }
  }, { passive: true });
}

function initMarquee() {
  const t = $('#marquee');
  if (!t) return;
  const woorden = shuffle(TERMEN.filter(x => x.cat !== 'Liever vermijden').map(x => x.woord.replace(/"/g, '')));
  const rij = woorden.map((w, i) => `<span class="tk-item">${w}<span class="tk-dot" style="--c:var(--r${(i % 6) + 1})"></span></span>`).join('');
  t.innerHTML = rij + rij;
}

function initBento() {
  const fan = $('#fan');
  if (fan) {
    let keuze = ['De Roze Pagina', 'Sensoa Vlaggensysteem', 'TransToegankelijk'].map(n => TOOLS.find(t => t.title === n)).filter(Boolean);
    if (keuze.length < 3) keuze = TOOLS.slice(0, 3);
    fan.innerHTML = keuze.map(t => `
      <div class="fan-card tone-${THEMA_TONE[t.thema] || 'teal'}">
        <div class="fan-org">${t.org}</div>
        <div class="fan-title">${t.title}</div>
        <span class="tag">${t.thema}</span>
      </div>`).join('');
  }
  const wolk = $('#region-cloud');
  if (wolk) {
    const n = {};
    ORGS.forEach(o => { n[o.regio] = (n[o.regio] || 0) + 1; });
    wolk.innerHTML = REGIO_VOLGORDE.filter(r => n[r]).map(r =>
      `<a class="region-chip" href="/organisaties/?regio=${encodeURIComponent(r)}">${REGIO_KORT(r)}<b>${n[r]}</b></a>`).join('');
  }
  const mini = $('#mini-tl');
  if (mini) {
    const start = 1890;
    mini.innerHTML = [[1897, '#78716c'], [1952, '#a8a29e'], [1973, 'var(--r2)'], [2003, 'var(--r4)'], [NU, 'var(--r6)', 'nu']]
      .map(([j, c, lbl]) => `<i style="--x:${((j - start) / (NU - start) * 100).toFixed(1)}%;--c:${c}" data-y="${lbl || j}"></i>`).join('');
  }
  const quick = $('#ww-quick');
  if (quick) {
    quick.innerHTML = WW_STAPPEN[0].opties.map(o => `
      <a class="ww-qopt" href="/wegwijzer/?wie=${o.val}">
        <span class="ww-qopt-ic">${ico(o.icon)}</span>
        <span class="ww-qopt-body"><b>${o.t}</b>${o.d ? `<small>${o.d}</small>` : ''}</span>
        ${ico('arrow-right')}
      </a>`).join('');
  }
  const hulp = $('#hulp-lines');
  if (hulp) {
    hulp.innerHTML = HULPLIJNEN.slice(0, 3).map(l => `
      <li class="hulp-line tone-${l.kleur || 'teal'}">
        <span class="hulp-line-ic">${ico(l.icon || 'heart')}</span>
        <span><b>${l.naam}</b><small>${l.desc.split('. ')[0].replace(/\.$/, '')}.</small></span>
        ${l.tel ? `<a class="help-call" href="tel:${l.tel.replace(/\s/g, '')}" aria-label="Bel ${l.naam} op ${l.tel}">${ico('phone')}${l.tel}</a>` : ''}
      </li>`).join('');
  }
}

// Taalgids-kaarten om te draaien
let stapel = [];
function deelKaarten() {
  const el = $('#deck');
  if (!el) return;
  if (stapel.length < 4) stapel = shuffle(TERMEN.slice());
  const hand = stapel.splice(0, 4);
  el.innerHTML = hand.map((t, i) => {
    const vermijd = t.cat === 'Liever vermijden';
    return `
    <button class="flip tone-${TERM_CAT_COLOR[t.cat] || 'teal'}${calm() ? '' : ' is-dealt'}" type="button" aria-pressed="false" style="--dd:${i * 85}ms">
      <span class="flip-face flip-front">
        <span class="tag">${vermijd ? ico('alert') : ''}${t.cat}</span>
        <span class="flip-word">${t.woord}</span>
        <span class="flip-hint" aria-hidden="true">${ico('rotate')}Draai om</span>
      </span>
      <span class="flip-face flip-back">
        <span class="flip-word" aria-hidden="true">${t.woord}</span>
        <span class="flip-def">${kort(t.def, 175)}</span>
        <span class="flip-hint" aria-hidden="true">${ico('rotate')}Terug</span>
      </span>
    </button>`;
  }).join('');
  $$('.flip.is-dealt', el).forEach(f => f.addEventListener('animationend', () => f.classList.remove('is-dealt'), { once: true }));
}

function initStrook() {
  const el = $('#strip');
  if (!el) return;
  const CAT = { science: 'Wetenschap & zorg', move: 'Samenleving & beweging', law: 'Wetgeving & beleid' };
  // Enkel afgeronde kantelpunten. De toekomstfase (open dossiers) krijgt één afsluitende kaart.
  const open = TL_FASES.find(f => f.toekomst);
  const items = TIJDLIJN.filter(m => m.type !== 'weetje' && m.fase !== open?.nr);
  const dossiers = TIJDLIJN.filter(m => m.type === 'dossier').map(m => m.kort);
  const lijst = dossiers.length > 1 ? `${dossiers.slice(0, -1).join(', ')} en ${dossiers[dossiers.length - 1]}` : dossiers[0];
  const f2 = items.filter(m => m.fase === 2), a = +f2[0].jaar, b = +f2[f2.length - 1].jaar;
  el.innerHTML = items.map(m => {
    const c = m.fase === 1 ? '#a8a29e' : boogKleur((+m.jaar - a) / (b - a));
    return `<li><a class="strip-card" href="/beleid/#tijdlijn-${m.jaar}" style="--c:${c}">
      <span class="strip-year">${m.jaar}${m.jaar2 ? `<small>/ ${m.jaar2}</small>` : ''}</span>
      <span class="strip-cat">${CAT[m.cat] || ''}</span>
      <span class="strip-title">${m.titel}</span>
      <span class="strip-go">Lees meer${ico('arrow-right')}</span>
    </a></li>`;
  }).join('') + (open && dossiers.length ? `<li><a class="strip-card strip-card-open" href="/beleid/#tijdlijn-fase-${open.nr}" style="--c:${boogKleur(1)}">
      <span class="strip-year">${open.start}–?</span>
      <span class="strip-cat">${open.titel}</span>
      <span class="strip-title">Nog ${dossiers.length} open dossiers: ${lijst}.</span>
      <span class="strip-go">Bekijk fase ${open.nr}${ico('arrow-right')}</span>
    </a></li>` : '');
  const knoppen = $$('[data-action="strip"]');
  const status = () => {
    knoppen.forEach(k => { k.disabled = +k.dataset.dir < 0 ? el.scrollLeft < 8 : el.scrollLeft > el.scrollWidth - el.clientWidth - 8; });
  };
  el.addEventListener('scroll', status, { passive: true });
  addEventListener('resize', status);
  status();
  // Slepen met de muis (aanraken en trackpad scrollen al vanzelf)
  let start = null, gesleept = false;
  el.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    start = { x: e.clientX, l: el.scrollLeft }; gesleept = false;
  });
  addEventListener('pointermove', e => {
    if (!start) return;
    const dx = e.clientX - start.x;
    if (!gesleept && Math.abs(dx) > 6) { gesleept = true; el.style.scrollSnapType = 'none'; el.style.cursor = 'grabbing'; }
    if (gesleept) el.scrollLeft = start.l - dx;
  });
  addEventListener('pointerup', () => {
    if (!start) return;
    start = null;
    el.style.cursor = '';
    if (gesleept) { el.style.scrollSnapType = ''; setTimeout(() => { gesleept = false; }, 0); }
  });
  el.addEventListener('click', e => { if (gesleept) { e.preventDefault(); e.stopPropagation(); } }, true);
  el.addEventListener('dragstart', e => e.preventDefault());
}
function strookSchuif(dir) {
  const el = $('#strip');
  if (!el) return;
  const kaart = $('li', el);
  const stap = kaart ? kaart.offsetWidth + 16 : 300;
  el.scrollBy({ left: dir * stap * Math.max(1, Math.floor(el.clientWidth / stap) - 1), behavior: calm() ? 'auto' : 'smooth' });
}

// ── 8. KAARTEN & FILTERS (tools · organisaties · beleid · taalgids) ───────────
function toolKaart(t) {
  return `<article class="item tone-${THEMA_TONE[t.thema] || 'teal'}" id="t-${slug(t.title)}">
    <div class="item-meta"><span class="tag">${t.thema}</span></div>
    <h3 class="item-title">${t.title}</h3>
    <p class="item-sub">${t.org}</p>
    <p class="item-desc">${t.beschrijving}</p>
    <div class="item-foot">
      <span class="item-aud">${ico(DOELGROEP_ICO[t.doelgroep] || 'users')}${t.doelgroep}</span>
      <a class="item-link" href="${t.url}" target="_blank" rel="noopener noreferrer">Bekijk tool${ico('arrow-up-right')}${ext}</a>
    </div>
  </article>`;
}
function orgKaart(o, compact) {
  // "Let op: …" in de beschrijving tonen we als aparte waarschuwing
  const [tekst, letop] = o.beschrijving.split(/\s*Let op:\s*/);
  return `<article class="item tone-${TYPE_TONE[o.type] || 'blue'}" id="o-${slug(o.naam)}">
    <div class="item-meta"><span class="tag">${o.type}</span></div>
    <h3 class="item-title">${o.naam}</h3>
    <p class="item-sub">${ico('pin')}${REGIO_KORT(o.regio)}</p>
    <p class="item-desc">${compact ? kort(tekst, 140) : tekst}</p>
    ${letop && !compact ? `<p class="item-note">${ico('alert')}<span><strong>Let op:</strong> ${letop}</span></p>` : ''}
    <div class="item-foot">
      ${o.telefoon ? `<a class="phone-btn" href="tel:${o.telefoon.replace(/\s/g, '')}" aria-label="Bel ${o.naam} op ${o.telefoon}">${ico('phone')}${o.telefoon}</a>` : '<span></span>'}
      <a class="item-link" href="${o.url}" target="_blank" rel="noopener noreferrer">Bezoek website${ico('arrow-up-right')}${ext}</a>
    </div>
  </article>`;
}
function beleidKaart(b, compact) {
  return `<article class="item tone-${TYPE_TONE[b.type] || 'amber'}" id="b-${slug(b.titel)}">
    <div class="item-meta"><span class="tag">${b.type}</span></div>
    <h3 class="item-title">${b.titel}</h3>
    <p class="item-desc">${compact ? kort(b.beschrijving, 140) : b.beschrijving}</p>
    ${b.url ? `<div class="item-foot"><span></span><a class="item-link" href="${b.url}" target="_blank" rel="noopener noreferrer">Meer info${ico('arrow-up-right')}${ext}</a></div>` : ''}
  </article>`;
}
function termKaart(t) {
  let tip = '';
  if (t.tip && t.tipType === 'fun') tip = `<button class="term-fun" type="button" data-fun="${esc(t.woord)}">${ico('sparkles')}Fun fact</button>`;
  else if (t.tip) tip = `<p class="term-tip${t.tipType === 'warn' ? ' warn' : ''}">${ico(t.tipType === 'warn' ? 'alert' : 'bulb')}<span><strong>${t.tipType === 'warn' ? 'Let op: ' : 'Tip: '}</strong>${t.tip}</span></p>`;
  return `<article class="term tone-${TERM_CAT_COLOR[t.cat] || 'teal'}" id="term-${slug(t.woord)}">
    <div class="term-top"><h4 class="term-word">${t.woord}</h4><span class="tag">${t.cat}</span></div>
    <p class="term-def">${t.def}</p>
    ${tip}
  </article>`;
}

// Herbruikbare filterlijst: zoekveld + groepen met chips (met live aantallen) + resultaten.
// De keuze staat ook in de URL, zodat een gefilterd overzicht te delen is.
function maakFilter(cfg) {
  const st = { q: '' };
  cfg.groepen.forEach(g => { st[g.key] = g.alle; });
  const P = new URLSearchParams(location.search);
  if (P.get('q')) st.q = P.get('q');
  cfg.groepen.forEach(g => {
    const raw = P.get(g.param || g.key);
    const v = g.vanParam ? g.vanParam(raw) : raw;
    if (v && g.waarden.includes(v)) st[g.key] = v;
  });
  const inp = cfg.input, wis = inp.parentElement.querySelector('.field-clear'), reset = cfg.reset;
  inp.value = st.q;

  const past = (it, behalve) => {
    if (st.q) {
      const hooi = norm(cfg.tekst(it));
      if (!norm(st.q).split(/\s+/).filter(Boolean).every(w => hooi.includes(w))) return false;
    }
    return cfg.groepen.every(g => g.key === behalve || st[g.key] === g.alle || g.test(it, st[g.key]));
  };
  const actief = () => !!st.q || cfg.groepen.some(g => st[g.key] !== g.alle);
  let huidig = [];

  // Chips één keer opbouwen; daarna enkel aantallen en status bijwerken (zo blijft de focus staan)
  cfg.groepen.forEach(g => {
    g.el.innerHTML = `<legend class="sr-only">${g.label}</legend><span class="chip-label" aria-hidden="true">${g.label}</span>` +
      [g.alle, ...g.waarden].map(v => {
        const id = `${cfg.naam}-${g.key}-${slug(v) || 'alle'}`;
        const tone = g.tone && v !== g.alle ? g.tone(v) : '';
        return `<input class="sr-only" type="radio" name="${cfg.naam}-${g.key}" id="${id}" value="${esc(v)}"${st[g.key] === v ? ' checked' : ''}>` +
          `<label class="chip${tone ? ' tone-' + tone : ''}" for="${id}">${tone ? '<span class="chip-dot" aria-hidden="true"></span>' : ''}${g.kort ? g.kort(v) : v}<span class="chip-n"></span></label>`;
      }).join('');
    g.el.addEventListener('change', e => { st[g.key] = e.target.value; update(); });
  });
  inp.addEventListener('input', () => { st.q = inp.value.trim(); update(); });
  if (wis) wis.addEventListener('click', () => { inp.value = ''; st.q = ''; update(); inp.focus(); });
  if (reset) reset.addEventListener('click', () => wisAlles(true));

  function wisAlles(rerender) {
    st.q = ''; inp.value = '';
    cfg.groepen.forEach(g => { st[g.key] = g.alle; const r = g.el.querySelector(`input[value="${CSS.escape(g.alle)}"]`); if (r) r.checked = true; });
    if (rerender) update();
  }
  function syncURL() {
    const u = new URL(location.href);
    u.searchParams.delete('q');
    if (st.q) u.searchParams.set('q', st.q);
    cfg.groepen.forEach(g => {
      const k = g.param || g.key;
      u.searchParams.delete(k);
      if (st[g.key] !== g.alle) u.searchParams.set(k, g.naarParam ? g.naarParam(st[g.key]) : st[g.key]);
    });
    try { history.replaceState(history.state, '', u.pathname + u.search + u.hash); } catch (e) { /* file:// */ }
  }
  function update(eerste) {
    const res = cfg.items.filter(it => past(it));
    huidig = res;
    cfg.lijst.innerHTML = res.length ? (cfg.render ? cfg.render(res) : res.map(it => cfg.kaart(it)).join('')) :
      `<div class="empty"><b>Geen resultaten gevonden</b>Pas je zoekterm of filters aan.<br><button class="btn btn-ghost btn-sm" type="button" data-wis>Wis alle filters</button></div>`;
    const leeg = cfg.lijst.querySelector('[data-wis]');
    if (leeg) leeg.addEventListener('click', () => wisAlles(true));
    if (!calm()) $$(':scope > *', cfg.lijst).slice(0, 12).forEach((k, i) => { k.classList.add('is-new'); k.style.setProperty('--ad', `${i * 45}ms`); });
    cfg.groepen.forEach(g => {
      $$('input', g.el).forEach(r => {
        const v = r.value;
        const n = cfg.items.filter(it => past(it, g.key) && (v === g.alle || g.test(it, v))).length;
        r.nextElementSibling.querySelector('.chip-n').textContent = n;
        r.disabled = n === 0 && st[g.key] !== v;
      });
    });
    cfg.teller.innerHTML = `<b>${res.length}</b> ${res.length === 1 ? cfg.woord[0] : cfg.woord[1]}${actief() ? ' gevonden' : ''}`;
    if (reset) reset.hidden = !actief();
    if (wis) wis.hidden = !st.q;
    if (!eerste) syncURL();
  }
  update(true);
  return {
    // Zorg dat een kaart (bv. vanuit het zoekvenster) zichtbaar is, ook als filters ze verbergen
    toon(id) { if (!document.getElementById(id)) { wisAlles(true); } return document.getElementById(id); },
    update: () => update(),
    huidige: () => huidig.slice(),
  };
}

const Filters = {};
function initLijsten() {
  const tl = $('#tools-list');
  if (tl) {
    const TH = { sek: 'Seksualiteit & Identiteit', gen: 'Gender & Trans', bel: 'Beleid & Organisatie' };
    const DG = { client: 'Cliënten', begeleider: 'Begeleiders', team: 'Organisaties' };
    const omgekeerd = o => Object.fromEntries(Object.entries(o).map(([k, v]) => [v, k]));
    const uniek = (k, volgorde) => volgorde.filter(v => TOOLS.some(t => t[k] === v)).concat([...new Set(TOOLS.map(t => t[k]))].filter(v => !volgorde.includes(v)));
    Filters.tools = maakFilter({
      naam: 'tool', items: TOOLS, lijst: tl, teller: $('#tool-count'), input: $('#tool-q'), reset: $('#tool-reset'),
      woord: ['tool', 'tools'], kaart: toolKaart, tekst: t => `${t.title} ${t.org} ${t.beschrijving}`,
      groepen: [
        { key: 'thema', label: 'Thema', el: $('#tool-thema'), alle: 'Alle', waarden: uniek('thema', Object.values(TH)), test: (t, v) => t.thema === v, tone: v => THEMA_TONE[v] || 'teal', vanParam: p => TH[p] || p, naarParam: v => omgekeerd(TH)[v] || v },
        { key: 'doelgroep', label: 'Doelgroep', el: $('#tool-dg'), alle: 'Alle', waarden: uniek('doelgroep', ['Begeleiders', 'Cliënten', 'Cliënten & Begeleiders', 'Organisaties']), test: (t, v) => t.doelgroep === v, vanParam: p => DG[p] || p, naarParam: v => omgekeerd(DG)[v] || v },
      ],
    });
  }
  const ol = $('#orgs-list');
  if (ol) {
    const types = ['Begeleiding & Advies', 'Ontmoeting & Activiteiten', 'Info & Ondersteuning', 'Anonieme steun'].filter(v => ORGS.some(o => o.type === v));
    Filters.orgs = maakFilter({
      naam: 'org', items: ORGS, lijst: ol, teller: $('#org-count'), input: $('#org-q'), reset: $('#org-reset'),
      woord: ['organisatie', 'organisaties'], kaart: o => orgKaart(o), tekst: o => `${o.naam} ${o.beschrijving} ${o.regio}`,
      groepen: [
        { key: 'regio', label: 'Regio', el: $('#org-regio'), alle: "Alle regio's", waarden: REGIO_VOLGORDE.filter(r => ORGS.some(o => o.regio === r)), test: (o, v) => o.regio === v, kort: v => REGIO_KORT(v) },
        { key: 'type', label: 'Type', el: $('#org-type'), alle: 'Alle types', waarden: types, test: (o, v) => o.type === v, tone: v => TYPE_TONE[v] || 'blue' },
      ],
    });
  }
  const pl = $('#policy-list');
  if (pl) {
    pl.innerHTML = BELEID_GROEPEN.map(g => {
      const items = BELEID.filter(b => b.groep === g.naam);
      if (!items.length) return '';
      const [tone, icon] = GROEP_STIJL[g.naam] || ['amber', 'doc'];
      return `<section class="policy-group tone-${tone}" id="groep-${slug(g.naam)}" aria-labelledby="h-${slug(g.naam)}">
        <div class="policy-head reveal">
          <span class="policy-ic">${ico(icon)}</span>
          <h2 class="policy-title" id="h-${slug(g.naam)}">${g.naam}</h2>
          <p class="policy-intro">${g.intro}</p>
        </div>
        <div class="cards" data-stagger>${items.map(b => beleidKaart(b).replace('class="item ', 'class="item reveal ')).join('')}</div>
      </section>`;
    }).join('');
    const jn = $('#jump-nav');
    if (jn) {
      jn.innerHTML = BELEID_GROEPEN.filter(g => BELEID.some(b => b.groep === g.naam)).map(g => {
        const [tone] = GROEP_STIJL[g.naam] || ['amber'];
        return `<a class="tone-${tone}" href="#groep-${slug(g.naam)}"><span class="chip-dot" aria-hidden="true"></span>${g.naam}</a>`;
      }).join('') + `<a class="tone-blue" href="#tijdlijn"><span class="chip-dot" aria-hidden="true"></span>Mijlpalen-tijdlijn</a>`;
    }
  }
}

// Spring naar een kaart via #id (vanuit zoeken of een gedeelde link) en laat ze even oplichten
function focusHash(e) {
  const eerste = !e;
  let h = '';
  try { h = decodeURIComponent(location.hash.slice(1)); } catch (e) { return; }
  // Enkel kaarten (tool, organisatie, beleid, begrip, casus); secties en de tijdlijn scrollen zelf
  if (!/^(t|o|b|term|casus)-/.test(h)) return;
  let el = document.getElementById(h);
  if (!el) {
    if (/^t-/.test(h) && Filters.tools) el = Filters.tools.toon(h);
    else if (/^o-/.test(h) && Filters.orgs) el = Filters.orgs.toon(h);
    else if (/^term-/.test(h) && Filters.termen) { toonTab('taal', { push: false }); if (!$('#oefen').hidden) taalModus('lijst'); el = Filters.termen.toon(h); }
  }
  if (!el) return;
  if (/^casus-/.test(h)) { toonTab('casus', { push: false }); kiesCasus(+h.split('-')[1] - 1, { hash: false }); el = $('#casus-view') || el; }
  if (/^term-/.test(h)) { toonTab('taal', { push: false }); if (!$('#oefen').hidden) taalModus('lijst'); }
  const ga = () => {
    el.scrollIntoView({ block: /^casus-/.test(h) ? 'start' : 'center', behavior: (calm() || eerste) ? 'instant' : 'smooth' });
    if (el.classList.contains('item') || el.classList.contains('term')) {
      el.classList.remove('is-new', 'is-flash'); void el.offsetWidth; el.classList.add('is-flash');
    }
  };
  if (eerste) setTimeout(ga, 120); else requestAnimationFrame(ga);
}

// ── 9. PRAKTIJK ────────────────────────────────────────────────────────────────
const TABS = ['casus', 'taal', 'vlag', 'scan', 'quiz'];
// Kleine opslag op dit toestel (scanantwoorden, vorige resultaten, beste testscore)
const Opslag = {
  lees(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  zet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* privémodus */ } },
  wis(k) { try { localStorage.removeItem(k); } catch (e) { /* privémodus */ } },
};
function toast(tekst, icon = 'check') {
  const t = $('#toast');
  if (!t) return;
  t.innerHTML = `${ico(icon)}<span>${esc(tekst)}</span>`;
  t.classList.add('is-on');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => t.classList.remove('is-on'), 2600);
}
function kopieer(tekst, melding) {
  const ok = () => toast(melding || 'Gekopieerd');
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(tekst).then(ok).catch(() => window.prompt('Kopieer deze link:', tekst));
  else window.prompt('Kopieer deze link:', tekst);
}
const datumNL = iso => new Date(iso + 'T12:00:00').toLocaleDateString('nl-BE', { day: 'numeric', month: 'long', year: 'numeric' });
const zinLijst = a => (a.length < 2 ? a.join('') : `${a.slice(0, -1).join(', ')} en ${a[a.length - 1]}`);
const zonderQuotes = s => s.replace(/["“”]/g, '');
function confetti() {
  if (calm()) return;
  const c = document.createElement('div');
  c.className = 'confetti';
  c.setAttribute('aria-hidden', 'true');
  c.innerHTML = Array.from({ length: 72 }, (_, i) => `<i style="--x:${(Math.random() * 100).toFixed(1)}vw;--c:var(--r${(i % 6) + 1});--dx:${((Math.random() - 0.5) * 220).toFixed(0)}px;--r:${(Math.random() * 900 - 450).toFixed(0)}deg;--d:${(2.2 + Math.random() * 1.6).toFixed(2)}s;--dl:${(Math.random() * 0.5).toFixed(2)}s;--w:${(6 + Math.random() * 6).toFixed(1)}px"></i>`).join('');
  document.body.appendChild(c);
  setTimeout(() => c.remove(), 4800);
}

function toonTab(tab, o = {}) {
  if (!TABS.includes(tab) || !$('#tab-casus')) return;
  TABS.forEach(t => {
    const aan = t === tab;
    const knop = $('#tab-' + t);
    knop.setAttribute('aria-selected', String(aan));
    knop.tabIndex = aan ? 0 : -1;
    $('#panel-' + t).hidden = !aan;
  });
  $$('#pdock [data-dock]').forEach(b => b.setAttribute('aria-current', String(b.dataset.dock === tab)));
  if (tab === 'quiz' && !$('#quiz-shell').innerHTML.trim()) quizStartScherm();
  if (o.focus) $('#tab-' + tab).focus();
  if (o.push !== false) {
    const u = new URL(location.href);
    u.searchParams.set('tab', tab);
    if (tab !== 'taal') { u.searchParams.delete('q'); u.searchParams.delete('cat'); }
    // zonder #casus-… of #term-…, anders springt een herlaadbeurt terug naar het vorige doel
    try { history.replaceState(history.state, '', u.pathname + u.search); } catch (e) { /* file:// */ }
  }
  if (o.scroll) $('#panel-' + tab).scrollIntoView({ block: 'start', behavior: calm() ? 'auto' : 'smooth' });
}
// Korte status per instrument in de kiezer (aantal, voortgang, beste score)
function tabMeta() {
  const zet = (k, t) => { const el = $(`[data-meta="${k}"]`); if (el) el.textContent = t; };
  zet('casus', `${CASUS.length} situaties met handvatten`);
  zet('taal', `${TERMEN.length} begrippen · oefenmodus`);
  zet('vlag', `${VLAG_CRITERIA.length} criteria · ${VLAGGEN.length} vlaggen`);
  const n = Object.keys(scanAntw).length, hist = Opslag.lees('rg-scan-hist', []);
  zet('scan', n && n < SCAN_VRAGEN.length ? `${n}/${SCAN_VRAGEN.length} ingevuld · ga verder`
    : hist.length ? `Laatste resultaat: ${hist[hist.length - 1].pct}%` : `${SCAN_VRAGEN.length} stellingen, ${scanDomeinen().length} domeinen`);
  const best = Opslag.lees('rg-quiz-best', null);
  zet('quiz', best != null ? `Beste score: ${best}/${QUIZ_VRAGEN.length}` : `${QUIZ_VRAGEN.length} korte vragen`);
}
function initPraktijk() {
  if (!$('#tab-casus')) return;
  const lijst = $('#ptabs');
  lijst.addEventListener('click', e => { const k = e.target.closest('[role="tab"]'); if (k) toonTab(k.dataset.tab); });
  lijst.addEventListener('keydown', e => {
    const i = TABS.indexOf(e.target.dataset && e.target.dataset.tab);
    if (i < 0) return;
    let n = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = (i + 1) % TABS.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (i - 1 + TABS.length) % TABS.length;
    else if (e.key === 'Home') n = 0; else if (e.key === 'End') n = TABS.length - 1;
    if (n !== null) { e.preventDefault(); toonTab(TABS[n], { focus: true }); }
  });
  // Compacte wisselaar: verschijnt zodra de grote kiezer uit beeld geschoven is
  const dock = $('#pdock');
  dock.addEventListener('click', e => { const b = e.target.closest('[data-dock]'); if (b) toonTab(b.dataset.dock, { scroll: true }); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => {
      const aan = !en.isIntersecting && en.boundingClientRect.top < 0;
      dock.classList.toggle('is-on', aan);
      dock.inert = !aan;
    }, { rootMargin: '-90px 0px 0px 0px' }).observe(lijst);
  }
  initCasus();
  initTaal();
  renderVlag();
  renderScan();
  tabMeta();
  toonTab(TABS.includes(QP.get('tab')) ? QP.get('tab') : 'casus', { push: false });
}

// ── Casuïstiek: lijst + leesvenster ──
let casusSel = 0, casusThema = 'Alle';
const CASUS_ICO = ['eye', 'hand', 'alert'];
const casusZichtbaar = () => CASUS.map((_, i) => i).filter(i => casusThema === 'Alle' || CASUS[i].thema === casusThema);
function initCasus() {
  const idx = $('#casus-index'), filt = $('#casus-filter');
  if (!idx) return;
  const themas = ['Alle', ...new Set(CASUS.map(c => c.thema).filter(Boolean))];
  filt.innerHTML = themas.map(t => `<button type="button" class="chip" data-cthema="${esc(t)}" aria-pressed="${t === casusThema}">${t}<span class="chip-n">${t === 'Alle' ? CASUS.length : CASUS.filter(c => c.thema === t).length}</span></button>`).join('');
  idx.innerHTML = CASUS.map((c, i) => `
    <li data-i="${i}"><button type="button" class="casus-pick" id="casus-${i + 1}" data-casus="${i}" aria-controls="casus-view" aria-current="${i === casusSel}">
      <span class="casus-pick-n" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
      <span class="casus-pick-tag">${c.tag}</span>
      <span class="casus-pick-t">${c.titel}</span>
    </button></li>`).join('');
  filt.addEventListener('click', e => {
    const b = e.target.closest('[data-cthema]');
    if (!b) return;
    casusThema = b.dataset.cthema;
    $$('[data-cthema]', filt).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    const z = casusZichtbaar();
    $$('li', idx).forEach(li => { li.hidden = !z.includes(+li.dataset.i); });
    if (!z.includes(casusSel)) kiesCasus(z[0], { hash: false }); else renderCasusView(false);
  });
  idx.addEventListener('click', e => { const b = e.target.closest('[data-casus]'); if (b) kiesCasus(+b.dataset.casus, { scroll: true }); });
  idx.addEventListener('keydown', e => {
    const b = e.target.closest('[data-casus]');
    if (!b) return;
    const z = casusZichtbaar(), p = z.indexOf(+b.dataset.casus);
    let n = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = z[Math.min(z.length - 1, p + 1)];
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = z[Math.max(0, p - 1)];
    else if (e.key === 'Home') n = z[0]; else if (e.key === 'End') n = z[z.length - 1];
    if (n == null) return;
    e.preventDefault();
    kiesCasus(n);
    $(`[data-casus="${n}"]`, idx).focus();
  });
  $('#casus-view').addEventListener('click', e => {
    const t = e.target.closest('[data-cv]');
    if (!t) return;
    const a = t.dataset.cv;
    if (a === 'prev' || a === 'next') kiesCasus(+t.dataset.i, { scroll: true, focus: true });
    else if (a === 'link') kopieer(`${location.origin}/praktijk/?tab=casus#casus-${casusSel + 1}`, 'Link naar deze situatie gekopieerd');
    else if (a === 'print') printCasus();
  });
  renderCasusView(false);
}
function kiesCasus(i, o = {}) {
  if (i == null || !CASUS[i]) return;
  casusSel = i;
  $$('.casus-pick').forEach(b => b.setAttribute('aria-current', String(+b.dataset.casus === i)));
  renderCasusView(true);
  if (o.hash !== false) { try { history.replaceState(history.state, '', `${location.pathname}${location.search}#casus-${i + 1}`); } catch (e) { /* file:// */ } }
  const idx = $('#casus-index'), pick = $(`[data-casus="${i}"]`);
  if (idx && pick) {
    // Enkel binnen de lijst scrollen (niet de hele pagina)
    const r = pick.getBoundingClientRect(), ri = idx.getBoundingClientRect();
    if (idx.scrollWidth > idx.clientWidth + 2) idx.scrollTo({ left: idx.scrollLeft + r.left - ri.left - parseFloat(getComputedStyle(idx).paddingLeft || 0), behavior: calm() ? 'auto' : 'smooth' });
    else if (r.top < ri.top || r.bottom > ri.bottom) idx.scrollTo({ top: idx.scrollTop + r.top - ri.top - 40, behavior: calm() ? 'auto' : 'smooth' });
  }
  const v = $('#casus-view');
  if (o.scroll) { const rv = v.getBoundingClientRect(); if (rv.top < 140 || rv.top > innerHeight * 0.55) v.scrollIntoView({ block: 'start', behavior: calm() ? 'auto' : 'smooth' }); }
  if (o.focus) v.focus({ preventScroll: true });
}
function renderCasusView(anim) {
  const v = $('#casus-view');
  if (!v) return;
  const c = CASUS[casusSel], z = casusZichtbaar(), p = z.indexOf(casusSel);
  const prev = p > 0 ? z[p - 1] : null, next = p >= 0 && p < z.length - 1 ? z[p + 1] : null;
  const chips = c.chips && c.chips.length ? `<div class="cv-more"><span class="cv-more-k">Verder</span>${c.chips.map(ch => ch.url
    ? `<a class="casus-chip" href="${ch.url}" target="_blank" rel="noopener noreferrer">${ch.l}${ico('arrow-up-right')}${ext}</a>`
    : `<button class="casus-chip" type="button" data-go="${ch.go}">${ch.l}${ico('arrow-right')}</button>`).join('')}</div>` : '';
  const pagina = (k, i, label) => `<button class="cv-page ${k}" type="button" data-cv="${k}" data-i="${i}"${i == null ? ' disabled' : ''}>
      <small>${k === 'prev' ? ico('arrow-left') + label : label + ico('arrow-right')}</small><span>${i != null ? CASUS[i].titel : ''}</span></button>`;
  v.innerHTML = `
    <div class="cv-top">
      <span class="cv-count">Situatie ${String(casusSel + 1).padStart(2, '0')} <small>van ${CASUS.length}</small></span>
      <span class="tag tone-violet">${c.tag}</span>
      <span class="cv-tools">
        <button class="cv-tool" type="button" data-cv="link" title="Kopieer een link naar deze situatie" aria-label="Kopieer een link naar deze situatie">${ico('link')}</button>
        <button class="cv-tool" type="button" data-cv="print" title="Afdrukken als werkblad voor je team" aria-label="Afdrukken als werkblad voor je team">${ico('printer')}</button>
      </span>
    </div>
    <blockquote class="cv-scene"><span class="cv-scene-ic">${ico('bubble')}</span><span class="cv-scene-k">De situatie</span><p>${c.titel}</p></blockquote>
    <ol class="cv-steps">${c.blokken.map((b, k) => `
      <li class="cv-step" style="--k:${k}"><span class="cv-step-ic">${ico(CASUS_ICO[k] || 'spark')}</span>
        <div><h3><small>${k + 1}</small>${b.kop}</h3><p>${b.tekst}</p></div></li>`).join('')}
    </ol>
    ${chips}
    <div class="cv-werkblad">
      <h3>Bespreek in je team</h3>
      <p>Wat herkennen we hiervan in onze eigen werking?</p><div class="lijn"></div><div class="lijn"></div><div class="lijn"></div>
      <p>Wat spreken we af?</p><div class="lijn"></div><div class="lijn"></div><div class="lijn"></div>
      <p class="print-foot">Casus via De Regenbooggids (deregenbooggids.be)</p>
    </div>
    <nav class="cv-pager" aria-label="Andere situaties">${pagina('prev', prev, 'Vorige')}${pagina('next', next, 'Volgende')}</nav>`;
  if (!anim || calm()) $$('.cv-scene, .cv-step', v).forEach(el => { el.style.animation = 'none'; });
}
function printCasus() {
  const h = document.documentElement;
  h.classList.add('print-casus');
  const weg = () => { h.classList.remove('print-casus'); removeEventListener('afterprint', weg); };
  addEventListener('afterprint', weg);
  setTimeout(() => window.print(), 60);
}

// ── Taalgids: naslaan (per thema of A–Z) en oefenen met leerkaarten ──
let taalSort = 'thema';
const sorteerSleutel = t => norm(zonderQuotes(t.woord)).trim();
function taalRender(res) {
  const az = $('#az-bar');
  if (taalSort === 'az') {
    const gesorteerd = res.slice().sort((a, b) => sorteerSleutel(a).localeCompare(sorteerSleutel(b), 'nl'));
    const letters = new Set();
    let html = '', huidig = '';
    gesorteerd.forEach(t => {
      const l = sorteerSleutel(t).charAt(0).toUpperCase();
      if (l !== huidig) { huidig = l; letters.add(l); html += `<h3 class="az-h" id="az-${l}">${l}</h3>`; }
      html += termKaart(t);
    });
    if (az) {
      az.hidden = false;
      az.innerHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => (letters.has(l) ? `<a href="#az-${l}">${l}</a>` : `<span aria-hidden="true">${l}</span>`)).join('');
    }
    return html;
  }
  if (az) az.hidden = true;
  return TERM_CATS.filter(c => c !== 'Alle').map(cat => {
    const items = res.filter(t => t.cat === cat);
    if (!items.length) return '';
    return `<h3 class="term-group-h tone-${TERM_CAT_COLOR[cat] || 'teal'}"><span class="chip-dot" aria-hidden="true"></span><b>${cat}</b><small>${items.length}</small>${TERM_CAT_UITLEG[cat] ? `<span class="term-group-desc">${TERM_CAT_UITLEG[cat]}</span>` : ''}</h3>` + items.map(termKaart).join('');
  }).join('');
}
function initTaal() {
  const tg = $('#term-grid');
  if (!tg) return;
  Filters.termen = maakFilter({
    naam: 'term', items: TERMEN, lijst: tg, teller: $('#term-count'), input: $('#term-q'), reset: $('#term-reset'),
    woord: ['begrip', 'begrippen'], kaart: termKaart, render: taalRender, tekst: t => `${t.woord} ${t.def}`,
    groepen: [{ key: 'cat', label: 'Soort', el: $('#term-cat'), alle: 'Alle', waarden: TERM_CATS.filter(c => c !== 'Alle'), test: (t, v) => t.cat === v, tone: v => TERM_CAT_COLOR[v] || 'teal' }],
  });
  $$('[data-taalsort]').forEach(b => b.addEventListener('click', () => {
    taalSort = b.dataset.taalsort;
    $$('[data-taalsort]').forEach(x => x.setAttribute('aria-checked', String(x === b)));
    Filters.termen.update();
  }));
  $$('[data-taalmodus]').forEach(b => b.addEventListener('click', () => taalModus(b.dataset.taalmodus)));
  const oef = $('#oefen');
  oef.addEventListener('click', e => {
    if (e.target.closest('#oefen-card')) { Oefen.draai(); return; }
    const b = e.target.closest('[data-oefen]');
    if (!b) return;
    const a = b.dataset.oefen;
    if (a === 'ok' || a === 'nog') Oefen.antwoord(a === 'ok');
    else if (a === 'moeilijk') Oefen.start(Oefen.nog);
    else if (a === 'opnieuw') Oefen.start(Oefen.alle);
    else if (a === 'stop') taalModus('lijst');
  });
  document.addEventListener('keydown', e => {
    if (oef.hidden || $('#panel-taal').hidden || !$('#oefen-card') || document.querySelector('dialog[open]')) return;
    if (e.target.closest && e.target.closest('input, textarea, select')) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); Oefen.antwoord(true); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); Oefen.antwoord(false); }
    else if ((e.key === ' ' || e.key === 'Enter') && !(e.target.closest && e.target.closest('button, a'))) { e.preventDefault(); Oefen.draai(); }
  });
}
function taalModus(m) {
  $$('[data-taalmodus]').forEach(b => b.setAttribute('aria-checked', String(b.dataset.taalmodus === m)));
  const oef = $('#oefen'), lijst = $('#taal-lijst'), filters = $('#panel-taal .filters');
  if (m === 'oefen') {
    const set = Filters.termen ? Filters.termen.huidige() : [];
    Oefen.alle = set.length ? set : TERMEN.slice();
    lijst.hidden = true; filters.hidden = true; oef.hidden = false;
    Oefen.start(Oefen.alle, true);
  } else {
    lijst.hidden = false; filters.hidden = false; oef.hidden = true; oef.innerHTML = '';
  }
}
const Oefen = {
  alle: [], deck: [], i: 0, ok: [], nog: [], bezig: false,
  start(lijst, eerste) {
    this.deck = shuffle(lijst.slice());
    this.i = 0; this.ok = []; this.nog = []; this.bezig = false;
    this.toon(eerste);
  },
  toon(eerste) {
    const el = $('#oefen'), t = this.deck[this.i];
    if (!t) { this.einde(); return; }
    const tot = this.deck.length, tip = t.tip && t.tipType !== 'fun'
      ? `<span class="term-tip${t.tipType === 'warn' ? ' warn' : ''}">${ico(t.tipType === 'warn' ? 'alert' : 'bulb')}<span><strong>${t.tipType === 'warn' ? 'Let op: ' : 'Tip: '}</strong>${t.tip}</span></span>` : '';
    el.innerHTML = `
      <div class="oefen-top">
        <span class="oefen-count">Kaart ${this.i + 1} <small>/ ${tot}</small></span>
        <span class="oefen-bar" aria-hidden="true"><span style="--p:${(this.i / tot) * 100}%"></span></span>
        <span class="oefen-score" aria-label="${this.ok.length} gekend, ${this.nog.length} nog oefenen"><span class="ok">${ico('check')}${this.ok.length}</span><span class="no">${ico('refresh')}${this.nog.length}</span></span>
      </div>
      <div class="oefen-stage tone-${TERM_CAT_COLOR[t.cat] || 'teal'}">
        <div class="oefen-drag${calm() ? '' : ' is-in'}" id="oefen-drag">
          <span class="oefen-stamp ok" aria-hidden="true">Gekend</span><span class="oefen-stamp no" aria-hidden="true">Nog eens</span>
          <button class="oefen-card" type="button" id="oefen-card" aria-pressed="false" aria-label="${esc(zonderQuotes(t.woord))}: draai om voor de betekenis">
            <span class="oefen-face oefen-front"><span class="tag">${t.cat}</span><span class="oefen-word">${t.woord}</span><span class="oefen-hint">${ico('rotate')}Wat betekent dit? Draai om</span></span>
            <span class="oefen-face oefen-back"><span class="oefen-word">${t.woord}</span><span class="oefen-def">${t.def}</span>${tip}</span>
          </button>
        </div>
      </div>
      <div class="oefen-actions">
        <button class="btn btn-no" type="button" data-oefen="nog">${ico('refresh')}Nog oefenen</button>
        <button class="btn btn-yes" type="button" data-oefen="ok">${ico('check')}Ik wist het</button>
      </div>
      <p class="oefen-keys" aria-hidden="true"><span><kbd class="kbd">Spatie</kbd> omdraaien</span><span><kbd class="kbd">←</kbd> nog oefenen</span><span><kbd class="kbd">→</kbd> ik wist het</span><span>of veeg de kaart opzij</span></p>`;
    this.veeg();
    if (!eerste) $('#oefen-card').focus({ preventScroll: true });
  },
  draai() {
    const c = $('#oefen-card'), t = this.deck[this.i];
    if (!c || !t) return;
    const aan = c.classList.toggle('is-flipped');
    c.setAttribute('aria-pressed', String(aan));
    c.setAttribute('aria-label', aan ? `${zonderQuotes(t.woord)}: ${t.def}` : `${zonderQuotes(t.woord)}: draai om voor de betekenis`);
  },
  antwoord(gekend) {
    const t = this.deck[this.i];
    if (!t || this.bezig) return;
    (gekend ? this.ok : this.nog).push(t);
    const d = $('#oefen-drag');
    const verder = () => { this.bezig = false; this.i++; this.toon(); };
    if (calm() || !d) { verder(); return; }
    this.bezig = true;
    d.classList.remove('is-in');
    d.classList.add(gekend ? 'out-r' : 'out-l');
    setTimeout(verder, 380);
  },
  // Vegen met vinger of muis: rechts = gekend, links = nog oefenen
  veeg() {
    const d = $('#oefen-drag');
    if (!d || calm()) return;
    let x0 = null, dx = 0, sleept = false;
    const stempel = (k, o) => { const s = $(`.oefen-stamp.${k}`, d); if (s) s.style.opacity = o; };
    d.addEventListener('pointerdown', e => { if (e.button !== 0) return; x0 = e.clientX; dx = 0; sleept = false; });
    d.addEventListener('pointermove', e => {
      if (x0 === null) return;
      dx = e.clientX - x0;
      if (!sleept && Math.abs(dx) > 8) { sleept = true; d.classList.remove('is-in'); try { d.setPointerCapture(e.pointerId); } catch (err) { /* */ } }
      if (!sleept) return;
      d.style.transform = `translateX(${dx}px) rotate(${(dx / 18).toFixed(2)}deg)`;
      stempel('ok', Math.max(0, Math.min(1, dx / 90)));
      stempel('no', Math.max(0, Math.min(1, -dx / 90)));
    });
    const los = () => {
      if (x0 === null) return;
      x0 = null;
      if (!sleept) return;
      if (Math.abs(dx) > 100) { this.antwoord(dx > 0); return; }
      d.style.transition = 'transform .35s cubic-bezier(.16,1,.3,1)';
      d.style.transform = '';
      stempel('ok', 0); stempel('no', 0);
      setTimeout(() => { d.style.transition = ''; }, 360);
    };
    d.addEventListener('pointerup', los);
    d.addEventListener('pointercancel', los);
    d.addEventListener('click', e => { if (sleept) { e.stopPropagation(); e.preventDefault(); sleept = false; } }, true);
  },
  einde() {
    const el = $('#oefen'), tot = this.deck.length, ok = this.ok.length, pct = tot ? Math.round((ok / tot) * 100) : 0;
    const kop = pct >= 80 ? 'Sterk, je kent je woorden!' : pct >= 50 ? 'Mooi bezig.' : 'Een goed begin.';
    el.innerHTML = `
      <div class="oefen-end">
        <div class="oefen-ring"><svg viewBox="0 0 120 120" aria-hidden="true"><circle class="track" cx="60" cy="60" r="52"/><circle class="arcv" cx="60" cy="60" r="52" pathLength="100"/></svg><b>${ok}<small>van ${tot}</small></b></div>
        <h3 class="h3">${kop}</h3>
        <p>Je kende ${ok} van de ${tot} begrippen. ${this.nog.length === 1 ? 'Oefen dat ene begrip nog eens, tot het vanzelf gaat.' : this.nog.length ? `Oefen de ${this.nog.length} moeilijke nog eens, tot ze vanzelf gaan.` : 'Alles gekend: knap!'}</p>
        <div class="cta-row">
          ${this.nog.length ? `<button class="btn btn-primary" type="button" data-oefen="moeilijk">${ico('refresh')}${this.nog.length === 1 ? 'Oefen dat begrip opnieuw' : `Oefen de ${this.nog.length} moeilijke`}</button>` : ''}
          <button class="btn ${this.nog.length ? 'btn-ghost' : 'btn-primary'}" type="button" data-oefen="opnieuw">${ico('shuffle')}Opnieuw met alle kaarten</button>
          <button class="btn btn-ghost" type="button" data-oefen="stop">${ico('grid')}Terug naar de lijst</button>
        </div>
      </div>`;
    requestAnimationFrame(() => requestAnimationFrame(() => { const a = $('.oefen-ring .arcv', el); if (a) a.style.strokeDashoffset = 100 - pct; }));
    const knop = $('[data-oefen]', el);
    if (knop) knop.focus({ preventScroll: true });
    if (pct === 100 && tot >= 5) confetti();
  },
};

// ── Vlaggensysteem in het kort ──
let vlagSel = null;
const vlagSVG = v => `<svg class="vlag-svg" viewBox="0 0 70 58" aria-hidden="true"><line class="vlag-pole" x1="8" y1="4" x2="8" y2="55"/>${[0, 1, 2, 3, 4, 5].map(s => `<rect class="vlag-strip" x="${10 + s * 9}" y="7" width="9.4" height="28"${s === 5 ? ' rx="2"' : ''} style="--s:${s};fill:${v.kleur}"/>`).join('')}</svg>`;
const VLAG_START = `${ico('hand')}<span>Kies hierboven een vlag: dan lichten de stappen van de reactiewijzer op die erbij horen.</span>`;
function renderVlag() {
  const el = $('#vlag-app');
  if (!el) return;
  el.classList.add('vlag-app');
  const naamVan = k => VLAGGEN.find(v => v.key === k);
  const stap = s => `
    <div class="vstep" data-vlaggen="${s.vlaggen.join(' ')}">
      <div class="vstep-top"><span class="vstep-ic">${ico(s.icon)}</span><span class="vstep-flags" aria-hidden="true">${s.vlaggen.map(k => `<i style="--fc:${naamVan(k).kleur}"></i>`).join('')}</span></div>
      <b>${s.naam}</b>
      <span class="sr-only">Hoort bij: ${zinLijst(s.vlaggen.map(k => naamVan(k).naam.toLowerCase()))}.</span>
      <p>${s.tekst}</p>${s.lijst ? `<ul>${s.lijst.map(x => `<li>${x}</li>`).join('')}</ul>` : ''}
    </div>`;
  el.innerHTML = `
    <div class="vlaggen" role="group" aria-label="Kies een vlag">${VLAGGEN.map(v => `
      <button class="vlag" type="button" data-vlag="${v.key}" aria-pressed="false" style="--fc:${v.kleur}">${vlagSVG(v)}<b>${v.naam}</b><small>${v.wat}</small></button>`).join('')}
    </div>
    <div class="vlag-reactie" id="vlag-reactie" aria-live="polite">${VLAG_START}</div>
    <h3 class="vflow-h">Zo reageer je <small>volgens de reactiewijzer van Sensoa</small></h3>
    <div class="vflow">${VLAG_STAPPEN.filter(s => !s.verder).map(stap).join('')}</div>
    <div class="vflow-verder"><span class="vflow-k">Hoe ga je verder?</span>${VLAG_STAPPEN.filter(s => s.verder).map(stap).join('')}</div>
    <h3 class="vflow-h">De zes criteria <small>samen bepalen ze welke vlag past</small></h3>
    <div class="vcrit">${VLAG_CRITERIA.map(c => `<div class="vc"><span class="vc-ic">${ico(c.icon)}</span><b>${c.naam}</b><p>${c.vraag}</p></div>`).join('')}</div>
    <aside class="vlag-key">${ico('rainbow')}<div><b>Weeg het gedrag, niet de persoon.</b><p>Geaardheid of genderidentiteit is geen criterium. Een koppel van hetzelfde geslacht of een transgender cliënt beoordeel je met dezelfde zes criteria als ieder ander.</p></div></aside>
    <p class="vlag-src">Korte samenvatting op basis van Sensoa. Het volledige Vlaggensysteem, met situatieschetsen en vorming, vind je bij Sensoa:
      ${VLAG_BRON.map(b => `<a href="${b.url}" target="_blank" rel="noopener noreferrer">${b.l}${ico('arrow-up-right')}${ext}</a>`).join('')}</p>`;
  el.addEventListener('click', e => { const b = e.target.closest('[data-vlag]'); if (b) kiesVlag(b.dataset.vlag === vlagSel ? null : b.dataset.vlag); });
}
function kiesVlag(key) {
  vlagSel = key;
  const el = $('#vlag-app'), v = VLAGGEN.find(x => x.key === key), r = $('#vlag-reactie');
  $$('[data-vlag]', el).forEach(b => b.setAttribute('aria-pressed', String(b.dataset.vlag === key)));
  el.classList.toggle('has-sel', !!v);
  el.dataset.sel = key || '';
  if (v) el.style.setProperty('--fc', v.kleur); else el.style.removeProperty('--fc');
  $$('.vstep', el).forEach(s => s.classList.toggle('is-on', !!v && s.dataset.vlaggen.split(' ').includes(key)));
  r.classList.remove('is-sel');
  if (!v) { r.innerHTML = VLAG_START; return; }
  void r.offsetWidth;
  r.classList.add('is-sel');
  const stappen = VLAG_STAPPEN.filter(s => s.vlaggen.includes(key)).map(s => s.naam.toLowerCase());
  r.innerHTML = `${ico('flag')}<span><b>${v.naam}: ${v.wat.toLowerCase()}.</b> Bij deze vlag horen deze stappen: ${zinLijst(stappen)}.</span>`;
}

// ── Team-zelfscan ──
const SCAN_ICO = { 'Beleid': 'doc', 'Taal': 'bubble', 'Zichtbaarheid': 'eye', 'Team': 'users', 'Cliënt': 'user', 'Veiligheid': 'shield', 'Netwerk': 'link', 'Privacy': 'lock' };
const SCAN_LABELS = ['Niet', 'Deels', 'Goed'];
let scanAntw = {};
const scanDomeinNamen = () => [...new Set(SCAN_VRAGEN.map(q => q.domein))];
function renderScan() {
  const el = $('#scan-list');
  if (!el) return;
  const bewaard = Opslag.lees('rg-scan', {});
  scanAntw = {};
  Object.entries(bewaard || {}).forEach(([i, v]) => { if (SCAN_VRAGEN[+i] && [0, 1, 2].includes(v)) scanAntw[+i] = v; });
  const doms = scanDomeinNamen();
  el.innerHTML = doms.map(d => {
    const qs = SCAN_VRAGEN.map((q, i) => ({ q, i })).filter(x => x.q.domein === d);
    return `<section class="scan-section" id="scan-${slug(d)}" aria-labelledby="scan-h-${slug(d)}">
      <h3 class="scan-section-h" id="scan-h-${slug(d)}"><span class="scan-dom-ic">${ico(SCAN_ICO[d] || 'spark')}</span>${d}<small data-domn="${esc(d)}"></small></h3>
      ${qs.map(({ q, i }) => `
        <div class="scan-q" id="sq-${i}">
          <span class="scan-num" aria-hidden="true">${i + 1}</span>
          <p class="scan-text" id="sq-t-${i}">${q.t}</p>
          <div class="scan-opts" role="radiogroup" aria-labelledby="sq-t-${i}">
            ${SCAN_LABELS.map((lab, v) => `<button type="button" class="scan-opt" role="radio" aria-checked="false" data-q="${i}" data-v="${v}" tabindex="${v === 0 ? 0 : -1}">${lab}</button>`).join('')}
          </div>
        </div>`).join('')}
    </section>`;
  }).join('');
  $('#scan-domains').innerHTML = doms.map(d => `<a class="scan-dom" href="#scan-${slug(d)}" data-dom="${esc(d)}"><span class="scan-dom-ic">${ico(SCAN_ICO[d] || 'spark')}</span>${d}<small></small></a>`).join('');
  el.addEventListener('click', e => { const b = e.target.closest('.scan-opt'); if (b) scanKies(+b.dataset.q, +b.dataset.v); });
  el.addEventListener('keydown', e => {
    const b = e.target.closest('.scan-opt');
    if (!b) return;
    const d = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? 1 : (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const v = (+b.dataset.v + d + 3) % 3;
    scanKies(+b.dataset.q, v);
    $(`.scan-opt[data-q="${b.dataset.q}"][data-v="${v}"]`).focus();
  });
  Object.entries(scanAntw).forEach(([i, v]) => zetScanUI(+i, v));
  scanVoortgang();
}
function zetScanUI(i, v) {
  const rij = $('#sq-' + i);
  if (!rij) return;
  rij.classList.toggle('is-answered', v != null);
  rij.classList.remove('is-missing');
  $$('.scan-opt', rij).forEach(b => { const aan = +b.dataset.v === v; b.setAttribute('aria-checked', String(aan)); b.tabIndex = (aan || (v == null && +b.dataset.v === 0)) ? 0 : -1; });
}
function scanKies(i, v) {
  scanAntw[i] = v;
  zetScanUI(i, v);
  Opslag.zet('rg-scan', scanAntw);
  scanVoortgang();
}
function scanVoortgang() {
  const n = Object.keys(scanAntw).length, tot = SCAN_VRAGEN.length;
  const txt = $('#scan-progress-txt'), bar = $('#scan-bar'), hint = $('#scan-hint');
  if (txt) txt.textContent = `${n} van ${tot} beantwoord`;
  if (bar) bar.style.setProperty('--p', `${(n / tot) * 100}%`);
  if (hint) { hint.classList.remove('is-warn'); hint.textContent = n === tot ? 'Klaar om te berekenen' : n ? 'Je antwoorden worden bewaard op dit toestel.' : ''; }
  scanDomeinNamen().forEach(d => {
    const idx = SCAN_VRAGEN.map((q, i) => (q.domein === d ? i : -1)).filter(i => i >= 0);
    const klaar = idx.filter(i => i in scanAntw).length;
    const chip = $(`.scan-dom[data-dom="${CSS.escape(d)}"]`);
    if (chip) { chip.classList.toggle('is-done', klaar === idx.length); $('small', chip).textContent = `${klaar}/${idx.length}`; const ic = $('.scan-dom-ic', chip); ic.innerHTML = ico(klaar === idx.length ? 'check' : (SCAN_ICO[d] || 'spark')); }
    const kop = $(`[data-domn="${CSS.escape(d)}"]`);
    if (kop) kop.textContent = `${klaar}/${idx.length} beantwoord`;
  });
  if ($('#tab-scan')) tabMeta();
}
function scanDomeinen() {
  const max = {}, haal = {}, volg = [];
  SCAN_VRAGEN.forEach((q, i) => {
    if (!(q.domein in max)) { max[q.domein] = 0; haal[q.domein] = 0; volg.push(q.domein); }
    max[q.domein] += 2; haal[q.domein] += (scanAntw[i] || 0);
  });
  return volg.map(d => ({ d, haal: haal[d], max: max[d], pct: Math.round((haal[d] / max[d]) * 100) }));
}
function scanBand(pct) {
  if (pct <= 40) return { band: 'start', label: 'Aan de start', desc: 'Er is een mooie basis om op te bouwen. Door inclusie expliciet te maken — in visie, taal en vorming — zet je grote stappen. Begin klein en concreet.' };
  if (pct <= 72) return { band: 'mid', label: 'Op weg', desc: 'Er gebeurt al heel wat, maar de aanpak is nog niet overal verankerd. Focus op de punten die nog "deels" scoorden om van goodwill naar structureel beleid te gaan.' };
  return { band: 'strong', label: 'Stevig verankerd', desc: 'Inclusie zit stevig in jullie werking. Mooi. Blijf het levend houden via vorming, evaluatie en aandacht voor nieuwe cliënten en medewerkers.' };
}
const scanKleur = p => (p < 50 ? 'var(--rose)' : p < 75 ? 'var(--amber)' : 'var(--teal)');
// Radardiagram: één as per domein, met (gestippeld) het vorige resultaat
function radarSVG(dom, vorige) {
  const N = dom.length, cx = 205, cy = 165, R = 100;
  const pt = (k, r) => { const a = -Math.PI / 2 + (k * 2 * Math.PI) / N; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
  const poly = waarden => waarden.map((v, k) => pt(k, (R * v) / 100).map(n => n.toFixed(1)).join(',')).join(' ');
  let s = `<svg class="radar" viewBox="0 0 410 330" role="img" aria-label="Radardiagram van de score per domein: ${dom.map(x => `${x.d} ${x.pct} procent`).join(', ')}">`;
  [25, 50, 75, 100].forEach(r => { s += `<polygon class="radar-ring${r === 50 ? ' is-50' : ''}" points="${poly(dom.map(() => r))}"/>`; });
  dom.forEach((x, k) => { const [x2, y2] = pt(k, R); s += `<line class="radar-axis" x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"/>`; });
  if (vorige) s += `<polygon class="radar-prev" points="${poly(dom.map(x => (vorige.dom && vorige.dom[x.d] != null ? vorige.dom[x.d] : 0)))}"/>`;
  s += `<polygon class="radar-area" points="${poly(dom.map(x => Math.max(x.pct, 3)))}"/>`;
  dom.forEach((x, k) => { const [px, py] = pt(k, (R * Math.max(x.pct, 3)) / 100); s += `<circle class="radar-pt" cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="5" style="fill:${scanKleur(x.pct)}"/>`; });
  dom.forEach((x, k) => {
    const a = -Math.PI / 2 + (k * 2 * Math.PI) / N, [lx, ly] = pt(k, R + 16);
    const anchor = Math.abs(Math.cos(a)) < 0.2 ? 'middle' : Math.cos(a) > 0 ? 'start' : 'end';
    const dy = Math.sin(a) < -0.5 ? -4 : Math.sin(a) > 0.5 ? 14 : 4;
    s += `<text class="radar-label" x="${lx.toFixed(1)}" y="${(ly + dy).toFixed(1)}" text-anchor="${anchor}">${x.d}<tspan class="radar-pct" dx="5">${x.pct}%</tspan></text>`;
  });
  return s + '</svg>';
}
// Links naar bronnen elders op de site die passen bij een domein
function bronChips(d) {
  const lijst = (SCAN_BRONNEN[d] || []).map(b => {
    if (b.tool) { const t = TOOLS.find(x => x.title === b.tool); return t && `<a class="bron-chip" href="/tools/#t-${slug(t.title)}">${ico('tool')}${t.title}</a>`; }
    if (b.org) { const o = ORGS.find(x => x.naam === b.org); return o && `<a class="bron-chip" href="/organisaties/#o-${slug(o.naam)}">${ico('users')}${o.naam}</a>`; }
    if (b.beleid) { const x = BELEID.find(y => y.titel === b.beleid); return x && `<a class="bron-chip" href="/beleid/#b-${slug(x.titel)}">${ico('scale')}${x.titel}</a>`; }
    if (b.tab) return `<button class="bron-chip" type="button" data-go="${b.tab}">${ico('arrow-right')}${b.l}</button>`;
    if (b.casus) { const c = CASUS[b.casus - 1]; return c && `<button class="bron-chip" type="button" data-go="casus-${b.casus}">${ico('bubble')}Casus ${b.casus}: ${kort(c.titel, 48)}</button>`; }
    return '';
  }).filter(Boolean);
  return lijst.length ? `<div class="bron-chips">${lijst.join('')}</div>` : '';
}
function berekenScan() {
  const tot = SCAN_VRAGEN.length, n = Object.keys(scanAntw).length;
  const hint = $('#scan-hint');
  if (n < tot) {
    const mis = SCAN_VRAGEN.findIndex((_, i) => !(i in scanAntw));
    hint.textContent = `Beantwoord eerst alle stellingen (${n}/${tot}).`;
    hint.classList.add('is-warn');
    const rij = $('#sq-' + mis);
    rij.classList.add('is-missing');
    rij.scrollIntoView({ block: 'center', behavior: calm() ? 'auto' : 'smooth' });
    $('.scan-opt', rij).focus({ preventScroll: true });
    return;
  }
  const pct = Math.round((Object.values(scanAntw).reduce((a, b) => a + b, 0) / (tot * 2)) * 100);
  const { band, label, desc } = scanBand(pct);
  const dom = scanDomeinen();
  // Vergelijken met het vorige resultaat op dit toestel
  const vandaag = new Date().toISOString().slice(0, 10);
  const domMap = Object.fromEntries(dom.map(x => [x.d, x.pct]));
  const hist = Opslag.lees('rg-scan-hist', []);
  const zelfde = h => h && h.d === vandaag && h.pct === pct && JSON.stringify(h.dom) === JSON.stringify(domMap);
  let vorige = hist.length ? hist[hist.length - 1] : null;
  if (zelfde(vorige)) vorige = hist.length > 1 ? hist[hist.length - 2] : null;
  if (!zelfde(hist[hist.length - 1])) {
    if (hist.length && hist[hist.length - 1].d === vandaag) hist.pop();
    hist.push({ d: vandaag, pct, dom: domMap });
    Opslag.zet('rg-scan-hist', hist.slice(-8));
  }
  const alert = dom.filter(x => x.pct < 50).sort((a, b) => a.pct - b.pct);
  const tekort = dom.map(x => ({ d: x.d, gap: x.max - x.haal })).filter(x => x.gap > 0).sort((a, b) => b.gap - a.gap).slice(0, 3);
  const advies = tekort.length ? tekort.filter(x => SCAN_DOMEIN_ADVIES[x.d]).map(x => ({ dom: x.d, t: SCAN_DOMEIN_ADVIES[x.d].t, tekst: SCAN_DOMEIN_ADVIES[x.d].d }))
    : [{ dom: null, t: 'Blijf het levend houden', tekst: 'Jullie scoren sterk op alle domeinen. Hou de aandacht vast bij nieuwe medewerkers, nieuwe cliënten en evoluerende noden.' }];
  const datum = new Date().toLocaleDateString('nl-BE', { day: 'numeric', month: 'long', year: 'numeric' });
  let delta = '';
  if (vorige) {
    const verschil = pct - vorige.pct;
    delta = `<span class="score-delta">${ico(verschil >= 0 ? 'arrow-up-right' : 'arrow-down')}${verschil === 0 ? 'Gelijk aan' : `${verschil > 0 ? '+' : '−'}${Math.abs(verschil)} procentpunt t.o.v.`} je vorige scan (${datumNL(vorige.d)})</span>`;
  }
  $('#scan-result').innerHTML = `
    <div class="result" id="scan-res" tabindex="-1">
      <div class="score-card band-${band}">
        <div class="score-ring" aria-hidden="true">
          <svg viewBox="0 0 120 120"><circle class="track" cx="60" cy="60" r="52"/><circle class="arcv" cx="60" cy="60" r="52" pathLength="100"/></svg>
          <div class="score-val"><span data-pct>0%</span></div>
        </div>
        <div>
          <p class="score-kicker">Resultaat team-zelfscan · ${pct}%</p>
          <h3 class="score-label">${label}</h3>
          <p class="score-desc">${desc}</p>
          ${delta}
        </div>
      </div>
      <div class="result-grid">
        <div class="result-block">
          <h3 class="result-h">${ico('compass')}Jullie profiel</h3>
          ${radarSVG(dom, vorige)}
          <p class="radar-legend"><span><i></i>Nu</span>${vorige ? `<span><i class="prev"></i>Vorige scan (${datumNL(vorige.d)})</span>` : ''}</p>
        </div>
        <div class="result-block">
          <h3 class="result-h">${ico('layers')}Score per domein</h3>
          <div class="dbars">${dom.map((x, k) => `
            <div class="dbar${x.pct < 50 ? ' is-low' : ''}" style="--c:${scanKleur(x.pct)};--dl:${k * 70}ms">
              <span class="dbar-name">${x.d}</span>
              <span class="dbar-track" role="img" aria-label="${x.d}: ${x.pct} procent"><span class="dbar-fill" data-w="${x.pct}"></span></span>
              <span class="dbar-pct">${x.pct}%</span>
            </div>`).join('')}</div>
          ${alert.length ? `<h3 class="result-h" style="margin-top:22px">${ico('alert')}Hier zou ik alert voor zijn</h3>
            <div class="alert-chips">${alert.map(x => `<span class="alert-chip">${x.d} <small>${x.pct}%</small></span>`).join('')}</div>` : ''}
        </div>
      </div>
      <div class="result-block">
        <h3 class="result-h">${ico('sparkles')}Waar liggen kansen?</h3>
        <div class="advice">${advies.map(a => `
          <div class="advice-item"><span class="advice-ic">${ico('arrow-right')}</span>
            <div><p><strong>${a.t}.</strong> ${a.tekst}</p>${a.dom ? bronChips(a.dom) : ''}</div></div>`).join('')}</div>
      </div>
      <div class="result-actions">
        <button class="btn btn-primary" type="button" data-action="scan-download">${ico('download')}Download resultaat (.txt)</button>
        <button class="btn btn-ghost" type="button" data-action="scan-print">${ico('printer')}Afdrukken of PDF</button>
        <button class="btn btn-ghost" type="button" data-go="taal">${ico('book')}Naar de taalgids</button>
        <button class="btn btn-ghost" type="button" data-action="scan-reset">${ico('refresh')}Nieuwe scan</button>
      </div>
      <p class="print-only">Team-zelfscan via De Regenbooggids (deregenbooggids.be) — afgedrukt op ${datum}. Dit is een reflectie-instrument, geen audit.</p>
    </div>`;
  hint.textContent = '';
  $('#panel-scan').classList.add('has-result');
  const res = $('#scan-res');
  res.scrollIntoView({ block: 'start', behavior: calm() ? 'auto' : 'smooth' });
  res.focus({ preventScroll: true });
  animeerScore(res, pct, p => `${p}%`);
  requestAnimationFrame(() => requestAnimationFrame(() => $$('.dbar-fill', res).forEach(f => { f.style.width = f.dataset.w + '%'; })));
  tabMeta();
}
// Ring vullen en het getal laten optellen
function animeerScore(root, pct, fmt) {
  const arc = $('.arcv', root), val = $('[data-pct]', root), kaart = $('.score-card', root);
  if (calm()) { arc.style.strokeDashoffset = 100 - pct; val.textContent = fmt(pct, 1); return; }
  kaart.classList.add('is-pop');
  requestAnimationFrame(() => requestAnimationFrame(() => { arc.style.strokeDashoffset = 100 - pct; }));
  const t0 = performance.now(), duur = 1400;
  const stap = t => {
    const p = Math.min(1, (t - t0) / duur), e = 1 - Math.pow(1 - p, 3);
    val.textContent = fmt(Math.round(e * pct), p);
    if (p < 1) requestAnimationFrame(stap);
  };
  requestAnimationFrame(stap);
}
function resetScan() {
  scanAntw = {};
  Opslag.wis('rg-scan');
  $$('.scan-q').forEach(r => zetScanUI(+r.id.slice(3), null));
  $('#scan-result').innerHTML = '';
  $('#panel-scan').classList.remove('has-result');
  scanVoortgang();
  $('#panel-scan').scrollIntoView({ block: 'start', behavior: calm() ? 'auto' : 'smooth' });
  toast('Antwoorden gewist', 'refresh');
}
function scanRapport() {
  const tot = SCAN_VRAGEN.length;
  const pct = Math.round((Object.values(scanAntw).reduce((a, b) => a + b, 0) / (tot * 2)) * 100);
  const { label } = scanBand(pct);
  const datum = new Date().toLocaleDateString('nl-BE', { day: 'numeric', month: 'long', year: 'numeric' });
  const dom = scanDomeinen();
  const lijn = '═'.repeat(58), streep = '-'.repeat(58);
  let r = `${lijn}\nTEAM-ZELFSCAN · DE REGENBOOGGIDS\nLGBTQ+-inclusie in de begeleiding\n${lijn}\n\n`;
  r += `Datum: ${datum}\nTotaalscore: ${pct}% — ${label}\n\nSCORE PER DOMEIN\n${streep}\n`;
  dom.forEach(x => { r += `  ${(x.d + ':').padEnd(16)}${String(x.pct).padStart(3)}%   (${x.haal}/${x.max})\n`; });
  r += `\nANTWOORDEN PER VRAAG\n${streep}\n`;
  SCAN_VRAGEN.forEach((q, i) => {
    const a = (i in scanAntw) ? SCAN_LABELS[scanAntw[i]] : '—';
    r += `  ${String(i + 1).padStart(2)}. [${a.padEnd(5)}] ${q.domein}\n      ${q.t}\n\n`;
  });
  const tekort = dom.map(x => ({ d: x.d, gap: x.max - x.haal })).filter(x => x.gap > 0).sort((a, b) => b.gap - a.gap).slice(0, 3);
  if (tekort.length) {
    r += `WAAR LIGGEN KANSEN?\n${streep}\n`;
    tekort.forEach(x => { const a = SCAN_DOMEIN_ADVIES[x.d]; if (a) r += `  • ${a.t}\n    ${a.d}\n\n`; });
  }
  r += `${lijn}\nTeam-zelfscan via De Regenbooggids (deregenbooggids.be).\nDit is een reflectie-instrument, geen audit.\n${lijn}\n`;
  return r;
}
function downloadScan() {
  const blob = new Blob([scanRapport()], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `team-zelfscan-regenbooggids-${new Date().toISOString().slice(0, 10)}.txt`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast('Resultaat gedownload als tekstbestand', 'download');
}

// ── Test jezelf ──
let quiz = { i: 0, antw: [], gekozen: null, klaar: false };
function quizStartScherm() {
  const sh = $('#quiz-shell');
  if (!sh) return;
  const best = Opslag.lees('rg-quiz-best', null);
  sh.innerHTML = `
    <div class="quiz-card quiz-start">
      <div class="quiz-badges">
        <span class="quiz-badge">${ico('clock')}${QUIZ_VRAGEN.length} korte vragen · ± 4 min</span>
        ${best != null ? `<span class="quiz-badge best">${ico('trophy')}Jouw beste score: ${best}/${QUIZ_VRAGEN.length}</span>` : ''}
      </div>
      <h2 class="h3">Hoe inclusief is <em>jouw reflex?</em></h2>
      <p>Een korte zelftest over taal, kennis en aannames rond seksuele en genderdiversiteit. Niet om te scoren, wel om je eigen reflexen eens tegen het licht te houden. Na elke vraag krijg je meteen een korte duiding.</p>
      <button class="btn btn-primary btn-lg" type="button" data-action="quiz-start">${ico('play')}Start de test</button>
    </div>`;
}
function quizVraag(focusOp) {
  const sh = $('#quiz-shell'), q = QUIZ_VRAGEN[quiz.i], tot = QUIZ_VRAGEN.length;
  const opts = q.opties.map((o, k) => {
    let cls = 'quiz-opt';
    if (quiz.klaar) cls += k === q.juist ? ' is-right' : k === quiz.gekozen ? ' is-wrong' : ' is-dim';
    const letter = quiz.klaar && k === q.juist ? ico('check') : quiz.klaar && k === quiz.gekozen ? ico('x') : String.fromCharCode(65 + k);
    return `<button class="${cls}" type="button" data-opt="${k}" aria-pressed="${quiz.gekozen === k}"${quiz.klaar ? ' disabled' : ''}><span class="quiz-letter" aria-hidden="true">${letter}</span><span>${o}</span></button>`;
  }).join('');
  const goed = quiz.gekozen === q.juist;
  const stip = k => (k < quiz.i || (k === quiz.i && quiz.klaar) ? (quiz.antw[k] === QUIZ_VRAGEN[k].juist ? 'ok' : 'no') : k === quiz.i ? 'is-now' : '');
  sh.innerHTML = `
    <div class="quiz-card" id="quiz-card">
      <div class="quiz-top">
        <span class="quiz-count">Vraag ${quiz.i + 1} van ${tot}</span>
        <span class="quiz-dots" aria-hidden="true">${QUIZ_VRAGEN.map((_, k) => `<i class="${stip(k)}"></i>`).join('')}</span>
      </div>
      <h3 class="quiz-q" id="quiz-q" tabindex="-1">${q.vraag}</h3>
      <div class="quiz-opts" role="group" aria-labelledby="quiz-q">${opts}</div>
      ${quiz.klaar ? `
        <div class="quiz-feedback ${goed ? 'ok' : 'no'}" role="status">
          <p class="quiz-feedback-k">${ico(goed ? 'check-circle' : 'info')}${goed ? 'Goed gezien' : 'Net niet'}</p>
          <p>${q.uitleg}</p>
        </div>
        <div class="quiz-foot"><span class="quiz-keys" aria-hidden="true"><kbd class="kbd">Enter</kbd> verder</span><button class="btn btn-primary" type="button" data-action="quiz-next" id="quiz-next">${quiz.i + 1 < tot ? 'Volgende vraag' : 'Bekijk je resultaat'}${ico('arrow-right')}</button></div>`
      : `<div class="quiz-foot"><span class="quiz-keys" aria-hidden="true"><kbd class="kbd">A</kbd><kbd class="kbd">B</kbd><kbd class="kbd">C</kbd> kiezen · <kbd class="kbd">Enter</kbd> bevestigen</span><button class="btn btn-primary" type="button" data-action="quiz-confirm" ${quiz.gekozen === null ? 'disabled' : ''}>Bevestig antwoord</button></div>`}
    </div>`;
  if (focusOp === 'q') $('#quiz-q').focus({ preventScroll: true });
  else if (focusOp === 'next') $('#quiz-next').focus({ preventScroll: true });
  else if (typeof focusOp === 'number') { const b = $(`.quiz-opt[data-opt="${focusOp}"]`); if (b) b.focus({ preventScroll: true }); }
}
function quizResultaat() {
  const sh = $('#quiz-shell'), tot = QUIZ_VRAGEN.length;
  const goed = quiz.antw.reduce((s, a, i) => s + (a === QUIZ_VRAGEN[i].juist ? 1 : 0), 0);
  const pct = Math.round((goed / tot) * 100);
  const vorigeBest = Opslag.lees('rg-quiz-best', null);
  const record = vorigeBest == null || goed > vorigeBest;
  if (record) Opslag.zet('rg-quiz-best', goed);
  let band, titel, tekst;
  if (pct >= 80) { band = 'strong'; titel = 'Sterke reflexen'; tekst = "Je hebt een fijn aanvoelen voor inclusieve taal en houding. Mooi. Blijf het levend houden en help collega's mee op weg, want voorbeeldgedrag werkt aanstekelijk."; }
  else if (pct >= 50) { band = 'mid'; titel = 'Goed op weg'; tekst = 'De basis zit goed, en op een paar punten valt nog winst te halen. Neem de duiding bij de vragen die je miste nog eens door, en verken de taalgids voor de fijnere nuances.'; }
  else { band = 'start'; titel = 'Ruimte om te groeien'; tekst = 'Geen man overboord: bewustwording is de eerste stap, en die zet je nu. De taalgids en casuïstiek geven je concrete handvatten om je reflexen aan te scherpen.'; }
  sh.innerHTML = `
    <div class="result" id="quiz-res" tabindex="-1" style="margin-top:0">
      <div class="score-card band-${band}">
        <div class="score-ring" aria-hidden="true">
          <svg viewBox="0 0 120 120"><circle class="track" cx="60" cy="60" r="52"/><circle class="arcv" cx="60" cy="60" r="52" pathLength="100"/></svg>
          <div class="score-val"><span data-pct>0</span><small>van ${tot}</small></div>
        </div>
        <div>
          <p class="score-kicker">Jouw resultaat · ${goed} van ${tot} juist</p>
          <h3 class="score-label">${titel}</h3>
          <p class="score-desc">${tekst}</p>
          ${record && vorigeBest != null ? `<span class="score-delta">${ico('trophy')}Nieuw persoonlijk record (vorige beste: ${vorigeBest}/${tot})</span>` : vorigeBest != null ? `<span class="score-delta">${ico('trophy')}Jouw beste score: ${vorigeBest}/${tot}</span>` : ''}
        </div>
      </div>
      <div class="result-block">
        <h3 class="result-h">${ico('check-circle')}Jouw antwoorden</h3>
        <p style="margin:-6px 0 14px;color:var(--muted);font-size:.9375rem">Tik op een nummer voor de duiding.</p>
        <div class="recap">${QUIZ_VRAGEN.map((q, i) => { const ok = quiz.antw[i] === q.juist; return `<button type="button" class="${ok ? 'ok' : 'no'}" data-recap="${i}" aria-pressed="false" aria-label="Vraag ${i + 1}: ${ok ? 'juist' : 'fout'}">${i + 1}</button>`; }).join('')}</div>
        <div class="recap-detail" id="recap-detail" aria-live="polite"></div>
      </div>
      <div class="note-card" style="margin-top:18px">${ico('bulb')}<p>Deze test toetst je eigen reflexen, niet je team. Wil je samen aan de slag? Doe dan de <a href="?tab=scan" data-go="scan">team-zelfscan</a>.</p></div>
      <div class="result-actions">
        <button class="btn btn-primary" type="button" data-action="quiz-start">${ico('refresh')}Opnieuw testen</button>
        <button class="btn btn-ghost" type="button" data-go="taal">${ico('book')}Naar de taalgids</button>
        <button class="btn btn-ghost" type="button" data-go="casus">${ico('bubble')}Bekijk de casuïstiek</button>
      </div>
    </div>`;
  const res = $('#quiz-res');
  res.scrollIntoView({ block: 'start', behavior: calm() ? 'auto' : 'smooth' });
  res.focus({ preventScroll: true });
  animeerScore(res, pct, (p, f) => String(f >= 1 ? goed : Math.round((p / 100) * tot)));
  if (pct >= 80) setTimeout(confetti, 500);
  tabMeta();
}
function initQuiz() {
  const sh = $('#quiz-shell');
  if (!sh) return;
  sh.addEventListener('click', e => {
    const o = e.target.closest('[data-opt]');
    if (o && !quiz.klaar) { quiz.gekozen = +o.dataset.opt; quizVraag(quiz.gekozen); return; }
    const r = e.target.closest('[data-recap]');
    if (r) {
      const i = +r.dataset.recap, q = QUIZ_VRAGEN[i], ok = quiz.antw[i] === q.juist;
      $$('[data-recap]', sh).forEach(b => b.setAttribute('aria-pressed', String(b === r)));
      $('#recap-detail').innerHTML = `<div class="quiz-feedback ${ok ? 'ok' : 'no'}">
        <p class="recap-q">${i + 1}. ${q.vraag}</p>
        <p class="recap-a"><strong>Jouw antwoord:</strong> ${quiz.antw[i] != null ? q.opties[quiz.antw[i]] : '—'}${ok ? '' : `<br><strong>Juist:</strong> ${q.opties[q.juist]}`}</p>
        <p>${q.uitleg}</p></div>`;
    }
  });
  // Toetsenbord: A/B/C (of 1/2/3) kiest, Enter bevestigt of gaat verder
  document.addEventListener('keydown', e => {
    if ($('#panel-quiz').hidden || !$('#quiz-card') || document.querySelector('dialog[open]')) return;
    if (e.metaKey || e.ctrlKey || e.altKey || (e.target.closest && e.target.closest('input, textarea, select'))) return;
    const q = QUIZ_VRAGEN[quiz.i];
    const k = { a: 0, b: 1, c: 2, d: 3, 1: 0, 2: 1, 3: 2, 4: 3 }[e.key.toLowerCase()];
    if (k != null && !quiz.klaar && k < q.opties.length) { e.preventDefault(); quiz.gekozen = k; quizVraag(k); return; }
    if (e.key === 'Enter' && !(e.target.closest && e.target.closest('button, a'))) {
      e.preventDefault();
      if (!quiz.klaar && quiz.gekozen !== null) ACT['quiz-confirm']();
      else if (quiz.klaar) ACT['quiz-next']();
    }
  });
}

// Knoppen met data-go: naar een ander instrument, een casus of een andere pagina
function casusGa(go) {
  const casus = /^casus-(\d+)$/.exec(go);
  if (TABS.includes(go) || casus) {
    if (!$('#tab-casus')) { location.href = `/praktijk/?tab=${casus ? 'casus' : go}${casus ? '#' + go : ''}`; return; }
    toonTab(casus ? 'casus' : go, { scroll: true });
    if (casus) kiesCasus(+casus[1] - 1);
    if (go === 'taal' && !$('#oefen').hidden) taalModus('lijst');
    return;
  }
  if (go === 'orgs') location.href = '/organisaties/';
  else if (go === 'beleid') location.href = '/beleid/';
  else if (go === 'hulp') Dlg.open('dlg-help');
  else if (go === 'tools-sek') location.href = '/tools/?thema=sek';
  else if (go === 'tools-gen') location.href = '/tools/?thema=gen';
  else if (go === 'tools-bel') location.href = '/tools/?thema=bel';
}

// ── 10. WEGWIJZER ──────────────────────────────────────────────────────────────
// Twee of drie vragen. Daarna krijgt elk item een score: praktijk (instrumenten en
// casussen), tools en organisaties. Wat niet past, valt weg; de rest staat op volgorde,
// telkens met de reden erbij. Beleid zit er bewust niet in. De keuzes staan in de URL:
// een resultaat is te delen, en de terugknop van de browser gaat stap voor stap terug.
const WW_STAP = Object.fromEntries(WW_STAPPEN.map(s => [s.key, s]));
const nn = n => String(n).padStart(2, '0');
const WW_CASUS = CASUS.map((c, i) => ({ val: String(i + 1), t: c.titel, tag: c.tag, thema: c.thema, tone: 'violet', zin: `${nn(i + 1)} · ${c.tag.toLowerCase()}` }));
const wwOpties = key => (key === 'casus' ? WW_CASUS : WW_STAP[key].opties);
const wwOptie = (key, val) => wwOpties(key).find(o => o.val === val);
const wwZin = (key, val) => { const o = wwOptie(key, val); return o ? o.zin || o.kort || o.t : ''; };

// Hoe goed iets past per doelgroep (0 = niet, 3 = goed): uit de doelgroep van een tool,
// het type van een organisatie en het thema van een casus
const WW_VOOR = {
  tool: {
    'Cliënten': { client: 3, begeleider: 1, team: 0 }, 'Cliënten & Begeleiders': { client: 3, begeleider: 2, team: 1 },
    'Begeleiders': { client: 1, begeleider: 3, team: 2 }, 'Organisaties': { client: 0, begeleider: 1, team: 3 },
  },
  org: {
    'Ontmoeting & Activiteiten': { client: 3, begeleider: 1, team: 0 }, 'Anonieme steun': { client: 3, begeleider: 2, team: 1 },
    'Info & Ondersteuning': { client: 1, begeleider: 2, team: 2 }, 'Begeleiding & Advies': { client: 1, begeleider: 3, team: 3 },
  },
  casus: { 'Team & netwerk': { client: 1, begeleider: 3, team: 3 }, standaard: { client: 1, begeleider: 3, team: 2 } },
};
const WW_THEMA_TOOL = { 'Seksualiteit & Identiteit': 'relaties', 'Gender & Trans': 'gender', 'Beleid & Organisatie': 'werking' };
const WW_GEWICHT = [10, 7, 5]; // hoofdthema · tweede thema · de rest
const WW_ORG_ICO = { 'Begeleiding & Advies': 'hand', 'Ontmoeting & Activiteiten': 'users', 'Info & Ondersteuning': 'info', 'Anonieme steun': 'chat' };
const WW_SOORT = {
  prak: { t: 'Uit de praktijk', kort: 'Praktijk', icon: 'bulb', tone: 'violet', zicht: 3, een: 'instrument of casus', meer: 'instrumenten en casussen', alle: 'Naar de Praktijk-pagina' },
  tool: { t: 'Tools & methodieken', kort: 'Tools', icon: 'tool', tone: 'teal', zicht: 4, een: 'tool', meer: 'tools', alle: 'Naar alle tools' },
  org: { t: 'Organisaties', kort: 'Organisaties', icon: 'users', tone: 'blue', zicht: 4, een: 'organisatie', meer: 'organisaties', alle: 'Naar alle organisaties' },
};
const WW_CTA = { taal: 'Open de taalgids', vlag: 'Bekijk het Vlaggensysteem', scan: 'Start de zelfscan', quiz: 'Doe de test', casus: 'Bekijk de casuïstiek' };

// Alle items in één lijst, met hun thema's (ww) en hoe goed ze per doelgroep passen (voor)
let wwItems = null;
function wwBouw() {
  wwItems = [
    ...WW_PRAKTIJK.map(p => ({ soort: 'prak', id: 'tab-' + p.tab, ww: p.ww, voor: p.voor, p })),
    ...CASUS.map((c, i) => ({ soort: 'prak', id: `casus-${i + 1}`, ww: c.ww || [], voor: WW_VOOR.casus[c.thema] || WW_VOOR.casus.standaard, c, n: i + 1 })),
    ...TOOLS.map(t => ({ soort: 'tool', id: 't-' + slug(t.title), ww: t.ww || [WW_THEMA_TOOL[t.thema]], voor: WW_VOOR.tool[t.doelgroep] || {}, t })),
    ...ORGS.map(o => ({ soort: 'org', id: 'o-' + slug(o.naam), ww: o.ww || [], voor: WW_VOOR.org[o.type] || {}, regio: o.regio, letop: /Let op:/.test(o.beschrijving), o })),
  ];
}

// Waar de "Verder"-knoppen van een casus naartoe wijzen (instrument, tool of organisatie).
// Eerst op naam, dan op link; De Roze Pagina en de roze verenigingen delen immers één link.
const wwKaal = s => norm(String(s).replace(/\(.*?\)/g, '')).trim();
const wwLinkKaal = u => String(u || '').replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
const wwGenoemdCache = new Map();
function wwGenoemd(c) {
  if (!wwGenoemdCache.has(c)) {
    wwGenoemdCache.set(c, (c.chips || []).map(ch => {
      if (ch.go) return WW_PRAKTIJK.some(p => p.tab === ch.go) ? 'tab-' + ch.go : null;
      const naam = wwKaal(ch.l);
      const it = wwItems.find(x => (x.t && wwKaal(x.t.title) === naam) || (x.o && wwKaal(x.o.naam) === naam))
        || wwItems.find(x => x.t && wwLinkKaal(x.t.url) === wwLinkKaal(ch.url));
      return it ? it.id : null;
    }).filter(Boolean));
  }
  return wwGenoemdCache.get(c);
}
// Het inhoudelijke thema van de keuzes; bij een situatie dat van de casus
const wwThema = a => (a.wat === 'situatie' ? ((CASUS[+a.casus - 1] || {}).ww || [])[0] : a.wat);

// De score van één item. ok = het past; waarom = [label, icoon] voor bij de kaart;
// regionaal = het zou passen als je een regio koos.
function wwScore(it, a) {
  let s = 0, ok = true, regionaal = false;
  const waarom = [];
  if (a.wat === 'situatie') {
    const c = CASUS[+a.casus - 1];
    if (!c) ok = !!it.c || it.id === 'tab-casus';
    else if (it.c === c) { s += 40; waarom.push(['Jouw situatie', 'star']); }
    else {
      if (wwGenoemd(c).includes(it.id)) { s += 14; waarom.push(['Genoemd bij deze situatie', 'link']); }
      const samen = it.ww.filter(w => c.ww.includes(w));
      if (samen.length) { s += 3 + 2 * samen.length; if (!waarom.length) waarom.push([wwOptie('wat', samen[0]).waarom, 'check']); }
      if (!s) ok = false;
    }
  } else if (a.wat) {
    let i = it.ww.indexOf(a.wat);
    // Doorverwijzen: elke organisatie telt mee, die met een eigen LGBTQ+-werking het zwaarst
    if (a.wat === 'doorverwijzen' && it.soort === 'org') i = it.ww.length ? 0 : 2;
    if (i < 0) ok = false;
    else { s += WW_GEWICHT[Math.min(i, 2)]; waarom.push([wwOptie('wat', a.wat).waarom, 'check']); }
  }
  if (a.wie) {
    const v = it.voor[a.wie] || 0;
    if (!v) ok = false;
    s += 2 * v;
    if (v >= 3) waarom.push([wwOptie('wie', a.wie).waarom, 'check']);
  }
  if (it.regio) {
    const r = a.regio && a.regio !== 'Heel Vlaanderen' ? a.regio : '';
    if (it.regio === 'Heel Vlaanderen') { s += 2; if (r) waarom.push(['Heel Vlaanderen', 'globe']); }
    else if (it.regio === r) { s += 12; waarom.unshift([REGIO_KORT(r), 'pin']); }
    else { regionaal = ok && !r; ok = false; }
  }
  if (it.letop) s -= 6;
  return { s, ok, waarom, regionaal };
}
function wwResultaten(a) {
  if (!wwItems) wwBouw();
  const res = { prak: [], tool: [], org: [], regionaal: [] };
  wwItems.forEach((it, k) => {
    const sc = wwScore(it, a);
    if (sc.ok) res[it.soort].push(Object.assign({ k }, it, sc));
    else if (sc.regionaal) res.regionaal.push(it);
  });
  ['prak', 'tool', 'org'].forEach(g => res[g].sort((x, y) => y.s - x.s || x.k - y.k));
  return res;
}
function wwTel(a) {
  if (!wwItems) wwBouw();
  if (!a.wie && !a.wat) {
    const t = { prak: 0, tool: 0, org: 0, n: wwItems.length, leeg: true };
    wwItems.forEach(it => { t[it.soort]++; });
    return t;
  }
  const r = wwResultaten(a);
  return { prak: r.prak.length, tool: r.tool.length, org: r.org.length, n: r.prak.length + r.tool.length + r.org.length };
}

// Welke vragen er komen: de regio enkel als die iets verandert aan het resultaat
const wwRegionaal = a => (a.wat ? wwResultaten(Object.assign({}, a, { regio: '' })).regionaal : []);
function wwFlow(a) {
  const f = ['wie', 'wat'];
  if (a.wat === 'situatie') f.push('casus');
  else if (!a.wat || wwRegionaal(a).length) f.push('regio');
  return f;
}
const wwVolgende = a => wwFlow(a).find(k => !a[k]) || null;
const wwRegioLijst = lijst => REGIO_VOLGORDE.filter(r => lijst.some(o => o.regio === r)).map(REGIO_KORT);
const wwRegioTelt = a => a.wat === 'situatie' ? wwRegionaal(a).length > 0 : wwFlow(a).includes('regio');

// ── Toestand en URL ──
// stap: de vraag die open staat, of null voor het resultaat
let ww = { antw: {}, stap: 'wie' }, wwRich = 1, wwTab = 'alles', wwVorig = null, wwBezig = false;
function wwUrl() {
  const a = ww.antw, p = new URLSearchParams();
  wwFlow(a).forEach(k => { if (a[k]) p.set(k, a[k]); });
  if (a.regio && !p.has('regio') && wwRegioTelt(a)) p.set('regio', a.regio);
  if (ww.stap && ww.stap !== wwVolgende(a)) p.set('stap', ww.stap);
  const q = p.toString();
  return location.pathname + (q ? '?' + q : '');
}
function wwBewaar(nieuw) {
  try { history[nieuw ? 'pushState' : 'replaceState']({ ww: { antw: Object.assign({}, ww.antw), stap: ww.stap } }, '', wwUrl()); } catch (e) { /* file:// */ }
}
function wwUitUrl(P) {
  const a = {};
  ['wie', 'wat', 'regio'].forEach(k => { const v = P.get(k); if (v && wwOptie(k, v)) a[k] = v; });
  if (a.wat === 'situatie' && wwOptie('casus', P.get('casus'))) a.casus = P.get('casus');
  const f = wwFlow(a), volgende = wwVolgende(a), stap = P.get('stap');
  const mag = f.includes(stap) && (!volgende || f.indexOf(stap) <= f.indexOf(volgende));
  return { antw: a, stap: mag ? stap : volgende };
}
function wwGa(stap, rich) {
  ww.stap = stap; wwRich = rich;
  if (!stap) wwTab = 'alles';
  wwBewaar(true);
  renderWegwijzer(true);
}
function wwKies(key, val) {
  ww.antw[key] = val;
  if (key === 'wat' && val !== 'situatie') delete ww.antw.casus;
  wwGa(wwVolgende(ww.antw), 1);
}
function wwTerug() {
  const f = wwFlow(ww.antw), i = ww.stap ? f.indexOf(ww.stap) : f.length;
  if (i > 0) wwGa(f[i - 1], -1);
}
function wwOpnieuw() { ww.antw = {}; wwTab = 'alles'; wwGa('wie', -1); }
// Een keuze aanpassen vanuit het resultaat: meteen herberekenen, zonder de vragen opnieuw te doorlopen
function wwPasAan(key, val, nr) {
  const a = ww.antw;
  a[key] = val;
  if (key === 'wat' && val !== 'situatie') delete a.casus;
  if (wwRegioTelt(a) && !a.regio) a.regio = 'Heel Vlaanderen';
  const open = wwVolgende(a);
  if (open) { wwGa(open, 1); return; } // bv. net "een concrete situatie" gekozen: welke dan?
  ww.stap = null;
  wwBewaar(false);
  renderWegwijzer(false, [key, nr]);
}

// ── Weergave: de vragen ──
function wwVraagHTML(tel) {
  const a = ww.antw, key = ww.stap, stap = WW_STAP[key], f = wwFlow(a), idx = f.indexOf(key);
  const route = f.map((k, i) => {
    const st = k === key ? 'is-now' : a[k] ? 'is-done' : 'is-next';
    const bereik = k !== key && f.slice(0, i).every(x => a[x]);
    const o = a[k] && wwOptie(k, a[k]);
    const label = !a.wat && k === 'regio' ? 'Regio of situatie?' : WW_STAP[k].kort;
    const keuze = o ? (k === 'casus' ? o.zin : o.kort || o.t) : k === key ? 'Nu aan het kiezen' : 'Nog te kiezen';
    return `<li class="${st}"><button type="button" class="ww-route-b" data-ww-stap="${k}"${bereik ? '' : ' disabled'}${k === key ? ' aria-current="step"' : ''}${o && bereik ? ` aria-label="${esc(label)} ${esc(keuze)}, wijzig"` : ''}>
      <span class="ww-route-dot">${o && k !== key ? ico('check') : i + 1}</span>
      <span class="ww-route-t"><small>${label}</small><b>${esc(keuze)}</b></span></button></li>`;
  }).join('');
  let n = 0;
  const knop = o => {
    const i = n++;
    const casus = key === 'casus';
    return `<button class="ww-opt tone-${o.tone || 'teal'}${casus ? ' ww-opt-casus' : ''}" type="button" data-ww="${key}" data-val="${esc(o.val)}" aria-pressed="${a[key] === o.val}" style="--ad:${calm() ? 0 : i * 40}ms">
      ${casus ? `<span class="ww-opt-n" aria-hidden="true">${nn(o.val)}</span>` : `<span class="ww-opt-ic">${ico(o.icon || 'spark')}</span>`}
      <span class="ww-opt-txt">${casus ? `<small class="ww-opt-tag">${o.tag}</small>` : ''}<b>${o.t}</b>${o.d ? `<small>${o.d}</small>` : ''}</span>
      <span class="ww-opt-end" aria-hidden="true">${i < 9 ? `<kbd class="kbd">${i + 1}</kbd>` : ''}${ico('check', 'ww-opt-check')}</span>
    </button>`;
  };
  let opties;
  if (key === 'casus') {
    const themas = [...new Set(WW_CASUS.map(o => o.thema))];
    opties = `<div class="ww-options ww-options-casus" role="group" aria-labelledby="ww-q">${themas.map(th =>
      `<p class="ww-opt-group">${th}</p>${WW_CASUS.filter(o => o.thema === th).map(knop).join('')}`).join('')}</div>`;
  } else if (key === 'wat') {
    opties = `<div class="ww-options" role="group" aria-labelledby="ww-q">${stap.opties.filter(o => !o.doel).map(knop).join('')}</div>
      <p class="ww-or"><span>Of zoek je iets specifieks?</span></p>
      <div class="ww-options ww-options-doel" role="group" aria-label="Iets specifieks">${stap.opties.filter(o => o.doel).map(knop).join('')}</div>`;
  } else {
    opties = `<div class="ww-options ww-options-${key}" role="group" aria-labelledby="ww-q">${stap.opties.map(knop).join('')}</div>`;
  }
  let hint = '';
  if (key === 'regio') {
    const reg = wwRegionaal(a), regios = wwRegioLijst(reg);
    hint = `<p class="ww-qhint">${reg.length} ${reg.length === 1 ? 'werking' : 'werkingen'} in een specifieke regio ${reg.length === 1 ? 'past' : 'passen'} bij je keuzes (${zinLijst(regios)}). Kies je regio om ze mee te nemen.</p>`;
  } else if (key === 'casus') hint = '<p class="ww-qhint">Kies de situatie die het dichtst bij de jouwe aanleunt. Je krijgt meteen de handvatten erbij.</p>';
  const v = wwVorig || tel;
  const SG = ['prak', 'tool', 'org'];
  return `<div class="ww-app">
    <aside class="ww-rail" aria-label="Jouw route">
      <p class="ww-rail-k">Jouw route</p>
      <ol class="ww-route" style="--p:${v.p == null ? 0 : v.p}" data-p="${f.length > 1 ? idx / (f.length - 1) : 0}">${route}</ol>
      <div class="ww-live">
        <p class="ww-live-top"><span class="ww-live-n" data-tel="${tel.n}">${v.n}</span><span class="ww-live-t">${tel.leeg ? 'items in de gids.<br> Elke keuze filtert.' : 'suggesties passen<br> bij je keuzes.'}</span></p>
        <span class="ww-live-bar" aria-hidden="true">${SG.map(g => `<i class="tone-${WW_SOORT[g].tone}" style="--g:${v[g]}" data-g="${tel[g]}"></i>`).join('')}</span>
        <ul class="ww-live-leg">${SG.map(g => `<li class="tone-${WW_SOORT[g].tone}"><span class="chip-dot" aria-hidden="true"></span>${WW_SOORT[g].kort}<b>${tel[g]}</b></li>`).join('')}</ul>
      </div>
    </aside>
    <div class="ww-stage ${wwRich < 0 ? 'is-terug' : 'is-verder'}">
      <p class="ww-steplabel">Stap ${idx + 1} van ${f.length}${stap.optioneel ? ' · optioneel' : ''}</p>
      <h2 class="ww-question" id="ww-q" tabindex="-1">${stap.vraag}</h2>
      ${hint}
      ${opties}
      <div class="ww-stage-foot">
        ${idx > 0 ? `<button class="ww-back" type="button" data-action="ww-back">${ico('arrow-left')}Vorige stap</button>` : '<span></span>'}
        ${!wwVolgende(a) ? `<button class="btn btn-primary btn-sm" type="button" data-action="ww-res">Naar je resultaat${ico('arrow-right')}</button>`
          : `<span class="ww-keys" aria-hidden="true">Kies met <kbd class="kbd">1</kbd>–<kbd class="kbd">${Math.min(9, n)}</kbd></span>`}
      </div>
    </div>
  </div>`;
}

// ── Weergave: het resultaat ──
const wwWaarom = w => (w && w.length ? `<span class="ww-why"><span class="sr-only">Past bij: </span>${w.slice(0, 3).map(([t, i]) => `<span>${ico(i)}${esc(t)}</span>`).join('')}</span>` : '');
function wwTabHref(tab, a) {
  if (tab !== 'taal') return `/praktijk/?tab=${tab}`;
  const cat = (WW_TERMEN[wwThema(a)] || WW_TERMEN.standaard).cat;
  return `/praktijk/?tab=taal${cat ? '&cat=' + encodeURIComponent(cat) : ''}`;
}
function wwPrakInfo(it, a) {
  if (it.c) return { tone: 'violet', icon: 'bubble', k: `Casus ${nn(it.n)} · ${it.c.tag}`, t: it.c.titel, d: it.c.blokken[0].tekst, href: `/praktijk/?tab=casus#casus-${it.n}`, cta: 'Lees de situatie' };
  const p = it.p;
  return { tone: p.tone, icon: p.icon, k: 'Instrument', t: p.t, d: p.d, href: wwTabHref(p.tab, a), cta: WW_CTA[p.tab] };
}
function wwPrakKaart(it, a, i, extra) {
  const k = wwPrakInfo(it, a);
  return `<a class="ww-pk tone-${k.tone}${extra ? ' ww-extra' : ''}" href="${k.href}" style="--ad:${Math.min(i, 6) * 50}ms"${extra ? ' hidden' : ''}>
    <span class="ww-pk-top"><span class="ww-pk-ic">${ico(k.icon)}</span><span class="ww-pk-k">${k.k}</span></span>
    <span class="ww-pk-t">${k.t}</span>
    <span class="ww-pk-d">${kort(k.d, 125)}</span>
    ${wwWaarom(it.waarom)}
    <span class="ww-pk-go">${k.cta}${ico('arrow-right')}</span>
  </a>`;
}
function wwToolKaart(it, a, i, extra) {
  const t = it.t;
  return `<article class="ww-row tone-${THEMA_TONE[t.thema] || 'teal'}${extra ? ' ww-extra' : ''}" style="--ad:${Math.min(i, 6) * 50}ms"${extra ? ' hidden' : ''}>
    <span class="ww-row-ic">${ico('tool')}</span>
    <div class="ww-row-body">
      <h4 class="ww-row-t"><a href="${t.url}" target="_blank" rel="noopener noreferrer">${t.title}${ext}</a></h4>
      <p class="ww-row-sub">${t.org} <span aria-hidden="true">·</span> ${ico(DOELGROEP_ICO[t.doelgroep] || 'users')}${t.doelgroep}</p>
      <p class="ww-row-d">${kort(t.beschrijving, 125)}</p>
      ${wwWaarom(it.waarom)}
    </div>
    <span class="ww-row-go" aria-hidden="true">${ico('arrow-up-right')}</span>
  </article>`;
}
function wwOrgKaart(it, a, i, extra) {
  const o = it.o, tekst = o.beschrijving.split(/\s*Let op:\s*/)[0];
  return `<article class="ww-row tone-${TYPE_TONE[o.type] || 'blue'}${extra ? ' ww-extra' : ''}" style="--ad:${Math.min(i, 6) * 50}ms"${extra ? ' hidden' : ''}>
    <span class="ww-row-ic">${ico(WW_ORG_ICO[o.type] || 'users')}</span>
    <div class="ww-row-body">
      <h4 class="ww-row-t"><a href="${o.url}" target="_blank" rel="noopener noreferrer">${o.naam}${ext}</a></h4>
      <p class="ww-row-sub">${ico('pin')}${REGIO_KORT(o.regio)} <span aria-hidden="true">·</span> ${o.type}</p>
      <p class="ww-row-d">${kort(tekst, 125)}</p>
      ${wwWaarom(it.waarom)}
      ${it.letop ? `<p class="ww-row-note">${ico('alert')}Mogelijk niet meer actief: check eerst de status</p>` : ''}
      ${o.telefoon ? `<a class="phone-btn" href="tel:${o.telefoon.replace(/\s/g, '')}" aria-label="Bel ${o.naam} op ${o.telefoon}">${ico('phone')}${o.telefoon}</a>` : ''}
    </div>
    <span class="ww-row-go" aria-hidden="true">${ico('arrow-up-right')}</span>
  </article>`;
}

// "Begin hier": de beste match, met een voorproefje. Op mobiel valt wat ww-vp-extra heet weg.
// Toon de eerste volledige zin (of twee korte); de rest krijgt ww-vp-extra, zodat een smal scherm nooit midden in een zin afkapt
function wwKern(tekst) {
  // Een zinseinde (eventueel met afsluitend aanhalingsteken), gevolgd door een hoofdletter. Geen lookbehind: oudere Safari kan die niet lezen.
  const grens = /[.!?]["”’]?\s+(?=["“'‘]?[A-ZÀ-Ý])/g;
  let m = grens.exec(tekst);
  if (m && m.index < 50) m = grens.exec(tekst) || m;
  if (!m) return tekst;
  const knip = m.index + m[0].trimEnd().length;
  return `${tekst.slice(0, knip)}<span class="ww-vp-extra">${tekst.slice(knip)}</span>`;
}
function wwVoorproef(tab, a) {
  const th = wwThema(a);
  if (tab === 'taal') {
    const termen = (WW_TERMEN[th] || WW_TERMEN.standaard).woorden.map(w => TERMEN.find(t => t.woord === w)).filter(Boolean);
    return `<div class="ww-terms">${termen.map((t, i) => `<div class="ww-term${i > 1 ? ' ww-vp-extra' : ''}"><b>${t.woord}</b><span>${kort(t.def, 80)}</span></div>`).join('')}</div>
      <p class="ww-side-foot ww-vp-extra">${ico('cards')}En nog ${TERMEN.length - termen.length} begrippen, met een oefenmodus om ze in te oefenen.</p>`;
  }
  if (tab === 'vlag') {
    return `<ul class="ww-flags">${VLAGGEN.map(v => `<li data-vlag="${v.key}" style="--fc:${v.kleur}"><svg class="ww-flag" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 22V3"/><path d="M5 4h13l-3.5 4.5L18 13H5z"/></svg><b>${v.naam}</b><small>${v.wat}</small></li>`).join('')}</ul>
      <p class="ww-side-foot ww-vp-extra">${ico('check-circle')}Zes criteria: ${zinLijst(VLAG_CRITERIA.map(c => c.naam.toLowerCase()))}.</p>`;
  }
  if (tab === 'scan') {
    const dom = scanDomeinNamen(), bezig = Object.keys(Opslag.lees('rg-scan', {})).length, hist = Opslag.lees('rg-scan-hist', []);
    const status = bezig && bezig < SCAN_VRAGEN.length ? `Je vulde al ${bezig} van de ${SCAN_VRAGEN.length} stellingen in. Ga verder waar je was.`
      : hist.length ? `Je laatste resultaat: ${hist[hist.length - 1].pct}%. Doe de scan opnieuw en vergelijk.`
      : `${SCAN_VRAGEN.length} stellingen over ${dom.length} domeinen. Je antwoorden blijven op dit toestel.`;
    return `<ul class="ww-doms">${dom.map(d => `<li>${ico(SCAN_ICO[d] || 'spark')}${d}</li>`).join('')}</ul><p class="ww-side-foot">${ico('clipboard')}${status}</p>`;
  }
  if (tab === 'quiz') {
    const q = QUIZ_VRAGEN[{ gender: 0, taal: 2, werking: 5, comingout: 7, relaties: 8 }[th] ?? 4] || QUIZ_VRAGEN[0];
    const best = Opslag.lees('rg-quiz-best', null);
    return `<div class="ww-quiz"><p class="ww-quiz-k">Voorbeeldvraag</p><p class="ww-quiz-q">${q.vraag}</p>
      <ol class="ww-quiz-o ww-vp-extra">${q.opties.map((o, i) => `<li><span aria-hidden="true">${'ABC'[i]}</span>${o}</li>`).join('')}</ol></div>
      <p class="ww-side-foot">${ico('trophy')}${best != null ? `Je beste score tot nu: ${best} op ${QUIZ_VRAGEN.length}.` : `${QUIZ_VRAGEN.length} vragen, telkens met uitleg bij het antwoord.`}</p>`;
  }
  return `<ol class="ww-steps">${CASUS.slice(0, 3).map((c, i) => `<li${i > 1 ? ' class="ww-vp-extra"' : ''}><span class="ww-steps-ic">${nn(i + 1)}</span><div><b>${c.tag}</b><p>${c.titel}</p></div></li>`).join('')}</ol>
    <p class="ww-side-foot">${ico('bubble')}${CASUS.length} situaties, elk met duiding en handvatten.</p>`;
}
function wwTop(it, a) {
  let tone, kop, titel, tekst, knoppen, zij;
  if (it.c) {
    const c = it.c, ic = ['eye', 'hand', 'alert'];
    tone = 'violet'; kop = `Casus ${nn(it.n)} · ${c.tag}`; titel = c.titel; tekst = c.blokken[0].tekst;
    knoppen = `<a class="btn btn-sm ww-btn" href="/praktijk/?tab=casus#casus-${it.n}">Lees de handvatten${ico('arrow-right')}</a>`;
    const verder = (c.chips || []).filter(ch => ch.go !== 'beleid').map(ch => (ch.url
      ? `<a class="casus-chip" href="${ch.url}" target="_blank" rel="noopener noreferrer">${ch.l}${ico('arrow-up-right')}${ext}</a>`
      : `<button class="casus-chip" type="button" data-go="${ch.go}">${ch.l}${ico('arrow-right')}</button>`)).join('');
    zij = `<ol class="ww-steps">${c.blokken.slice(1).map((b, k) => `<li${k ? ' class="ww-vp-extra"' : ''}><span class="ww-steps-ic">${ico(ic[k + 1])}</span><div><b>${b.kop}</b><p>${wwKern(kort(b.tekst, 150))}</p></div></li>`).join('')}</ol>
      ${verder ? `<div class="ww-top-chips ww-vp-extra"><span class="ww-top-chips-k">Verder</span>${verder}</div>` : ''}`;
  } else if (it.p) {
    const p = it.p;
    tone = p.tone; kop = 'Instrument uit de praktijk'; titel = p.t; tekst = p.d;
    knoppen = `<a class="btn btn-sm ww-btn" href="${wwTabHref(p.tab, a)}">${WW_CTA[p.tab]}${ico('arrow-right')}</a>`;
    zij = wwVoorproef(p.tab, a);
  } else {
    const o = it.o, t = it.t, url = (o || t).url;
    tone = o ? TYPE_TONE[o.type] || 'blue' : THEMA_TONE[t.thema] || 'teal';
    kop = o ? o.type : `Tool · ${t.thema}`; titel = o ? o.naam : t.title; tekst = (o ? o.beschrijving.split(/\s*Let op:\s*/)[0] : t.beschrijving);
    knoppen = `<a class="btn btn-sm ww-btn" href="${url}" target="_blank" rel="noopener noreferrer">${o ? 'Bezoek de website' : 'Bekijk de tool'}${ico('arrow-up-right')}${ext}</a>`
      + (o && o.telefoon ? `<a class="btn btn-ghost btn-sm" href="tel:${o.telefoon.replace(/\s/g, '')}">${ico('phone')}Bel ${o.telefoon}</a>` : '');
    zij = `<div class="ww-contact">
      ${o ? `<p class="ww-contact-row">${ico('pin')}<span><small>Regio</small>${REGIO_KORT(o.regio)}</span></p>` : `<p class="ww-contact-row">${ico('users')}<span><small>Van</small>${t.org}</span></p>`}
      ${o && o.telefoon ? `<p class="ww-contact-row ww-tel-print">${ico('phone')}<span><small>Telefoon</small>${o.telefoon}</span></p>` : ''}
      ${t ? `<p class="ww-contact-row ww-vp-extra">${ico(DOELGROEP_ICO[t.doelgroep] || 'users')}<span><small>Voor</small>${t.doelgroep}</span></p>` : ''}
      <p class="ww-contact-row">${ico('globe')}<span><small>Website</small><a href="${url}" target="_blank" rel="noopener noreferrer">${wwLinkKaal(url).split('/')[0]}${ext}</a></span></p>
    </div>
    ${o ? `<p class="ww-side-foot">${ico('info')}Tip: neem eerst even contact op. Zo hoor je wat er nu loopt en of het aanbod past.</p>` : ''}`;
  }
  return `<section class="ww-top tone-${tone}" data-sec="${it.soort}" aria-labelledby="ww-top-t" style="--ad:60ms">
    <div class="ww-top-main">
      <p class="ww-top-k"><span class="ww-top-star">${ico('star')}Begin hier</span><span>${kop}</span></p>
      <h3 class="ww-top-t" id="ww-top-t">${titel}</h3>
      <p class="ww-top-d">${wwKern(kort(tekst, 330))}</p>
      ${wwWaarom(it.waarom)}
      <div class="ww-top-acts">${knoppen}</div>
    </div>
    <div class="ww-top-side">${zij}</div>
  </section>`;
}

// Waarop een sectie gefilterd is, in gewone taal
function wwFilterZin(g, a) {
  if (g === 'prak') return 'Instrumenten en situaties van de Praktijk-pagina, het best passend eerst.';
  const d = [];
  if (a.wat === 'situatie') d.push('<b>wat bij deze situatie past</b>');
  else if (a.wat && !(a.wat === 'doorverwijzen' && g === 'org')) d.push(`<b>${wwZin('wat', a.wat)}</b>`);
  if (a.wie) d.push(`<b>${wwOptie('wie', a.wie).waarom.toLowerCase()}</b>`);
  if (g === 'org') { const r = a.regio && a.regio !== 'Heel Vlaanderen' ? a.regio : ''; d.push(r ? `<b>${REGIO_KORT(r)}</b> of heel Vlaanderen` : 'werkingen in <b>heel Vlaanderen</b>'); }
  return `Gefilterd op ${zinLijst(d)}. Best passend eerst.`;
}
function wwOverzicht(g, a) {
  if (g === 'prak') return '/praktijk/';
  if (g === 'tool') { const th = { relaties: 'sek', grenzen: 'sek', gender: 'gen', werking: 'bel' }[wwThema(a)]; return '/tools/' + (th ? '?thema=' + th : ''); }
  return '/organisaties/' + (a.regio && a.regio !== 'Heel Vlaanderen' ? '?regio=' + encodeURIComponent(a.regio) : '');
}
function wwRegioKeuze(a, label) {
  return `<label class="ww-sel"><span class="sr-only">${label}</span><select data-ww-tok="regio">${wwOpties('regio').map(o => `<option value="${esc(o.val)}"${o.val === (a.regio || 'Heel Vlaanderen') ? ' selected' : ''}>${o.kort || o.t}</option>`).join('')}</select>${ico('chevron-down')}</label>`;
}
function wwRegioHint(a, r) {
  const reg = a.regio && a.regio !== 'Heel Vlaanderen' ? a.regio : '';
  if (!reg && r.regionaal.length) {
    const n = r.regionaal.length, regios = wwRegioLijst(r.regionaal);
    return `<div class="ww-hint">${ico('pin')}<p><b>Nog ${n} ${n === 1 ? 'werking' : 'werkingen'} in een specifieke regio</b> (${zinLijst(regios)}). Kies je regio om ze mee te nemen.</p>${wwRegioKeuze(a, 'Kies je regio')}</div>`;
  }
  if (reg && !r.org.some(o => o.regio === reg)) return `<div class="ww-hint is-info">${ico('info')}<p>In <b>${REGIO_KORT(reg)}</b> vonden we geen aparte werking rond dit thema. Deze organisaties werken in heel Vlaanderen.</p></div>`;
  return '';
}
function wwSectie(g, items, a, r) {
  const S = WW_SOORT[g], hint = g === 'org' ? wwRegioHint(a, r) : '';
  if (!items.length && !hint) return '';
  const kaart = { prak: wwPrakKaart, tool: wwToolKaart, org: wwOrgKaart }[g];
  const meer = items.length - S.zicht;
  return `<section class="ww-sec tone-${S.tone}" data-sec="${g}" aria-labelledby="ww-h-${g}">
    <header class="ww-sec-head">
      <span class="ww-sec-ic">${ico(S.icon)}</span>
      <div><h3 class="ww-sec-t" id="ww-h-${g}">${S.t}<span class="ww-sec-n">${r[g].length}</span></h3><p>${wwFilterZin(g, a)}</p></div>
    </header>
    ${hint}
    ${items.length ? `<div class="ww-grid ww-grid-${g}">${items.map((it, i) => kaart(it, a, i, i >= S.zicht)).join('')}</div>` : ''}
    <div class="ww-sec-foot">
      ${meer > 0 ? `<button class="ww-more" type="button" data-ww-meer="${esc(`Toon nog ${meer} ${meer === 1 ? S.een : S.meer}`)}" aria-expanded="false">${ico('chevron-down')}<span>Toon nog ${meer} ${meer === 1 ? S.een : S.meer}</span></button>` : ''}
      <a class="link-arrow" href="${wwOverzicht(g, a)}">${S.alle}${ico('arrow-right')}</a>
    </div>
  </section>`;
}
function wwKeuzeVeld(key, val, label) {
  const o = wwOptie(key, val) || {};
  return `<label class="ww-tok tone-${o.tone || 'teal'}"><span class="sr-only">${label}: </span><span class="ww-tok-v" aria-hidden="true">${esc(wwZin(key, val))}</span>${ico('chevron-down')}<select data-ww-tok="${key}">${wwOpties(key).map(x =>
    `<option value="${esc(x.val)}"${x.val === val ? ' selected' : ''}>${esc(key === 'casus' ? `${nn(x.val)}. ${x.t}` : x.kort || x.t)}</option>`).join('')}</select></label>`;
}
function wwResultaatHTML() {
  const a = ww.antw, r = wwResultaten(a);
  const orgEerst = a.wat === 'doorverwijzen';
  const volgorde = orgEerst ? ['org', 'prak', 'tool'] : ['prak', 'tool', 'org'];
  // Een organisatie die mogelijk niet meer actief is, zetten we nooit als eerste tip
  const org = r.org.find(o => !o.letop);
  const top = (orgEerst ? org : r.prak[0]) || r.prak[0] || org || r.tool[0];
  const n = r.prak.length + r.tool.length + r.org.length;
  const zin = `Voor ${wwKeuzeVeld('wie', a.wie, 'Voor wie')}, over ${wwKeuzeVeld('wat', a.wat, 'Thema')}${a.casus ? `: ${wwKeuzeVeld('casus', a.casus, 'Situatie')}` : ''}${wwRegioTelt(a) ? `, in ${wwKeuzeVeld('regio', a.regio || 'Heel Vlaanderen', 'Regio')}` : ''}.`;
  const tabs = [['alles', 'Alles', n], ...volgorde.map(g => [g, WW_SOORT[g].kort, r[g].length])];
  return `<div class="ww-res">
    <header class="ww-res-head">
      <div class="ww-res-intro">
        <p class="ww-res-k">${ico('check-circle')}Jouw wegwijzer</p>
        <h2 class="ww-res-title" id="ww-res-title" tabindex="-1">${n ? `${n} ${n === 1 ? 'suggestie' : 'suggesties'} op maat` : 'Geen directe match'}</h2>
        <p class="ww-zin">${zin}</p>
        <p class="ww-zin-hint">${ico('edit')}Wijzig een keuze in de zin hierboven en het resultaat past zich meteen aan.</p>
      </div>
      <div class="ww-res-acts">
        <button class="ww-act" type="button" data-action="ww-link" aria-label="Kopieer een link naar deze selectie">${ico('link')}<span>Deel</span></button>
        <button class="ww-act" type="button" data-action="ww-print" aria-label="Druk deze selectie af">${ico('printer')}<span>Afdrukken</span></button>
        <button class="ww-act" type="button" data-action="ww-reset" aria-label="Begin opnieuw">${ico('refresh')}<span>Opnieuw</span></button>
      </div>
    </header>
    ${n ? `<nav class="ww-tabs" aria-label="Toon enkel"><div class="ww-tabs-in">${tabs.map(([k, t, c]) =>
      `<button type="button" data-ww-tab="${k}"${k !== 'alles' ? ` class="tone-${WW_SOORT[k].tone}"` : ''} aria-pressed="${wwTab === k}"${c ? '' : ' disabled'}>${k !== 'alles' ? '<span class="chip-dot" aria-hidden="true"></span>' : ''}${t}<span class="ww-tabs-n">${c}</span></button>`).join('')}</div></nav>
    ${top ? wwTop(top, a) : ''}
    ${volgorde.map(g => wwSectie(g, r[g].filter(x => x !== top), a, r)).join('')}`
    : `<div class="empty ww-leeg"><b>Niets dat precies bij deze combinatie past</b>Pas hierboven een keuze aan, of bekijk de volledige overzichten.<br><a class="btn btn-ghost btn-sm" href="/praktijk/">Praktijk</a> <a class="btn btn-ghost btn-sm" href="/tools/">Tools</a> <a class="btn btn-ghost btn-sm" href="/organisaties/">Organisaties</a></div>`}
    <footer class="ww-res-foot">
      <div><p class="ww-res-foot-t">Niet gevonden wat je zocht?</p><p>Zoek in alle tools, organisaties, begrippen en casussen, of pas hierboven je keuzes aan.</p></div>
      <div class="ww-res-foot-acts">
        <button class="btn btn-ghost" type="button" data-action="search">${ico('search')}Zoeken</button>
        <button class="btn btn-ghost" type="button" data-action="help">${ico('heart')}Hulp nodig?</button>
      </div>
    </footer>
    <p class="print-only">Selectie via De Regenbooggids: ${esc(location.href)}</p>
  </div>`;
}
function wwToonTab(tab, scroll) {
  const sh = $('#ww-shell'), knop = $(`[data-ww-tab="${tab}"]`, sh);
  if (!knop || knop.disabled) tab = 'alles';
  wwTab = tab;
  $$('[data-ww-tab]', sh).forEach(b => b.setAttribute('aria-pressed', String(b.dataset.wwTab === tab)));
  $$('[data-sec]', sh).forEach(s => { s.hidden = tab !== 'alles' && s.dataset.sec !== tab; });
  // Stond de balk al vast bovenaan? Breng dan het begin van de selectie in beeld
  const balk = $('.ww-tabs', sh), eerste = $('[data-sec]:not([hidden])', sh);
  if (scroll && balk && eerste && balk.getBoundingClientRect().top < 120) eerste.scrollIntoView({ block: 'start', behavior: calm() ? 'auto' : 'smooth' });
}
function wwMeer(knop) {
  const sec = knop.closest('.ww-sec'), extra = $$('.ww-extra', sec), open = knop.getAttribute('aria-expanded') !== 'true';
  extra.forEach((el, i) => { el.hidden = !open; el.style.setProperty('--ad', `${i * 50}ms`); });
  knop.setAttribute('aria-expanded', String(open));
  $('span', knop).textContent = open ? 'Toon minder' : knop.dataset.wwMeer;
}

function renderWegwijzer(scroll, focusVeld) {
  const sh = $('#ww-shell');
  if (!sh) return;
  const res = !ww.stap;
  let tel = null;
  sh.dataset.view = res ? 'res' : 'vraag';
  if (res) {
    sh.innerHTML = wwResultaatHTML();
    wwToonTab(wwTab);
    wwVorig = null;
  } else {
    tel = wwTel(ww.antw);
    sh.innerHTML = wwVraagHTML(tel);
    // Teller, verdeling en route schuiven vanaf de vorige stand naar de nieuwe
    const route = $('.ww-route', sh), nEl = $('.ww-live-n', sh), p = +route.dataset.p;
    tel.p = p;
    requestAnimationFrame(() => {
      route.style.setProperty('--p', p);
      $$('.ww-live-bar i', sh).forEach(i => i.style.setProperty('--g', i.dataset.g));
    });
    const van = +nEl.textContent, naar = tel.n;
    if (calm() || van === naar) nEl.textContent = naar;
    else {
      const t0 = performance.now();
      const stap = t => {
        const q = Math.min(1, (t - t0) / 650), e = 1 - Math.pow(1 - q, 3);
        nEl.textContent = Math.round(van + (naar - van) * e);
        if (q < 1 && nEl.isConnected) requestAnimationFrame(stap);
      };
      requestAnimationFrame(stap);
    }
    wwVorig = tel;
  }
  if (scroll) {
    const top = sh.getBoundingClientRect().top;
    if (top < 80 || top > innerHeight * 0.5) sh.scrollIntoView({ block: 'start', behavior: calm() ? 'auto' : 'smooth' });
  }
  if (focusVeld) {
    const velden = $$(`[data-ww-tok="${focusVeld[0]}"]`, sh);
    const v = velden[focusVeld[1]] || velden[0];
    if (v) v.focus({ preventScroll: true });
  } else if (scroll) {
    const kop = $(res ? '#ww-res-title' : '#ww-q', sh);
    if (kop) kop.focus({ preventScroll: true });
  }
}
function wwKlik(o) {
  if (wwBezig) return;
  wwBezig = true;
  $$(`[data-ww="${o.dataset.ww}"]`).forEach(b => b.setAttribute('aria-pressed', String(b === o)));
  o.classList.add('is-picked');
  setTimeout(() => { wwBezig = false; wwKies(o.dataset.ww, o.dataset.val); }, calm() ? 0 : 170);
}
function initWegwijzer() {
  const sh = $('#ww-shell');
  if (!sh) return;
  wwBouw();
  ww = wwUitUrl(QP);
  wwBewaar(false);
  sh.addEventListener('click', e => {
    const o = e.target.closest('[data-ww]');
    if (o) { wwKlik(o); return; }
    const s = e.target.closest('[data-ww-stap]');
    if (s) { const f = wwFlow(ww.antw); wwGa(s.dataset.wwStap, f.indexOf(s.dataset.wwStap) < f.indexOf(ww.stap) ? -1 : 1); return; }
    const t = e.target.closest('[data-ww-tab]');
    if (t) { wwToonTab(t.dataset.wwTab, true); return; }
    const m = e.target.closest('[data-ww-meer]');
    if (m) wwMeer(m);
  });
  sh.addEventListener('change', e => {
    const s = e.target.closest('[data-ww-tok]');
    if (s) wwPasAan(s.dataset.wwTok, s.value, $$(`[data-ww-tok="${s.dataset.wwTok}"]`, sh).indexOf(s));
  });
  addEventListener('popstate', e => {
    const st = e.state && e.state.ww ? e.state.ww : wwUitUrl(new URLSearchParams(location.search));
    const f = wwFlow(st.antw), nu = ww.stap ? f.indexOf(ww.stap) : f.length, straks = st.stap ? f.indexOf(st.stap) : f.length;
    ww = { antw: Object.assign({}, st.antw), stap: st.stap };
    wwRich = straks < nu ? -1 : 1;
    wwTab = 'alles';
    renderWegwijzer(true);
  });
  // Sneltoetsen tijdens de vragen: 1–9 kiest, Backspace gaat een stap terug
  document.addEventListener('keydown', e => {
    if (!ww.stap || e.metaKey || e.ctrlKey || e.altKey || document.querySelector('dialog[open]')) return;
    if (e.target.closest && e.target.closest('input, textarea, select, [contenteditable]')) return;
    if (/^[1-9]$/.test(e.key)) {
      const o = $$('[data-ww]', sh)[+e.key - 1];
      if (o) { e.preventDefault(); wwKlik(o); }
    } else if (e.key === 'Backspace' && ww.stap !== 'wie') { e.preventDefault(); wwTerug(); }
  });
  renderWegwijzer(false);
}

// ── 11. OVER ───────────────────────────────────────────────────────────────────
function initOverLogo() {
  const logo = $('#about-logo');
  if (!logo || calm() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const stage = logo.closest('.about-hero') || logo;
  let lx = 0, ly = 0, wacht = false;
  const pas = () => {
    wacht = false;
    const r = logo.getBoundingClientRect();
    const dx = Math.max(-1.4, Math.min(1.4, (lx - (r.left + r.width / 2)) / (r.width / 2)));
    const dy = Math.max(-1.4, Math.min(1.4, (ly - (r.top + r.height / 2)) / (r.height / 2)));
    logo.style.setProperty('--rx', (dx * 14).toFixed(2) + 'deg');
    logo.style.setProperty('--ry', (-dy * 14).toFixed(2) + 'deg');
    logo.style.setProperty('--mx', ((dx * 0.5 + 0.5) * 100).toFixed(1) + '%');
    logo.style.setProperty('--my', ((dy * 0.5 + 0.5) * 100).toFixed(1) + '%');
    logo.classList.add('is-hover');
  };
  stage.addEventListener('pointermove', e => { lx = e.clientX; ly = e.clientY; if (!wacht) { wacht = true; requestAnimationFrame(pas); } });
  stage.addEventListener('pointerleave', () => { logo.style.setProperty('--rx', '0deg'); logo.style.setProperty('--ry', '0deg'); logo.classList.remove('is-hover'); });
}

// ── 12. ACTIES & START ─────────────────────────────────────────────────────────
const ACT = {
  search: () => Zoek.open(),
  help: () => Dlg.open('dlg-help'),
  doneer: () => Dlg.open('dlg-doneer'),
  a11y: (el, e) => Weergave.toggleA11y(e),
  // Vanuit het mobiele menu: eerst het menu sluiten, dan het weergave-menu tonen
  weergave: () => {
    const sheet = $('#nav-sheet'), pop = $('#weergave');
    if (pop.showPopover) { try { sheet.hidePopover(); } catch (e) { /* al dicht */ } pop.showPopover(); }
    else { sheet.classList.remove('is-open'); pop.classList.add('is-open'); }
  },
  'deck-shuffle': () => deelKaarten(),
  strip: el => strookSchuif(+el.dataset.dir),
  'scan-go': () => berekenScan(),
  'scan-reset': () => resetScan(),
  'scan-download': () => downloadScan(),
  'scan-print': () => { const h = $('#scan-hint'); if (h) h.textContent = 'Tip: in het printvenster kan je ook "Opslaan als PDF" kiezen.'; setTimeout(() => window.print(), 250); },
  'quiz-start': () => { quiz = { i: 0, antw: [], gekozen: null, klaar: false }; quizVraag('q'); $('#quiz-shell').scrollIntoView({ block: 'start', behavior: calm() ? 'auto' : 'smooth' }); },
  'quiz-confirm': () => { if (quiz.gekozen === null) return; quiz.klaar = true; quiz.antw[quiz.i] = quiz.gekozen; quizVraag('next'); },
  'quiz-next': () => {
    if (quiz.i + 1 < QUIZ_VRAGEN.length) {
      quiz.i++; quiz.gekozen = null; quiz.klaar = false; quizVraag('q');
      const k = $('#quiz-card'); if (k && k.getBoundingClientRect().top < 70) k.scrollIntoView({ block: 'start', behavior: calm() ? 'auto' : 'smooth' });
    } else quizResultaat();
  },
  'ww-back': () => wwTerug(),
  'ww-reset': () => wwOpnieuw(),
  'ww-res': () => wwGa(null, 1),
  'ww-link': () => kopieer(location.href, 'Link naar je selectie gekopieerd'),
  'ww-print': () => window.print(),
};

document.addEventListener('click', e => {
  const a = e.target.closest('[data-action]');
  if (a && ACT[a.dataset.action]) { e.preventDefault(); ACT[a.dataset.action](a, e); return; }
  const th = e.target.closest('[data-theme-set]');
  if (th) { Weergave.kies(th.dataset.themeSet, e); return; }
  const go = e.target.closest('[data-go]');
  if (go) { e.preventDefault(); casusGa(go.dataset.go); return; }
  const fun = e.target.closest('[data-fun]');
  if (fun) { openFunFact(fun.dataset.fun); return; }
  const flip = e.target.closest('.flip');
  if (flip) { const aan = flip.classList.toggle('is-flipped'); flip.setAttribute('aria-pressed', String(aan)); }
});

function start() {
  const stap = (naam, fn) => { try { fn(); } catch (err) { console.error(`[Regenbooggids] ${naam}:`, err); } };
  stap('weergave', () => Weergave.init());
  stap('nav', initNav);
  stap('dialogen', () => Dlg.init());
  stap('hulp', renderHulp);
  stap('zoeken', () => Zoek.init());
  stap('hero', initHero);
  stap('marquee', initMarquee);
  stap('bento', initBento);
  stap('kaarten', deelKaarten);
  stap('strook', initStrook);
  stap('lijsten', initLijsten);
  stap('praktijk', initPraktijk);
  stap('quiz', initQuiz);
  stap('wegwijzer', initWegwijzer);
  stap('over', initOverLogo);
  stap('spot', initSpot);
  stap('tellers', initTellers);
  stap('onthullen', () => initReveal());
  stap('hash', focusHash);
  addEventListener('hashchange', focusHash);
}
start();
