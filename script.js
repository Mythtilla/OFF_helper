/* =========================================================================
   OFF — Open Freedom Forum
   script.js
   -------------------------------------------------------------------------
   ALL EDITABLE PROJECT DATA LIVES IN SECTION 1 BELOW.
   Sections:
     1.  Config & data  (EDIT ME)
     2.  Utilities
     3.  Theme
     4.  Navigation
     5.  Links
     6.  Story
     7.  Beliefs
     8.  World flow
     9.  Status board + filters
     10. Roadmap
     11. Comparison table
     12. Changelog
     13. Forms
     14. FAQ
     15. Donation / UPI
     16. Modal
     17. Toast
     18. Reveal on scroll
     19. Active nav + header
     20. Back to top
     21. Init
   ========================================================================= */

'use strict';

/* =========================================================================
   1. CONFIG & DATA  —  EDIT ME
   ========================================================================= */

const OFF_CONFIG = {
  name:        'OFF',
  fullName:    'Open Freedom Forum',
  tagline:     'A place to be your real self.',

  /* --- App ----------------------------------------------------------- */
  appUrl: 'https://off_helper.testingver.workers.dev',  // where OFF will live (not open yet)

  /* --- Support -------------------------------------------------------- */
  upiId:   '7088411468@fam',
  qrImage: 'off-upi-qr.jpg',

  /* --- Forms ---------------------------------------------------------- */
  // FormSubmit.co relay for the "email me" and "get involved" forms.
  formEndpoint: 'https://formsubmit.co/ajax/bhaskarz01022011@gmail.com',

  /* --- Links ---------------------------------------------------------- */
  githubUrl:             'https://github.com/Mythtilla/OFF_helper',
  instagramUrl:          'https://www.instagram.com/off_pvy/',
  personalInstagramUrl:  'https://www.instagram.com/bhaskarr_dgaf/',
  contactUrl:            'https://ig.me/m/off_pvy'
};

/* -------------------------------------------------------------------------
   MY STORY — real, written in the first person. Edit freely.
   ------------------------------------------------------------------------- */
const STORY = [
  {
    num: '01',
    title: 'The internet wasn\u2019t safe by default',
    body: 'I kept noticing the same thing: the apps everyone uses don\u2019t really protect people. Instagram removing DM encryption. Phone numbers, emails, any small personal detail — anything that can be used to find you, track you, or hurt you. It felt wrong. And I kept asking the same question: why isn\u2019t there a place where everyone can just feel safe?'
  },
  {
    num: '02',
    title: 'So I decided to build it',
    body: 'There\u2019s a gap between \u201csomeone should build this\u201d and \u201cI will build this\u201d — and most ideas die in that gap. I\u2019m 15, I\u2019m still learning to code, and I don\u2019t have money for fancy tools. So I use what\u2019s free. That was the whole start: an idea, a lot of notes, and trying anyway.'
  },
  {
    num: '03',
    title: 'The first version is small — on purpose',
    body: 'Right now OFF lets you make an account, step into the World chat, and set up a profile. Just those three things. It\u2019s not much yet, but it\u2019s a real place that exists — and everything else gets built on top of it, one piece at a time.'
  },
  {
    num: '04',
    title: 'What\u2019s actually hard',
    body: 'Honesty: I\u2019m building on free tools and learning as I go. The UI and UX have to feel right or nobody will stay. The system flow has to make sense. I write everything down, work through every screen, and rewrite the parts that aren\u2019t good enough. It\u2019s slow. That\u2019s fine — it\u2019s how things get built properly.'
  },
  {
    num: '05',
    title: 'The next few weeks',
    body: 'Country chats, language chats, group chats, friends, private messages, message requests, blocking, reporting, privacy settings, themes, notifications, mobile fixes, search. When those are in place, OFF opens its doors for the first time.'
  },
  {
    num: '06',
    title: 'Why I keep going',
    body: 'Because a place where people can drop their masks and say what they actually think — safely, anonymously — should exist. And because building something of my own, from nothing, matters to me. I want people to open OFF and think \u201cwhat the hell is this?\u201d — and then stay.'
  }
];

/* -------------------------------------------------------------------------
   WHAT OFF BELIEVES
   ------------------------------------------------------------------------- */
const BELIEFS = [
  { title: 'Anonymity is the point', body: 'People should be able to share their real thoughts without being found, tracked, or punished for it. Not a setting — the reason OFF exists.' },
  { title: 'Brutally honest, not hurtful', body: 'An honest community means people can disagree, even sharply. It doesn\u2019t mean cruelty gets a home. Difference and decency can both fit.' },
  { title: 'People over engagement', body: 'No endless feeds, no scoreboards, no algorithm ranking who matters. The goal is talking to people — not keeping them on a screen.' },
  { title: 'Collect as little as possible', body: 'The less OFF knows about anyone, the less there is to misuse. Fewer details stored, fewer risks created.' },
  { title: 'Claims follow implementation', body: 'If OFF can\u2019t prove something yet — like real end-to-end encryption — the site says so. Trust is built by telling the truth.' },
  { title: 'Built in public, one person at a time', body: 'No board, no marketing team, no launch hype. One person, building carefully, guided by real feedback from real people.' }
];

/* -------------------------------------------------------------------------
   THE WORLD OF OFF — how public and private connect
   ------------------------------------------------------------------------- */
const WORLD_FLOW = [
  { num: '01', title: 'The World', body: 'One open public space where anyone can talk, right from the start.', accent: true },
  { num: '02', title: 'Country chat', body: 'Rooms for your country — find people close to home.', accent: false },
  { num: '03', title: 'Language chat', body: 'Rooms in your language — conversation that feels natural.', accent: false },
  { num: '04', title: 'Group chats', body: 'Create a group around anything and share it with the World.', accent: false },
  { num: '05', title: 'Friends', body: 'When someone matters, add them as a friend.', accent: false },
  { num: '06', title: 'Private conversation', body: 'Just the two of you. This is where people actually get to know each other.', accent: true }
];

/* -------------------------------------------------------------------------
   STATUS BOARD — what exists, what\u2019s being built, what\u2019s intended, what\u2019s an idea.
   status: 'live' | 'building' | 'planned' | 'exploring'
   ------------------------------------------------------------------------- */
const STATUS_GROUPS = [
  {
    title: 'Live today',
    items: [
      { name: 'Create an account', desc: 'Sign up and get in.', status: 'live' },
      { name: 'The World chat', desc: 'Open public conversation, right now.', status: 'live' },
      { name: 'Profiles', desc: 'Present yourself the way you choose.', status: 'live' }
    ]
  },
  {
    title: 'Being built right now',
    items: [
      { name: 'UI & UX refinement', desc: 'Making OFF feel right, screen by screen.', status: 'building' },
      { name: 'Private conversations', desc: 'One-to-one messaging between people.', status: 'building' },
      { name: 'Group chats', desc: 'Rooms for a few people — or many.', status: 'building' },
      { name: 'Profile settings', desc: 'More control over how you appear.', status: 'building' },
      { name: 'Mobile experience', desc: 'OFF must work properly on a phone.', status: 'building' }
    ]
  },
  {
    title: 'Planned — intended for and after the first release',
    items: [
      { name: 'Country chats', desc: 'Rooms organised by country.', status: 'planned' },
      { name: 'Language chats', desc: 'Rooms organised by language.', status: 'planned' },
      { name: 'Friends', desc: 'A deliberate connection, not a follower.', status: 'planned' },
      { name: 'Message requests', desc: 'A buffer between you and strangers.', status: 'planned' },
      { name: 'Blocking', desc: 'Ends contact, and ends it properly.', status: 'planned' },
      { name: 'Reporting', desc: 'A simple way to flag problems.', status: 'planned' },
      { name: 'Privacy settings', desc: 'Meaningful controls, not decorative ones.', status: 'planned' },
      { name: 'Themes & appearance', desc: 'Make OFF look how you want it to.', status: 'planned' },
      { name: 'Notifications', desc: 'Quiet, useful, and on your terms.', status: 'planned' },
      { name: 'Search', desc: 'Find people and rooms — without an algorithm.', status: 'planned' }
    ]
  },
  {
    title: 'Exploring — ideas, not promises',
    items: [
      { name: 'Real end-to-end encryption', desc: 'Where it\u2019s technically right, properly verified — not before.', status: 'exploring' },
      { name: 'Reduced data retention', desc: 'Keep even less, hold it for less time.', status: 'exploring' },
      { name: 'Disappearing messages', desc: 'Conversations that don\u2019t live forever by default.', status: 'exploring' },
      { name: 'Federated communities', desc: 'Spaces that might run outside a single server.', status: 'exploring' },
      { name: 'Portable identity', desc: 'An identity not locked to one platform.', status: 'exploring' },
      { name: 'Open protocol', desc: 'Parts of OFF becoming a documented, open standard.', status: 'exploring' }
    ]
  }
];

/* -------------------------------------------------------------------------
   ROADMAP — statuses, not deadlines.
   phase status: 'building' | 'planned' | 'exploring'
   item status:  same set (+ 'done')
   ------------------------------------------------------------------------- */
const ROADMAP = [
  {
    phase: 'Next up',
    title: 'First public release',
    status: 'building',
    lead: 'Finish the missing pieces, open the doors, and let the first real people in.',
    items: [
      { text: 'Private conversations', status: 'building' },
      { text: 'Group chats', status: 'building' },
      { text: 'Country & language chats', status: 'planned' },
      { text: 'Friends', status: 'planned' },
      { text: 'Message requests', status: 'planned' },
      { text: 'Blocking & reporting', status: 'planned' },
      { text: 'Privacy settings', status: 'planned' },
      { text: 'Themes & appearance', status: 'planned' },
      { text: 'Notifications', status: 'planned' },
      { text: 'Search', status: 'planned' },
      { text: 'Mobile polish', status: 'building' }
    ]
  },
  {
    phase: 'After release',
    title: 'Grow OFF the right way',
    status: 'planned',
    lead: 'Improve what the first real users touch, based on what they actually need.',
    items: [
      { text: 'Feedback-led refinements', status: 'planned' },
      { text: 'Better community tools', status: 'planned' },
      { text: 'Richer media sharing', status: 'planned' },
      { text: 'Discovery without algorithms', status: 'planned' }
    ]
  },
  {
    phase: 'Privacy & security',
    title: 'Make the promise real',
    status: 'planned',
    lead: 'Privacy is the point of OFF. This is the work that turns the intention into architecture.',
    items: [
      { text: 'Real end-to-end encryption', status: 'exploring' },
      { text: 'Reduced data retention', status: 'planned' },
      { text: 'Stronger identity handling', status: 'planned' },
      { text: 'Multi-device security', status: 'planned' },
      { text: 'Independent security review', status: 'exploring' }
    ]
  },
  {
    phase: 'Long term',
    title: 'A corner of the internet that lasts',
    status: 'exploring',
    lead: 'Big ideas, honestly marked as ideas. Some may happen, some may not.',
    items: [
      { text: 'Federated communities', status: 'exploring' },
      { text: 'Portable identity', status: 'exploring' },
      { text: 'Open protocol', status: 'exploring' },
      { text: 'A model that doesn\u2019t need ads', status: 'exploring' }
    ]
  }
];

/* -------------------------------------------------------------------------
   COMPARISON — product models, not companies.
   ------------------------------------------------------------------------- */
const COMPARISON_COLUMNS = ['OFF', 'Social platforms', 'Messaging apps', 'Community platforms'];

const COMPARISON_ROWS = [
  {
    label: 'Primary purpose',
    values: ['Conversation and community', 'Discovery and content', 'One-to-one and group chat', 'Topic-based discussion']
  },
  {
    label: 'Public spaces',
    values: ['Core (the World)', 'Core (feeds)', 'Limited', 'Core']
  },
  {
    label: 'Private conversation',
    values: ['Core', 'Usually secondary', 'Core', 'Often limited']
  },
  {
    label: 'Discovery',
    values: ['By interest, not algorithm', 'Algorithm-driven', 'Contact-based', 'Category-based']
  },
  {
    label: 'Anonymity',
    values: ['A stated goal', 'Usually discouraged', 'Depends on the app', 'Often possible']
  },
  {
    label: 'Advertising model',
    values: ['Not the model', 'Commonly ad-supported', 'Usually not ad-supported', 'Sometimes ad-supported']
  },
  {
    label: 'Algorithmic feed',
    values: ['Not the intent', 'Common', 'No', 'No \u2014 chronological by default']
  },
  {
    label: 'Encryption status',
    values: ['Planned research \u2014 not yet equivalent to mature E2EE messengers', 'Often not end-to-end encrypted', 'Many are end-to-end encrypted', 'Rarely end-to-end encrypted']
  },
  {
    label: 'Current maturity',
    values: ['Early \u2014 being built by one person', 'Mature', 'Mature', 'Mature']
  }
];

/* -------------------------------------------------------------------------
   CHANGELOG — only what actually happened. No invented versions.
   ------------------------------------------------------------------------- */
const UPDATES = [
  {
    version: 'now',
    title: 'The build in progress',
    date: 'In development',
    latest: true,
    points: [
      'UI & UX refinement, in progress',
      'Private conversations in progress',
      'Group chats in progress',
      'Mobile experience fixes in progress'
    ]
  },
  {
    version: 'first build',
    title: 'The starting point',
    date: 'In development',
    latest: false,
    points: [
      'Account creation works',
      'The World chat works',
      'Profiles work'
    ]
  }
];

/* -------------------------------------------------------------------------
   FAQ
   tag: 'current' | 'planned' | null
   ------------------------------------------------------------------------- */
const FAQS = [
  {
    q: 'What is OFF?',
    tag: null,
    a: '<p>OFF (Open Freedom Forum) is an independent community and communication platform. One open side (the World) for finding people, and a private side for actually knowing them — built with a bias towards anonymity and user control rather than engagement.</p>'
  },
  {
    q: 'Is OFF open yet?',
    tag: 'current',
    a: '<p><strong>Not yet.</strong> OFF is still being built and has not been publicly released. This site is honest about that on purpose: the <a href="#status">status board</a> shows exactly what works today, what\u2019s being built right now, and what\u2019s still planned.</p>'
  },
  {
    q: 'Who is building OFF?',
    tag: null,
    a: '<p>One person — Bhaskar, a 15-year-old builder from India. No company, no team, just an idea being turned into software one feature at a time. See <a href="#story">the story</a> for how it started.</p>'
  },
  {
    q: 'What works in OFF right now?',
    tag: 'current',
    a: '<p>Three things: creating an account, the World chat, and profiles. Everything else on this page is either being built, planned, or still just an idea — and it\u2019s all labelled honestly so nothing gets exaggerated.</p>'
  },
  {
    q: 'What is the World?',
    tag: 'current',
    a: '<p>The World is the open side of OFF — one public space where anyone can talk. From there, OFF is planned to open into country chats, language chats and group chats. The World is where you find people; private conversation is where you get to know them.</p>'
  },
  {
    q: 'Is my data private / is OFF encrypted?',
    tag: 'planned',
    a: '<p><strong>The honest answer: not fully yet.</strong> Privacy and anonymity are the point of OFF, and OFF is being designed around that goal. But real end-to-end encryption is future work, not a current property — until it\u2019s built and independently verified, OFF must not be compared to mature encrypted messengers.</p><p>Any future claim about encryption will be backed by implementation, not marketing.</p>'
  },
  {
    q: 'Can I use OFF anonymously?',
    tag: 'planned',
    a: '<p>That\u2019s the goal — appearing on your own terms is a core belief of OFF. The details are still being worked out, and the reality of the current build is simpler than the ambition. It\u2019s marked <em>planned</em> until it\u2019s actually true.</p>'
  },
  {
    q: 'What information does OFF collect?',
    tag: 'current',
    a: '<p>The guiding principle is to collect as little as practically possible for the platform to function. And this website itself has no trackers — no analytics, no ad scripts. Just the project.</p>'
  },
  {
    q: 'How can I be among the first to try OFF?',
    tag: null,
    a: '<p>Use the <a href="#get-involved">get involved</a> section and pick \u201cTest OFF early.\u201d The first people who register are the first people who get in when OFF opens.</p>'
  },
  {
    q: 'How can I help build OFF?',
    tag: null,
    a: '<p>Pick \u201cHelp build OFF\u201d in the <a href="#get-involved">get involved</a> section. Honest feedback, bug reports and ideas are worth more than money at this stage — see <a href="#support">support</a>.</p>'
  },
  {
    q: 'How can I report a problem?',
    tag: 'planned',
    a: '<p>Blocking and reporting tools are planned for the first release. Until then — or if you\u2019ve hit something urgent — a message to the project on Instagram (@off_pvy) reaches a human, because there\u2019s only one.</p>'
  },
  {
    q: 'How can I support OFF?',
    tag: null,
    a: '<p>Donations via UPI are optional — details in the <a href="#support">support</a> section, no guilt attached. Sharing the project and giving honest feedback helps just as much, and costs nothing.</p>'
  }
];

/* -------------------------------------------------------------------------
   FOLLOW — where the build is shared
   ------------------------------------------------------------------------- */
const FOLLOW = [
  {
    platform: 'Instagram',
    handle: '@off_pvy',
    desc: 'The public face of the build — screenshots, progress notes and announcements.',
    url: OFF_CONFIG.instagramUrl,
    label: 'Follow OFF updates',
    kind: 'primary'
  },
  {
    platform: 'GitHub',
    handle: 'Mythtilla/OFF_helper',
    desc: 'This source code, in the open, so the build can be followed commit by commit.',
    url: OFF_CONFIG.githubUrl,
    label: 'Watch the repo',
    kind: 'secondary'
  }
];

/* =========================================================================
   2. UTILITIES
   ========================================================================= */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =========================================================================
   3. THEME
   ========================================================================= */

const Theme = (() => {
  const STORAGE_KEY = 'off-theme';
  const root = document.documentElement;
  const meta = document.querySelector('meta[name="theme-color"]');
  const COLORS = { dark: '#0b0b0d', light: '#f7f6f2' };

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    if (meta) meta.setAttribute('content', COLORS[theme] || COLORS.dark);
  }

  function current() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function set(theme, persist = true) {
    apply(theme);
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
    }
  }

  function toggle() {
    set(current() === 'dark' ? 'light' : 'dark');
  }

  function init() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}

    if (saved === 'light' || saved === 'dark') {
      apply(saved);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      apply('light');
    } else {
      apply('dark');
    }

    const btn = $('#theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        toggle();
        Toast.show(current() === 'dark' ? 'Dark theme' : 'Light theme');
      });
    }
  }

  return { init, set, current, toggle };
})();

/* =========================================================================
   4. NAVIGATION
   ========================================================================= */

const Nav = (() => {
  let toggleBtn, panel, header;

  function open() {
    if (!panel) return;
    panel.hidden = false;
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.setAttribute('aria-label', 'Close menu');
    document.body.classList.add('nav-open');
  }

  function close() {
    if (!panel) return;
    panel.hidden = true;
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('nav-open');
  }

  function isOpen() {
    return panel && !panel.hidden;
  }

  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  function init() {
    toggleBtn = $('#nav-toggle');
    panel = $('#mobile-nav');
    header = $('#site-header');

    if (toggleBtn && panel) {
      toggleBtn.addEventListener('click', () => {
        isOpen() ? close() : open();
      });

      $$('a', panel).forEach((link) => {
        link.addEventListener('click', close);
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen()) {
          close();
          toggleBtn.focus();
        }
      });

      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (window.innerWidth > 1000 && isOpen()) close();
        }, 120);
      });
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  return { init, close };
})();

/* =========================================================================
   5. LINKS
   ========================================================================= */

const Links = (() => {
  const MAP = {
    app:               () => OFF_CONFIG.appUrl,
    github:            () => OFF_CONFIG.githubUrl,
    instagram:         () => OFF_CONFIG.instagramUrl,
    personalInstagram: () => OFF_CONFIG.personalInstagramUrl,
    contact:           () => OFF_CONFIG.contactUrl
  };

  function init() {
    $$('[data-link]').forEach((node) => {
      const key = node.getAttribute('data-link');
      const resolver = MAP[key];
      if (!resolver) return;

      const url = resolver();
      node.setAttribute('href', url);

      if (key !== 'app') {
        node.setAttribute('rel', 'noopener');
        node.setAttribute('target', '_blank');
      }
    });
  }

  return { init };
})();

/* =========================================================================
   6. STORY
   ========================================================================= */

const Story = (() => {
  function render() {
    const container = $('#story-timeline');
    if (!container) return;

    container.innerHTML = STORY.map((item) => `
      <li class="story-item reveal">
        <span class="story-num">${esc(item.num)}</span>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.body)}</p>
      </li>
    `).join('');
  }

  return { render };
})();

/* =========================================================================
   7. BELIEFS
   ========================================================================= */

const Beliefs = (() => {
  function render() {
    const container = $('#belief-list');
    if (!container) return;

    container.innerHTML = BELIEFS.map((item) => `
      <li class="belief-item reveal">
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.body)}</p>
      </li>
    `).join('');
  }

  return { render };
})();

/* =========================================================================
   8. WORLD FLOW
   ========================================================================= */

const WorldFlow = (() => {
  function render() {
    const list = $('#world-flow');
    if (!list) return;

    list.innerHTML = WORLD_FLOW.map((step) => `
      <li class="${step.accent ? 'is-accent' : ''}">
        <span class="flow-num">${esc(step.num)}</span>
        <h3>${esc(step.title)}</h3>
        <p>${esc(step.body)}</p>
      </li>
    `).join('');
  }

  return { render };
})();

/* =========================================================================
   8B. FOLLOW
   ========================================================================= */

const Follow = (() => {
  function render() {
    const grid = $('#follow-grid');
    if (!grid) return;

    grid.innerHTML = FOLLOW.map((item) => `
      <a class="follow-card${item.kind === 'primary' ? ' is-primary' : ''} reveal" href="${esc(item.url)}"
         rel="noopener" target="_blank"
         aria-label="Open ${esc(item.platform)} — ${esc(item.handle)}">
        <span class="follow-platform">${esc(item.platform)}</span>
        <span class="follow-handle">${esc(item.handle)}</span>
        <span class="follow-desc">${esc(item.desc)}</span>
        <span class="follow-cta">${esc(item.label)}</span>
      </a>
    `).join('');
  }

  return { render };
})();

/* =========================================================================
   9. STATUS BOARD + FILTERS
   ========================================================================= */

const StatusBoard = (() => {
  const LABELS = {
    live: 'LIVE',
    building: 'BUILDING',
    planned: 'PLANNED',
    exploring: 'EXPLORING'
  };

  function render() {
    const board = $('#status-board');
    if (!board) return;

    board.innerHTML = STATUS_GROUPS.map((group) => `
      <section class="status-group reveal" data-group-category="${esc(group.title)}">
        <div class="status-group-head">
          <h3>${esc(group.title)}</h3>
          <span class="status-group-count">${group.items.length}</span>
        </div>
        <div class="status-group-items">
          ${group.items.map((item) => `
            <div class="status-row" data-status="${esc(item.status)}">
              <span class="badge badge-${esc(item.status)}">${esc(LABELS[item.status] || item.status)}</span>
              <span class="status-name">${esc(item.name)}</span>
              <span class="status-desc">${esc(item.desc)}</span>
            </div>
          `).join('')}
        </div>
      </section>
    `).join('');
  }

  function applyFilter(filter) {
    const board = $('#status-board');
    const empty = $('#status-empty');
    if (!board) return;

    let visible = 0;
    $$('.status-row', board).forEach((row) => {
      const match = filter === 'all' || row.dataset.status === filter;
      row.hidden = !match;
      if (match) visible++;
    });

    $$('.status-group', board).forEach((group) => {
      const hasVisible = $$('.status-row', group).some((row) => !row.hidden);
      group.hidden = !hasVisible || filter === 'all' ? false : !hasVisible;
    });

    if (empty) empty.hidden = visible > 0;
  }

  function init() {
    render();

    const chips = $$('[data-feature-filter]');
    if (!chips.length) return;

    chips.forEach((btn) => {
      btn.addEventListener('click', () => {
        chips.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        applyFilter(btn.dataset.featureFilter);
      });
    });
  }

  return { init };
})();

/* =========================================================================
   10. ROADMAP
   ========================================================================= */

const Roadmap = (() => {
  const LABELS = {
    done: 'Done',
    building: 'Building',
    planned: 'Planned',
    exploring: 'Exploring'
  };

  function phaseBadge(status) {
    return `<span class="badge badge-${esc(status)}">${esc(LABELS[status] || status)}</span>`;
  }

  function render() {
    const container = $('#roadmap');
    if (!container) return;

    container.innerHTML = ROADMAP.map((phase) => `
      <section class="phase reveal" data-phase="${esc(phase.status)}">
        <div class="phase-head">
          <span class="phase-num">${esc(phase.phase)}</span>
          <h3>${esc(phase.title)}</h3>
          ${phaseBadge(phase.status)}
        </div>
        ${phase.lead ? `<p class="phase-lead">${esc(phase.lead)}</p>` : ''}
        <ul class="phase-items">
          ${phase.items.map((item) => `
            <li class="phase-item" data-status="${esc(item.status)}">
              <span class="phase-dot" aria-hidden="true"></span>
              <span class="phase-item-text">
                ${esc(item.text)}
                <span class="phase-item-status">${esc(LABELS[item.status] || item.status)}</span>
              </span>
            </li>
          `).join('')}
        </ul>
      </section>
    `).join('');
  }

  return { render };
})();

/* =========================================================================
   11. COMPARISON TABLE
   ========================================================================= */

const Comparison = (() => {
  function render() {
    const table = $('#compare-table');
    if (!table) return;

    const head = `
      <thead>
        <tr>
          <th scope="col">Dimension</th>
          ${COMPARISON_COLUMNS.map((col, i) =>
            `<th scope="col"${i === 0 ? ' class="col-off"' : ''}>${esc(col)}</th>`
          ).join('')}
        </tr>
      </thead>
    `;

    const body = `
      <tbody>
        ${COMPARISON_ROWS.map((row) => `
          <tr>
            <th scope="row">${esc(row.label)}</th>
            ${row.values.map((val, i) =>
              `<td${i === 0 ? ' class="col-off"' : ''}>${esc(val)}</td>`
            ).join('')}
          </tr>
        `).join('')}
      </tbody>
    `;

    table.innerHTML = head + body;
  }

  return { render };
})();

/* =========================================================================
   12. CHANGELOG
   ========================================================================= */

const Changelog = (() => {
  function render() {
    const list = $('#changelog');
    if (!list) return;

    list.innerHTML = UPDATES.map((update) => `
      <li class="log-item${update.latest ? ' is-latest' : ''} reveal">
        <div class="log-head">
          <span class="log-version">${esc(update.version)}</span>
          <h3 class="log-title">${esc(update.title)}</h3>
          <span class="log-date">${esc(update.date)}</span>
        </div>
        <ul class="log-points">
          ${update.points.map((point) => `<li>${esc(point)}</li>`).join('')}
        </ul>
      </li>
    `).join('');
  }

  return { render };
})();

/* =========================================================================
   13. FORMS ('email me' + 'get involved')
   ========================================================================= */

const Forms = (() => {
  function setStatus(el, message, isError) {
    if (!el) return;
    el.textContent = message;
    el.classList.toggle('is-error', !!isError);
    el.hidden = false;
  }

  function clearHint(el) {
    if (el) el.textContent = '';
  }

  function validate(form) {
    let valid = true;
    $$('input, select, textarea', form).forEach((field) => {
      const hint = form.querySelector('#' + field.id + '-hint');
      clearHint(hint);
      field.classList.remove('is-error');

      if (field.hasAttribute('required') && !field.value.trim()) {
        setHint(hint, 'This is needed.');
        field.classList.add('is-error');
        valid = false;
        return;
      }

      if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        setHint(hint, 'That email doesn\u2019t look right.');
        field.classList.add('is-error');
        valid = false;
      }
    });
    return valid;
  }

  function setHint(el, msg) {
    if (el) el.textContent = msg;
  }

  function flash(btn) {
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = 'Sent ✓';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, 2600);
  }

  async function submit(form, statusEl, btn) {
    // Endpoint not configured yet — explain nicely.
    if (!OFF_CONFIG.formEndpoint || OFF_CONFIG.formEndpoint.startsWith('[')) {
      setStatus(statusEl, 'This form isn\u2019t connected yet — try the Instagram link meanwhile.', true);
      return;
    }

    const data = {};
    new FormData(form).forEach((value, key) => { data[key] = value; });

    try {
      const res = await fetch(OFF_CONFIG.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });

      const json = await res.json();
      if (json && json.success) {
        setStatus(statusEl, 'Got it. Thank you — this actually helps.');
        flash(btn);
        form.reset();
      } else {
        setStatus(statusEl, json && json.message
          ? 'The relay said: ' + json.message
          : 'Something went wrong sending that. Please try again.', true);
      }
    } catch (e) {
      setStatus(statusEl, 'Something went wrong sending that. Please try again.', true);
    }
  }

  function init() {
    ['#form-message', '#form-getinvolved'].forEach((sel) => {
      const form = $(sel);
      if (!form) return;

      const statusEl = form.querySelector('.form-status');
      const btn = form.querySelector('button[type="submit"]');

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validate(form)) {
          submit(form, statusEl, btn);
        }
      });
    });
  }

  return { init };
})();

/* =========================================================================
   14. FAQ
   ========================================================================= */

const Faq = (() => {
  function render() {
    const list = $('#faq-list');
    if (!list) return;

    list.innerHTML = FAQS.map((item, i) => {
      const tag = item.tag
        ? `<span class="faq-tag ${esc(item.tag)}">${item.tag === 'current' ? 'Current' : 'Planned / intent'}</span>`
        : '';

      return `
        <div class="faq-item" data-faq>
          <h3 class="faq-q">
            <button class="faq-trigger" type="button"
                    id="faq-btn-${i}"
                    aria-expanded="false"
                    aria-controls="faq-panel-${i}">
              <span>${esc(item.q)}</span>
              <span class="faq-icon" aria-hidden="true"></span>
            </button>
          </h3>
          <div class="faq-a" id="faq-panel-${i}" role="region" aria-labelledby="faq-btn-${i}">
            <div>
              <div class="faq-a-inner">
                ${tag}
                ${item.a}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function toggle(item, forceOpen) {
    const trigger = $('.faq-trigger', item);
    const shouldOpen = typeof forceOpen === 'boolean'
      ? forceOpen
      : !item.classList.contains('open');
    item.classList.toggle('open', shouldOpen);
    trigger.setAttribute('aria-expanded', String(shouldOpen));
  }

  function init() {
    render();

    const list = $('#faq-list');
    if (!list) return;

    list.addEventListener('click', (e) => {
      const trigger = e.target.closest('.faq-trigger');
      if (!trigger || !list.contains(trigger)) return;
      const item = trigger.closest('[data-faq]');
      if (item) toggle(item);
    });
  }

  return { init };
})();

/* =========================================================================
   15. DONATION / UPI
   ========================================================================= */

const Donation = (() => {
  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) {}

    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (e) {
      return false;
    }
  }

  function flashButton(btn, label) {
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = label;
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, 1800);
  }

  async function handleCopy(btn) {
    const ok = await copyText(OFF_CONFIG.upiId);
    if (ok) {
      flashButton(btn, 'Copied ✓');
      Toast.show('UPI ID copied');
    } else {
      Toast.show('Could not copy \u2014 please copy manually.');
    }
  }

  function guardQrImage(img) {
    if (!img) return;
    img.addEventListener('error', () => {
      const fallback = document.createElement('div');
      fallback.className = 'qr-fallback';
      fallback.textContent = 'QR image not found \u2014 add off-upi-qr.jpg next to index.html';
      img.replaceWith(fallback);
    }, { once: true });
  }

  function init() {
    const upiEl = $('#upi-id');
    if (upiEl) upiEl.textContent = OFF_CONFIG.upiId;

    const modalUpi = $('#qr-modal-upi');
    if (modalUpi) modalUpi.textContent = OFF_CONFIG.upiId;

    ['#qr-thumb', '#qr-large'].forEach((sel) => {
      const img = $(sel);
      if (img) {
        img.setAttribute('src', OFF_CONFIG.qrImage);
        guardQrImage(img);
      }
    });

    const copyBtn = $('#copy-upi');
    if (copyBtn) copyBtn.addEventListener('click', () => handleCopy(copyBtn));

    const copyBtnModal = $('#copy-upi-modal');
    if (copyBtnModal) copyBtnModal.addEventListener('click', () => handleCopy(copyBtnModal));

    const qrOpen = $('#qr-open');
    if (qrOpen) qrOpen.addEventListener('click', () => Modal.open());
  }

  return { init, copyText };
})();

/* =========================================================================
   16. MODAL
   ========================================================================= */

const Modal = (() => {
  let modal, lastFocused;

  function open() {
    if (!modal) return;
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('nav-open');

    const closeBtn = $('[data-modal-close].icon-btn', modal);
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('nav-open');
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  function trapFocus(e) {
    if (!modal || modal.hidden || e.key !== 'Tab') return;

    const focusables = $$(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      modal
    ).filter((node) => !node.disabled && node.offsetParent !== null);

    if (focusables.length === 0) return;

    const first = focusables[0];
    const last  = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function init() {
    modal = $('#qr-modal');
    if (!modal) return;

    $$('[data-modal-close]', modal).forEach((node) => {
      node.addEventListener('click', close);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
      trapFocus(e);
    });
  }

  return { init, open, close };
})();

/* =========================================================================
   17. TOAST
   ========================================================================= */

const Toast = (() => {
  let node, timer;

  function show(message, duration = 2200) {
    if (!node) node = $('#toast');
    if (!node) return;

    node.textContent = message;
    node.hidden = false;

    void node.offsetWidth;
    node.classList.add('is-visible');

    clearTimeout(timer);
    timer = setTimeout(() => {
      node.classList.remove('is-visible');
      setTimeout(() => { node.hidden = true; }, 260);
    }, duration);
  }

  return { show };
})();

/* =========================================================================
   18. REVEAL ON SCROLL
   ========================================================================= */

const Reveal = (() => {
  let observer = null;

  function observeAll() {
    const items = $$('.reveal');
    if (!items.length) return;

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      items.forEach((node) => node.classList.add('in'));
      return;
    }

    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.08
      });
    }

    items.forEach((node) => {
      if (!node.classList.contains('in')) observer.observe(node);
    });
  }

  return { observeAll };
})();

/* =========================================================================
   19. ACTIVE NAV + HEADER STATE
   ========================================================================= */

const ActiveNav = (() => {
  let sections = [];
  let links = [];

  function update() {
    const offset = window.innerHeight * 0.32;
    let currentId = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom > offset) {
        currentId = section.id;
      }
    });

    if (!currentId) {
      links.forEach((link) => link.classList.remove('is-active'));
      return;
    }

    links.forEach((link) => {
      const target = link.getAttribute('href');
      link.classList.toggle('is-active', target === `#${currentId}`);
    });
  }

  function init() {
    links = $$('.nav-link');
    const ids = links
      .map((link) => link.getAttribute('href'))
      .filter((href) => href && href.startsWith('#'))
      .map((href) => href.slice(1));

    sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  }

  return { init };
})();

/* =========================================================================
   20. BACK TO TOP
   ========================================================================= */

const BackToTop = (() => {
  function init() {
    const btn = $('#back-to-top');
    if (!btn) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const show = window.scrollY > 700;
        if (show === btn.hidden) btn.hidden = !show;
        ticking = false;
      });
    };

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion() ? 'auto' : 'smooth'
      });
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  return { init };
})();

/* =========================================================================
   21. INIT
   ========================================================================= */

function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = String(new Date().getFullYear());
}

function init() {
  Theme.init();

  Links.init();
  Story.render();
  Beliefs.render();
  WorldFlow.render();
  Follow.render();
  StatusBoard.init();
  Roadmap.render();
  Comparison.render();
  Changelog.render();
  Forms.init();
  Faq.init();
  Donation.init();

  Modal.init();
  Nav.init();
  ActiveNav.init();
  BackToTop.init();

  setYear();
  Reveal.observeAll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}