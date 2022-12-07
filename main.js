// window.localStorage.setItem('taskInputEl');

window.addEventListener('load', () => {
    const form = document.querySelector('#form');
    const input = document.querySelector('#text');
    const listEl = document.querySelector('#task');

    form.addEventListener('submit', (e) => {
    e.preventDefault();

        const task = input.value
    
        if(!task){
            alert("Please fill out the task");
            return;
        }

        const taskEl = document.createElement("div");
        taskEl.classList.add("task");

        const taskContentEl = document.createElement("div");
        taskContentEl.classList.add("content");
        

        taskEl.appendChild(taskContentEl);

        const taskInputEl = document.createElement("input");
        taskInputEl.classList.add("text")
        taskInputEl.value = task;
        taskInputEl.type = "text";
        taskInputEl.setAttribute("readonly", "readonly")

        taskContentEl.appendChild(taskInputEl);

        const taskActionEl = document.createElement("div");
        taskActionEl.classList.add("action");


        const taskEditEl = document.createElement("button");
        taskEditEl.classList.add("edit");
        taskEditEl.innerHTML = "Edit";

        const taskDeletEl = document.createElement("button");
        taskDeletEl.classList.add("delete");
        taskDeletEl.innerHTML = "Delete";

        taskActionEl.appendChild(taskEditEl);
        taskActionEl.appendChild(taskDeletEl);

        taskEl.appendChild(taskActionEl);

        listEl.appendChild(taskEl);

        input.value = "";

        taskEditEl.addEventListener('click', () => {
           if(taskEditEl.innerText.toLowerCase() == "edit"){
                taskInputEl.removeAttribute("readonly");
                taskInputEl.focus();
                taskEditEl.innerText = "Save";
           }else{
                taskInputEl.setAttribute("readonly", "readonly");
                taskEditEl.innerText = "Edit";
           }
        });

        taskDeletEl.addEventListener('click', () => {
            listEl.removeChild(taskEl);
        });
   });
});