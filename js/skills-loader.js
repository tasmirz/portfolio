class SkillsLoader {
    constructor() {
        if (SkillsLoader.instance) {
            return SkillsLoader.instance;
        }
        
        this.skillsContainer = document.querySelector('.skills-section');
        this.apiUrl = 'http://localhost:5000/Skills.aspx';
        
        SkillsLoader.instance = this;
    }

    static getInstance() {
        if (!SkillsLoader.instance) {
            SkillsLoader.instance = new SkillsLoader();
        }
        return SkillsLoader.instance;
    }

    async fetchSkills() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            return data.skillCategories;
        } catch (error) {
            console.error('Error fetching skills:', error);
            this.showState('error', 'Failed to load skills. Please try again later.');
            return [];
        }
    }

    createSkillCategoryHTML(category) {
        const skillTags = category.skills
            .map(skill => `<span class="skill-tag">${skill}</span>`)
            .join(' ');

        return `
            <div class="skill-category">
                <h4>${category.name}</h4>
                <div class="skill-tags">${skillTags}</div>
            </div>
        `;
    }

    renderSkills(skillCategories) {
        if (!this.skillsContainer) {
            console.error('Skills container not found');
            return;
        }

        if (!skillCategories || skillCategories.length === 0) {
            this.showState('error', 'No skills found.');
            return;
        }

        const skillsHTML = skillCategories.map(category => this.createSkillCategoryHTML(category)).join('');
        const skillsTitle = this.skillsContainer.querySelector('h3');
        
        if (skillsTitle) {
            skillsTitle.insertAdjacentHTML('afterend', skillsHTML);
        } else {
            this.skillsContainer.innerHTML = '<h3>Skills</h3>' + skillsHTML;
        }
    }

    showState(type, message) {
        if (!this.skillsContainer) return;
        
        this.skillsContainer.innerHTML = `
            <h3>Skills</h3>
            <div class="${type}-message">
                <p>${message}</p>
            </div>
        `;
    }

    async init() {
        this.showState('loading', 'Loading skills...');
        const skillCategories = await this.fetchSkills();
        this.renderSkills(skillCategories);
    }
}

export default SkillsLoader;
