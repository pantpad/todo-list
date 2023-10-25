import projects from "./projects.js";
import createProject from "./createProject.js";

const UI = (function () {

    function loadProjects(){
        const projectsTab = document.querySelector('.projects-tab');
        projectsTab.textContent = '';
        
        projects.projectList.forEach(project => {
            
            //create li
            const newProject = document.createElement('li');
            newProject.className = 'project';
            //add icon
            const icon = document.createElement('i');
            icon.className = 'fa-solid fa-list';
            //add a
            const aTag = document.createElement('a');
            aTag.textContent = project.name;
            //append to li
            newProject.appendChild(icon);
            newProject.appendChild(aTag);
            //append to ul
            projectsTab.appendChild(newProject);
        });
    }

    createProject.runProjectEventListeners();

    return {loadProjects};
})();

export default UI