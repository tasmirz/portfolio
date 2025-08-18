class ProjectsLoader {
    constructor() {
        if (ProjectsLoader.instance) {
            return ProjectsLoader.instance;
        }
        
        this.projectsContainer = document.querySelector('.projects-container');
        this.apiUrl = 'http://localhost:5000/Projects.aspx';
        
        ProjectsLoader.instance = this;
    }

    static getInstance() {
        if (!ProjectsLoader.instance) {
            ProjectsLoader.instance = new ProjectsLoader();
        }
        return ProjectsLoader.instance;
    }

    async fetchProjects() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            return data.projects;
        } catch (error) {
            console.error('Error fetching projects:', error);
            this.showState('error', 'Failed to load projects. Please try again later.');
            return [];
        }
    }

    createProjectCard(project) {
        const languageTags = project.languages
            .map(lang => `<span class="language-tag">${lang}</span>`)
            .join('');

        return `
            <div class="project-card">
                <div class="project-image">
                    <img src="${project.imageUrl}" alt="${project.name} project" loading="lazy">
                </div>
                <div class="project-content">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <div class="project-languages">${languageTags}</div>
                </div>
            </div>
        `;
    }

    renderProjects(projects) {
        if (!this.projectsContainer) {
            console.error('Projects container not found');
            return;
        }

        if (!projects || projects.length === 0) {
            this.showState('error', 'No projects found.');
            return;
        }

        const projectsHTML = projects.map(project => this.createProjectCard(project)).join('');
        this.projectsContainer.innerHTML = projectsHTML;
    }

    showState(type, message) {
        if (!this.projectsContainer) return;
        
        this.projectsContainer.innerHTML = `
            <div class="${type}-message">
                <p>${message}</p>
            </div>
        `;
    }

    async init() {
        this.showState('loading', 'Loading projects...');
        const projects = await this.fetchProjects();
        this.renderProjects(projects);
    }
}

export default ProjectsLoader;
