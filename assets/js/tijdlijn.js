// ═══════════════════════════════════════════════════════════════════════════════
//  MIJLPALEN-TIJDLIJN (enkel geladen op /beleid/)
//  Twee fases als hoofdstukken: standaard zie je enkel de kiezer (Fase 1 | Fase 2),
//  een fase klapt open tot een rustige verticale tijdlijn met een rollende jaarteller.
//  De inhoud (TL_FASES, TIJDLIJN) staat in data.js.
// ═══════════════════════════════════════════════════════════════════════════════

const TL_NU = new Date().getFullYear();
const TL_CAT = { science: 'Wetenschap &amp; zorg', move: 'Samenleving &amp; beweging', law: 'Wetgeving &amp; beleid', weetje: 'Weetje · geen mijlpaal' };
// Zelfde stops als de regenboog-rail in de CSS (--tl-rainbow), zodat een bolletje in fase 2
// exact de kleur krijgt van de rail eronder.
const TL_RAINBOW = [[0, '#e85d8a'], [0.2, '#f4a44a'], [0.38, '#f7d44a'], [0.55, '#5bbf7a'], [0.75, '#4ab8d4'], [1, '#7b6fd4']];
const tlZap = px => `<svg width="${px}" height="${px}" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>`;
const tlChev = px => `<svg class="tl-chev" width="${px}" height="${px}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`;
const TL_UP = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>';
const TL_RIGHT = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
const tlEind = f => f.eind ?? TL_NU;
const tlPeriode = f => `${f.start}–${f.eind ?? 'nu'}`;

function tlRainbow(t) {
  t = Math.max(0, Math.min(1, t));
  const hex = c => [1, 3, 5].map(o => parseInt(c.substr(o, 2), 16));
  for (let k = 1; k < TL_RAINBOW.length; k++) {
    const [p1, c1] = TL_RAINBOW[k - 1], [p2, c2] = TL_RAINBOW[k];
    if (t <= p2) {
      const f = (t - p1) / (p2 - p1), a = hex(c1), b = hex(c2);
      return `rgb(${a.map((v, j) => Math.round(v + (b[j] - v) * f)).join(',')})`;
    }
  }
  return TL_RAINBOW[TL_RAINBOW.length - 1][1];
}

// Rollende jaarteller: vier kolommen met 11 cellen (0–9 + een extra 0), zodat 9→0
// altijd vooruit rolt. JS schrijft de posities zelf; er zit geen CSS-transition op.
function tlOdoHTML() {
  const col = `<span class="tl-odo-col"><span class="tl-odo-strip">${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(d => `<span>${d}</span>`).join('')}</span></span>`;
  return `<span class="tl-odo" aria-hidden="true">${col.repeat(4)}</span>`;
}

function tlChooserHTML(f) {
  const items = TIJDLIJN.filter(m => m.fase === f.nr);
  const nWeet = items.filter(m => m.type === 'weetje').length, nMijl = items.length - nWeet;
  const beads = items.map(m => {
    const x = Math.round((+m.jaar - f.start) / (tlEind(f) - f.start) * 1000) / 1000;
    const wj = m.type === 'weetje';
    return `<i class="tl-bead${wj ? ' tl-bead-wj' : ''}" style="--x:${x}${f.nr === 2 && !wj ? `;--c:${tlRainbow(x)}` : ''}"></i>`;
  }).join('');
  const count = `${nMijl} ${nMijl === 1 ? 'mijlpaal' : 'mijlpalen'}` + (nWeet
    ? `<span aria-hidden="true">&nbsp;·&nbsp;</span><span class="tl-sr"> en </span><span class="tl-zap-mini" aria-hidden="true">${tlZap(9)}</span>${nWeet} ${nWeet === 1 ? 'weetje' : 'weetjes'}`
    : '');
  return `
    <h3 class="tl-ch-h" id="tijdlijn-fase-${f.nr}">
      <button type="button" class="tl-ch tl-p${f.nr}" id="tl-ch-${f.nr}" data-fase="${f.nr}" aria-expanded="false" aria-controls="tl-panel-${f.nr}">
        <span class="tl-ch-eb"><span class="tl-ch-glyph" aria-hidden="true"></span>Fase ${f.nr}</span>
        <span class="tl-ch-mini" aria-hidden="true">${tlPeriode(f)}</span>
        <span class="tl-ch-period"><span class="tl-sr">, ${f.start} tot ${f.eind ?? 'nu'}, </span><span aria-hidden="true">${f.start}<span class="tl-dash">–</span><span class="tl-ch-end${f.eind ? '' : ' is-nu'}">${tlOdoHTML()}${f.eind ? '' : '<span class="tl-ch-nu">nu</span>'}</span></span></span>
        <span class="tl-ch-title">${f.titel}</span>
        <span class="tl-ch-thread" aria-hidden="true">${beads}</span>
        <span class="tl-ch-foot">
          <span class="tl-ch-count"><span class="tl-sr">, </span>${count}</span>
          <span class="tl-ch-cta" aria-hidden="true"><span class="tl-cta-open">Openen</span><span class="tl-cta-close">Sluiten</span>${tlChev(14)}</span>
        </span>
      </button>
    </h3>`;
}

function tlItemHTML(m, i) {
  const wj = m.type === 'weetje';
  return `
            <li class="tl-item${wj ? ' tl-weetje' : ''}" id="tijdlijn-${m.jaar}" data-i="${i}" data-jaar="${m.jaar}">
              <span class="tl-dot" aria-hidden="true">${wj ? tlZap(11) : ''}</span>
              <button type="button" class="tl-row" aria-expanded="false" aria-controls="tl-more-${i}">
                ${wj ? `<span class="tl-wj-label">${tlZap(12)}Wist je dat?</span><span class="tl-sr"> Weetje, geen mijlpaal: </span>` : ''}
                <span class="tl-year">${m.jaar}${m.jaar2 ? `<small><span aria-hidden="true">/ </span><span class="tl-sr">en </span>${m.jaar2}</small>` : ''}</span>
                <span class="tl-title"><span class="tl-title-t">${m.titel}</span></span>
                ${tlChev(16)}
              </button>
              <div class="tl-more" id="tl-more-${i}">
                <div class="tl-more-in" hidden="until-found">
                  <div class="tl-desc">
                    <p class="tl-cat" data-cat="${m.cat}">${TL_CAT[m.cat]}</p>
                    <div class="tl-desc-t">${m.desc}</div>
                    ${m.bron ? `<p class="tl-src"><span class="tl-src-k">Bron</span>${m.bron}</p>` : ''}
                  </div>
                </div>
              </div>
            </li>`;
}

function tlPanelHTML(f) {
  const laatste = f.nr === TL_FASES.length;
  const volgende = TL_FASES[f.nr];
  const terug = `<button type="button" class="tl-back" data-back="${f.nr}">${TL_UP}Terug naar het overzicht</button>`;
  const voet = laatste
    ? `<div class="tl-end"><span class="tl-end-dot" aria-hidden="true"></span><p class="tl-end-txt"><b>Nu</b>Het verhaal schrijft zich verder.</p></div>
          <div class="tl-panel-foot">${terug}</div>`
    : `<div class="tl-panel-foot">
            <button type="button" class="tl-next" data-goto="${volgende.nr}">
              <span class="tl-next-badge" aria-hidden="true">${volgende.nr}</span>
              <span class="tl-next-card"><span class="tl-next-k">Verder · Fase ${volgende.nr}</span><span class="tl-next-t">${volgende.titel}</span><span class="tl-next-arrow" aria-hidden="true">${TL_RIGHT}</span></span>
            </button>
            ${terug}
          </div>`;
  return `
    <div class="tl-panel tl-p${f.nr}" id="tl-panel-${f.nr}" data-fase="${f.nr}" hidden="until-found">
      <div class="tl-panel-body" role="region" aria-labelledby="tl-ch-${f.nr}">
        <p class="tl-panel-title" aria-hidden="true"><span class="tl-panel-eb">Fase ${f.nr} · ${tlPeriode(f)}</span>${f.titel}</p>
        <p class="tl-panel-intro">${f.tekst}</p>
        <div class="tl-track">
          <div class="tl-rail" aria-hidden="true"><span class="tl-fill"></span>${laatste ? '' : '<span class="tl-rail-tail"></span>'}</div>
          <ol class="tl-list" role="list" aria-label="Tijdlijn fase ${f.nr}, ${f.start} tot ${f.eind ?? 'nu'}">${TIJDLIJN.map((m, i) => m.fase === f.nr ? tlItemHTML(m, i) : '').join('')}
          </ol>
          ${voet}
        </div>
      </div>
    </div>`;
}

function renderTijdlijn() {
  const tl = document.getElementById('tl');
  if (!tl) return;
  // Let op: geen overflow op .tl-shell of een voorouder, anders werkt de sticky jaarteller
  // (.tl-pin) niet meer. Enkel .tl-stage knipt af, en alleen tijdens het animeren.
  tl.innerHTML = `
    <div class="tl-shell">
      <div class="tl-chooser"><span class="tl-thumb" aria-hidden="true"></span>${TL_FASES.map(tlChooserHTML).join('')}</div>
      <div class="tl-pin"><div class="tl-pill tl-p1" aria-hidden="true" title="Naar het begin van de tijdlijn"><span class="tl-pill-badge">1</span><span class="tl-pill-lbl">Fase 1</span>${tlOdoHTML()}</div></div>
      <div class="tl-stage">${TL_FASES.map(tlPanelHTML).join('')}</div>
    </div>`;
}

// ── Hulpfuncties ──
// Reduced motion én de toegankelijke modus: alles meteen, zonder animatie. Telkens
// opnieuw evalueren (de modus kan live wisselen), nooit cachen.
const tlInstant = () => prefersReduced() || document.documentElement.classList.contains('a11y');
// Wacht op het einde van een transition, met een timeout als vangnet (transitionend
// vuurt niet als transitions uitstaan). In instant-modus: meteen.
function tlAfter(el, prop, ms, cb) {
  if (tlInstant()) { cb(); return () => {}; }
  let klaar = false, t = 0;
  const onEnd = e => { if (e.target === el && e.propertyName === prop) fin(); };
  const stop = () => { klaar = true; el.removeEventListener('transitionend', onEnd); clearTimeout(t); };
  const fin = () => { if (klaar) return; stop(); cb(); };
  el.addEventListener('transitionend', onEnd);
  t = setTimeout(fin, ms + 80);
  return stop;
}
// html { scroll-behavior: smooth } maakt van elke scrollTo een glijbeweging. Voor sprongen
// en compensatie zetten we dat even uit.
function tlScrollTo(y, smooth) {
  tlScrollTo.t = performance.now(); // de scroll-engine weet zo dat dit geen scroll van de bezoeker is
  if (smooth && !tlInstant()) { window.scrollTo({ top: y, behavior: 'smooth' }); return; }
  const h = document.documentElement, prev = h.style.scrollBehavior;
  h.style.scrollBehavior = 'auto';
  window.scrollTo(0, y);
  h.style.scrollBehavior = prev;
}
const tlScrollBy = (dy, smooth) => tlScrollTo(window.scrollY + dy, smooth);
function tlWriteHash(h) {
  try { history.replaceState(history.state, '', h ? '#' + h : location.pathname + location.search); } catch (e) { /* bv. file:// */ }
}
function tlNoTransition(el, fn) {
  el.classList.add('tl-snap');
  fn();
  void el.offsetHeight; // stijlen vastleggen zonder transition…
  el.classList.remove('tl-snap'); // …zodat er daarna niets meer na-animeert
}

function tlOdo(el) {
  const o = { strips: [...el.querySelectorAll('.tl-odo-strip')], v: 0, target: 0, raf: 0, last: 0 };
  // Mechanisch zoals een kilometerteller: een hogere kolom draait pas mee terwijl
  // de lagere van 9 naar 0 rolt.
  o.render = v => {
    for (let k = 0; k < 4; k++) {
      const unit = 10 ** (3 - k);
      const d = Math.floor(v / unit) % 10;
      const frac = unit === 1 ? v - Math.floor(v) : Math.max(0, (v % unit) - (unit - 1));
      o.strips[k].style.transform = `translate3d(0,${(-(d + frac) / 11 * 100).toFixed(3)}%,0)`;
    }
  };
  o.stop = () => { cancelAnimationFrame(o.raf); o.raf = 0; };
  o.set = v => { o.stop(); o.v = o.target = v; o.render(Math.round(v)); };
  const step = t => {
    const dt = Math.min(64, o.last ? t - o.last : 16.7);
    o.last = t;
    const k = 1 - Math.pow(1 - 0.14, dt / 16.7), cap = 1.6 * dt / 16.7;
    o.v += Math.max(-cap, Math.min(cap, (o.target - o.v) * k));
    if (Math.abs(o.target - o.v) < 0.004) o.v = o.target;
    o.render(o.v);
    o.raf = o.v !== o.target ? requestAnimationFrame(step) : 0;
  };
  // Veerachtig achtervolgen van een doeljaar (de lus stopt zodra het jaar bereikt is)
  o.to = (target, opt = {}) => {
    o.target = target;
    if (opt.instant || tlInstant()) { o.set(target); return; }
    if (!o.raf) { o.last = 0; o.raf = requestAnimationFrame(step); }
  };
  // Tijdgebaseerde tween voor de intro (easeOutQuart)
  o.tween = (from, to, dur, onP, onDone) => {
    o.stop();
    let t0 = 0, raf = 0, dood = false;
    const f = t => {
      if (dood) return;
      if (!t0) t0 = t;
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 4);
      o.v = o.target = from + (to - from) * e;
      o.render(o.v);
      if (onP) onP(e);
      if (p < 1) raf = requestAnimationFrame(f);
      else { o.set(to); if (onDone) onDone(); }
    };
    raf = requestAnimationFrame(f);
    return () => { dood = true; cancelAnimationFrame(raf); };
  };
  return o;
}

// ── Gedrag ──
function initTijdlijn() {
  const tl = document.getElementById('tl');
  if (!tl) return;
  const $ = s => tl.querySelector(s);
  const shell = $('.tl-shell'), chooser = $('.tl-chooser'), thumb = $('.tl-thumb');
  const pin = $('.tl-pin'), pill = $('.tl-pill'), stage = $('.tl-stage');
  const pillOdo = tlOdo(pill.querySelector('.tl-odo'));
  const chBtn = {}, endSlot = {}, odoEnd = {}, threads = {}, beads = {}, P = {};
  TL_FASES.forEach(f => {
    const n = f.nr, panel = $('#tl-panel-' + n);
    chBtn[n] = $('#tl-ch-' + n);
    endSlot[n] = chBtn[n].querySelector('.tl-ch-end');
    odoEnd[n] = tlOdo(endSlot[n].querySelector('.tl-odo'));
    odoEnd[n].set(tlEind(f));
    threads[n] = chBtn[n].querySelector('.tl-ch-thread');
    beads[n] = [...threads[n].querySelectorAll('.tl-bead')];
    P[n] = {
      nr: n, f, panel,
      body: panel.querySelector('.tl-panel-body'), track: panel.querySelector('.tl-track'),
      rail: panel.querySelector('.tl-rail'), fill: panel.querySelector('.tl-fill'), tail: panel.querySelector('.tl-rail-tail'),
      items: [...panel.querySelectorAll('.tl-item')], end: panel.querySelector('.tl-end'),
      endDot: panel.querySelector('.tl-end-dot'), nextBadge: panel.querySelector('.tl-next-badge'),
      foot: panel.querySelector('.tl-panel-foot'),
    };
  });
  pillOdo.set(TL_FASES[0].start);

  const S = {
    open: null, item: null, intro: 'pending', pillOn: false, pillWoken: false,
    near: false, active: false, geo: null, ticking: false, userGesture: false,
    phaseTok: 0, stageTok: 0, itemTok: {}, zapped: false, rippled: false, timers: [], cancels: [], introIO: null,
  };
  const narrow = window.matchMedia('(max-width: 719.98px)');
  const itemEl = i => tl.querySelector(`.tl-item[data-i="${i}"]`);
  const faseOf = li => +li.closest('.tl-panel').dataset.fase;
  const stickPx = () => parseFloat(getComputedStyle(pin).top) || 75;
  const chooserDocTop = () => chooser.getBoundingClientRect().top + window.scrollY;
  const toChooser = smooth => tlScrollTo(chooserDocTop() - stickPx() - 4, smooth);
  const afterLayout = () => { S.geo = null; schedule(); };

  // ── Intro: de eindjaren rollen één keer op, de draden tekenen zich ──
  function introStart() {
    if (tlInstant() || !('IntersectionObserver' in window) || /^#tijdlijn-/.test(location.hash)
        || chooser.getBoundingClientRect().bottom <= 0) { introFinish(); return; }
    shell.classList.add('tl-anim');
    TL_FASES.forEach(f => {
      odoEnd[f.nr].set(f.start);
      endSlot[f.nr].classList.remove('is-nu', 'is-counting');
      threads[f.nr].style.setProperty('--p', '0');
      beads[f.nr].forEach(b => b.classList.remove('on'));
    });
    S.introIO = new IntersectionObserver(entries => {
      if (!entries.some(e => e.isIntersecting)) return;
      S.introIO.disconnect();
      S.intro = 'running';
      shell.classList.add('tl-in');
      TL_FASES.forEach((f, k) => {
        S.timers.push(setTimeout(() => {
          endSlot[f.nr].classList.add('is-counting');
          S.cancels.push(odoEnd[f.nr].tween(f.start, tlEind(f), k ? 1600 : 1400, p => {
            threads[f.nr].style.setProperty('--p', p.toFixed(4));
            beads[f.nr].forEach(b => {
              if (!b.classList.contains('on') && +b.style.getPropertyValue('--x') <= p + 1e-3) b.classList.add('on');
            });
          }, () => {
            if (!f.eind) endSlot[f.nr].classList.add('is-nu');
            if (k === TL_FASES.length - 1) S.intro = 'done';
          }));
        }, k ? 900 : 250));
      });
    }, { threshold: 0.35 });
    S.introIO.observe(chooser);
  }
  function introFinish() {
    if (S.intro === 'done') return;
    S.intro = 'done';
    S.timers.forEach(clearTimeout); S.cancels.forEach(c => c());
    S.timers = []; S.cancels = [];
    if (S.introIO) S.introIO.disconnect();
    tlNoTransition(shell, () => {
      shell.classList.remove('tl-anim');
      TL_FASES.forEach(f => {
        odoEnd[f.nr].set(tlEind(f));
        endSlot[f.nr].classList.remove('is-counting');
        if (!f.eind) endSlot[f.nr].classList.add('is-nu');
        threads[f.nr].style.removeProperty('--p');
        beads[f.nr].forEach(b => b.classList.add('on'));
      });
    });
  }

  // ── Panelen ──
  // Idempotent: toont enkel het gevraagde paneel en verbergt de rest. Een onderbroken
  // animatie wordt zo bij de volgende actie altijd rechtgezet.
  function applyState(nr) {
    TL_FASES.forEach(f => {
      const p = P[f.nr];
      p.body.classList.remove('is-leaving');
      p.panel.inert = false;
      if (f.nr === nr) { p.panel.removeAttribute('hidden'); return; }
      if (p.panel.getAttribute('hidden') !== 'until-found') p.panel.setAttribute('hidden', 'until-found');
      // anders blijven niet-onthulde rijen op opacity 0 als het paneel later instant opengaat
      p.panel.classList.remove('tl-anim', 'tl-drawn');
      [...p.items, p.end, p.foot].forEach(el => el && el.classList.remove('tl-in'));
    });
  }
  // Animeer enkel het zichtbare deel van de hoogte; wat onder de vouw valt, springt.
  function stageAnimate(nr, o = {}) {
    const tok = ++S.stageTok;
    if (o.instant || tlInstant()) {
      stage.classList.remove('is-sizing');
      stage.style.height = ''; stage.style.transitionDuration = '';
      applyState(nr); afterLayout(); return;
    }
    const vis = r => Math.min(r.height, Math.max(0, window.innerHeight - r.top + 40));
    const r0 = stage.getBoundingClientRect();
    let from = vis(r0);
    if (o.closing) {
      // Onderaan de pagina klemt de browser de scroll zodra de pagina korter wordt. Wat anders
      // in één klap zou verdwijnen (ook de extra ruimte van ensureRoom) animeert dan mee.
      const below = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
      const pad = parseFloat(section.style.paddingBottom) || 0;
      from = Math.min(r0.height + pad, Math.max(from, r0.height + pad - below));
    }
    stage.classList.remove('is-sizing');
    stage.style.height = '';
    let to = 0;
    if (!o.closing) { applyState(nr); to = vis(stage.getBoundingClientRect()); }
    const klaar = () => {
      if (tok !== S.stageTok) return;
      if (o.closing) applyState(nr);
      stage.style.height = ''; stage.style.transitionDuration = '';
      stage.classList.remove('is-sizing');
      afterLayout();
    };
    if (Math.abs(from - to) < 2) { klaar(); return; }
    stage.classList.add('is-sizing');
    stage.style.transitionDuration = o.closing ? '.36s' : '.48s';
    stage.style.height = from + 'px';
    void stage.offsetHeight;
    stage.style.height = to + 'px';
    tlAfter(stage, 'height', o.closing ? 360 : 480, klaar);
  }
  let rowIO = null;
  if ('IntersectionObserver' in window) {
    rowIO = new IntersectionObserver(entries => {
      entries.filter(e => e.isIntersecting)
        .sort((a, b) => (a.target.dataset.i ?? 999) - (b.target.dataset.i ?? 999))
        .forEach((e, k) => {
          e.target.style.setProperty('--d', Math.min(k, 7) * 45 + 'ms');
          e.target.classList.add('tl-in');
          rowIO.unobserve(e.target);
        });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  }
  function reveal(p) {
    if (!p || !rowIO || tlInstant()) return;
    const els = [...p.items, p.end, p.foot].filter(Boolean);
    rowIO.disconnect();
    p.panel.classList.remove('tl-drawn');
    p.panel.classList.add('tl-anim');
    els.forEach(el => { el.classList.remove('tl-in'); rowIO.observe(el); });
    requestAnimationFrame(() => requestAnimationFrame(() => p.panel.classList.add('tl-drawn')));
  }

  function setPhase(nr, o = {}) {
    const opt = { instant: false, scroll: true, hash: true, ...o };
    if (S.intro !== 'done') introFinish();
    if (nr === S.open) return;
    const tok = ++S.phaseTok;
    const prev = S.open, closing = prev ? P[prev] : null, opening = nr ? P[nr] : null;
    const instant = opt.instant || tlInstant();
    // Eerst beslissen of we naar de kiezer scrollen, vóór er iets in de DOM verandert. Zo ja:
    // het paneel meteen op volle hoogte zetten, anders is de pagina (de tijdlijn staat
    // onderaan) tijdelijk te kort en klemt de browser de scroll vast.
    const cr0 = opt.scroll && nr && !prev ? chooser.getBoundingClientRect() : null;
    const jump = !!(cr0 && (cr0.top < stickPx() || cr0.bottom > window.innerHeight * 0.7));
    if (S.item !== null) { closeItem(S.item, true); S.item = null; }
    if (closing) closing.items.forEach(li => li.classList.remove('is-past', 'is-current'));

    // Kiezer: aria-expanded, de witte "thumb" onder de gekozen helft
    TL_FASES.forEach(f => chBtn[f.nr].setAttribute('aria-expanded', f.nr === nr ? 'true' : 'false'));
    if (nr) {
      thumb.style.setProperty('--thumb-x', nr === 1 ? '0%' : '100%');
      if (!prev) {
        thumb.classList.add('is-snap');
        requestAnimationFrame(() => requestAnimationFrame(() => thumb.classList.remove('is-snap')));
      }
      shell.dataset.open = nr;
    } else {
      shell.removeAttribute('data-open');
    }
    S.open = nr;
    // Op smalle schermen klapt de kiezer bij het openen in tot een compacte schakelaar: ook
    // dan eerst het paneel tonen, anders wordt de pagina even korter en springt ze.
    const prefill = jump || (!!nr && !prev && !instant && narrow.matches);
    if (prefill) { applyState(nr); ensureRoom(); }
    if (narrow.matches && !prev !== !nr && !instant) {
      chooser.classList.remove('is-morph'); void chooser.offsetWidth; chooser.classList.add('is-morph');
    }

    // Focus mag niet achterblijven in een paneel dat verdwijnt
    const act = document.activeElement;
    if (closing && (act === document.body || closing.panel.contains(act))) chBtn[nr || prev].focus({ preventScroll: true });

    if (closing) closing.panel.inert = true;
    if (prev && nr && !instant) {
      // wisselen: oude inhoud vervaagt, dan wissel + hoogte-animatie + nieuwe rijen
      closing.body.classList.add('is-leaving');
      tlAfter(closing.body, 'opacity', 160, () => {
        if (tok !== S.phaseTok) return;
        stageAnimate(nr);
        reveal(opening);
      });
    } else {
      stageAnimate(nr, { closing: !nr, instant: instant || prefill });
      if (opening && !instant) reveal(opening);
    }

    // Scroll-engine en jaarteller voor de nieuwe fase
    S.geo = null; S.pillOn = false; S.pillWoken = false; S.hold = null;
    // bij een wissel meteen weg (anders flitst de nieuwe inhoud even over de paneeltitel)
    if (opening && prev) tlNoTransition(pill, () => pill.classList.remove('is-on'));
    else pill.classList.remove('is-on');
    if (!nr) ensureRoom();
    if (opening) {
      pill.classList.toggle('tl-p1', nr === 1);
      pill.classList.toggle('tl-p2', nr === 2);
      pill.querySelector('.tl-pill-badge').textContent = nr;
      pill.querySelector('.tl-pill-lbl').textContent = 'Fase ' + nr;
      pillOdo.set(opening.f.start);
    }
    engine();
    schedule();

    if (opt.hash) tlWriteHash(nr ? 'tijdlijn-fase-' + nr : null);
    if (jump) toChooser(true);
    else if (opt.scroll && nr && prev) {
      const cr = chooser.getBoundingClientRect();
      if (cr.top < stickPx() || cr.bottom > window.innerHeight * 0.7) toChooser(true);
    }
  }

  // De tijdlijn is de laatste sectie van de pagina. Zolang een fase open is, zorgen we
  // voor genoeg scrollruimte eronder: zo kan de kiezer helemaal onder de topbalk
  // verdwijnen (en verschijnt het pilletje met de jaarteller), ook bij een korte fase.
  const section = tl.closest('.tl-section') || tl;
  function ensureRoom() {
    const cur = parseFloat(section.style.paddingBottom) || 0;
    let extra = 0;
    if (S.open && !P[S.open].panel.hasAttribute('hidden')) {
      const p = P[S.open], ch = chooser.getBoundingClientRect();
      // Past de hele fase (met dichte items) al onder de kiezer op het scherm? Dan geen extra
      // ruimte: anders blijft er op grote schermen een lege band boven de footer.
      const li = S.item !== null ? itemEl(S.item) : null;
      const more = li && p.panel.contains(li) ? li.querySelector('.tl-more').getBoundingClientRect().height : 0;
      if (p.body.getBoundingClientRect().bottom - more - ch.top > window.innerHeight - stickPx()) {
        const docH = document.documentElement.scrollHeight - cur;
        const want = ch.bottom + window.scrollY - stickPx() + window.innerHeight + 2;
        extra = Math.max(0, Math.ceil(want - docH));
      }
    }
    if (extra !== cur && (!extra || Math.abs(extra - cur) > 1)) section.style.paddingBottom = extra ? extra + 'px' : '';
  }

  // ── Items ──
  function openItem(li, instant) {
    const i = +li.dataset.i;
    S.itemTok[i] = (S.itemTok[i] || 0) + 1;
    const more = li.querySelector('.tl-more');
    const go = () => {
      li.querySelector('.tl-row').setAttribute('aria-expanded', 'true');
      more.inert = false;
      li.querySelector('.tl-more-in').removeAttribute('hidden');
      li.classList.add('is-open');
    };
    if (instant || tlInstant()) tlNoTransition(li, go); else go();
  }
  function closeItem(i, instant) {
    const li = itemEl(i);
    if (!li) return;
    const more = li.querySelector('.tl-more'), inn = li.querySelector('.tl-more-in');
    const tok = S.itemTok[i] = (S.itemTok[i] || 0) + 1;
    li.querySelector('.tl-row').setAttribute('aria-expanded', 'false');
    const fin = () => {
      if (S.itemTok[i] !== tok) return;
      inn.setAttribute('hidden', 'until-found');
      more.inert = false;
      afterLayout();
    };
    if (instant || tlInstant()) {
      tlNoTransition(li, () => { li.classList.remove('is-open'); fin(); });
    } else {
      more.inert = true;
      li.classList.remove('is-open');
      tlAfter(more, 'grid-template-rows', 450, fin);
    }
  }
  function ensureVisible(li) {
    const r = li.getBoundingClientRect();
    const top = (S.pillOn ? stickPx() + pill.offsetHeight : stickPx()) + 12;
    if (r.bottom > window.innerHeight - 24) tlScrollBy(Math.min(r.bottom - (window.innerHeight - 24), r.top - top), true);
    else if (r.top < top) tlScrollBy(r.top - top, true);
  }
  function toggleItem(i, o = {}) {
    const li = itemEl(i);
    if (!li) return;
    const nr = faseOf(li);
    if (S.open !== nr) setPhase(nr, { instant: true, scroll: false, hash: false });
    const willOpen = o.open ?? (S.item !== i);
    S.userGesture = false;
    if (!willOpen) {
      closeItem(i, o.instant);
      S.item = null;
      if (o.hash !== false) tlWriteHash('tijdlijn-fase-' + nr);
      return;
    }
    if (S.item === i) return;
    if (S.item !== null) {
      if (S.item < i) {
        // Het open item staat erboven: dicht het meteen en compenseer de scroll, zodat
        // de aangeklikte rij pixel-stil blijft staan.
        const voor = li.getBoundingClientRect().top;
        closeItem(S.item, true);
        if (o.compensate !== false) tlScrollBy(li.getBoundingClientRect().top - voor, false);
      } else {
        closeItem(S.item, o.instant);
      }
    }
    openItem(li, o.instant);
    S.item = i;
    if (o.hash !== false) tlWriteHash('tijdlijn-' + li.dataset.jaar);
    if (o.instant || tlInstant()) { afterLayout(); if (!o.instant) ensureVisible(li); return; }
    const tok = S.itemTok[i];
    tlAfter(li.querySelector('.tl-more'), 'grid-template-rows', 450, () => {
      afterLayout();
      if (S.itemTok[i] === tok && !S.userGesture) ensureVisible(li);
    });
  }

  // ── Verder / terug ──
  function fadeThen(p, go) {
    const tok = ++S.phaseTok;
    const run = () => { if (tok === S.phaseTok) go(); };
    if (tlInstant()) { run(); return; }
    p.body.classList.add('is-leaving');
    tlAfter(p.body, 'opacity', 160, run);
  }
  function next(from) {
    const to = from + 1;
    fadeThen(P[from], () => {
      toChooser(false);
      setPhase(to, { instant: true, scroll: false });
      reveal(P[to]);
      chBtn[to].focus({ preventScroll: true });
    });
  }
  function back(nr) {
    fadeThen(P[nr], () => {
      setPhase(null, { instant: true, scroll: false });
      toChooser(false);
      if (!tlInstant()) { chooser.classList.remove('tl-arrive'); void chooser.offsetWidth; chooser.classList.add('tl-arrive'); }
      chBtn[nr].focus({ preventScroll: true });
    });
  }

  // ── Scroll-engine: rail, bolletjes en jaarteller volgen de leeslijn ──
  function measure() {
    const p = P[S.open];
    ensureRoom();
    const sy = window.scrollY;
    const ctr = el => { const r = el.getBoundingClientRect(); return r.top + r.height / 2 + sy; };
    // eerst alles lezen…
    const stick = stickPx(), pillH = pill.offsetHeight;
    const readFrac = window.innerWidth < 640 ? 0.6 : 0.55;
    const trackTop = p.track.getBoundingClientRect().top + sy;
    const pts = p.items.map(li => {
      const y = ctr(li.querySelector('.tl-dot'));
      // y2: onderkant van een open item; zolang je daarin leest, blijft de teller op dat jaar
      const y2 = li.classList.contains('is-open') ? Math.max(y, li.getBoundingClientRect().bottom + sy) : y;
      return { y, y2, jaar: +li.dataset.jaar, li, wj: li.classList.contains('tl-weetje') };
    });
    const endY = p.endDot ? ctr(p.endDot) : pts[pts.length - 1].y;
    const badge = p.nextBadge ? { y: ctr(p.nextBadge), h: p.nextBadge.offsetHeight } : null;
    const chooserBottom = chooser.getBoundingClientRect().bottom + sy;
    const panelEnd = p.body.getBoundingClientRect().bottom + sy - 24;
    const maxS = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    // …dan pas schrijven
    const railTop = pts[0].y, railH = Math.max(1, endY - railTop);
    p.rail.style.top = (railTop - trackTop) + 'px';
    p.rail.style.height = railH + 'px';
    if (p.tail && badge) p.tail.style.height = Math.max(0, badge.y - badge.h / 2 - endY - 3) + 'px';
    if (p.nr === 2) pts.forEach(pt => { if (!pt.wj) pt.li.style.setProperty('--c', tlRainbow((pt.y - railTop) / railH)); });
    S.geo = { p, pts, railTop, railH, endY, start: p.f.start, endYear: tlEind(p.f), stick, pillH, readFrac, chooserBottom, panelEnd, maxS };
  }
  function update() {
    S.ticking = false;
    if (!S.open || P[S.open].panel.hasAttribute('hidden')) return;
    if (!S.geo) measure();
    const g = S.geo, inst = tlInstant();
    const sy = window.scrollY, vh = window.innerHeight;
    // Leeslijn op 55–60% van het scherm. Onderaan de pagina is er te weinig scrollruimte om
    // de laatste mijlpalen te bereiken: daar loopt de leeslijn geleidelijk in, zodat het
    // einde precies op de maximale scroll bereikt wordt.
    const need = Math.max(0, g.endY + 2 - (g.maxS + vh * g.readFrac));
    const ramp = Math.max(1, Math.min(vh * 0.6, g.maxS - (g.railTop - vh * g.readFrac)));
    let readY = sy + vh * g.readFrac + need * Math.max(0, Math.min(1, 1 - (g.maxS - sy) / ramp));
    // Een open item dat je leest, is "nu": ring, rail en teller staan op dat jaar. Staat het
    // lager op het scherm, dan trekt het de leeslijn naar zich toe. Scrol je verder, dan laat
    // het vloeiend los: naargelang je het voorbij bent én naargelang de scrollruimte die nog
    // rest, zodat onderaan de pagina het einde altijd bereikt wordt.
    const op = g.pts.find(pt => pt.li.classList.contains('is-open'));
    if (!op) S.hold = null;
    else {
      // anker: waar het item openging, of waar onze eigen scroll (deeplink, in beeld brengen) het zette
      if (!S.hold || S.hold.li !== op.li || performance.now() - (tlScrollTo.t || 0) < 1000) S.hold = { li: op.li, sy };
      const clamp01 = v => Math.max(0, Math.min(1, v));
      const L = readY - sy, top = op.y - sy, bot = op.y2 - sy;
      if (top > L) {
        readY = sy + L + (top - L) * clamp01((vh * 0.9 - top) / (vh * 0.15));
      } else if (bot < L) {
        const T = g.stick + g.pillH + 40;
        const voorbij = clamp01(1 - (T - bot) / (vh * 0.35));
        const ruimte = g.maxS - S.hold.sy;
        const rest = ruimte > 1 ? clamp01((g.maxS - sy) / ruimte) : 1;
        readY += (op.y2 - readY) * Math.min(voorbij, rest);
      }
    }
    const f = inst ? g.railH : Math.max(0, Math.min(g.railH, readY - g.railTop));
    g.p.fill.style.clipPath = `inset(0 0 ${(g.railH - f).toFixed(1)}px 0)`;

    let cur = null;
    g.pts.forEach(pt => {
      const past = inst || pt.y <= readY;
      if (pt.li.classList.contains('is-past') !== past) pt.li.classList.toggle('is-past', past);
      if (past && !pt.wj && !inst) cur = pt;
      if (past && pt.wj && !inst && !S.zapped) { S.zapped = true; pt.li.classList.add('tl-zap'); }
    });
    g.pts.forEach(pt => {
      const c = pt === cur;
      if (pt.li.classList.contains('is-current') !== c) pt.li.classList.toggle('is-current', c);
    });
    if (g.p.end) {
      const past = inst || g.endY <= readY;
      if (g.p.end.classList.contains('is-past') !== past) g.p.end.classList.toggle('is-past', past);
      if (past && !inst && !S.rippled) { S.rippled = true; g.p.end.classList.add('tl-ripple'); }
    }

    // jaartal tussen twee bolletjes lineair interpoleren
    // (floor: het volgende jaartal verschijnt pas als dat bolletje ook echt bereikt is)
    const pts = g.p.end ? g.pts.concat([{ y: g.endY, y2: g.endY, jaar: g.endYear }]) : g.pts;
    let year = g.start;
    if (readY >= pts[pts.length - 1].y) year = g.endYear;
    else for (let k = 0; k < pts.length - 1; k++) {
      const a = pts[k], b = pts[k + 1];
      if (readY >= a.y && readY < b.y) {
        const a2 = Math.min(a.y2, b.y);
        year = readY < a2 ? a.jaar : Math.floor(a.jaar + (readY - a2) / (b.y - a2) * (b.jaar - a.jaar));
        break;
      }
    }

    // pilletje: enkel zichtbaar terwijl je in een open fase leest
    const on = sy + g.stick > g.chooserBottom && g.panelEnd - sy > g.stick + g.pillH + 24;
    if (on !== S.pillOn) { pill.classList.toggle('is-on', on); S.pillOn = on; }
    if (on && !S.pillWoken) {
      S.pillWoken = true;
      if (!inst) pillOdo.set(Math.floor(year / 100) * 100); // "wordt wakker": 1800 → 1897
    }
    pillOdo.to(year, { instant: inst || !on });
  }
  function schedule() {
    if (S.ticking || !S.open) return;
    S.ticking = true;
    requestAnimationFrame(update);
  }
  function engine() {
    const want = !!(S.open && S.near);
    if (want === S.active) return;
    S.active = want;
    if (want) { window.addEventListener('scroll', schedule, { passive: true }); schedule(); }
    else window.removeEventListener('scroll', schedule);
  }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      S.near = entries[entries.length - 1].isIntersecting;
      if (S.near) S.geo = null;
      engine();
    }, { rootMargin: '200px 0px' }).observe(tl);
  } else {
    S.near = true;
  }
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(afterLayout);
    ro.observe(shell);
    const main = document.querySelector('main');
    if (main) ro.observe(main);
  }
  window.addEventListener('resize', afterLayout);
  window.addEventListener('load', afterLayout);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(afterLayout);
  ['wheel', 'touchmove', 'keydown'].forEach(t => window.addEventListener(t, () => { S.userGesture = true; }, { passive: true }));

  // Toegankelijke modus of reduced motion live aangezet: meteen naar de eindtoestand
  const onModus = () => { if (tlInstant()) introFinish(); afterLayout(); };
  new MutationObserver(onModus).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (rm.addEventListener) rm.addEventListener('change', onModus);

  // ── Events (gedelegeerd, geen inline handlers) ──
  tl.addEventListener('click', e => {
    const t = e.target;
    const ch = t.closest('.tl-ch');
    if (ch) { const n = +ch.dataset.fase; setPhase(n === S.open ? null : n); return; }
    const row = t.closest('.tl-row');
    if (row) { toggleItem(+row.closest('.tl-item').dataset.i); return; }
    const nx = t.closest('.tl-next');
    if (nx) { next(+nx.closest('.tl-panel').dataset.fase); return; }
    const bk = t.closest('.tl-back');
    if (bk) { back(+bk.dataset.back); return; }
    if (t.closest('.tl-pill.is-on')) toChooser(true);
  });
  tl.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const li = e.target.closest && e.target.closest('.tl-item.is-open');
    if (!li) return;
    e.preventDefault();
    toggleItem(+li.dataset.i, { open: false });
    li.querySelector('.tl-row').focus();
  });
  // Ctrl+F vindt ook dichtgeklapte mijlpalen (Chromium): open dan fase en item
  tl.addEventListener('beforematch', e => {
    const t = e.target;
    if (t.classList.contains('tl-more-in')) {
      introFinish();
      toggleItem(+t.closest('.tl-item').dataset.i, { open: true, instant: true, compensate: false });
    } else if (t.classList.contains('tl-panel')) {
      introFinish();
      // Bij navigatie naar #tijdlijn-2017 vuurt dit vóór hashchange: dan de hash laten staan
      let doel = null;
      try { doel = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch (e) { /* kapotte hash */ }
      setPhase(+t.dataset.fase, { instant: true, scroll: false, hash: !(doel && t.contains(doel)) });
    }
  });

  // ── Deeplinks: #tijdlijn-fase-2 of #tijdlijn-1973 ──
  // Eén keer per pagina: zodra de bezoeker zelf iets doet, niet meer terugspringen naar
  // het deeplinkdoel (lettertypes en 'load' kunnen laat binnenkomen).
  let deepHold = true;
  ['pointerdown', 'wheel', 'touchstart', 'keydown'].forEach(t =>
    window.addEventListener(t, () => { deepHold = false; }, { once: true, passive: true, capture: true }));
  function fromHash(initial) {
    let h;
    try { h = decodeURIComponent(location.hash.slice(1)); } catch (e) { return; }
    let m, y = null;
    if ((m = /^tijdlijn-fase-(\d)$/.exec(h)) && P[+m[1]]) {
      introFinish();
      tlNoTransition(shell, () => setPhase(+m[1], { instant: true, scroll: false, hash: false }));
      y = () => chooserDocTop() - stickPx() - 4;
    } else if ((m = /^tijdlijn-(\d{4})$/.exec(h))) {
      const li = document.getElementById(h);
      if (!li || !tl.contains(li)) return;
      introFinish();
      tlNoTransition(shell, () => toggleItem(+li.dataset.i, { open: true, instant: true, compensate: false, hash: false }));
      y = () => li.getBoundingClientRect().top + window.scrollY - Math.max(0.3 * window.innerHeight, stickPx() + pill.offsetHeight + 16);
    }
    if (!y) return;
    tlScrollTo(y(), false);
    if (initial) {
      const nogEens = () => { if (deepHold) tlScrollTo(y(), false); };
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(nogEens);
      window.addEventListener('load', nogEens, { once: true });
    }
  }
  window.addEventListener('hashchange', () => fromHash(false));

  fromHash(true);
  introStart();
}

renderTijdlijn();
initTijdlijn();
