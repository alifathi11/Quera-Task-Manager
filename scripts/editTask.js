import deleteTask from "./DeleteTask.js";

export default function editTask(task) {
    const addNewTaskBtn = document.getElementById('add-new-task-btn');
    const selectedLowPriority = document.getElementById('selected-low-priority');
    const selectedMediumPriority = document.getElementById('selected-medium-priority');
    const selectedHighPriority = document.getElementById('selected-high-priority');
    const addNewTaskArea = document.getElementById('add-new-task-area');
    const tagsBar = document.getElementById('tags-bar');
    const taskNameInput = document.getElementById('task-name-input');
    const taskDescriptionInput = document.getElementById('task-description-input');

    task.remove();
    deleteTask(task);

    addNewTaskBtn.classList.remove('flex');
    addNewTaskBtn.classList.add('hidden');
    addNewTaskArea.classList.remove('hidden');
    addNewTaskArea.classList.add('flex');
    tagsBar.classList.remove('open');

    taskNameInput.value = task.querySelector('.task-name').innerText;
    taskDescriptionInput.value = task.querySelector('.task-description').innerText;
    
    const taskPriority = task.querySelector('.priority p').innerText;
    switch(taskPriority) {
        case "بالا":
            selectedHighPriority.classList.remove('hidden');
            selectedHighPriority.classList.add('flex');
            break;
        case "متوسط":
            selectedMediumPriority.classList.remove('hidden');
            selectedMediumPriority.classList.add('flex');
            break;
        case "پایین":  
            selectedLowPriority.classList.remove('hidden');
            selectedLowPriority.classList.add('flex');   
    }
}