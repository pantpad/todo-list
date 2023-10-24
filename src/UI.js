const UI = (function (){
    //loading necessary UI elements
    const projectsTab = document.querySelector('.projects-tab');
    const addProject = document.querySelector('.add-project');
    const addProjectForm = document.querySelector('.add-project-form');
    const cancelForm = document.getElementById('cancel-form');
    const saveForm = document.getElementById('save-form');
    const projectInput = document.getElementById('form-input');

    return {projectsTab,addProject,addProjectForm,cancelForm,saveForm,projectInput};
})();

export default UI