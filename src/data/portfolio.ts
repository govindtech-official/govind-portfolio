/**
 * Central portfolio data for Govind Raj's portfolio.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Keep profile content grounded in details supplied for the portfolio.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

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
    'Computer Science student pursuing a B.Tech in CSE (AI & ML) at KIIT and a B.Sc. in Computer Science and Data Analytics at IIT Patna. I build full-stack applications and AI systems, including a Salesforce-integrated support agent using LangChain, FAISS, FastAPI, and React. My interests include AI/ML research, software engineering, and building dependable products.',
  location: 'Bhubaneswar, Odisha, India',
  phone: '+91 93411 98702',
  email: 'contactgovindtech@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/govind-raj2607/',
    github: 'https://github.com/govindtech-official',
  },
  resumePdf: publicAsset('assets/Govind_Raj_Resume.pdf'),
  resumeAvailable: false,
  portrait: {
    src: publicAsset('assets/portrait-720.webp'),
    srcSet: `${publicAsset('assets/portrait-420.webp')} 420w, ${publicAsset('assets/portrait-720.webp')} 720w, ${publicAsset('assets/portrait-1100.webp')} 1100w`,
    alt: 'Portrait of Govind Raj',
  },
  interests: ['Artificial Intelligence', 'Machine Learning', 'Full-Stack Development', 'Cloud Computing', 'System Design', 'Data Structures and Algorithms', 'Entrepreneurship'],
};

export const education = [
  {
    school: 'Kalinga Institute of Industrial Technology (KIIT)',
    place: 'Bhubaneswar',
    degree: 'B.Tech in Computer Science and Engineering — Artificial Intelligence and Machine Learning',
    period: '2024 – Present',
    score: 'Pursuing',
  },
  {
    school: 'Indian Institute of Technology Patna',
    place: 'Patna',
    degree: 'B.Sc. in Computer Science and Data Analytics',
    period: '2024 – Present',
    score: 'Pursuing',
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
    role: 'Tech Director',
    place: 'KIIT University, Bhubaneswar',
    period: '2024 – Present',
    points: [
      'Leads technology initiatives for FED KIIT, supporting its entrepreneurship community and startup-focused programs.',
    ],
  },
];

export const coursework = ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Object-Oriented Programming', 'Computer Networks', 'Machine Learning'];

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
    id: 'crm-agent', title: 'CRM-Agent — Autonomous Customer Support Agent', year: '2025', genre: 'AI • Full-Stack • Salesforce',
    logline: 'A Salesforce-integrated support agent combining intent classification and retrieval-augmented answers.',
    stack: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'React', 'Salesforce APIs'],
    build: ['Classifies queries with Salesforce Einstein Intent API and retrieves Salesforce Knowledge context through a LangChain + FAISS RAG pipeline.', 'Integrated Salesforce Cases REST API with simple-salesforce to log resolved and escalated requests.', 'Built FastAPI service and React dashboard with pytest coverage and GitHub Actions CI/CD.'],
    features: ['Autonomous query classification', 'Knowledge Article retrieval', 'Salesforce case logging', 'React dashboard', 'GitHub Actions CI/CD'],
    metrics: [{ value: '80%', label: 'simulated cases resolved' }, { value: '5,000+', label: 'queries evaluated' }, { value: '85%', label: 'test coverage' }],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' }, motif: 'flow',
  },
  {
    id: 'electricity-billing', title: 'Electricity Billing System', year: '2024', genre: 'Java • Desktop Application',
    logline: 'A Java Swing billing application with MySQL persistence for household electricity accounts.',
    stack: ['Java', 'Swing', 'JDBC', 'MySQL'],
    build: ['Implemented meter reading, bill calculation, payment tracking, and receipt generation.', 'Added Admin and User panels with role-based access and database operations.'],
    features: ['Meter readings', 'Bill calculation', 'Payment tracking', 'Receipt generation', 'Admin and User roles'], metrics: [],
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' }, motif: 'tenants',
  },
  {
    id: 'pearl-enclave',
    title: 'Pearl Enclave',
    year: '2024',
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
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    build: ['Built a tri-role ecosystem for students, Training and Placement Coordinators, and recruiting companies with separate dashboards and permission-scoped APIs.', 'Centralized communication, application tracking, and profile management with Mongoose validation and indexed queries.'],
    features: ['Student, TPC, and recruiter dashboards', 'Permission-scoped APIs', 'Application tracking', 'Profile management'],
    metrics: [{ value: '70%', label: 'less coordination overhead' }],
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
    title: 'AI Foundations Associate', org: 'Oracle University', detail: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.', laurel: 'Certified · Nov 2025',
  },
  { id: 'deloitte-simulation', title: 'Technology Job Simulation', org: 'Deloitte / Forage', detail: 'Coding & Development job simulation.', laurel: 'Completed · Nov 2025' },
  { id: 'salesforce-ai', title: 'Artificial Intelligence Fundamentals', org: 'Salesforce Trailhead', detail: 'Artificial Intelligence Fundamentals badge.', laurel: 'Badge · 2026' },
  { id: 'guvi-360', title: 'Become a 360° Web Developer', org: 'GUVI | HCL', detail: 'Web Developer workshop.', laurel: 'Workshop · Mar 2026' },
  { id: 'iit-foundation', title: 'Foundation Level Credit Requirements', org: 'IIT Patna', detail: 'CS & Data Analytics foundation level credit requirements.', laurel: 'Sep 2025' },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Oracle University', name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate · Nov 2025' },
  { issuer: 'Deloitte / Forage', name: 'Technology Job Simulation – Coding & Development · Nov 2025' },
  { issuer: 'Salesforce Trailhead', name: 'Artificial Intelligence Fundamentals Badge · 2026' },
  { issuer: 'GUVI | HCL', name: 'Become a 360° Web Developer Workshop · Mar 2026' },
  { issuer: 'IIT Patna', name: 'Foundation Level Credit Requirements – CS & Data Analytics · Sep 2025' },
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
      { name: 'Python', mono: 'Py' }, { name: 'JavaScript', mono: 'Js' }, { name: 'C++', mono: 'C+' }, { name: 'C', mono: 'C' }, { name: 'Bash', mono: 'Sh' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Web interfaces and styling',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'HTML5', mono: 'Ht' }, { name: 'CSS3', mono: 'Cs' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Services and APIs',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'FastAPI', mono: 'FA' }, { name: 'REST API Design', mono: 'API' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Database technologies',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' }, { name: 'PostgreSQL', mono: 'Pg' },
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
      { name: 'Linux CLI', mono: 'Lx' }, { name: 'GitHub Actions', mono: 'GH' }, { name: 'Apache Kafka', mono: 'Kf' }, { name: 'Apache', mono: 'Ap' }, { name: 'VS Code', mono: 'VS' }, { name: 'Postman', mono: 'Pm' }, { name: 'JWT', mono: 'JW' }, { name: 'bcrypt', mono: 'bc' }, { name: 'pytest', mono: 'pt' },
    ],
  },
  {
    id: 'ai-interests',
    title: 'AI & Interests',
    subtitle: 'Areas of focus and exploration',
    skills: [
      { name: 'LangChain', mono: 'LC' }, { name: 'FAISS', mono: 'Fi' }, { name: 'RAG Pipeline', mono: 'RAG' }, { name: 'OpenAI API', mono: 'OA' }, { name: 'Salesforce Einstein Intent API', mono: 'SF' }, { name: 'Benchmarking', mono: 'Bm' }, { name: 'Academic Writing', mono: 'Aw' }, { name: 'Algorithms', mono: 'Al' }, { name: 'Architecture Design', mono: 'AD' },
    ],
  },
  { id: 'salesforce', title: 'Salesforce Platform', subtitle: 'CRM and intelligent support', skills: [
    { name: 'Salesforce Developer Org', mono: 'SF' }, { name: 'CRM REST API (Cases)', mono: 'CRM' }, { name: 'Knowledge Articles', mono: 'KA' }, { name: 'simple-salesforce', mono: 'ss' }, { name: 'Agents', mono: 'Ag' },
  ] },
];

/**
 * Cross-references shown when a skill card is hovered or tapped.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Electricity Billing System'], Python: ['CRM-Agent', 'Face Mask Detection System'], JavaScript: ['React projects'], 'React.js': ['CRM-Agent', 'BrandForge'], 'Node.js': ['LaunchPad', 'BrandForge'], 'Express.js': ['LaunchPad'],
  'FastAPI': ['CRM-Agent'], 'REST API Design': ['CRM-Agent', 'LaunchPad'], MongoDB: ['LaunchPad', 'BrandForge'], MySQL: ['Electricity Billing System'], Git: ['Development tools'], 'GitHub Actions': ['CRM-Agent CI/CD'],
  'LangChain': ['CRM-Agent'], FAISS: ['CRM-Agent'], 'RAG Pipeline': ['CRM-Agent'], 'OpenAI API': ['Listed technical skill'], 'Salesforce Einstein Intent API': ['CRM-Agent'], 'Salesforce Developer Org': ['CRM-Agent'], 'CRM REST API (Cases)': ['CRM-Agent'], 'Knowledge Articles': ['CRM-Agent'], 'simple-salesforce': ['CRM-Agent'], Agents: ['CRM-Agent'],
  'HTML5': ['Web development'], 'CSS3': ['Web development'], PostgreSQL: ['Database skill'], 'Apache Kafka': ['Listed technical skill'], Apache: ['Listed technical skill'], 'VS Code': ['Development tools'], Postman: ['API development tools'], Linux: ['Development platform'], 'Linux CLI': ['Development platform'], JWT: ['Pearl Enclave', 'LaunchPad'], bcrypt: ['Listed technical skill'], pytest: ['CRM-Agent'],
  'Computer Vision': ['Face Mask Detection System'], 'System Design': ['Area of interest'], 'Machine Learning': ['AI & ML studies at KIIT University'],
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
    period: '2024 – Present',
    synopsis: 'Pursuing Computer Science and Engineering in AI & ML at KIIT while studying Computer Science and Data Analytics at IIT Patna.',
    episodes: [
      {
        code: 'C01 E01',
        title: 'Computer Science at KIIT',
        description: 'B.Tech in Computer Science and Engineering, specializing in Artificial Intelligence and Machine Learning.',
        tags: ['Computer Science', 'AI & ML'],
        runtime: '2024 – Present',
        palette: amber,
      },
      {
        code: 'C01 E02', title: 'Data Analytics at IIT Patna', description: 'Additional studies in Computer Science and Data Analytics at the Indian Institute of Technology Patna.',
        tags: ['Computer Science', 'Data Analytics'], runtime: '2024 – Present', palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Building Products',
    period: 'Selected projects',
    synopsis: 'Building AI agents and practical web applications, from Salesforce support automation to placement and billing platforms.',
    episodes: [
      {
        code: 'C02 E00', title: 'CRM-Agent', description: 'A Salesforce-integrated customer support agent using intent classification and LangChain + FAISS retrieval, resolving 80% of 5,000+ simulated queries.',
        tags: ['FastAPI', 'LangChain', 'FAISS', 'Salesforce'], runtime: '2025', palette: ocean,
      },
      {
        code: 'C02 E01', title: 'Pearl Enclave', description: 'Apartment management for a community of 24 flats, with resident management, maintenance workflows, JWT authentication and 15+ REST APIs.',
        tags: ['Full-Stack', 'MongoDB', 'JWT'], runtime: 'Project',
        palette: violet,
      },
      {
        code: 'C02 E02', title: 'LaunchPad & BrandForge', description: 'A tri-role placement platform for students, TPC coordinators, and recruiters, alongside a trading simulation with market-data visualization.',
        tags: ['React', 'Node.js', 'MongoDB', 'Socket.IO'], runtime: '2024',
        palette: crimson,
      },
      { code: 'C02 E05', title: 'Electricity Billing System', description: 'Java Swing and MySQL billing application for meter readings, payment tracking, receipts, and role-based Admin and User panels.', tags: ['Java', 'Swing', 'JDBC', 'MySQL'], runtime: '2024', palette: amber },
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
    synopsis: 'Leading technology initiatives at FED KIIT and contributing to independent creative production.',
    episodes: [
      {
        code: 'C03 E01', title: 'FED KIIT', description: 'Tech Director supporting technology initiatives for FED KIIT’s entrepreneurship community and startup-focused programs.',
        tags: ['Technology', 'Entrepreneurship'], runtime: '2024 – Present',
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
        code: 'C04 E01', title: 'Five Certifications & Workshops', description: 'Oracle University AI Foundations, Deloitte / Forage Coding & Development, Salesforce AI Fundamentals, GUVI | HCL 360° Web Developer, and IIT Patna foundation credits.',
        tags: ['Oracle University', 'Deloitte', 'Salesforce', 'GUVI | HCL', 'IIT Patna'], runtime: '2025 – 2026', palette: crimson,
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
  { label: 'Certifications', title: 'Five Credentials', detail: 'AI · Development · Web · Data Analytics', palette: amber },
  { label: 'Tech Director', title: 'FED KIIT', detail: 'Technology initiatives · 2024–Present', palette: crimson },
  { label: 'Producer', title: 'BBSR Got Latent', detail: 'Independent entertainment show', palette: ocean },
  { label: 'Study focus', title: 'AI & Machine Learning', detail: 'KIIT University · 2024–Present', palette: jade },
  { label: 'Data Analytics', title: 'IIT Patna', detail: 'B.Sc. in Computer Science and Data Analytics', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE + AI & ML',
    lines: ['KIIT University, Bhubaneswar · 2024–Present', 'IIT Patna · CS & Data Analytics · 2024–Present', 'Coursework: DSA, DBMS, OS, OOP, Networks, ML'],
    chips: ['Artificial Intelligence', 'Machine Learning'],
  },
  {
    kicker: 'Skills',
    title: 'Full-stack, with AI.',
    lines: ['Java, Python, JavaScript, C++, C, Bash', 'React, Node.js, FastAPI · MongoDB, MySQL, PostgreSQL'],
    chips: ['Java', 'Python', 'React', 'FastAPI', 'MongoDB', 'AI'],
  },
  {
    kicker: 'Projects',
    title: 'Built to be useful.',
    lines: ['CRM-Agent — Salesforce support agent · 80% resolution across 5,000+ queries', 'LaunchPad — tri-role placement platform · 70% less coordination overhead', 'Electricity Billing System · Pearl Enclave · BrandForge'],
  },
  {
    kicker: 'Computer Vision',
    title: 'Seeing patterns.',
    lines: ['Face Mask Detection — CNNs and OpenCV', 'Traffic AI Environment — simulation and intelligent systems', 'Infrastructure change detection — Jammu and Kashmir'],
  },
  {
    kicker: 'Leadership',
    title: 'Ideas into action.',
    lines: ['Tech Director — FED KIIT', 'Producer — BBSR Got Latent'],
  },
  {
    kicker: 'Certified',
    title: 'Five credentials.',
    lines: ['Oracle University · Deloitte / Forage · Salesforce Trailhead', 'GUVI | HCL · IIT Patna'],
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

