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
     7.  Mindset
     8.  Comparison
     9.  Features + filters
     10. Flow
     11. Problems
     12. Ideas
     13. Changelog
     14. Roadmap + filters
     15. FAQ
     16. Donation / UPI
     17. Modal
     18. Toast
     19. Reveal on scroll
     20. Active nav + header
     21. Back to top
     22. Init
   ========================================================================= */

'use strict';

/* =========================================================================
   1. CONFIG & DATA  —  EDIT ME
   ========================================================================= */

const OFF_CONFIG = {
  name:        'OFF',
  fullName:    'Open Freedom Forum',
  tagline:     'Private conversations. Open communities.',

  /* --- Support -------------------------------------------------------- */
  upiId:       '7088411468@fam',
  qrImage:     'off-upi-qr.jpg',        // ← your real UPI QR image

  /* --- Links ---------------------------------------------------------- */
  appUrl:              'https://off.testingver.workers.dev',
  instagramUrl:        'https://www.instagram.com/off_pvy/',
  personalInstagramUrl:'https://www.instagram.com/bhaskarr_dgaf/',

  /* Still open — replace when available. The site treats values that
     start with "[" as unconfigured, so links stay clickable but show a
     friendly "not set up yet" toast. */
  githubUrl:    '[GITHUB URL]',
  contactUrl:   '[CONTACT URL]',        // suggest: https://ig.me/m/off_pvy
  privacyUrl:   '[PRIVACY URL]',
  termsUrl:     '[TERMS URL]'
};

/* -------------------------------------------------------------------------
   MY STORY — replace the bracketed placeholders with your real story.
   The un-bracketed text describes actual development themes and is safe
   to keep as-is.
   ------------------------------------------------------------------------- */
const STORY = [
  {
    num: '01',
    title: 'The idea',
    body: 'OFF started as a frustration with how modern platforms are put together. Conversation had become raw material for a feed. The idea was simple: build a place where talking to people and finding communities is the point, not the byproduct. [MY STORY — when the idea first landed, and what triggered it.]'
  },
  {
    num: '02',
    title: 'Why I started',
    body: 'The gap between “someone should build this” and “I will build this” is where most ideas quietly die. Crossing it meant accepting that a first version would be rough, incomplete, and honest about both. [WHY I STARTED — your motivation in your own words.]'
  },
  {
    num: '03',
    title: 'Building the first version',
    body: 'The first build was authentication, a database, and a chat interface that needed to feel right before anything else did. Getting the foundation right mattered more than shipping fast. [WHEN I STARTED — the rough date you began.]'
  },
  {
    num: '04',
    title: 'What went wrong',
    body: 'Parts of the architecture had to be rewritten. Some of the UX was not good enough and had to be redesigned. Security and privacy decisions had to be taken seriously from the beginning instead of bolted on at the end. [WHAT WENT WRONG — your own hard lessons.]'
  },
  {
    num: '05',
    title: 'What I learned',
    body: 'Privacy claims have to match implementation. Features ship one at a time. Honest limitations build more trust than confident promises. Feedback from real users beats a roadmap written in private. [WHAT I LEARNED — anything else that stuck.]'
  },
  {
    num: '06',
    title: 'Where OFF is going',
    body: 'OFF is being built feature by feature, not by marketing. The long-term goal is a platform where communities and private conversation coexist, and where users have real control over how they appear online. [WHERE I WANT OFF TO GO — your long-term vision.]'
  }
];

/* -------------------------------------------------------------------------
   THE OFF MINDSET
   ------------------------------------------------------------------------- */
const MINDSET = [
  {
    symbol: '◈',
    title: 'Privacy by default',
    body: 'Collect less. Respect boundaries. Privacy should be the starting state, not a setting people have to hunt for.'
  },
  {
    symbol: '◉',
    title: 'People over engagement',
    body: 'The goal is meaningful interaction, not maximising screen time. No dark patterns designed to keep you scrolling.'
  },
  {
    symbol: '⬡',
    title: 'Open communities',
    body: 'Communities should let people gather around interests and ideas freely, without a feed deciding what matters.'
  },
  {
    symbol: '⌘',
    title: 'User control',
    body: 'Users should have meaningful control over their account, conversations and preferences — not the illusion of it.'
  },
  {
    symbol: '◎',
    title: 'Transparency',
    body: 'Clearly say what exists, what does not exist, and what is still being built. Labels matter more than promises.'
  },
  {
    symbol: '⊘',
    title: 'No fake promises',
    body: 'Don’t promise what the architecture cannot prove. Security and privacy claims should follow implementation, not precede it.'
  },
  {
    symbol: '⌬',
    title: 'Independent building',
    body: 'OFF is being built independently and evolves through experimentation and feedback — not through a roadmap handed down by a board.'
  }
];

/* -------------------------------------------------------------------------
   COMPARISON — describes product models, not specific companies.
   ------------------------------------------------------------------------- */
const COMPARISON_COLUMNS = ['OFF', 'Traditional social platforms', 'Messaging apps', 'Community / forum platforms'];

const COMPARISON_ROWS = [
  {
    label: 'Primary purpose',
    values: [
      'Conversation and community',
      'Discovery and content consumption',
      'One-to-one and group chat',
      'Topic-based discussion'
    ]
  },
  {
    label: 'Public communities',
    values: [
      'Core feature (the World)',
      'Core feature',
      'Limited',
      'Core feature'
    ]
  },
  {
    label: 'Private conversation',
    values: [
      'Core feature',
      'Usually present but secondary',
      'Core feature',
      'Often limited or absent'
    ]
  },
  {
    label: 'Community structure',
    values: [
      'Interest-based communities',
      'Pages, groups, feeds',
      'Group chats',
      'Boards, categories, threads'
    ]
  },
  {
    label: 'Discovery',
    values: [
      'By interest, not algorithm',
      'Algorithm-driven',
      'Contact-based',
      'Category-based'
    ]
  },
  {
    label: 'Personalisation',
    values: [
      'Appearance, themes, layout',
      'Algorithm-driven content',
      'Themes and chat settings',
      'Themes and board layout'
    ]
  },
  {
    label: 'Privacy controls',
    values: [
      'Built into the design intent',
      'Varies widely',
      'Varies widely',
      'Usually basic'
    ]
  },
  {
    label: 'Advertising model',
    values: [
      'Not the current model',
      'Commonly ad-supported',
      'Usually not ad-supported',
      'Sometimes ad-supported'
    ]
  },
  {
    label: 'Algorithmic feed',
    values: [
      'Not the intent',
      'Common',
      'No',
      'No — chronological by default'
    ]
  },
  {
    label: 'User control',
    values: [
      'A stated principle',
      'Varies',
      'Mostly chat-level',
      'Moderation-level'
    ]
  },
  {
    label: 'Encryption status',
    values: [
      'Deeper cryptographic privacy is planned research — not currently equivalent to mature E2EE messengers',
      'Varies; often not end-to-end encrypted',
      'Many offer end-to-end encryption',
      'Rarely end-to-end encrypted'
    ]
  },
  {
    label: 'Current maturity',
    values: [
      'Early — actively being built',
      'Mature',
      'Mature',
      'Mature'
    ]
  }
];

/* -------------------------------------------------------------------------
   FEATURES
   status: 'current' | 'planned' | 'experimental'
   ------------------------------------------------------------------------- */
const FEATURES = [
  /* --- CURRENT ------------------------------------------------------- */
  { title: 'Private conversations',       status: 'current',      body: 'Direct messaging between people, without a public audience.' },
  { title: 'Profiles',                    status: 'current',      body: 'A presence you control, instead of a profile assembled by an algorithm.' },
  { title: 'World conversation',          status: 'current',      body: 'A public space where open conversation happens and communities form.' },
  { title: 'Message requests',            status: 'current',      body: 'A buffer between you and people you have not chosen to talk to.' },
  { title: 'Blocking',                    status: 'current',      body: 'Straightforward blocking that actually ends contact.' },
  { title: 'Privacy settings',            status: 'current',      body: 'Controls over visibility, reachability and account behaviour.' },
  { title: 'Appearance customisation',    status: 'current',      body: 'Themes and visual options so OFF looks how you want it to.' },
  { title: 'Account controls',            status: 'current',      body: 'Manage your account, your data and your presence.' },
  { title: 'Community-oriented talk',     status: 'current',      body: 'Conversations organised around shared interests rather than follower counts.' },

  /* --- PLANNED ------------------------------------------------------- */
  { title: 'Richer communities',          status: 'planned',      body: 'Deeper structure for communities — roles, rules and organisation.' },
  { title: 'Channels & topics',           status: 'planned',      body: 'Focused spaces inside communities so discussions stay readable.' },
  { title: 'Threads',                     status: 'planned',      body: 'Replies that branch instead of collapsing into one long timeline.' },
  { title: 'Improved moderation',         status: 'planned',      body: 'Better tools for keeping communities healthy without over-policing.' },
  { title: 'Disappearing messages',       status: 'planned',      body: 'Conversations that do not live forever by default.' },
  { title: 'Richer media sharing',        status: 'planned',      body: 'Better handling of images, files and rich content in chats.' },
  { title: 'Better discovery',            status: 'planned',      body: 'Finding communities and people without an engagement algorithm.' },
  { title: 'Deeper privacy architecture', status: 'planned',      body: 'Less data retained, less metadata generated, stronger defaults.' },
  { title: 'Stronger cryptographic identity', status: 'planned',  body: 'Identity that is verifiable rather than merely asserted.' },
  { title: 'Improved multi-device security',  status: 'planned',  body: 'Safer sessions across the devices you actually use.' },
  { title: 'Real end-to-end encryption',  status: 'planned',      body: 'Where it is technically appropriate and properly verified — not before.' },

  /* --- EXPERIMENTAL / FUTURE ----------------------------------------- */
  { title: 'Federated or self-hosted communities', status: 'experimental', body: 'Exploring whether communities could run outside a single central server.' },
  { title: 'Portable identity',           status: 'experimental', body: 'Research into identities that are not locked to one platform.' },
  { title: 'Metadata-resistant messaging',status: 'experimental', body: 'Long-term research into reducing what a server can learn about a conversation.' },
  { title: 'Open protocol work',          status: 'experimental', body: 'Whether parts of OFF could become an open, documented protocol.' }
];

/* -------------------------------------------------------------------------
   HOW OFF WORKS
   ------------------------------------------------------------------------- */
const FLOW = [
  { title: 'Create account',        body: 'Start with as little information as the platform can reasonably work with.' },
  { title: 'Build your profile',    body: 'Decide how you appear and how reachable you want to be.' },
  { title: 'Enter the World',       body: 'Step into the open side of OFF where public conversation happens.' },
  { title: 'Discover conversations',body: 'Find topics and communities by interest, not by algorithm.' },
  { title: 'Connect with people',   body: 'Move from public discussion into private conversation.' },
  { title: 'Create or join communities', body: 'Build a space around something you care about.' },
  { title: 'Customise your experience',  body: 'Shape how OFF looks and behaves for you.' }
];

/* -------------------------------------------------------------------------
   PROBLEM → OFF IDEA
   ------------------------------------------------------------------------- */
const PROBLEMS = [
  {
    icon: '01',
    problem: 'Too much noise',
    current: 'Endless feeds optimised for time-on-screen',
    idea: 'Focused communities around things you actually chose'
  },
  {
    icon: '02',
    problem: 'Privacy concerns',
    current: 'Large amounts of data and platform visibility as the default',
    idea: 'Privacy-conscious architecture where collecting less is the goal'
  },
  {
    icon: '03',
    problem: 'Community fragmentation',
    current: 'Conversations spread across many disconnected places',
    idea: 'Communities and private communication in one place'
  },
  {
    icon: '04',
    problem: 'Engagement pressure',
    current: 'Systems optimised around attention and constant posting',
    idea: 'Conversations first — no ranking system deciding who matters'
  },
  {
    icon: '05',
    problem: 'Confusing identity',
    current: 'Public social profiles required everywhere',
    idea: 'More controlled identity and connection options'
  }
];

/* -------------------------------------------------------------------------
   IDEAS — "What should the internet feel like?"
   Replace the bracketed placeholders with your own opinions.
   ------------------------------------------------------------------------- */
const IDEAS = [
  { title: 'Less noise',                body: '[MY IDEA 1] — Write what a calmer internet would look like to you.' },
  { title: 'More control',              body: '[MY IDEA 2] — What should users actually be able to decide for themselves?' },
  { title: 'Better communities',        body: '[MY IDEA 3] — What made old forums work, and what should be brought back?' },
  { title: 'Better privacy',            body: '[MY IDEA 4] — What does meaningful privacy look like in practice, not in marketing?' },
  { title: 'More meaningful interaction', body: '[YOUR SUGGESTION] — What would make online conversation feel worth having again?' },
  { title: 'Less algorithmic pressure', body: '[YOUR SUGGESTION] — What would the internet feel like without a ranking system?' }
];

/* -------------------------------------------------------------------------
   CHANGELOG — replace with your real updates.
   Use "in development" / "alpha" / "latest update" when dates/versions
   are not tracked yet. Do NOT invent releases.
   ------------------------------------------------------------------------- */
const UPDATES = [
  {
    version: 'alpha',
    title: 'First working OFF prototype',
    date: 'In development',
    latest: false,
    points: [
      'First working build of the idea',
      'Basic account creation',
      'Early layout experiments'
    ]
  },
  {
    version: 'alpha',
    title: 'Authentication rework',
    date: 'In development',
    latest: false,
    points: [
      'Cleaner sign-in flow',
      'Better session handling',
      'Fewer dead ends'
    ]
  },
  {
    version: 'alpha',
    title: 'Chat experience improvements',
    date: 'In development',
    latest: false,
    points: [
      'Faster message loading',
      'Better message grouping',
      'Cleaner conversation view'
    ]
  },
  {
    version: 'alpha',
    title: 'Privacy controls added',
    date: 'In development',
    latest: false,
    points: [
      'Visibility settings',
      'Message requests',
      'Blocking improvements'
    ]
  },
  {
    version: 'latest',
    title: 'Latest update',
    date: 'In development',
    latest: true,
    points: [
      '[WHAT CHANGED]',
      '[WHAT WAS FIXED]',
      '[WHAT IS NEXT]'
    ]
  }
];

/* -------------------------------------------------------------------------
   ROADMAP
   status: 'done' | 'progress' | 'planned' | 'research'
   ------------------------------------------------------------------------- */
const ROADMAP = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    status: 'done',
    items: [
      { text: 'Core architecture',        status: 'done' },
      { text: 'Accounts & profiles',      status: 'done' },
      { text: 'Appearance / theming',     status: 'done' },
      { text: 'Basic privacy settings',   status: 'done' }
    ]
  },
  {
    phase: 'Phase 2',
    title: 'Messaging',
    status: 'progress',
    items: [
      { text: 'Private conversations',    status: 'done' },
      { text: 'Message requests',         status: 'done' },
      { text: 'Blocking & reporting',     status: 'progress' },
      { text: 'Disappearing messages',    status: 'planned' },
      { text: 'Richer media sharing',     status: 'planned' }
    ]
  },
  {
    phase: 'Phase 3',
    title: 'Communities',
    status: 'progress',
    items: [
      { text: 'The World (public space)', status: 'done' },
      { text: 'Community creation',       status: 'progress' },
      { text: 'Channels & topics',        status: 'planned' },
      { text: 'Threads',                  status: 'planned' },
      { text: 'Community moderation tools', status: 'planned' },
      { text: 'Discovery without algorithms', status: 'planned' }
    ]
  },
  {
    phase: 'Phase 4',
    title: 'Privacy + Security',
    status: 'planned',
    items: [
      { text: 'Reduced data retention',   status: 'planned' },
      { text: 'Stronger cryptographic identity', status: 'research' },
      { text: 'Improved multi-device security',  status: 'planned' },
      { text: 'Real end-to-end encryption where appropriate', status: 'research' },
      { text: 'Independent security review',     status: 'research' }
    ]
  },
  {
    phase: 'Phase 5',
    title: 'Advanced Infrastructure',
    status: 'research',
    items: [
      { text: 'Scalable messaging infrastructure', status: 'planned' },
      { text: 'Metadata-resistant messaging',      status: 'research' },
      { text: 'Federated / self-hosted communities', status: 'research' },
      { text: 'Open protocol documentation',       status: 'research' }
    ]
  },
  {
    phase: 'Phase 6',
    title: 'Long-term OFF vision',
    status: 'research',
    items: [
      { text: 'Portable identity across platforms', status: 'research' },
      { text: 'A genuinely user-owned social layer', status: 'research' },
      { text: 'Sustainable, non-advertising funding', status: 'research' },
      { text: 'A platform that outlives its creator', status: 'research' }
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
    a: `<p>OFF (Open Freedom Forum) is an independent community and communication platform. It combines open, public communities with private, one-to-one conversation — and is being built with a bias towards user control rather than engagement metrics.</p>`
  },
  {
    q: 'Who is building OFF?',
    tag: null,
    a: `<p>OFF is being built independently by one person. It is not a company product, and there is no team behind it — just an idea that is being turned into software one feature at a time. The <a href="#story">My Story</a> section has the details.</p>`
  },
  {
    q: 'How do I use OFF?',
    tag: 'current',
    a: `<p>Through the OFF application itself. Use the “Open OFF” button in the header or footer — the current build lives at <a href="https://off.testingver.workers.dev" target="_blank" rel="noopener">off.testingver.workers.dev</a>.</p>`
  },
  {
    q: 'What is the World?',
    tag: 'current',
    a: `<p>The World is the public side of OFF — the open space where conversations are visible and communities form. It is where you find people; private conversation is where you get to know them.</p>`
  },
  {
    q: 'How do private conversations work?',
    tag: 'current',
    a: `<p>Direct messages are separate from the public World. Message requests act as a buffer between you and people you have not chosen to talk to, and blocking ends contact.</p>
        <p><strong>Important:</strong> the current implementation should not be described as end-to-end encrypted. See the encryption question below.</p>`
  },
  {
    q: 'Are communities available?',
    tag: 'current',
    a: `<p>Community-oriented conversation exists today. Richer community structure — roles, rules, channels, topics and threads — is on the roadmap and clearly marked as <em>planned</em>, not shipped.</p>`
  },
  {
    q: 'Does OFF use end-to-end encryption?',
    tag: 'planned',
    a: `<p><strong>Not yet — and it is important to be honest about this.</strong> Real end-to-end encryption is a planned, long-term development, not a current property of OFF. Until it is implemented and independently verified, OFF should not be compared to mature encrypted messengers.</p>
        <p>Any future claim about encryption will be backed by implementation, not marketing.</p>`
  },
  {
    q: 'What information does OFF collect?',
    tag: 'current',
    a: `<p>The guiding principle is to collect as little as practical for the platform to function. The exact data model depends on the current build, and the intention is to keep reducing what is stored rather than expanding it.</p>
        <p>There are no third-party advertising trackers on this informational website.</p>`
  },
  {
    q: 'Can I delete my account?',
    tag: 'current',
    a: `<p>Account controls exist in the current build. If you cannot find what you need, reach out via Instagram DM to <a href="https://www.instagram.com/off_pvy/" target="_blank" rel="noopener">@off_pvy</a> and it will be handled.</p>`
  },
  {
    q: 'How can I report a problem?',
    tag: 'current',
    a: `<p>Blocking and reporting tools exist in the app, with improved moderation tooling planned. For anything urgent, an Instagram DM to <a href="https://www.instagram.com/off_pvy/" target="_blank" rel="noopener">@off_pvy</a> reaches a human — because there is only one.</p>`
  },
  {
    q: 'How can I suggest an idea?',
    tag: null,
    a: `<p>Send it over on Instagram (<a href="https://www.instagram.com/off_pvy/" target="_blank" rel="noopener">@off_pvy</a>) or wherever you found OFF. Genuine feedback shapes the build more than anything else at this stage.</p>`
  },
  {
    q: 'How can I support OFF?',
    tag: null,
    a: `<p>You can donate via UPI if you want to — details are in the <a href="#support">Support</a> section. But sharing the project, reporting bugs and giving honest feedback helps just as much, and costs nothing.</p>`
  }
];


/* =========================================================================
   2. UTILITIES
   ========================================================================= */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function el(tag, className, html, attrs) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html != null) node.innerHTML = html;
  if (attrs) {
    Object.keys(attrs).forEach((key) => {
      if (key === 'text') node.textContent = attrs[key];
      else node.setAttribute(key, attrs[key]);
    });
  }
  return node;
}

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

  const COLORS = { dark: '#0a0a0b', light: '#f6f5f2' };

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
      try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* ignore */ }
    }
  }

  function toggle() {
    set(current() === 'dark' ? 'light' : 'dark');
  }

  function init() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }

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
   5. LINKS  (inject config URLs into every [data-link] element)
   ========================================================================= */

const Links = (() => {
  const MAP = {
    app:               () => OFF_CONFIG.appUrl,
    github:            () => OFF_CONFIG.githubUrl,
    instagram:         () => OFF_CONFIG.instagramUrl,
    personalInstagram: () => OFF_CONFIG.personalInstagramUrl,
    contact:           () => OFF_CONFIG.contactUrl,
    privacy:           () => OFF_CONFIG.privacyUrl,
    terms:             () => OFF_CONFIG.termsUrl
  };

  function init() {
    $$('[data-link]').forEach((node) => {
      const key = node.getAttribute('data-link');
      const resolver = MAP[key];
      if (!resolver) return;

      const url = resolver();
      node.setAttribute('href', url);

      const isPlaceholder = !url || url.startsWith('[');
      if (isPlaceholder) {
        node.setAttribute('aria-disabled', 'true');
        node.setAttribute('title', 'Link not configured yet');
        node.addEventListener('click', (e) => {
          e.preventDefault();
          Toast.show('This link is not set up yet.');
        });
      } else if (key !== 'app') {
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
  /* Turn [PLACEHOLDER] markers into a styled span so they look intentional
     rather than broken. Everything inside [brackets] gets the marker. */
  function decorate(text) {
    return esc(text).replace(
      /\[([^\]]+)\]/g,
      '<span class="story-placeholder">[$1]</span>'
    );
  }

  function render() {
    const container = $('#story-timeline');
    if (!container) return;

    container.innerHTML = STORY.map((item) => `
      <li class="story-item reveal">
        <span class="story-num">${esc(item.num)}</span>
        <h3>${esc(item.title)}</h3>
        <p>${decorate(item.body)}</p>
      </li>
    `).join('');
  }

  return { render };
})();


/* =========================================================================
   7. MINDSET
   ========================================================================= */

const Mindset = (() => {
  function render() {
    const container = $('#mindset-grid');
    if (!container) return;

    container.innerHTML = MINDSET.map((item) => `
      <article class="mindset-card reveal">
        <span class="mindset-symbol" aria-hidden="true">${esc(item.symbol)}</span>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.body)}</p>
      </article>
    `).join('');
  }

  return { render };
})();


/* =========================================================================
   8. COMPARISON TABLE
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
   9. FEATURES + FILTERS
   ========================================================================= */

const Features = (() => {
  const LABELS = {
    current: 'Current',
    planned: 'Planned',
    experimental: 'Experimental / Future'
  };

  function render() {
    const grid = $('#feature-grid');
    if (!grid) return;

    grid.innerHTML = FEATURES.map((f) => `
      <article class="feature-card" data-status="${esc(f.status)}">
        <span class="badge badge-${esc(f.status)}">${esc(LABELS[f.status] || f.status)}</span>
        <h3>${esc(f.title)}</h3>
        <p>${esc(f.body)}</p>
      </article>
    `).join('');
  }

  function applyFilter(filter) {
    const grid = $('#feature-grid');
    const empty = $('#feature-empty');
    if (!grid) return;

    let visible = 0;
    $$('.feature-card', grid).forEach((card) => {
      const match = filter === 'all' || card.dataset.status === filter;
      card.hidden = !match;
      if (match) visible++;
    });

    if (empty) empty.hidden = visible > 0;
  }

  function init() {
    render();

    if (!$('[data-feature-filter]')) return;

    $$('[data-feature-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        $$('[data-feature-filter]').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        applyFilter(btn.dataset.featureFilter);
      });
    });
  }

  return { init };
})();


/* =========================================================================
   10. FLOW
   ========================================================================= */

const Flow = (() => {
  function render() {
    const list = $('#flow');
    if (!list) return;

    list.innerHTML = FLOW.map((step) => `
      <li class="flow-step reveal">
        <h3>${esc(step.title)}</h3>
        <p>${esc(step.body)}</p>
      </li>
    `).join('');
  }

  return { render };
})();


/* =========================================================================
   11. PROBLEMS
   ========================================================================= */

const Problems = (() => {
  function render() {
    const grid = $('#problem-grid');
    if (!grid) return;

    grid.innerHTML = PROBLEMS.map((p) => `
      <article class="problem-card reveal">
        <div class="problem-head">
          <span class="problem-icon" aria-hidden="true">${esc(p.icon)}</span>
          <h3>${esc(p.problem)}</h3>
        </div>
        <div class="problem-row">
          <span class="problem-tag">Common online pattern</span>
          <span class="problem-text">${esc(p.current)}</span>
        </div>
        <div class="problem-row idea">
          <span class="problem-tag">OFF idea</span>
          <span class="problem-text">${esc(p.idea)}</span>
        </div>
      </article>
    `).join('');
  }

  return { render };
})();


/* =========================================================================
   12. IDEAS
   ========================================================================= */

const Ideas = (() => {
  function render() {
    const grid = $('#idea-grid');
    if (!grid) return;

    grid.innerHTML = IDEAS.map((idea) => `
      <article class="idea-card reveal">
        <h3>${esc(idea.title)}</h3>
        <p>${esc(idea.body)}</p>
      </article>
    `).join('');
  }

  return { render };
})();


/* =========================================================================
   13. CHANGELOG
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
   14. ROADMAP + FILTERS
   ========================================================================= */

const Roadmap = (() => {
  const LABELS = {
    done: 'Done',
    progress: 'In progress',
    planned: 'Planned',
    research: 'Research'
  };

  function phaseBadge(status) {
    const cls = status === 'done' ? 'done'
      : status === 'progress' ? 'progress'
      : status === 'planned' ? 'planned'
      : 'research';
    return `<span class="badge badge-${cls}">${esc(LABELS[status] || status)}</span>`;
  }

  function render() {
    const container = $('#roadmap-list');
    if (!container) return;

    container.innerHTML = ROADMAP.map((phase) => `
      <article class="phase reveal" data-phase-status="${esc(phase.status)}">
        <div class="phase-head">
          <div>
            <span class="phase-num">${esc(phase.phase)}</span>
            <h3>${esc(phase.title)}</h3>
          </div>
          ${phaseBadge(phase.status)}
        </div>
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
      </article>
    `).join('');
  }

  function applyFilter(filter) {
    const container = $('#roadmap-list');
    const empty = $('#roadmap-empty');
    if (!container) return;

    let visiblePhases = 0;

    $$('.phase', container).forEach((phase) => {
      let visibleItems = 0;

      $$('.phase-item', phase).forEach((item) => {
        const match = filter === 'all' || item.dataset.status === filter;
        item.hidden = !match;
        if (match) visibleItems++;
      });

      if (filter === 'all') {
        phase.hidden = false;
        visiblePhases++;
      } else {
        const show = visibleItems > 0;
        phase.hidden = !show;
        if (show) visiblePhases++;
      }
    });

    if (empty) empty.hidden = visiblePhases > 0;
  }

  function init() {
    render();

    if (!$('[data-roadmap-filter]')) return;

    $$('[data-roadmap-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        $$('[data-roadmap-filter]').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        applyFilter(btn.dataset.roadmapFilter);
      });
    });
  }

  return { init };
})();


/* =========================================================================
   15. FAQ
   ========================================================================= */

const Faq = (() => {
  function render() {
    const list = $('#faq-list');
    if (!list) return;

    list.innerHTML = FAQS.map((item, i) => {
      const tag = item.tag
        ? `<span class="faq-tag ${esc(item.tag)}">${item.tag === 'current' ? 'Current implementation' : 'Planned'}</span>`
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
   16. DONATION / UPI
   ========================================================================= */

const Donation = (() => {
  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) { /* fall through */ }

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
      Toast.show('Could not copy — please copy manually.');
    }
  }

  /* Gracefully handle a missing QR image. */
  function guardQrImage(img) {
    if (!img) return;
    img.addEventListener('error', () => {
      const fallback = document.createElement('div');
      fallback.className = 'qr-fallback';
      fallback.textContent = 'QR image not found — add off-upi-qr.jpg next to index.html';
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
   17. MODAL
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
   18. TOAST
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
   19. REVEAL ON SCROLL
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
   20. ACTIVE NAV + HEADER STATE
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
   21. BACK TO TOP
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
   22. MISC
   ========================================================================= */

function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = String(new Date().getFullYear());
}

function initAnchorSmoothing() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href === '#' || href.length < 2) return;

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    if (document.body.classList.contains('nav-open')) {
      Nav.close();
    }
  });
}


/* =========================================================================
   23. INIT
   ========================================================================= */

function init() {
  Theme.init();

  Links.init();
  Story.render();
  Mindset.render();
  Comparison.render();
  Features.init();
  Flow.render();
  Problems.render();
  Ideas.render();
  Changelog.render();
  Roadmap.init();
  Faq.init();
  Donation.init();

  Modal.init();
  Nav.init();
  ActiveNav.init();
  BackToTop.init();

  setYear();
  initAnchorSmoothing();

  Reveal.observeAll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}