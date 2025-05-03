

export const appendTask = function(task, container, project){
    const div = document.createElement("div");
    div.classList.add("task");

    div.innerHTML = `
        <h1>${task.name}<h1>
        <p>${task.description}<p>
        <p>${task.startDate} - ${project.endDate}<p>
        <p>${task.priority}<p>
    `;

    const rmBtn = document.createElement("button");
    rmBtn.textContent = "Remove Task"
    rmBtn.classList.add("rmTskBtn");
    div.appendChild(rmBtn);
    rmBtn.addEventListener("click",()=>{
        container.removeChild(div);
        project.tasks.splice(project.tasks.indexOf(task), 1);
    });

    container.appendChild(div);
}