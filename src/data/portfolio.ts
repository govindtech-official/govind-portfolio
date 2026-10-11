/**
 * Central portfolio data for Govind Raj's portfolio.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Keep profile content grounded in details supplied for the portfolio.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Govind Raj',
  displayName: 'Govind Raj',
  firstName: 'GOVIND',
  seriesTag: 'THE PORTFOLIO',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A GOVIND RAJ ORIGINAL',
  role: 'Full-Stack Developer | AI & ML Enthusiast',
  tagline: ['Full-Stack Developer', 'AI & ML Enthusiast', 'Computer Science'],
  intro:
    'Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at KIIT University, with additional studies in Computer Science and Data Analytics at IIT Patna. I enjoy building practical, scalable web applications and AI-powered solutions for real-world problems. My interests include full-stack development, machine learning, cloud computing, system design, and software engineering. I keep improving my problem-solving through hands-on projects.',
  location: 'Bhubaneswar, Odisha, India',
  email: '',
  links: {
    linkedin: 'https://www.linkedin.com/in/govind-raj2607/',
    github: 'https://github.com/govindtech-official',
  },
  resumePdf: '/assets/Govind_Raj_Resume.pdf',
  resumeAvailable: false,
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Govind Raj',
  },
  interests: ['Artificial Intelligence', 'Machine Learning', 'Full-Stack Development', 'Cloud Computing', 'System Design', 'Data Structures and Algorithms', 'Entrepreneurship'],
};

export const education = [
  {
    school: 'Kalinga Institute of Industrial Technology (KIIT)',
    place: 'Bhubaneswar',
    degree: 'B.Tech in Computer Science and Engineering — Artificial Intelligence and Machine Learning',
    period: '2024 – 2028',
    score: 'Student',
  },
  {
    school: 'Indian Institute of Technology Patna',
    place: 'Patna',
    degree: 'B.Sc. in Computer Science and Data Analytics',
    period: 'Enrollment dates to be added',
    score: 'Current academic status to be added',
  },
];

export const experience = [
  {
    company: 'BBSR Got Latent',
    role: 'Producer',
    place: 'Bhubaneswar, Odisha',
    period: 'Dates not provided',
    points: [
      'Contributed to planning, production, and coordination of an independent entertainment show and its digital presence.',
    ],
  },
  {
    company: 'FED KIIT',
    role: 'Head of Venture Lab',
    place: 'KIIT University, Bhubaneswar',
    period: 'Dates not provided',
    points: [
      'Worked on entrepreneurship and startup-development initiatives, creating opportunities for members to gain practical experience.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'pearl-enclave',
    title: 'Pearl Enclave',
    year: '',
    genre: 'Full-Stack • Community Management',
    logline: 'An apartment management platform designed for a community of 24 flats.',
    stack: ['Full-Stack Development', 'JWT Authentication', 'REST APIs'],
    build: ['Built a full-stack apartment management application for a 24-flat community.', 'Designed resident management and maintenance workflows with JWT authentication and 15+ REST APIs.'],
    features: ['Resident management', 'Maintenance workflows', 'JWT authentication', '15+ REST APIs', 'Frontend and backend deployment'],
    metrics: [{ value: '24', label: 'flats supported' }, { value: '15+', label: 'REST APIs' }],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'launchpad',
    title: 'LaunchPad',
    year: '',
    genre: 'Full-Stack • Education',
    logline: 'A placement management platform connecting students, Training and Placement Coordinators, and recruiting companies.',
    stack: [],
    build: ['Designed a platform to simplify placement coordination and communication among students, coordinators, and recruiting companies.'],
    features: ['Student and coordinator workflows', 'Recruiting company connection', 'Placement coordination'],
    metrics: [],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'brandforge',
    title: 'BrandForge',
    year: '',
    genre: 'Full-Stack • Trading Simulation',
    logline: 'An interactive trading simulation with dynamic interfaces and market-data visualization.',
    stack: ['React.js', 'Node.js', 'Socket.IO', 'MongoDB', 'Chart.js'],
    build: ['Built an interactive trading simulation platform featuring dynamic interfaces and market-data visualization.'],
    features: ['Interactive trading simulation', 'Real-time communication with Socket.IO', 'Market-data visualization'],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'face-mask-detection', title: 'Face Mask Detection System', year: '', genre: 'AI • Computer Vision',
    logline: 'A computer vision project that detects face-mask usage from visual input.',
    stack: ['Python', 'CNN', 'OpenCV'], build: ['Used Convolutional Neural Networks and OpenCV to detect face-mask usage from visual input.'],
    features: ['Computer vision', 'CNN-based detection', 'OpenCV'], metrics: [],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' }, motif: 'shield',
  },
  {
    id: 'traffic-ai', title: 'Traffic AI Environment', year: '', genre: 'AI • Simulation',
    logline: 'An AI-focused project exploring traffic-related simulation and intelligent systems.',
    stack: ['Artificial Intelligence', 'Simulation'], build: ['Explored traffic-related simulation and intelligent systems.'],
    features: ['Traffic simulation', 'Intelligent systems'], metrics: [],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' }, motif: 'flow',
  },
  {
    id: 'infrastructure-change-detection', title: 'Conflict Impact & Infrastructure Change Detection', year: '', genre: 'AI • Image Analysis',
    logline: 'Image-based exploration of infrastructure changes in Jammu and Kashmir.',
    stack: ['Image Analysis', 'Artificial Intelligence'], build: ['Explored infrastructure changes in Jammu and Kashmir through image-based analysis and AI-related techniques.'],
    features: ['Image-based analysis', 'Infrastructure change detection'], metrics: [],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' }, motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'oci-ai-foundations',
    title: 'AI Foundations Associate',
    org: 'Oracle Cloud Infrastructure',
    detail: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.',
    laurel: 'Certified · 2025',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Oracle Cloud Infrastructure', name: '2025 Certified AI Foundations Associate' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming',
    subtitle: 'Programming languages',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'Python', mono: 'Py' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Web interfaces and styling',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'Tailwind CSS', mono: 'Tw' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Services and APIs',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST APIs', mono: 'API' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Database technologies',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'Oracle Database', mono: 'Or' },
    ],
  },
  {
    id: 'platforms',
    title: 'Tools & Platforms',
    subtitle: 'Development and deployment',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Vercel', mono: 'Ve' },
      { name: 'Render', mono: 'Re' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'Oracle Cloud Infrastructure', mono: 'OCI' },
    ],
  },
  {
    id: 'ai-interests',
    title: 'AI & Interests',
    subtitle: 'Areas of focus and exploration',
    skills: [
      { name: 'AI Fundamentals', mono: 'AI' },
      { name: 'Machine Learning', mono: 'ML' },
      { name: 'Computer Vision', mono: 'CV' },
      { name: 'System Design', mono: 'SD' },
      { name: 'Cloud Computing', mono: 'CC' },
      { name: 'Data Structures & Algorithms', mono: 'DSA' },
    ],
  },
];

/**
 * Cross-references shown when a skill card is hovered or tapped.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Programming skill'], Python: ['Face Mask Detection System'], JavaScript: ['React and Next.js projects'],
  'React.js': ['BrandForge'], 'Next.js': ['Listed technical skill'], HTML: ['Listed technical skill'], CSS: ['Listed technical skill'],
  'Tailwind CSS': ['Frontend skill'], 'Node.js': ['Pearl Enclave', 'BrandForge'], 'Express.js': ['Backend skill'], 'REST APIs': ['Pearl Enclave'],
  MongoDB: ['BrandForge'], 'Oracle Database': ['Listed technical skill'], Git: ['Development tools'], GitHub: ['Development platform'],
  Vercel: ['Deployment platform'], Render: ['Deployment platform'], Linux: ['Development platform'],
  'Oracle Cloud Infrastructure': ['Oracle Cloud Infrastructure AI Foundations certification'],
  'AI Fundamentals': ['Oracle Cloud Infrastructure AI Foundations certification'], 'Machine Learning': ['AI & ML studies at KIIT University'],
  'Computer Vision': ['Face Mask Detection System'], 'System Design': ['Area of interest'], 'Cloud Computing': ['Oracle Cloud Infrastructure certification'],
  'Data Structures & Algorithms': ['Area of interest'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundations',
    period: '2024 – 2028',
    synopsis: 'Studying Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at KIIT University.',
    episodes: [
      {
        code: 'C01 E01',
        title: 'Computer Science at KIIT',
        description: 'B.Tech in Computer Science and Engineering, specializing in Artificial Intelligence and Machine Learning.',
        tags: ['Computer Science', 'AI & ML'],
        runtime: '2024 – 2028',
        palette: amber,
      },
      {
        code: 'C01 E02', title: 'Data Analytics at IIT Patna', description: 'Additional studies in Computer Science and Data Analytics at the Indian Institute of Technology Patna.',
        tags: ['Computer Science', 'Data Analytics'], runtime: 'Dates to be added', palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Building Products',
    period: 'Selected projects',
    synopsis: 'Practical web applications and AI projects, from apartment management to computer vision and trading simulation.',
    episodes: [
      {
        code: 'C02 E01', title: 'Pearl Enclave', description: 'Apartment management for a community of 24 flats, with resident management, maintenance workflows, JWT authentication and 15+ REST APIs.',
        tags: ['Full-Stack', 'MongoDB', 'JWT'], runtime: 'Project',
        palette: violet,
      },
      {
        code: 'C02 E02', title: 'LaunchPad & BrandForge', description: 'Placement coordination for students and recruiters, alongside a trading simulation with live market-data visualization.',
        tags: ['Placement Platform', 'Socket.IO', 'Chart.js'], runtime: 'Projects',
        palette: crimson,
      },
      {
        code: 'C02 E03', title: 'Computer Vision & Traffic AI', description: 'Face-mask detection with CNNs and OpenCV, plus exploration of traffic simulation and intelligent systems.',
        tags: ['CNN', 'OpenCV', 'AI'], runtime: 'Projects',
        palette: jade,
      },
      { code: 'C02 E04', title: 'Infrastructure Change Detection', description: 'Research into infrastructure changes in Jammu and Kashmir using image-based analysis and AI-related techniques.', tags: ['Image Analysis', 'AI'], runtime: 'Research project', palette: ocean },
    ],
  },
  {
    number: 3,
    title: 'Community & Leadership',
    period: 'Leadership roles',
    synopsis: 'Contributing to student entrepreneurship and independent creative production.',
    episodes: [
      {
        code: 'C03 E01', title: 'Venture Lab', description: 'As Head of Venture Lab at FED KIIT, worked on entrepreneurship and startup-development initiatives and practical opportunities for members.',
        tags: ['Entrepreneurship', 'Startups'], runtime: 'FED KIIT',
        palette: ocean,
      },
      {
        code: 'C03 E02', title: 'BBSR Got Latent', description: 'Contributed to planning, production, coordination, and the digital presence of an independent entertainment show.',
        tags: ['Production', 'Coordination'], runtime: 'Producer',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'AI & Cloud',
    period: 'Certification',
    synopsis: 'Building knowledge in AI foundations and cloud technologies.',
    episodes: [
      {
        code: 'C04 E01', title: 'AI Foundations Associate', description: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.',
        tags: ['Oracle Cloud Infrastructure', 'AI Foundations'], runtime: '2025', palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: 'What’s Next',
    period: 'Ongoing',
    synopsis: 'Continuing to grow in software engineering, AI, cloud computing, and entrepreneurship.',
    episodes: [
      {
        code: 'C05 E01', title: 'The Next Chapter', description: 'Exploring artificial intelligence, machine learning, full-stack engineering, cloud computing, system design, algorithms, and entrepreneurship.',
        tags: ['AI', 'Machine Learning', 'Full-Stack', 'Cloud'], runtime: 'In progress',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Apartment platform', title: 'Pearl Enclave', detail: '24 flats • 15+ REST APIs', palette: amber },
  { label: 'Placement platform', title: 'LaunchPad', detail: 'Students • coordinators • recruiters', palette: crimson },
  { label: 'Trading simulation', title: 'BrandForge', detail: 'Socket.IO • Chart.js • MongoDB', palette: ocean },
  { label: 'Computer vision', title: 'Mask Detection', detail: 'CNNs • OpenCV', palette: violet },
  { label: 'Research project', title: 'Change Detection', detail: 'Infrastructure analysis in Jammu and Kashmir', palette: jade },
  { label: 'Certified', title: 'AI Foundations', detail: 'Oracle Cloud Infrastructure · 2025', palette: amber },
  { label: 'Student leader', title: 'Venture Lab', detail: 'Head of Venture Lab · FED KIIT', palette: crimson },
  { label: 'Producer', title: 'BBSR Got Latent', detail: 'Independent entertainment show', palette: ocean },
  { label: 'Study focus', title: 'AI & Machine Learning', detail: 'KIIT University · 2024–2028', palette: jade },
  { label: 'Data Analytics', title: 'IIT Patna', detail: 'B.Sc. in Computer Science and Data Analytics', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE + AI & ML',
    lines: ['KIIT University, Bhubaneswar', '2024 – 2028'],
    chips: ['Artificial Intelligence', 'Machine Learning'],
  },
  {
    kicker: 'Skills',
    title: 'Full-stack, with AI.',
    lines: ['Java, JavaScript, Python · React, Next.js, Node.js', 'MongoDB, Oracle Database · Git, Linux, OCI'],
    chips: ['Java', 'React', 'Next.js', 'Node.js', 'MongoDB', 'AI'],
  },
  {
    kicker: 'Projects',
    title: 'Built to be useful.',
    lines: ['Pearl Enclave — apartment management for 24 flats', 'LaunchPad — placement coordination platform', 'BrandForge — trading simulation and market visualization'],
  },
  {
    kicker: 'Computer Vision',
    title: 'Seeing patterns.',
    lines: ['Face Mask Detection — CNNs and OpenCV', 'Traffic AI Environment — simulation and intelligent systems', 'Infrastructure change detection — Jammu and Kashmir'],
  },
  {
    kicker: 'Leadership',
    title: 'Ideas into action.',
    lines: ['Head of Venture Lab — FED KIIT', 'Producer — BBSR Got Latent'],
  },
  {
    kicker: 'Certified',
    title: 'AI Foundations.',
    lines: ['Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate'],
  },
  {
    kicker: 'Current mission',
    title: 'Keep building.',
    lines: ['Full-stack engineering · AI & ML · Cloud · System Design · Entrepreneurship'],
  },
];

export type ProfileId = 'govind' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'govind',
    name: 'Govind',
    blurb: 'The full portfolio, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Education, projects & interests', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Career Chapters • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Entries`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Selected Projects`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Highlights', meta: 'Projects, learning & leadership', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Résumé', card: 'Résumé', meta: 'View profile & download résumé', palette: violet },
};
