import DOM from "./DOM.js";

const projects = (() => {

    let projectList = [];

    function Project(name){
        return {name};
    }

    function addProject(name){
        const project = Project(name);
        projectList.push(project);
        DOM.loadProjects();
    }

    return {projectList,addProject}

})();

export default projects;