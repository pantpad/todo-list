import UI from "./UI.js";

const projects = (() => {

    let projectList = [];

    function Project(name){
        return {name};
    }

    function addProject(name){
        const project = Project(name);
        projectList.push(project);
        UI.loadProjects();
    }

    return {projectList,addProject}

})();

export default projects;