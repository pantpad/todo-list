import projects from "./projects.js";

const createProject = (function () {

    //event listeners for creating a new project
    const runProjectEventListeners = () => {
        const add = document.querySelector('.add-project');
        add.addEventListener('click', (e) => {showProjectForm(e)});

        const save = document.getElementById('save-form');
        save.addEventListener('click', (e) => {processProjectInput(e)});

        const cancel = document.getElementById('cancel-form');
        cancel.addEventListener('click',(e) => {hideProjectForm(e)});
    }

    function showProjectForm(e){
        e.preventDefault();
        const projectForm = document.querySelector('.add-project-form');
        projectForm.classList.remove('hidden');

        document.getElementById('form-input').focus();
    }

    function hideProjectForm(){
        const projectForm = document.querySelector('.add-project-form');
        const projectInput = document.getElementById('form-input');

        projectInput.value = '';
        projectForm.classList.add('hidden');
    }

    function processProjectInput(e){
        e.preventDefault();
        let projectName = document.getElementById('form-input').value;
        projects.addProject(projectName);
        hideProjectForm();
    }

    return{runProjectEventListeners}
})();


export default createProject;