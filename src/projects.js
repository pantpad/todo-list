import DOM from "./DOM";

const projects = (() => {

    let projectList = [];

    function Project(name,icon,color){
        let tasks = [];

        return {name,icon,color,tasks};
    }

    const home = Project('Home','fa-solid fa-inbox');
    home.tasks.push(           {
        completed: false,
        description: 'Longer description of my demo task, just to show you this surprisingly nice scrollbar and amazingly cute kitty ฅ(^◉ᴥ◉^)ฅ',
        date: '2023-10-10',
        priority: 'HIGH',
        projectIndex: 0,
        taskIndex: 0,
    });
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