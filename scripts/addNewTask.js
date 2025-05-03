import Task from "./Task.js";
import {data} from "./Data.js";
import updatePage from "./Update.js";

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
    let tagSelected = false;
    let taskPriority;

    priorityOptions.forEach(option => {
        option.onclick = () => {
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
            checkSubmitBtn();

            btn.closest("div").classList.remove("flex");
            btn.closest("div").classList.add("hidden");

            tagsBar.classList.add('open');
            openTagsBtn.classList.remove('hidden');
        };
    });

    const checkSubmitBtn = function () {
        let isDarkMode = document.documentElement.classList.contains('dark');
        if ((taskNameInput.value.trim() !== "") && (taskDescriptionInput.value.trim() !== "") && tagSelected) {
            submitTaskBtn.disabled = false;
            if (!isDarkMode) {
                submitTaskBtn.classList.remove('bg-[var(--disabled-btn-blue)]');
                submitTaskBtn.classList.add('bg-[var(--primary-light)]');
            } else {
                submitTaskBtn.classList.remove('dark:bg-[var(--disabled-btn-dark)]');
                submitTaskBtn.classList.add('dark:bg-[var(--on-background-dark)]');
                submitTaskBtn.classList.remove('dark:text-[var(--dark-gray-text)]');
                submitTaskBtn.classList.add('dark:text-white');
            }
        } else {
            submitTaskBtn.disabled = true;
            if (!isDarkMode) {
                submitTaskBtn.classList.remove('bg-[var(--primary-light)]');
                submitTaskBtn.classList.add('bg-[var(--disabled-btn-blue)]');
            } else {
                submitTaskBtn.classList.remove('dark:bg-[var(--on-background-dark)]');
                submitTaskBtn.classList.add('dark:bg-[var(--disabled-btn-dark)]');
                submitTaskBtn.classList.remove('dark:text-white');
                submitTaskBtn.classList.add('dark:text-[var(--dark-gray-text)]');
            }
        }
    }

    taskNameInput.addEventListener("input", checkSubmitBtn);
    taskDescriptionInput.addEventListener("input", checkSubmitBtn);

    submitTaskBtn.onclick = () => {

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
        tagSelected = false;
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