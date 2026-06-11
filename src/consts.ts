// ─────────────────────────────────────────────────────────────────────────
// Site-wide constants. This is the file to edit for the "obvious" stuff:
// your name, tagline, location, social links, nav, and skills.
// ─────────────────────────────────────────────────────────────────────────

export const SITE = {
  title: 'Nate Burley',
  tagline: 'Machine Learning Engineer · Data Scientist · Robot Enthusiast',
  description:
    'Portfolio and writing of Nate Burley — a machine learning engineer and data scientist in Portland, OR. Projects in sensor ML, knowledge graphs, reinforcement learning, and generative models.',
  author: 'Nate Burley',
  location: 'Portland, OR',
  email: 'natemburl@gmail.com',
  // Shown in the terminal status bar / prompt (user@host).
  shell: 'nate@portland',
  url: 'https://nateburley.github.io',
};

// Social links shown in the sidebar and footer.
export const SOCIAL = {
  github: 'https://github.com/nateburley',
  linkedin: 'https://www.linkedin.com/in/nathaniel-burley/',
  twitter: 'https://twitter.com/natemburl',
  email: `mailto:${SITE.email}`,
};

// File-tree navigation in the sidebar. `key` is matched against each page's
// `active` prop to highlight the current section.
export const NAV: { label: string; href: string; key: string; external?: boolean }[] = [
  { label: 'about.md', href: '/#about', key: 'about' },
  { label: 'projects/', href: '/#work', key: 'work' },
  { label: 'writing/', href: '/writing', key: 'writing' },
  { label: 'resume.pdf', href: '/docs/NateBurley_Resume.pdf', key: 'resume', external: true },
  { label: 'contact', href: '/#contact', key: 'contact' },
];

// Skill chips under the intro.
export const SKILLS = [
  'Python', 'PyTorch', 'scikit-learn', 'XGBoost',
  'NLP', 'Reinforcement Learning', 'Knowledge Graphs', 'MLOps',
];

// ── Contact form ───────────────────────────────────────────────────────────
// To make the contact form actually email you: sign up (free) at
// https://formspree.io, create a form, and paste its ID here (the bit after
// "/f/" in the form URL). Until then the form falls back to opening the
// visitor's email client pre-addressed to you.
export const FORMSPREE_ID = '';
