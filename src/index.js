import {projectForm} from "./projectForm.js";
import {project} from "./project.js";
import { appendProject } from "./appendProject.js";

const projects = [];

const topBar = document.createElement("div");
topBar.setAttribute("id","topBar");
document.body.appendChild(topBar);

const homeBtn = document.createElement("button");
homeBtn.textContent = 'Home';
topBar.appendChild(homeBtn);
homeBtn.addEventListener("click",()=>{
    container.innerHTML = "";
    projects.forEach(project => {
        appendProject(project, container, projects);
    });
});

const container = document.createElement("div");
document.body.appendChild(container); 
const addProject = document.createElement("button");
addProject.textContent = "Add Project";
topBar.appendChild(addProject);

addProject.addEventListener('click',()=>{
    const projectFormReturn = projectForm();
    const form = projectFormReturn.form;
    form.addEventListener("submit",(e)=>{
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const myProject = project(data);

        projects.push(myProject);
        appendProject(myProject, container, projects);

        document.body.removeChild(projectFormReturn.modal);

    });
})