import DOM from "./DOM.js";

const projects = (() => {

    let projectList = [];

    function Project(name,icon,color){
        return {name,icon,color};
    }

    const home = Project('Home','fa-solid fa-inbox');
    projectList.push(home);

    const today = Project('Today','fa-solid fa-calendar-day');
    projectList.push(today);

    const week = Project('This Week','fa-solid fa-calendar-week');
    projectList.push(week);

    function addProject(name,color){
        const project = Project(name,null,color);
        projectList.push(project);
        DOM.loadProjects();
    }

    return {projectList,addProject}

})();

export default projects;