/* Goal Digger Show: shared behavior for every page */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  function rng(seed) { let s = seed >>> 0; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; }
  const reducedMQ = matchMedia('(prefers-reduced-motion: reduce)');

  /* ================================================================
     THE SHOW'S FACTS: fill these in. Nothing else needs touching.
     ================================================================ */
  const CONFIG = {
    hostName: '',
    email: '',                 // guest and partner forms open a ready-to-send email to this address
    formEndpoint: '',          // optional: a form service URL (for example Formspree). When set, forms post here instead
    links: { youtube: '', spotify: '', apple: '', instagram: '' }
  };

  /* Episodes, newest first. topic is one of: setup, money, people, growth, hard */
  const EPISODES = [
    // { no: 'EP 01', title: 'Episode title', guest: 'Guest name, Company', topic: 'setup', url: 'https://youtube.com/...' },
  ];
  const TOPIC_NAMES = { setup: 'Setup', money: 'Money', people: 'People', growth: 'Growth', hard: 'The hard part' };

  /* ---------------- facts into the page ---------------- */
  if (CONFIG.hostName) $$('[data-host]').forEach(el => { el.textContent = CONFIG.hostName; });
  else $$('.iam').forEach(el => el.remove());
  $$('[data-link]').forEach(el => {
    const url = CONFIG.links[el.dataset.link];
    if (url) { el.href = url; return; }
    el.classList.add('soon');
    el.removeAttribute('target');
    if (el.classList.contains('platform')) {
      const s = document.createElement('span');
      s.className = 'soontag'; s.textContent = 'SOON';
      const arrow = el.querySelector('svg');
      if (arrow) arrow.replaceWith(s);
    }
    if (el.classList.contains('feature')) {
      const m = el.querySelector('.meta span');
      if (m) m.textContent = 'LATEST EPISODE · ON YOUTUBE SOON';
      const sr = el.querySelector('.sr-only');
      if (sr) sr.textContent = 'Latest episode, coming to YouTube soon';
    }
  });
  $$('[data-email]').forEach(el => {
    if (!CONFIG.email) return;
    el.href = 'mailto:' + CONFIG.email;
    if (!el.textContent.trim()) el.textContent = CONFIG.email;
  });
  $$('[data-needs]').forEach(el => {
    const need = el.dataset.needs;
    const has = need === 'email' ? CONFIG.email : need === 'host' ? CONFIG.hostName : need === 'episodes' ? EPISODES.length : CONFIG.links[need];
    if (!has) el.remove();
  });
  $$('[data-hide-if]').forEach(el => {
    if (el.dataset.hideIf === 'episodes' && EPISODES.length) el.remove();
  });

  /* ---------------- nav: solid on scroll, mobile menu ---------------- */
  const nav = $('#nav');
  let navSolid = null;
  function updateNav() {
    const s = scrollY > 40;
    if (s !== navSolid) { navSolid = s; nav.classList.toggle('solid', s); }
  }
  const menuBtn = $('#menu-btn');
  const mmenu = $('#mmenu');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open) mmenu.removeAttribute('inert'); else mmenu.setAttribute('inert', '');
    if (open) { const first = mmenu.querySelector('a'); if (first) first.focus({ preventScroll: true }); }
  }
  if (menuBtn && mmenu) {
    mmenu.setAttribute('inert', '');
    menuBtn.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
    mmenu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
    addEventListener('keydown', e => { if (e.key === 'Escape' && document.body.classList.contains('menu-open')) { setMenu(false); menuBtn.focus(); } });
    matchMedia('(min-width: 901px)').addEventListener('change', e => { if (e.matches) setMenu(false); });
  }

  /* ---------------- the sound-wave skyline ---------------- */
  function skyline(n, seed) {
    const r = rng(seed);
    const towers = [
      [.03,.014,.30],[.07,.018,.44],[.11,.014,.36],[.15,.02,.56],[.195,.013,.42],[.235,.018,.50],
      [.28,.016,.38],[.325,.022,.64],[.37,.014,.46],[.41,.018,.55],[.455,.013,.40],[.50,.02,.58],[.545,.015,.47],
      [.62,.055,.26],[.62,.034,.46],[.62,.02,.68],[.62,.008,1],
      [.685,.018,.52],[.725,.014,.44],[.765,.022,.61],[.81,.016,.43],[.85,.019,.50],[.89,.014,.35],[.93,.02,.41],[.97,.015,.29]
    ];
    const out = [];
    for (let i = 0; i < n; i++) {
      const x = (i + .5) / n;
      let h = .07 + r() * .07;
      for (const [cx, hw, th] of towers) if (Math.abs(x - cx) <= hw) h = Math.max(h, th * (.93 + r() * .07));
      out.push(h);
    }
    return out;
  }
  function buildWave(host, n, seed) {
    const W = 1200, base = 170, amp = 160, gap = W / n, bw = gap * .56;
    const hs = skyline(n, seed);
    const NS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${W} 232`);
    svg.setAttribute('class', 'wave');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    const up = document.createElementNS(NS, 'g');
    const dn = document.createElementNS(NS, 'g');
    up.setAttribute('fill', '#E8E8F0');
    dn.setAttribute('class', 'refl');
    dn.setAttribute('fill', '#E8E8F0');
    hs.forEach((h, i) => {
      const x = (i * gap + (gap - bw) / 2).toFixed(2);
      const a = document.createElementNS(NS, 'rect');
      a.setAttribute('x', x); a.setAttribute('width', bw.toFixed(2)); a.setAttribute('rx', (bw / 2).toFixed(2));
      a.setAttribute('y', (base - h * amp).toFixed(1)); a.setAttribute('height', (h * amp).toFixed(1));
      a.style.setProperty('--i', (i / n).toFixed(3));
      if (h > .9) a.setAttribute('class', 'peak');
      up.appendChild(a);
      const b = document.createElementNS(NS, 'rect');
      b.setAttribute('x', x); b.setAttribute('width', bw.toFixed(2)); b.setAttribute('rx', (bw / 2).toFixed(2));
      b.setAttribute('y', base + 6); b.setAttribute('height', (h * amp * .34).toFixed(1));
      b.style.setProperty('--i', (i / n).toFixed(3));
      if (h > .9) b.setAttribute('class', 'peak');
      dn.appendChild(b);
    });
    svg.append(up, dn);
    host.appendChild(svg);
    return svg;
  }
  const waves = {};
  $$('[data-wave]').forEach((el, k) => { waves[el.dataset.wave] = buildWave(el, el.dataset.wave === 'footer' ? 72 : 132, 7 + k); });

  /* ---------------- brand ticker: gapless loop ---------------- */
  const mtrack = $('#mtrack');
  if (mtrack) {
    const mset = [...mtrack.children];
    let g = 0;
    while (mtrack.scrollWidth < 2800 && g++ < 6) mset.forEach(n => mtrack.appendChild(n.cloneNode(true)));
    [...mtrack.children].forEach(n => mtrack.appendChild(n.cloneNode(true)));
  }

  /* ---------------- episode strips ---------------- */
  $$('.strip').forEach((el, k) => {
    const r = rng(500 + k);
    for (let i = 0; i < 18; i++) {
      const b = document.createElement('i');
      b.style.setProperty('--h', (.25 + r() * .75).toFixed(2));
      b.style.setProperty('--dl', (-r() * 2.2).toFixed(2) + 's');
      el.appendChild(b);
    }
  });

  /* ---------------- episodes: cards, library, filters ---------------- */
  function epCard(ep) {
    const a = document.createElement('a');
    a.className = 'ep';
    a.href = ep.url; a.target = '_blank'; a.rel = 'noopener';
    a.dataset.topic = ep.topic || '';
    a.innerHTML = '<span class="no"></span> <span class="tag"></span><h4></h4><p></p>';
    a.querySelector('.no').textContent = ep.no || '';
    const tag = a.querySelector('.tag');
    if (TOPIC_NAMES[ep.topic]) tag.textContent = TOPIC_NAMES[ep.topic]; else tag.remove();
    a.querySelector('h4').textContent = ep.title;
    a.querySelector('p').textContent = ep.guest || '';
    return a;
  }
  const more = $('#more');
  if (more) EPISODES.slice(0, 3).forEach(ep => more.appendChild(epCard(ep)));
  const lib = $('#eplist');
  if (lib) EPISODES.forEach(ep => lib.appendChild(epCard(ep)));
  const filterBtns = $$('.filter');
  if (filterBtns.length) {
    const pool = () => [...$$('#eplist .ep'), ...$$('#qgrid .qcard')];
    filterBtns.forEach(btn => btn.addEventListener('click', () => {
      const t = btn.dataset.filter;
      filterBtns.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
      pool().forEach(card => {
        const show = t === 'all' || card.dataset.topic === t;
        card.hidden = !show;
        card.classList.remove('pop');
        if (show && !reducedMQ.matches) { void card.offsetWidth; card.classList.add('pop'); }
      });
      const count = $('#filtercount');
      if (count) {
        const n = $$('#qgrid .qcard').filter(c => !c.hidden).length;
        count.textContent = n + (n === 1 ? ' topic' : ' topics');
      }
    }));
  }

  /* ---------------- entrances + living elements ---------------- */
  const revealIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.classList.add('in');
      revealIO.unobserve(el);
      const maxD = $$('.part', el).reduce((m, p) => Math.max(m, Number(p.style.getPropertyValue('--d')) || 0), 0);
      setTimeout(() => el.classList.add('done'), 1000 + maxD * 90 + 200);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.06 });
  $$('.reveal').forEach(el => revealIO.observe(el));

  const liveIO = new IntersectionObserver(entries => {
    entries.forEach(e => e.target.classList.toggle('live', e.isIntersecting));
  }, { rootMargin: '10% 0px' });
  $$('[data-live]').forEach(el => liveIO.observe(el));

  document.addEventListener('visibilitychange', () => document.body.classList.toggle('paused', document.hidden));

  const qIO = new IntersectionObserver(entries => {
    entries.forEach(e => e.target.classList.toggle('active', e.isIntersecting));
  }, { rootMargin: '-49% 0px -50% 0px' });
  $$('#qlist li').forEach(li => qIO.observe(li));

  /* ---------------- scroll-drawn elements (waves, step lines) ---------------- */
  const scrubbers = $$('[data-scrub]').map(el => ({ el, p: -1, on: false }));
  let scrubQueued = false, pinned = false;
  const scrubIO = new IntersectionObserver(entries => {
    entries.forEach(e => { const s = scrubbers.find(x => x.el === e.target); if (s) s.on = e.isIntersecting; });
    queueScrub();
  }, { rootMargin: '5% 0px' });
  scrubbers.forEach(s => scrubIO.observe(s.el));
  function queueScrub() { if (!scrubQueued && !pinned && scrubbers.length) { scrubQueued = true; requestAnimationFrame(runScrub); } }
  function runScrub() {
    scrubQueued = false;
    const vh = innerHeight;
    const maxScroll = document.documentElement.scrollHeight - vh;
    scrubbers.forEach(s => {
      if (!s.on) return;
      const r = s.el.getBoundingClientRect();
      const endTop = Math.max(r.top - (maxScroll - scrollY), vh * .4);   // finish by mid-screen, or by the page bottom
      const p = clamp((vh - r.top) / Math.max(1, vh - endTop), 0, 1);
      const q = Math.round(p * 200) / 200;
      if (q !== s.p) { s.p = q; s.el.style.setProperty('--p', q); }
    });
  }
  addEventListener('scroll', () => { updateNav(); queueScrub(); }, { passive: true });
  addEventListener('resize', queueScrub, { passive: true });

  /* ---------------- hold to go on air (guest page) ---------------- */
  const holdBtn = $('#hold');
  const onair = $('#onair');
  let aired = false, airRaf = null, pinAired = false;
  let completeAir = () => {}, resetAir = () => {};
  if (holdBtn && onair) {
    const airWave = waves.air;
    const ringHolder = $('.holder', onair);
    let holdP = 0, holding = false, airLast = 0, lastAirP = -1;
    const writeAir = () => {
      const q = Math.round(holdP * 400) / 400;
      if (q === lastAirP) return;
      lastAirP = q;
      ringHolder.style.setProperty('--p', q);
      if (airWave) airWave.style.setProperty('--p', q);
    };
    const airTick = now => {
      const dt = Math.min(100, now - (airLast || now));
      airLast = now;
      if (holding) holdP = Math.min(1, holdP + dt / 1700);
      else holdP = Math.max(0, holdP - (dt / 1100) * (0.35 + holdP));
      writeAir();
      if (holdP >= 1 && !aired) completeAir();
      if ((holding && holdP < 1) || (!holding && holdP > 0 && !aired)) airRaf = requestAnimationFrame(airTick);
      else { airRaf = null; airLast = 0; }
    };
    const startAir = () => { if (airRaf === null) airRaf = requestAnimationFrame(airTick); };
    completeAir = () => {
      aired = true; holding = false;
      holdP = 1; writeAir();
      onair.classList.add('aired');
      holdBtn.classList.remove('pressing');
      holdBtn.querySelector('span').textContent = 'LIVE';
      holdBtn.setAttribute('aria-pressed', 'true');
    };
    resetAir = () => {
      aired = false; holdP = 0; lastAirP = -1; writeAir();
      onair.classList.remove('aired');
      holdBtn.querySelector('span').textContent = 'HOLD';
      holdBtn.removeAttribute('aria-pressed');
    };
    const press = e => {
      if (aired) return;
      if (e && e.cancelable) e.preventDefault();
      holding = true; holdBtn.classList.add('pressing'); startAir();
    };
    const release = () => {
      if (!holding) return;
      holding = false; holdBtn.classList.remove('pressing'); startAir();
    };
    holdBtn.addEventListener('pointerdown', e => { if (holdBtn.setPointerCapture) holdBtn.setPointerCapture(e.pointerId); press(e); });
    holdBtn.addEventListener('pointerup', release);
    holdBtn.addEventListener('pointercancel', release);
    holdBtn.addEventListener('lostpointercapture', release);
    holdBtn.addEventListener('contextmenu', e => e.preventDefault());
    holdBtn.addEventListener('keydown', e => { if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) press(e); else if (e.key === ' ' || e.key === 'Enter') e.preventDefault(); });
    holdBtn.addEventListener('keyup', e => { if (e.key === ' ' || e.key === 'Enter') release(); });
    holdBtn.addEventListener('blur', release);
  }

  /* ---------------- dust in the studio light ---------------- */
  const dusts = $$('canvas.dust').map(c => ({ c, ctx: c.getContext('2d'), raf: null, on: false, motes: [] }));
  function sizeDust(d) {
    const dpr = Math.min(2, devicePixelRatio || 1);
    d.c.width = d.c.clientWidth * dpr; d.c.height = d.c.clientHeight * dpr;
    d.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const r = rng(77);
    d.motes = Array.from({ length: 46 }, () => ({ x: r() * d.c.clientWidth, y: r() * d.c.clientHeight, s: .6 + r() * 1.6, v: .08 + r() * .22, a: .15 + r() * .45, ph: r() * 6.28 }));
  }
  function dustTick(d, now) {
    const w = d.c.clientWidth, h = d.c.clientHeight;
    d.ctx.clearRect(0, 0, w, h);
    for (const m of d.motes) {
      m.y -= m.v; m.x += Math.sin(now / 3000 + m.ph) * .12;
      if (m.y < -4) m.y = h + 4;
      d.ctx.globalAlpha = m.a * (.6 + .4 * Math.sin(now / 1800 + m.ph));
      d.ctx.fillStyle = '#E8C96E';
      d.ctx.beginPath(); d.ctx.arc(m.x, m.y, m.s, 0, 6.283); d.ctx.fill();
    }
    d.raf = requestAnimationFrame(t => dustTick(d, t));
  }
  const stopDust = () => dusts.forEach(d => { if (d.raf !== null) { cancelAnimationFrame(d.raf); d.raf = null; } });
  const startDust = () => dusts.forEach(d => {
    if (d.on && !pinned && !document.hidden && !reducedMQ.matches && d.raf === null) d.raf = requestAnimationFrame(t => dustTick(d, t));
  });
  dusts.forEach(d => new IntersectionObserver(es => {
    d.on = es[0].isIntersecting;
    if (d.on) { if (!d.motes.length) sizeDust(d); startDust(); }
    else if (d.raf !== null) { cancelAnimationFrame(d.raf); d.raf = null; }
  }).observe(d.c));
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopDust(); else startDust(); });
  addEventListener('resize', () => dusts.forEach(d => { if (d.motes.length) sizeDust(d); }), { passive: true });

  /* ---------------- forms ---------------- */
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  async function deliver(kind, data) {
    if (CONFIG.formEndpoint) {
      const res = await fetch(CONFIG.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ form: kind, ...data }) });
      if (!res.ok) throw new Error('send failed');
      return 'sent';
    }
    if (CONFIG.email && kind !== 'subscribe') {
      const subject = { guest: 'Guest application', contact: 'Website message' }[kind] || 'Website message';
      const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join('\n');
      location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject + (data.Name ? ': ' + data.Name : ''))}&body=${encodeURIComponent(body)}`;
      return 'mailto';
    }
    return 'preview';
  }

  // newsletter
  $$('form.subform').forEach(form => {
    const note = $('.note', form);
    const input = $('input[type="email"]', form);
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const email = input.value.trim();
      if (!EMAIL_RE.test(email)) {
        note.textContent = 'That email doesn’t look right. Try again?';
        note.classList.add('err'); input.focus(); return;
      }
      note.textContent = ''; note.classList.remove('err');
      try { await deliver('subscribe', { Email: email }); form.closest('.subwrap').classList.add('sent'); }
      catch { note.textContent = 'Something went wrong. Please try again in a moment.'; note.classList.add('err'); }
    });
  });

  // guest application + contact
  $$('form.bigform').forEach(form => {
    const card = form.closest('.formcard');
    const note = $('.fnote', form);
    const btn = $('button[type="submit"]', form);
    form.addEventListener('submit', async e => {
      e.preventDefault();
      let firstBad = null;
      $$('.fld', form).forEach(f => {
        const input = $('input, textarea, select', f);
        const val = input.value.trim();
        const bad = (input.required && !val) || (input.type === 'email' && val && !EMAIL_RE.test(val));
        f.classList.toggle('bad', bad);
        input.setAttribute('aria-invalid', String(bad));
        if (bad && !firstBad) firstBad = input;
      });
      if (firstBad) {
        note.textContent = 'Please fill in the highlighted fields.';
        note.classList.add('err'); firstBad.focus(); return;
      }
      note.textContent = ''; note.classList.remove('err');
      const data = {};
      $$('.fld', form).forEach(f => {
        const input = $('input, textarea, select', f);
        const label = $('label', f).textContent.replace('*', '').trim();
        if (input.value.trim()) data[label] = input.value.trim();
      });
      btn.disabled = true;
      try {
        const how = await deliver(form.dataset.kind, data);
        if (how === 'mailto') $('.fsuccess p', card).textContent = 'Your email app should open with everything filled in. Press send and it’s on its way.';
        card.classList.add('sent');
        card.scrollIntoView({ behavior: reducedMQ.matches ? 'auto' : 'smooth', block: 'center' });
      } catch {
        note.textContent = 'Something went wrong. Please try again in a moment.';
        note.classList.add('err');
      } finally { btn.disabled = false; }
    });
    $$('input, textarea, select', form).forEach(input => input.addEventListener('input', () => {
      const f = input.closest('.fld');
      if (f.classList.contains('bad') && input.value.trim()) { f.classList.remove('bad'); input.setAttribute('aria-invalid', 'false'); }
    }));
  });

  /* ---------------- reduced motion, live in both directions ---------------- */
  function pinToFinalStates() {
    pinned = true;
    document.body.classList.add('pinned');
    scrubbers.forEach(s => { s.p = 1; s.el.style.setProperty('--p', 1); });
    $$('.reveal').forEach(el => el.classList.add('in', 'done'));
    if (holdBtn && !aired) { pinAired = true; completeAir(); }
    if (airRaf !== null) { cancelAnimationFrame(airRaf); airRaf = null; }
    stopDust();
  }
  function unpinFinalStates() {
    pinned = false;
    document.body.classList.remove('pinned');
    scrubbers.forEach(s => { s.p = -1; });
    if (pinAired) { pinAired = false; resetAir(); }
    queueScrub();
    startDust();
  }
  reducedMQ.addEventListener('change', e => { if (e.matches) pinToFinalStates(); else unpinFinalStates(); });

  /* ---------------- footer year, go ---------------- */
  $$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  updateNav();
  if (reducedMQ.matches) pinToFinalStates();
  queueScrub();
})();
