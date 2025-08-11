import initUI from './ui-events.js';
import TypeWriter from './typewriter.js';
import initHorizontalScroll from './horizontal-scroll.js';
import initContactForm from './contact-form.js';

initUI();

document.addEventListener('DOMContentLoaded', () => {
  const typewriterElement = document.getElementById('typewriter');
  if (typewriterElement) {
    new TypeWriter(typewriterElement, ['Tasmir Hossain Zihad'], {
      typingSpeed: 100,
      pauseBeforeDelete: 5000,
      loop: true
    });
  }
  
  initHorizontalScroll();
  initContactForm();
});
