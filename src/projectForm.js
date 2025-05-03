
export const projectForm = function () {
    // Create modal overlay
    const modal = document.createElement("div");
    modal.id = "modal";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.backgroundColor = "#fff";
    modal.style.padding = "2rem";
    modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    modal.style.zIndex = "1000";
  
    // Create the form
    const form = document.createElement("form");
  
    // Helper to create label/input pair
    const createInput = (id, type, labelText) => {
      const label = document.createElement("label");
      label.setAttribute("for", id);
      label.textContent = labelText;
  
      const input = document.createElement("input");
      input.setAttribute("id", id);
      input.setAttribute("type", type);
      input.setAttribute("name", id);
      input.required = true;
  
      form.appendChild(label);
      form.appendChild(input);
    };
  
    createInput("projectName", "text", "Project Name:");
    createInput("description", "text", "Description:");
    createInput("startDate", "date", "Start Date:");
    createInput("endDate", "date", "End Date:");
  
    // Priority select
    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.textContent = "Priority:";
  
    const prioritySelect = document.createElement("select");
    prioritySelect.id = "priority";
    prioritySelect.setAttribute("name", "priority");
  
    ["High", "Medium", "Low"].forEach((level) => {
      const option = document.createElement("option");
      option.value = level.toLowerCase();
      option.textContent = level;
      prioritySelect.appendChild(option);
    });
  
    form.appendChild(priorityLabel);
    form.appendChild(prioritySelect);
  
    // Submit button
    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.type = "submit";
  
    form.appendChild(submit);
    modal.appendChild(form);
    document.body.appendChild(modal);
  
    return {form, modal};
  };
  