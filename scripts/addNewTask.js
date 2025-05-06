import Task from "./Task.js";
import {data} from "./Data.js";
import updatePage from "./Update.js";
import checkSubmitBtn from "./CheckSubmitBtn.js";

export default function addNewTask() {
    const lowPriority = document.getElementById('low-priority');
    const mediumPriority = document.getElementById('medium-priority');
    const highPriority = document.getElementById('high-priority');
    const selectedLowPriority = document.getElementById('selected-low-priority');
    const selectedMediumPriority = document.getElementById('selected-medium-priority');
    const selectedHighPriority = document.getElementById('selected-high-priority');
    const unsetTagsBtns = document.querySelectorAll('.unset-tag');
    const tagsBar = document.getElementById('tags-bar');
    const openTagsBtn = document.getElementById('open-tags-btn');
    const taskNameInput = document.getElementById('task-name-input');
    const taskDescriptionInput = document.getElementById('task-description-input');
    const submitTaskBtn = document.getElementById('submit-task-btn');
    const addNewTaskBtn = document.getElementById('add-new-task-btn');
    const addNewTaskArea = document.getElementById('add-new-task-area');

    const priorityOptions = [lowPriority, mediumPriority, highPriority];

    priorityOptions.forEach(option => {
        option.onclick = () => {

            tagsBar.classList.remove('open');
            openTagsBtn.classList.add('hidden');

            switch (option) {
                case lowPriority: 
                    selectedLowPriority.classList.remove('hidden');
                    selectedLowPriority.classList.add('flex');
                    break;
                case mediumPriority:
                    selectedMediumPriority.classList.remove('hidden');
                    selectedMediumPriority.classList.add('flex');
                    break;
                case highPriority:
                    selectedHighPriority.classList.remove('hidden');
                    selectedHighPriority.classList.add('flex');
            }

            checkSubmitBtn();
        };
    });

    unsetTagsBtns.forEach(btn => {
        btn.onclick = () => {
            btn.closest("div").classList.remove("flex");
            btn.closest("div").classList.add("hidden");

            tagsBar.classList.add('open');
            openTagsBtn.classList.remove('hidden');
            checkSubmitBtn();
        };
    });

    taskNameInput.addEventListener("input", checkSubmitBtn);
    taskDescriptionInput.addEventListener("input", checkSubmitBtn);

    submitTaskBtn.onclick = () => {

        let taskPriority;
        if (selectedHighPriority.classList.contains('flex')) taskPriority = "high";
        else if (selectedLowPriority.classList.contains('flex')) taskPriority = "low";
        else if (selectedMediumPriority.classList.contains('flex')) taskPriority = "medium";
        
        addNewTaskBtn.classList.remove('hidden');
        addNewTaskBtn.classList.add('flex');
        addNewTaskArea.classList.remove('flex');
        addNewTaskArea.classList.add('hidden');

        let name = taskNameInput.value;
        let description = taskDescriptionInput.value;
        let priority = taskPriority;

        // check that the name is unique
        // check the description and name length

        let newTask = new Task(name, description, priority);

        data.push(newTask);

        taskNameInput.value = "";
        taskDescriptionInput.value = "";
        taskPriority = null;
        [selectedHighPriority, selectedLowPriority, selectedMediumPriority].forEach(tag => {
            tag.classList.remove('flex');
            tag.classList.add('hidden');
        });
        tagsBar.classList.add('open');

        checkSubmitBtn();
        
        updatePage();
    };
}


