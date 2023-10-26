import projects from "./projects";

const DOM = (function () {

    //RECURRENT DOM ELEMENTS
    //TASKS DOM ELEMENTS
    const currentProject = document.getElementById('project-name');
    //PROJECTS DOM ELEMENTS
    const projectsTab = document.querySelector('.projects-tab');
    const projectForm = document.querySelector('.add-project-form');
    const projectInput = document.getElementById('form-input');
    const colorInput = document.getElementById('color-selection');

    const add = document.querySelector('.add-project');
    const save = document.getElementById('save-form');
    const cancel = document.getElementById('cancel-form');


    //PROJECTS
    function loadProjects() {
        projectsTab.textContent = '';

        projects.projectList.forEach(project => {
            //create li
            const newProject = document.createElement('li');
            newProject.className = 'project';
            //add icon
            const icon = document.createElement('i');
            icon.className = project.icon ?? `circle`;
            icon.style.backgroundColor = project.color;
            //add a
            const aTag = document.createElement('a');
            aTag.textContent = project.name;
            //append to li
            newProject.appendChild(icon);
            newProject.appendChild(aTag);

            //add event listener to each project
            newProject.addEventListener('click',(e) => loadProject(project.name));

            //append to ul
            projectsTab.appendChild(newProject);
        });
    }

    //PROJECTS EVENTLISTENERS

    //event listeners for creating a new project
    function newProjectEventListeners() {
        add.addEventListener('click', (e) => { showProjectForm(e) });

        save.addEventListener('click', (e) => { processProjectInput(e) });

        cancel.addEventListener('click', (e) => { hideProjectForm(e) });

        function showProjectForm(e) {
            e.preventDefault();
            projectForm.classList.remove('hidden');

            document.getElementById('form-input').focus();
        }

        function hideProjectForm() {
            projectInput.value = '';
            projectForm.classList.add('hidden');
        }

        function processProjectInput(e) {
            e.preventDefault();
            projects.addProject(projectInput.value,colorInput.value);
            hideProjectForm();
        }

    }

    function loadProject(projectName){
        currentProject.textContent = projectName; 
    }

    function runEventListeners() {
        newProjectEventListeners();
    }

    runEventListeners();

    return { loadProjects };
})();

export default DOM