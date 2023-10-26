import projects from "./projects";

const DOM = (function () {

    //RECURRENT DOM ELEMENTS
    //TASKS DOM ELEMENTS
    const taskList = document.getElementById('task-list');
    const currentProject = document.getElementById('project-name');
    loadProject(projects.projectList[0]);
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
            newProject.addEventListener('click',(e) => loadProject(project));

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

    function loadProject(project){
        setHeading(project.name);
        
        taskList.textContent = '';

        project.tasks.forEach(task => {
            //create task-div
            const newTask = document.createElement('div');
            newTask.className = 'task';
            
            //create checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;

            //create description
            const description = document.createElement('p');
            description.textContent = task.description;

            //create dueDate
            const dueDate = document.createElement('p');
            dueDate.textContent = task.date;

            //create Priority
            const priority = document.createElement('p');
            priority.textContent = task.priority;

            //create projectProperty
            const projectProperty = document.createElement('p');
            projectProperty.textContent = projects.projectList[task.projectIndex].name;

            newTask.appendChild(checkbox);
            newTask.appendChild(description);
            newTask.appendChild(dueDate);
            newTask.appendChild(priority);
            newTask.appendChild(projectProperty);

            taskList.appendChild(newTask);
            
        });

    }

    function setHeading(name){
        currentProject.textContent = name; 
    }

    function runEventListeners() {
        newProjectEventListeners();
    }

    runEventListeners();

    return { loadProjects };
})();

export default DOM