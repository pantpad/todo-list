import UI from './UI';

UI.addProject.addEventListener('click', () => {
    toggleNewProject();
});

UI.saveForm.addEventListener('click',(e) => {
    e.preventDefault;
    console.log('saved new project with the following informations: ');
    console.log(UI.projectInput.value);
    toggleNewProject();
    addNewProject();
    clearProjectInput();
})

UI.cancelForm.addEventListener('click',(e) => {
    e.preventDefault;
    toggleNewProject();
})

function toggleNewProject(){
    UI.addProject.classList.toggle('active');
    UI.addProjectForm.classList.toggle('active');
}

function addNewProject(){
    //create li
    const newProject = document.createElement('li');
    newProject.className = 'project';
    //add icon
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-inbox';
    //add a
    const aTag = document.createElement('a');
    aTag.textContent = UI.projectInput.value;
    //append to li
    newProject.appendChild(icon);
    newProject.appendChild(aTag);
    //append to ul
    UI.projectsTab.appendChild(newProject);
}

function clearProjectInput(){
    UI.projectInput.value = '';
}