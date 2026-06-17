/* ==========================================================
   UAE FOUNDERS' STORIES — Application Logic
   "The hard part creates real founders"
   "Built by ambition, not luck"
   ========================================================== */

// ── Founder Data ──────────────────────────────────────────────
const founders = [
  {
    id: 1,
    name: "Mudassir Sheikha",
    company: "Careem",
    industry: "Tech",
    founded: 2012,
    image: "assets/mudassir_sheikha.png",
    quote: "We didn't build Careem to be rich. We built it because nobody else was solving this problem.",
    shortHardPart: "Pitching to over 40 investors who all said no — while paying drivers from personal savings and sleeping in the office.",
    fullHardPart: "Before Careem became a $3.1 billion unicorn, Mudassir Sheikha and Magnus Olsson were rejected by every investor they approached in the Gulf. They burned through their personal funds paying driver incentives, running operations with no guarantee of survival. The duo operated out of a tiny office, working 18-hour days, building technology with a team of four. The regional tech ecosystem didn't believe ride-hailing could work in the MENA landscape — the roads were different, the culture was different, and the risk was enormous.",
    ambitionStory: "Rather than retreat, Sheikha doubled down on a singular belief: that building reliable transportation in this region would unlock economic opportunity for hundreds of thousands of people. He wasn't chasing valuation — he was chasing impact. That clarity of mission attracted talent, then capital, then 33 million users across 15 countries. When Uber acquired Careem in 2019 for $3.1 billion, it became the largest technology acquisition in MENA history.",
    milestones: [
      { year: "2012", event: "Founded Careem in Dubai with $10,000 of personal capital." },
      { year: "2015", event: "Reached 1 million users; expanded to 10 cities across MENA." },
      { year: "2018", event: "Achieved unicorn status, valuation surpassed $1 billion." },
      { year: "2019", event: "Acquired by Uber for $3.1 billion — the largest MENA tech exit ever." },
    ]
  },
  {
    id: 2,
    name: "Abdallah Abu Sheikh",
    company: "Huspy",
    industry: "FinTech",
    founded: 2020,
    image: "assets/abdallah_abu_sheikh.png",
    quote: "Real estate in the UAE was broken. Broken systems are just business opportunities that haven't been claimed yet.",
    shortHardPart: "Launching a proptech startup during the height of COVID-19, when the real estate market was frozen solid and investors were pulling back across the board.",
    fullHardPart: "Abdallah Abu Sheikh launched Huspy in 2020 — perhaps the worst moment imaginable for a UAE real estate platform. The pandemic had shuttered open houses, frozen mortgage approvals, and sent investor confidence plummeting. Banks were tightening credit. Buyers were scared. The entire industry was in stasis. He had a clear vision but no traction, no trust from banks, and a market that had temporarily ceased to exist.",
    ambitionStory: "Abu Sheikh saw the paralysis not as a threat but as an opportunity to rebuild the infrastructure from scratch. He negotiated directly with banks to create seamless digital mortgage pipelines, built a transparent pricing engine, and digitized the end-to-end home buying journey. When the market recovered, Huspy was already the rails it ran on. Within three years, Huspy processed over $1 billion in home loans and expanded to Spain, cementing itself as the digital mortgage broker of the Gulf.",
    milestones: [
      { year: "2020", event: "Founded Huspy in Dubai during peak pandemic uncertainty." },
      { year: "2021", event: "Raised $37M Series A led by Sequoia Capital India." },
      { year: "2022", event: "Expanded to Spain; processed over AED 1B in home loans." },
      { year: "2023", event: "Achieved profitability in UAE market and launched B2B mortgage platform." },
    ]
  },
  {
    id: 3,
    name: "Sana Afouaiz",
    company: "Womenpreneur",
    industry: "Social Impact",
    founded: 2016,
    image: "assets/sana_afouaiz.png",
    quote: "The system wasn't built for us. So we built a new one.",
    shortHardPart: "Building a women's entrepreneurship movement across the Arab world with no funding, no institutional backing, and working against deeply entrenched cultural resistance.",
    fullHardPart: "When Sana Afouaiz started Womenpreneur in Brussels with a focus on the Arab world, she had nothing but a vision and a conviction that women entrepreneurs in the region were invisible not because they didn't exist — but because no platform had been built to see them. She ran the first events entirely self-funded, was told repeatedly her work was 'too niche', and faced cultural skepticism about whether professional women's networks were appropriate in Arab markets.",
    ambitionStory: "She ignored the skepticism and let results speak. By building safe, professional, and culturally attuned spaces for Arab women founders, Afouaiz created a movement that now spans 47 countries, has connected over 40,000 women entrepreneurs, and has been recognized by Forbes, the EU, and the UN. Her work proves that community infrastructure — built with ambition, not budget — can unlock human capital that entire economies had left on the table.",
    milestones: [
      { year: "2016", event: "Founded Womenpreneur initiative in Brussels; first cohort of 30 women." },
      { year: "2018", event: "Expanded into MENA markets; partnerships with UN Women and EU." },
      { year: "2020", event: "Recognized by Forbes as one of the most powerful women in social entrepreneurship." },
      { year: "2023", event: "Network reached 40,000+ women entrepreneurs across 47 countries." },
    ]
  },
  {
    id: 4,
    name: "Morhaf Jouejati",
    company: "Kitopi",
    industry: "F&B Tech",
    founded: 2018,
    image: "assets/rabea_ataya.png",
    quote: "We bet on a thesis no one believed in: that cloud kitchens would eat the world.",
    shortHardPart: "Convincing restaurant brands to trust an invisible kitchen model — no dining room, no street presence, just an algorithmic promise that food quality and delivery speed would hold.",
    fullHardPart: "When Kitopi co-founders pitched the cloud kitchen model in 2018, most restaurant chains laughed them out of meetings. The idea of cooking a restaurant's food in a shared ghost kitchen, managed by someone else's technology, was deeply counterintuitive to chefs and brand managers who had spent years building physical identities. The founding team burned through the first $1 million quickly, chasing operational perfection in a model that had never been proven at scale in the Middle East.",
    ambitionStory: "The bet paid off when the pandemic vindicated every assumption. Kitopi's managed cloud kitchen platform became the fastest-growing food tech company in MENA, powering 200+ brands across 8 countries. In 2021 it raised a $415M Series C at a $1 billion valuation — becoming MENA's first cloud kitchen unicorn. The founders didn't succeed despite the hard part. They succeeded because the hard part forced them to build better operations than anyone else in the world.",
    milestones: [
      { year: "2018", event: "Launched first cloud kitchen in Dubai with 3 partner brands." },
      { year: "2020", event: "COVID-19 accelerated demand; scaled to 50+ brands across UAE." },
      { year: "2021", event: "Raised $415M Series C — became MENA's first cloud kitchen unicorn." },
      { year: "2023", event: "Operating 200+ brands across 8 countries with proprietary SmartKitchen OS." },
    ]
  },
  {
    id: 5,
    name: "Ashut Kumar Singh",
    company: "ARC Global",
    industry: "Services",
    founded: 2018,
    image: "assets/ashutosh_kumar_singh.jpg",
    quote: "In the manpower industry, we aren't just placing people; we are building the human infrastructure of a nation. Trust is the only currency that scales.",
    shortHardPart: "Scaling a massive manpower operations business from scratch, navigating complex regulatory compliances, and meeting payroll while waiting for corporate payment cycles.",
    fullHardPart: "When Ashut Kumar Singh set out to establish ARC Global, the manpower and outsourcing landscape was highly competitive and dominated by legacy players. Starting with limited resources, Ashut had to navigate the intricate and strict labor regulations of the UAE, ensuring absolute compliance and welfare standards for hundreds of workers, which required huge upfront capital. In the early stages, meeting payroll while waiting for 90-day corporate payment cycles on infrastructure projects was a constant struggle that brought the company to the brink multiple times.",
    ambitionStory: "Rather than cutting corners, Ashut focused on transparency, worker welfare, and digital tracking systems to build a reputation for absolute reliability. He personally visited project sites, listened to workers, and earned the trust of major developers. Today, ARC Global supplies thousands of skilled and technical personnel across Civil, MEP, and BIM sectors, playing a silent but vital role in building the UAE's modern skyline. His journey proves that when you focus on human dignity and operational integrity, you can scale a massive service empire from scratch.",
    milestones: [
      { year: "2018", event: "Founded ARC Global to modernize manpower services in the UAE." },
      { year: "2020", event: "Navigated the pandemic by retaining workforce and securing essential projects." },
      { year: "2022", event: "Scaled the workforce to 1,000+ active skilled personnel across the UAE." },
      { year: "2024", event: "Expanded services into BIM and advanced technical outsourcing." },
    ]
  }
];

// ── State ──────────────────────────────────────────────────────
let activeFilter = 'All';
let activeFounderId = null;
let isMenuOpen = false;

// ── DOM References ─────────────────────────────────────────────
const storiesGrid    = document.getElementById('stories-grid');
const filterButtons  = document.querySelectorAll('.filter-btn');
const modalOverlay   = document.getElementById('modal-overlay');
const modalDrawer    = document.getElementById('modal-drawer');
const modalClose     = document.getElementById('modal-close');
const navbar         = document.getElementById('navbar');
const hamburger      = document.getElementById('hamburger');
const mobileMenu     = document.getElementById('mobile-menu');
const submitForm     = document.getElementById('submit-form');
const formSuccess    = document.getElementById('form-success');
const heroParticles  = document.getElementById('hero-particles');

// ── Render Founders ────────────────────────────────────────────
function renderFounders(filter = 'All') {
  const filtered = filter === 'All'
    ? founders
    : founders.filter(f => f.industry === filter);

  storiesGrid.innerHTML = '';

  if (filtered.length === 0) {
    storiesGrid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-muted);">
        <div style="font-size:2rem;margin-bottom:12px;">🔍</div>
        <p>No founders found in this category yet.</p>
      </div>`;
    return;
  }

  filtered.forEach((founder, index) => {
    const card = document.createElement('article');
    card.className = 'founder-card';
    card.style.animationDelay = `${index * 0.08}s`;
    card.setAttribute('data-id', founder.id);
    card.setAttribute('aria-label', `Read ${founder.name}'s story`);
    card.innerHTML = `
      <div class="founder-card__image-wrap">
        <img
          class="founder-card__image"
          src="${founder.image}"
          alt="${founder.name} — ${founder.company} founder"
          loading="lazy"
          onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22240%22 viewBox=%220 0 400 240%22%3E%3Crect fill=%22%23111118%22 width=%22400%22 height=%22240%22/%3E%3Ccircle cx=%22200%22 cy=%2290%22 r=%2240%22 fill=%22%231e1e2e%22/%3E%3Crect x=%22140%22 y=%22150%22 width=%22120%22 height=%2260%22 rx=%2230%22 fill=%22%221e1e2e%22/%3E%3C/svg%3E'"
        />
        <span class="founder-card__industry-tag">${founder.industry}</span>
      </div>
      <div class="founder-card__body">
        <h3 class="founder-card__name">${founder.name}</h3>
        <div class="founder-card__company">Founder, ${founder.company}</div>
        <p class="founder-card__hard-part">${founder.shortHardPart}</p>
        <blockquote class="founder-card__quote">"${founder.quote}"</blockquote>
        <div class="founder-card__footer">
          <span class="founder-card__read-more">
            Read Full Story
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
          <span class="founder-card__year">Est. ${founder.founded}</span>
        </div>
      </div>`;
    card.addEventListener('click', () => openModal(founder.id));
    storiesGrid.appendChild(card);
  });
}

// ── Filter Logic ───────────────────────────────────────────────
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderFounders(activeFilter);
  });
});

// ── Modal ──────────────────────────────────────────────────────
function openModal(id) {
  const founder = founders.find(f => f.id === id);
  if (!founder) return;
  activeFounderId = id;

  document.getElementById('modal-industry').textContent  = founder.industry;
  document.getElementById('modal-name').textContent      = founder.name;
  document.getElementById('modal-company').textContent   = `Founder & CEO, ${founder.company}`;
  document.getElementById('modal-quote').textContent     = `"${founder.quote}"`;
  document.getElementById('modal-hard-part').textContent = founder.fullHardPart;
  document.getElementById('modal-ambition').textContent  = founder.ambitionStory;

  const heroImg = document.getElementById('modal-hero-image');
  heroImg.src = founder.image;
  heroImg.alt = `${founder.name} — ${founder.company}`;

  const milestonesList = document.getElementById('modal-milestones');
  milestonesList.innerHTML = founder.milestones.map(m => `
    <div class="milestone">
      <span class="milestone__year">${m.year}</span>
      <p class="milestone__text">${m.event}</p>
    </div>`).join('');

  modalOverlay.classList.add('open');
  modalDrawer.classList.add('open');
  document.body.classList.add('modal-open');
  setTimeout(() => modalClose.focus(), 350);
}

function closeModal() {
  modalOverlay.classList.remove('open');
  modalDrawer.classList.remove('open');
  document.body.classList.remove('modal-open');
  activeFounderId = null;
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && activeFounderId) closeModal();
  if (e.key === 'Escape' && isMenuOpen) toggleMenu();
});

// ── Navbar Scroll ──────────────────────────────────────────────
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ── Mobile Menu ────────────────────────────────────────────────
function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  mobileMenu.classList.toggle('open', isMenuOpen);
  hamburger.setAttribute('aria-expanded', isMenuOpen);
  document.body.classList.toggle('no-scroll', isMenuOpen);

  const spans = hamburger.querySelectorAll('span');
  if (isMenuOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity   = '1';
    spans[2].style.transform = '';
  }
}

hamburger.addEventListener('click', toggleMenu);

document.querySelectorAll('.mobile-menu__link').forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) toggleMenu();
  });
});

// ── Form Submission ────────────────────────────────────────────
submitForm.addEventListener('submit', e => {
  e.preventDefault();
  const btn = submitForm.querySelector('.form-submit-btn');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate async submission
  setTimeout(() => {
    submitForm.style.display = 'none';
    formSuccess.classList.add('show');
  }, 1600);
});

// ── Scroll Reveal ──────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .manifesto-pillar').forEach(el => {
  revealObserver.observe(el);
});

// ── Marquee duplication ────────────────────────────────────────
const track = document.querySelector('.marquee-track');
if (track) {
  const clone = track.cloneNode(true);
  track.parentElement.appendChild(clone);
}

// ── Stats counter animation ────────────────────────────────────
function animateCounter(el, target, suffix = '') {
  const duration = 2000;
  const start    = performance.now();
  const startVal = 0;

  function step(ts) {
    const progress = Math.min((ts - start) / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3);
    const current  = Math.round(startVal + (target - startVal) * ease);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    animateCounter(el, target, suffix);
    statsObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => {
  statsObserver.observe(el);
});

// ── Cursor glow on cards ───────────────────────────────────────
document.addEventListener('mousemove', e => {
  document.querySelectorAll('.founder-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width)  * 100;
    const y = ((e.clientY - rect.top)  / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  });
});

// ── Hero parallax grid on mousemove ───────────────────────────
const heroGrid = document.querySelector('.hero__grid');
if (heroGrid) {
  document.querySelector('.hero')?.addEventListener('mousemove', e => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    heroGrid.style.transform = `translate(${dx * -10}px, ${dy * -10}px)`;
  });
}

// ── Smooth scroll for anchor links ───────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Init ──────────────────────────────────────────────────────
renderFounders();
