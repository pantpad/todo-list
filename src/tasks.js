const tasks = (() => {
    
    function createTask(completed,description,date,priority,projectIndex,taskIndex){
        return {checked,description,date,priority,projectIndex}
    }
    
    return{createTask}
})();