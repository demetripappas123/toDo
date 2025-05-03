import {appendTask} from "./appendTask";
import {taskForm} from "./taskForm.js";
import {task} from "./task.js";

export const appendProject = function(project, container, projects){
    const div = document.createElement('div');
    div.classList.add("projectDiv");
    div.innerHTML = `
    <h1>${project.projectName}<h1>
    <p>${project.description}<p>
    <p>${project.startDate} - ${project.endDate}<p>
    <p>${project.priority}<p>
    `;

    const clickProject = document.createElement("button");
    clickProject.textContent = "View Project";
    div.appendChild(clickProject);

    const removeProject = document.createElement("button");
    removeProject.textContent = "Remove Project";
    div.appendChild(removeProject);

    clickProject.addEventListener("click",()=>{
        container.innerHTML = "";
        //display the tasks for the project / add more / remove some 
        const taskHeader = document.createElement("div");
        container.appendChild(taskHeader);

        const taskContainer = document.createElement("div");
        container.appendChild(taskContainer);

        project.tasks.forEach(element => {
            appendTask(element, taskContainer,project);
        });

        const addTask = document.createElement("button");
        addTask.textContent = "Add Task";
        taskHeader.appendChild(addTask);

        addTask.addEventListener("click", ()=>{
            const theTaskForm = taskForm();
            const form = theTaskForm.form;
            form.addEventListener("submit", (e)=>{
                e.preventDefault();

                const taskData = new FormData(form);
                const data = Object.fromEntries(taskData.entries());
                const theTask = task(data);

                project.tasks.push(theTask);

                appendTask(theTask, container, project);
                document.body.removeChild(theTaskForm.modal);
            });
        });
    });

    removeProject.addEventListener("click", ()=>{
        projects.splice(projects.indexOf(project),1);
        container.removeChild(div);
    });

    container.appendChild(div);
}