const profiles = {
  personal: { label: 'PERSONAL MODE', target: 'home', active: 'personal' },
  recruiter: { label: 'RECRUITER MODE', target: 'education', active: 'recruiter' },
  developer: { label: 'DEVELOPER MODE', target: 'projects', active: 'developer' },
  creative: { label: 'CREATIVE MODE', target: 'creative', active: 'creative' }
};

const profileScreen = document.getElementById('profileScreen');
const openingScreen = document.getElementById('openingScreen');
const site = document.getElementById('site');
const profileLabel = document.getElementById('profileLabel');
const profileDialog = document.getElementById('profileDialog');
const introDialog = document.getElementById('introDialog');
const toast = document.getElementById('toast');
let introTimer;
let openingTimer;
let toastTimer;

function finishOpening() {
  clearTimeout(openingTimer);
  if (!openingScreen || openingScreen.hidden) return;
  openingScreen.classList.add('is-leaving');
  window.setTimeout(() => { openingScreen.hidden = true; }, 700);
}

document.getElementById('skipOpening').addEventListener('click', finishOpening);
document.addEventListener('keydown', (event) => {
  if (!openingScreen.hidden && (event.key === 'Enter' || event.key === 'Escape')) finishOpening();
});

function rememberProfile(profile) {
  try { sessionStorage.setItem('govindPortfolioProfile', profile); } catch (_) { /* session storage may be unavailable */ }
}

function getRememberedProfile() {
  try {
    const profile = sessionStorage.getItem('govindPortfolioProfile');
    return profiles[profile] ? profile : null;
  } catch (_) { return null; }
}

function applyProfile(profile, shouldScroll = true) {
  const details = profiles[profile];
  if (!details) return;
  rememberProfile(profile);
  profileScreen.hidden = true;
  site.hidden = false;
  profileLabel.textContent = details.label;
  site.dataset.profile = profile;
  document.querySelectorAll('.main-nav a').forEach((link) => {
    const active = link.dataset.nav === details.active;
    link.classList.toggle('nav-active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  if (shouldScroll) {
    requestAnimationFrame(() => document.getElementById(details.target)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }));
  }
}

document.querySelectorAll('[data-profile]').forEach((button) => {
  button.addEventListener('click', () => {
    const profile = button.dataset.profile;
    const wasOnSite = !site.hidden;
    if (profileDialog.open) profileDialog.close();
    applyProfile(profile, true);
    if (wasOnSite) announce('Switched to ' + profile + ' profile.');
  });
});

document.getElementById('switchProfile').addEventListener('click', () => profileDialog.showModal());
document.getElementById('closeDialog').addEventListener('click', () => profileDialog.close());
profileDialog.addEventListener('click', (event) => {
  if (event.target === profileDialog) profileDialog.close();
});

function announce(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function closeIntro() {
  clearTimeout(introTimer);
  if (introDialog.open) introDialog.close();
}

document.getElementById('playIntro').addEventListener('click', () => {
  introDialog.showModal();
  introTimer = setTimeout(closeIntro, 3000);
});
document.getElementById('skipIntro').addEventListener('click', closeIntro);
introDialog.addEventListener('click', (event) => {
  if (event.target === introDialog) closeIntro();
});
introDialog.addEventListener('close', () => clearTimeout(introTimer));

const skillDetails = {
  languages: {
    label: 'LANGUAGES LISTED ON PROFILE',
    title: 'Programming languages',
    description: 'Languages listed on my public profile. I have not assigned proficiency scores.',
    tags: ['Java', 'Python', 'C', 'Go']
  },
  web: {
    label: 'LEARNING INTEREST',
    title: 'Full-stack web',
    description: 'Exploring web development, including the MERN stack, as part of my broader software journey.',
    tags: ['Web development', 'MERN stack']
  },
  cs: {
    label: 'LEARNING INTEREST',
    title: 'AI, ML & DSA',
    description: 'Areas reflected in my studies and interests, including my CSE specialization and data analytics coursework.',
    tags: ['AI & machine learning', 'Data analytics', 'DSA']
  }
};

const skillTabs = [...document.querySelectorAll('.universe-tab')];
const skillPanel = document.getElementById('skillPanel');
function selectSkill(tab) {
  const skill = skillDetails[tab.dataset.skill];
  if (!skill) return;
  skillTabs.forEach((item) => {
    const active = item === tab;
    item.classList.toggle('active', active);
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
  });
  skillPanel.setAttribute('aria-labelledby', tab.id);
  document.getElementById('skillLabel').textContent = skill.label;
  document.getElementById('skillTitle').textContent = skill.title;
  document.getElementById('skillDescription').textContent = skill.description;
  const tags = document.getElementById('skillTags');
  tags.replaceChildren(...skill.tags.map((tag) => {
    const item = document.createElement('span');
    item.textContent = tag;
    return item;
  }));
}
skillTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectSkill(tab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === 'ArrowDown') nextIndex = (index + 1) % skillTabs.length;
    if (event.key === 'ArrowUp') nextIndex = (index - 1 + skillTabs.length) % skillTabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = skillTabs.length - 1;
    skillTabs[nextIndex].focus();
    selectSkill(skillTabs[nextIndex]);
  });
});

const remembered = getRememberedProfile();
if (remembered) {
  openingScreen.hidden = true;
  applyProfile(remembered, false);
} else if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
  finishOpening();
} else {
  openingTimer = setTimeout(finishOpening, 3300);
}

const progressBar = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');
let scrollUpdatePending = false;
function updateScrollChrome() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
  progressBar.style.transform = 'scaleX(' + progress + ')';
  backToTop.classList.toggle('visible', window.scrollY > 500);
  scrollUpdatePending = false;
}
window.addEventListener('scroll', () => {
  if (scrollUpdatePending) return;
  scrollUpdatePending = true;
  requestAnimationFrame(updateScrollChrome);
}, { passive: true });
window.addEventListener('resize', updateScrollChrome, { passive: true });
updateScrollChrome();
