// ─────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string
  fullName: string
  role: string
  tagline: string
  bio: string[]
  email: string
  phone: string
  github: string
  website: string
  location: string
  education: string
  toeic: string
  availability: string
  cvUrl: string
  // Set to '/avatar.jpg' after adding your photo to public/
  avatarUrl: string | null
}

export interface SocialLink {
  label: string
  href: string
  iconName: string
}

export interface NavLink {
  label: string
  href: string
}

export interface Skill {
  name: string
  featured?: boolean
}

export interface SkillGroup {
  category: string
  tabValue: string
  iconName: string
  skills: Skill[]
}

export interface Project {
  id: string
  title: string
  type: string
  typeColor: 'indigo' | 'cyan' | 'violet'
  timeline: string
  role: string
  objective: string
  stack: string[]
  achievements: string[]
  architectureHighlights?: string[]
  github?: string
  demo?: string
}

export interface TimelineEntry {
  id: string
  period: string
  institution: string
  location: string
  degree: string
  type: 'education' | 'work' | 'milestone'
  focus: string[]
  goal?: string
  current: boolean
}

export interface QuickFact {
  label: string
  value: string
  iconName: string
}

export interface FeatureCard {
  title: string
  description: string
  iconName: string
}

// ─────────────────────────────────────────────────────────
// PERSONAL INFO
// ─────────────────────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: 'Nam Tran',
  fullName: 'Trần Nhật Nam',
  role: 'Backend .NET Developer',
  tagline:
    'I build clean, scalable, and maintainable backend systems with .NET, Clean Architecture, DevOps, and real-world product thinking.',
  bio: [
    "I'm a self-driven Backend .NET Developer focused on building systems that are maintainable, scalable, and designed to last. While I'm early in my professional career, I've delivered real-world systems with production-grade architecture.",
    'My work spans Clean Architecture, CQRS, database design, Docker deployments, CI/CD pipelines, security, and performance optimization. I believe great software is not just about working code — it should be maintainable, extensible, and built for the long run.',
    'My goal is to grow into a Software Engineer or System Engineer capable of designing complex, high-reliability systems from the ground up.',
  ],
  email: 'namtran2712.dev@gmail.com',
  phone: '0976290389',
  github: 'https://github.com/NamTran-Dev-2712',
  website: 'https://trannam.xyz',
  location: 'District 3, Ho Chi Minh City, Vietnam',
  education: 'Saigon University — Information Technology (2022–2027)',
  toeic: 'TOEIC L&R 595',
  availability: 'Open to internships, junior roles & collaborations',
  cvUrl: '/cv.pdf',
  avatarUrl: null, // Set to '/avatar.jpg' after adding your photo to public/
}

export const typingRoles: string[] = [
  'Backend .NET Developer',
  'Clean Architecture Enthusiast',
  'System Design Learner',
  'DevOps & CI/CD Practitioner',
  'Always Learning, Always Building',
]

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/NamTran-Dev-2712',
    iconName: 'Github',
  },
  {
    label: 'Email',
    href: 'mailto:namtran2712.dev@gmail.com',
    iconName: 'Mail',
  },
  {
    label: 'Website',
    href: 'https://trannam.xyz',
    iconName: 'Globe',
  },
]

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

// ─────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    tabValue: 'backend',
    iconName: 'Server',
    skills: [
      { name: 'C#', featured: true },
      { name: '.NET', featured: true },
      { name: 'ASP.NET Web API', featured: true },
      { name: 'Clean Architecture', featured: true },
      { name: 'CQRS', featured: true },
      { name: 'MediatR' },
      { name: 'Unit of Work Pattern' },
      { name: 'JWT Authentication' },
      { name: 'Refresh Token Rotation' },
      { name: 'Google OAuth 2.0' },
      { name: 'Hangfire' },
      { name: 'SePay Webhook' },
    ],
  },
  {
    category: 'Database & Caching',
    tabValue: 'database',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', featured: true },
      { name: 'MySQL' },
      { name: 'Redis', featured: true },
      { name: 'Database Optimization' },
      { name: 'Real-time Inventory Logic' },
      { name: 'Domain Modeling' },
    ],
  },
  {
    category: 'Frontend',
    tabValue: 'frontend',
    iconName: 'Monitor',
    skills: [
      { name: 'React', featured: true },
      { name: 'React 19' },
      { name: 'TypeScript', featured: true },
      { name: 'RemixJS' },
      { name: 'NextJS' },
      { name: 'Tailwind CSS' },
      { name: 'Responsive UI' },
    ],
  },
  {
    category: 'DevOps',
    tabValue: 'devops',
    iconName: 'Terminal',
    skills: [
      { name: 'Docker', featured: true },
      { name: 'Docker-based VPS Deployment' },
      { name: 'GitHub Actions', featured: true },
      { name: 'CI/CD' },
      { name: 'Blue-Green Deployment', featured: true },
      { name: 'Git / GitHub Team Workflow' },
    ],
  },
  {
    category: 'Engineering',
    tabValue: 'engineering',
    iconName: 'Lightbulb',
    skills: [
      { name: 'System Design' },
      { name: 'Scalable Architecture' },
      { name: 'Maintainable Code' },
      { name: 'API Design' },
      { name: 'Admin Dashboard' },
      { name: 'Multi-language / i18n' },
      { name: 'AI Integration (MiniMax API)' },
    ],
  },
]

// ─────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'sneaker-shop',
    title: 'Sneaker Shop',
    type: 'Omnichannel Retail Platform',
    typeColor: 'indigo',
    timeline: '01/2026 – 05/2026',
    role: 'Backend Developer — System Design & Core API Development',
    objective:
      'Develop an omnichannel retail platform to synchronize inventory, orders, and customer experiences across online and POS channels, with a focus on scalability and long-term maintainability.',
    stack: ['.NET', 'ASP.NET Web API', 'Clean Architecture', 'PostgreSQL', 'Docker', 'Git'],
    achievements: [
      'Implemented Clean Architecture to strictly decouple business logic, infrastructure, and presentation layers — making the system easy to test and scale independently.',
      'Designed real-time inventory calculation logic: available = on_hand − reserved, ensuring accurate cross-channel stock visibility.',
      'Built a unified "Sellable Item" domain model to manage sneakers, accessories, SKUs and barcodes consistently across multi-branch retail operations.',
    ],
    architectureHighlights: [
      'Domain-driven design with clear aggregate boundaries and invariant enforcement',
      'Repository + Unit of Work pattern for transactional consistency',
      'Clean separation: Domain → Application → Infrastructure → API',
    ],
    github: 'https://github.com/NamTran-Dev-2712/sneaker-shop',
  },
  {
    id: 'mini-booking',
    title: 'Mini Booking System',
    type: 'Student-Mentor Booking Platform',
    typeColor: 'cyan',
    timeline: '01/05/2026 – 25/05/2026',
    role: 'Backend Developer — System Design & Core API Development',
    objective:
      'Full-stack platform connecting students and mentors with automated QR payment processing, booking lifecycle management, background job scheduling, and a complete admin dashboard.',
    stack: [
      '.NET 10',
      'React 19',
      'Clean Architecture',
      'CQRS',
      'MediatR',
      'PostgreSQL',
      'Redis',
      'Docker',
      'GitHub Actions',
      'SePay Webhook',
      'Hangfire',
      'JWT',
      'Google OAuth 2.0',
      'MiniMax API',
      'i18n',
    ],
    achievements: [
      'Architected with Clean Architecture + CQRS (MediatR) for clear separation of concerns and high testability across all layers.',
      'Implemented Blue-Green Deployment via GitHub Actions + Docker on VPS, enabling zero-downtime releases and instant rollback capability.',
      'Integrated SePay Webhook for fully automated QR payment confirmation — no manual intervention required.',
      'Used Hangfire for reliable background jobs: expired booking cleanup, session completion, and automated notification dispatch.',
      'Applied Redis for distributed caching and rate limiting middleware, reducing database load on high-traffic endpoints.',
      'Built JWT + Refresh Token Rotation and Google OAuth 2.0 for secure, stateless, production-grade authentication.',
      'Integrated MiniMax AI API for intelligent booking features and delivered full multi-language (i18n) support with admin dashboard.',
    ],
    architectureHighlights: [
      'CQRS with MediatR: commands and queries fully separated with pipeline behaviors',
      'Blue-Green Deployment for zero-downtime production releases via GitHub Actions',
      'Event-driven background processing with Hangfire job scheduling',
      'Redis cache layer + rate limiting middleware for performance and security',
    ],
    github: 'https://github.com/NamTran-Dev-2712/mini-booking-system',
    demo: 'https://trannam.xyz',
  },
]

// ─────────────────────────────────────────────────────────
// JOURNEY / TIMELINE
// ─────────────────────────────────────────────────────────

export const timelineEntries: TimelineEntry[] = [
  {
    id: 'saigon-university',
    period: '2022 – 2027',
    institution: 'Saigon University',
    location: 'Ho Chi Minh City, Vietnam',
    degree: 'Bachelor of Information Technology',
    type: 'education',
    focus: [
      'Backend Engineering',
      'Clean Architecture',
      'System Design',
      'DevOps & CI/CD',
      'Production-ready Systems',
    ],
    goal: 'Become a Software Engineer / System Engineer capable of designing scalable, complex systems that solve real business problems.',
    current: true,
  },
]

// ─────────────────────────────────────────────────────────
// ABOUT — QUICK FACTS & FEATURE CARDS
// ─────────────────────────────────────────────────────────

export const quickFacts: QuickFact[] = [
  {
    label: 'Location',
    value: 'Ho Chi Minh City, Vietnam',
    iconName: 'MapPin',
  },
  {
    label: 'Education',
    value: 'Saigon University, IT (2022–2027)',
    iconName: 'GraduationCap',
  },
  {
    label: 'Open to',
    value: 'Internships, Junior Roles, Collaborations',
    iconName: 'Briefcase',
  },
  {
    label: 'English',
    value: 'TOEIC L&R 595',
    iconName: 'Languages',
  },
]

export const featureCards: FeatureCard[] = [
  {
    title: 'Backend Engineering',
    description:
      'Building robust REST APIs with .NET, Clean Architecture, CQRS, and domain-driven design patterns that scale and last.',
    iconName: 'Server',
  },
  {
    title: 'System Design Mindset',
    description:
      'Designing systems with clear boundaries, thoughtful data modeling, and maintainable code architecture from day one.',
    iconName: 'GitBranch',
  },
  {
    title: 'DevOps & Automation',
    description:
      'Shipping with confidence via Docker, GitHub Actions CI/CD, Blue-Green Deployment, and production-grade VPS management.',
    iconName: 'Terminal',
  },
]
