export default class TypeWriter {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = texts;
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.options = {
            typingSpeed: options.typingSpeed || 100,
            deletingSpeed: options.deletingSpeed || 50,
            pauseBeforeDelete: options.pauseBeforeDelete || 2000,
            pauseBeforeType: options.pauseBeforeType || 500,
            loop: options.loop !== undefined ? options.loop : true
        };
        this.startTyping();
    }

    startTyping() {
        const currentText = this.texts[this.currentTextIndex];
        const typingSpeed = this.isDeleting 
            ? this.options.deletingSpeed 
            : this.options.typingSpeed;
        
        if (this.isDeleting) {
            this.currentCharIndex--;
        } else {
            this.currentCharIndex++;
        }

        this.element.innerHTML = `${currentText.substring(0, this.currentCharIndex)}<span class="cursor">|</span>`;

        if (!this.isDeleting && this.currentCharIndex === currentText.length) {
            this.isDeleting = true;
            setTimeout(() => this.startTyping(), this.options.pauseBeforeDelete);
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            
            if (!this.options.loop && this.currentTextIndex === 0) {
                return;
            }
            
            setTimeout(() => this.startTyping(), this.options.pauseBeforeType);
        } else {
            setTimeout(() => this.startTyping(), typingSpeed);
        }
    }
}
