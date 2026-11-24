/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  THE ONLY FILE YOU NEED TO EDIT FOR TEXT CONTENT             ║
 * ║  (images live in /public – see README.md)                    ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'Baladitya', // shown in navbar, footer, hero, about
  pageTitle: 'Baladitya – Full Stack Developer', // browser tab title
  role: 'Full Stack Developer', // footer subtitle
  email: 'perlabaladitya@gmail.com',
  // digits only, with country code, no + or spaces (e.g. 919876543210)
  phone: '918247227116',
  whatsappMessage: 'Hi, I visited your portfolio and would like to get in touch.',
  available: true,
};

/* ───────────── 2. HERO (top of page) ───────────── */
export const HERO = {
  eyebrow: 'FULL STACK DEVELOPMENT • AI-POWERED SOFTWARE',
  headline: 'BALADITYA', // big text, use CAPS
  roles: ['FULL STACK DEVELOPER', 'SOFTWARE ENGINEER'] as [string, string],
  tagline: 'I build full stack and AI-powered software, from clean backends and databases to interactive front ends.',
  primaryButton: 'EXPLORE MY WORK',
  secondaryButton: 'Get In Touch',
  image: '/assets/hero-red-bg.jpg', // 1920x1080, subject on the RIGHT side
  imageAlt: 'Portrait of Baladitya',
  imagePosition: '69% center', // CSS object-position fallback
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: 'BUILDING INTELLIGENT SOFTWARE THAT SOLVES REAL PROBLEMS',
  redWords: ['INTELLIGENT', 'REAL'], // words highlighted in red
};

/* ───────────── 4. ABOUT ───────────── */
export const ABOUT = {
  eyebrow: 'Full Stack · Software Engineering · AI-Powered Apps',
  portrait: '/media/profile.webp', // 4:5 portrait photo
  portraitAlt: 'Portrait of Baladitya',
  portraitCaption: 'Full Stack Developer', // small red text under the name on the photo
  paragraphs: [
    "I'm a Computer Science Engineering student and independent developer who builds full stack and AI-powered software.",
    'I turn ideas into working products, from clean backends and databases to interactive front ends.',
  ],
  technologies: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
  focus: ['Full Stack Development', 'Software Engineering', 'AI-Powered Apps'],
};

/* ───────────── 5. SOCIAL LINKS (footer) ───────────── */
export const SOCIALS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/Baladitya12' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/baladitya-perla-571151333' },
] as const;

/* ───────────── 6. TECHNICAL SKILLS (6 cards look best) ───────────── */
export const SKILL_CARDS: { name: string; category: string; level: string }[] = [
  { name: 'Full Stack Development', category: 'React · Node.js · FastAPI', level: 'Advanced' },
  { name: 'Python', category: 'FastAPI · NumPy · Scripting', level: 'Advanced' },
  { name: 'SQL', category: 'MySQL · SQLite · Queries', level: 'Proficient' },
  { name: 'Databases', category: 'Schema Design · CRUD · Vector Stores', level: 'Proficient' },
  { name: 'Render', category: 'Deployment · Hosting', level: 'Proficient' },
  { name: 'Software Engineering', category: 'Algorithms · Clean Code · Git', level: 'Proficient' },
];

/* ───────────── 6b. TECH STACK STRIP (logos under the skills) ─────────────
 * Use names with a built-in logo: React, JavaScript, Python, FastAPI, PostgreSQL,
 * Supabase, SQLite, Three.js, GSAP. Any other name still shows as a lettered badge. */
export const TECH_STACK: string[] = ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'React', 'FastAPI', 'SQLite'];

/* ───────────── 7. PROJECTS ─────────────
 * Thumbnails: put project-<n>-1.jpg, -2.jpg, -3.jpg in /public/assets/thumbnails/
 * (card cycles through 1-3). Set poster to the "-1.jpg" file.
 * Add liveUrl / repoUrl to show "View Live" / "View Code" buttons.
 * 6 or 9 projects fill the 3D grid best. */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'neurarag',
    kind: 'software',
    title: 'NeuraRAG',
    subtitle: 'Chat with your own documents using a local RAG pipeline',
    category: 'AI-Powered App',
    poster: '/assets/thumbnails/project-1-1.jpg',
    description:
      'Upload PDF, TXT or MD files, split them into chunks stored in a NumPy vector database, and chat with them. Answers stream with clickable source citations, and a vector DB inspector with live Top-K, temperature and system-prompt controls shows what the model sees.',
    tags: ['React', 'TypeScript', 'FastAPI', 'NumPy', 'Gemini API'],
    repoUrl: 'https://github.com/Baladitya12/RAG-Application',
  },
  {
    id: 'employee-management-system',
    kind: 'software',
    title: 'Employee Management System',
    subtitle: 'Employee directory, org chart and shift scheduling in one dashboard',
    category: 'Full Stack App',
    poster: '/assets/thumbnails/project-2-1.jpg',
    description:
      'Full CRUD with search, sort and filters, a live operations dashboard, and a collapsible org chart built with a tree-traversal algorithm. A shift planner shows overlaps and auto-fixes them with greedy interval scheduling.',
    tags: ['React', 'Node.js', 'Express', 'SQLite'],
    repoUrl: 'https://github.com/Baladitya12/Employee-Management-System',
  },
  {
    id: 'urban-threads',
    kind: 'software',
    title: 'Urban Threads',
    subtitle: 'Responsive e-commerce store with a full checkout flow',
    category: 'Web App',
    poster: '/assets/thumbnails/project-3-1.jpg',
    description:
      'Real-time search, category filters and sorting, a slide-out cart and wishlist, a multi-step checkout with promo codes, live customer reviews, and a persistent dark/light theme.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    repoUrl: 'https://github.com/Baladitya12/Brainwave_Matrix_Intern',
  },
];

/* ───────────── 8. HEADLINE NUMBERS (under hero) ───────────── */
export const CLIENT_STATS = [
  { id: 'stat-1', value: 3, suffix: '', label: 'Projects Built' },
  { id: 'stat-2', value: 9, suffix: '', label: 'Technologies' },
  { id: 'stat-3', value: 1, suffix: '', label: 'Internship' },
] as const;

/* Derived – do not edit */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
