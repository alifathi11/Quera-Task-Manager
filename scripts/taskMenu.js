import { data } from "./Data.js";
import deleteTask from "./deleteTask.js";

export default function handleTaskMenu() {
    const addNewTaskBtn = document.getElementById('add-new-task-btn');
    const addNewTaskCloseBtn = document.getElementById('add-new-task-close-btn');
    const addNewTaskArea = document.getElementById('add-new-task-area');
    const openTagsBtn = document.getElementById('open-tags-btn');
    const tagsBar = document.getElementById('tags-bar');
    const tagImage = document.getElementById('tag-image');
    const artboard = document.getElementById('artboard');
    let imageToggleState = false;

    addNewTaskBtn.onclick = () => {
        addNewTaskBtn.classList.remove('flex');
        addNewTaskBtn.classList.add('hidden');
        addNewTaskArea.classList.remove('hidden');
        addNewTaskArea.classList.add('flex');
        artboard.classList.remove('flex');
        artboard.classList.add('hidden');
    };  

    addNewTaskCloseBtn.onclick = openAddTaskArea;

    function openAddTaskArea() {
        addNewTaskArea.classList.remove('flex');
        addNewTaskArea.classList.add('hidden');
        addNewTaskBtn.classList.remove('hidden');
        addNewTaskBtn.classList.add('flex');
        imageToggleState = false;
        tagImage.src = "./assets/images/tag-right.svg";
        tagsBar.classList.remove('open');
        if (data.length === 0) {
            artboard.classList.remove('hidden');
            artboard.classList.add('flex');
        }
    }

    openTagsBtn.onclick = () => {
        tagsBar.classList.toggle('open');
        imageToggleState = !imageToggleState;
        tagImage.src = imageToggleState ? "./assets/images/tag-down.svg" : "./assets/images/tag-right.svg"
    };

    document.addEventListener("click", function(e) {
        const menuBtn = e.target.closest(".edit-delete-menu-btn");
        if (menuBtn) {
            e.stopPropagation();

            menuBtn.classList.remove('block');
            menuBtn.classList.add('hidden');

            const menu = menuBtn.closest(".active-task")?.querySelector(".edit-delete-menu");
            if (!menu) return;
    
            menu.classList.remove('hidden');
            menu.classList.add('flex');
            const handleClickOutside = (event) => {
                if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
                    menu.classList.remove('flex');
                    menu.classList.add('hidden');
                    menuBtn.classList.remove('hidden');
                    menuBtn.classList.add('block');
                    document.removeEventListener("click", handleClickOutside);
                }
            };
    
            setTimeout(() => {
                document.addEventListener("click", handleClickOutside);
            }, 0);
        }
    });


    document.addEventListener("click", function(e) {
        const deleteBtn = e.target.closest(".delete-task-btn");
        if (deleteBtn) {
            const activeTask = deleteBtn.closest(".active-task");
            deleteTask(activeTask);
        }
    });
    
};
