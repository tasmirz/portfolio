import initUI from './ui-events.js';
import TypeWriter from './typewriter.js';
import initHorizontalScroll from './horizontal-scroll.js';
import initContactForm from './contact-form.js';
import ProjectsLoader from './projects-loader.js';
import SkillsLoader from './skills-loader.js';
import ProfileLoader from './profile-loader.js';

initUI();

document.addEventListener('DOMContentLoaded', async () => {
  // Load profile data first for typewriter initialization
  const profileLoader = new ProfileLoader();
  const profileData = await profileLoader.init();
  
  // Initialize typewriter with dynamic or fallback text
  initTypewriter(profileData);
  
  // Load content sections in parallel
  await Promise.allSettled([
    ProjectsLoader.getInstance().init(),
    SkillsLoader.getInstance().init()
  ]);
  
  // Initialize UI components after content loads
  initHorizontalScroll();
  initContactForm();
});

function initTypewriter(profileData) {
  const typewriterElement = document.getElementById('typewriter');
  if (!typewriterElement) return;
  
  const texts = profileData?.typewriterTexts || ['Tasmir Hossain Zihad'];
  const typewriter = new TypeWriter(typewriterElement, texts, {
    typingDelay: 100,
    pauseBeforeDelete: 5000,
    loop: true
  });
  
  typewriterElement.typewriterInstance = typewriter;
}
