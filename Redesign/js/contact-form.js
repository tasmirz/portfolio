/**
 * Contact form functionality
 */
export default function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<span class="material-icons">sync</span>Sending...';
    submitBtn.disabled = true;
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    try {
      setTimeout(() => {
        submitBtn.innerHTML = '<span class="material-icons">check</span>Message Sent!';
        form.reset();
        
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 2000);
      }, 1000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      submitBtn.innerHTML = '<span class="material-icons">error</span>Error occurred';
      
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 2000);
    }
  });
}
