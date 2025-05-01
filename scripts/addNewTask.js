import Task from "./task.js";
import data from "./data.js";

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
    const taskNameInput = document.getElementById('task-name');
    const taskDescriptionInput = document.getElementById('task-description');
    const submitTaskBtn = document.getElementById('submit-task-btn');

    const priorityOptions = [lowPriority, mediumPriority, highPriority];

    let selectedPrioriry;

    let tagSelected = false;
    let taskPriority;

    priorityOptions.forEach(option => {
        option.onclick = () => {
            selectedPrioriry = option;
            tagSelected = true;
            checkSubmitBtn();

            tagsBar.classList.remove('open');
            openTagsBtn.classList.add('hidden');

            switch (option) {
                case lowPriority: 
                    selectedLowPriority.classList.remove('hidden');
                    selectedLowPriority.classList.add('flex');
                    taskPriority = "low";
                    break;
                case mediumPriority:
                    selectedMediumPriority.classList.remove('hidden');
                    selectedMediumPriority.classList.add('flex');
                    taskPriority = "medium";
                    break;
                case highPriority:
                    selectedHighPriority.classList.remove('hidden');
                    selectedHighPriority.classList.add('flex');
                    taskPriority = "high";
            }
        };
    });

    unsetTagsBtns.forEach(btn => {
        btn.onclick = () => {
            tagSelected = false;
            taskPriority = null;

            btn.closest("div").classList.remove("flex");
            btn.closest("div").classList.add("hidden");

            tagsBar.classList.add('open');
            openTagsBtn.classList.remove('hidden');
        };
    });

    const checkSubmitBtn = function () {
        if ((taskNameInput.value.trim() !== "") && (taskDescriptionInput.value.trim() !== "") && tagSelected) {
            submitTaskBtn.disabled = false;
        } else {
            submitTaskBtn.disabled = true;
        }
    }

    taskNameInput.addEventListener("input", checkSubmitBtn);
    taskDescriptionInput.addEventListener("input", checkSubmitBtn);

    submitTaskBtn.onclick = () => {
        let name = taskNameInput.value;
        let description = taskDescriptionInput.value;
        let priority = taskPriority;

        let newTask = new Task(name, description, priority);

        // TODO: add task to json
    };
}