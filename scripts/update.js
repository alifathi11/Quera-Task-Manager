import {data as tasks} from "./Data.js";

export default function updatePage() {
    const activeTasks = [];
    const completedTasks = [];

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].done) {
            completedTasks.push(tasks[i]);
        } else {
            activeTasks.push(tasks[i]);
        }
    }

    updateActiveTasks(activeTasks);
    updateCompletedTasks(completedTasks);

}


function updateActiveTasks(activeTasks) {

    let isDarkMode = document.documentElement.classList.contains('dark');

    let activeTasksDiv = document.getElementById('active-tasks');
    activeTasksDiv.innerHTML = "";
    
    for (let i = 0; i < activeTasks.length; i++) {
        let color = activeTasks[i].priority === "high" 
        ? "red" 
        : (activeTasks[i].priority === "medium"
        ? "yellow"
        : "green");

        let priority = activeTasks[i].priority === "high" 
        ? "بالا" 
        : (activeTasks[i].priority === "medium"
        ? "متوسط"
        : "پایین");

        let newActiveTask = 
        `
        <div class="active-task flex items-start gap-5 rounded-xl border-1 border-[var(--neutral-8)] py-3 px-5 relative w-full
        dark:bg-[var(--background-dark-2)] dark:border-none">

            <img src="./assets/images/marker-${color}.svg" alt="marker" class="absolute right-0 h-[75%] dark:hidden">
            <img src="./assets/images/dark-marker-${color}.svg" alt="marker" class="absolute right-0 h-[75%] hidden dark:block">
                        
            <button class="complete-task-btn">
                <img src="./assets/images/check-box.svg" alt="check-box" class="dark:hidden">
                <img src="./assets/images/check-box.svg" alt="check-box" class="hidden dark:block">
            </button>

            <div class="flex flex-col gap-5">
                <div class="flex flex-col gap-2">
                    <p class="task-name text-sm font-[YekanBakh-semi-bold] dark:text-white">${activeTasks[i].name}</p>
                    <div class="priority bg-[var(--background-${color})] py-0.5 px-2 rounded-sm w-fit
                    dark:bg-[var(--dark-background-${color})]">
                        <p class="task-priority text-[var(--${color})] font-[YekanBakh-regular] text-[10px] dark:text-[var(--dark-${color})]">${priority}</p>
                    </div>
                </div>
                <p class="task-description text-xs font-[YekanBakh-regular] text-[var(--neutral-4)] dark:text-[var(--dark-gray-text)]">${activeTasks[i].description}</p>
            </div>

            <button class="edit-delete-menu-btn mr-auto">   
                <img src="./assets/images/dots-menu.svg" alt="menu" class="dark:hidden">
                <img src="./assets/images/dots-menu-dark.svg" alt="menu" class="hidden dark:block">
            </button>

            <div class="edit-delete-menu hidden rounded-lg border-1 border-[var(--neutral-8)] p-2 font-[YekanBakh-semi-bold] text-[10px] flex-col gap-2 absolute left-2 top-2
            dark:border-[var(--border-dark-2)] dark:bg-[var(--background-dark-2)]">

                <div class="edit-task-btn flex gap-1">
                    <img src="./assets/images/edit.svg" alt="edit" class="w-[15px] dark:hidden">
                    
                    <p class="dark:text-white">ویرایش</p>
                </div>

                <hr class="mx-3 border-[var(--neutral-8)] dark:border-[var(--border-dark-2)]">

                <div class="delete-task-btn flex gap-1">
                    <img src="./assets/images/delete.svg" alt="delete" class="w-[15px] dark:hidden">
                
                    <p class="dark:text-white">حذف</p>
                </div>

            </div>

        </div>
        `
        activeTasksDiv.innerHTML += newActiveTask;
    }

    const activeTasksReport = document.getElementById('active-tasks-report');
    if (activeTasks.length === 0) {
        activeTasksReport.innerHTML = "تسکی برای امروز نداری!"
    } else {
        activeTasksReport.innerHTML = `${activeTasks.length} تسک را باید انجام دهید.`
    }
    
}


function updateCompletedTasks(completedTasks) {

    let completedTasksDiv = document.getElementById('completed-tasks');
    completedTasksDiv.innerHTML = "";
    
    for (let i = 0; i < completedTasks.length; i++) {
        let color = completedTasks[i].priority === "high" 
        ? "red" 
        : (completedTasks[i].priority === "medium"
        ? "yellow"
        : "green");

        let newCompletedTask = 
        `
        <div class="completed task flex w-full px-3 py-5 items-center justify-between mx-2 relative rounded-xl border-1 border-[var(--neutral-8)]
        dark:bg-[var(--background-dark-2)] dark:border-none">
            <img src="./assets/images/marker-${color}.svg" alt="marker" class="absolute right-0 h-[75%] dark:hidden">
            <img src="./assets/images/dark-marker-${color}.svg" alt="marker" class="absolute right-0 h-[75%] hidden dark:block
            dark:right-[0.5px]">
            <img src="./assets/images/tick-square.svg" alt="tick-square" class="dark:hidden">
            <img src="./assets/images/tick-square.svg" alt="tick-square-dark" class="hidden dark:block">
            <p class="font-[YekanBakh-regular] text-xs line-through px-5 dark:text-white">${completedTasks[i].name}</p>
            <button class="edit-delete-menu-btn mr-auto"><img src="./assets/images/dots-menu.svg" alt="menu" class="dark:hidden"></button>
            <button class="edit-delete-menu-btn mr-auto"><img src="./assets/images/dots-menu-dark.svg" alt="menu" class="hidden dark:block"></button>
        </div>
        `
        completedTasksDiv.innerHTML += newCompletedTask;
    }


    const completedTasksReport = document.getElementById('completed-tasks-report');
    if (completedTasks.length === 0) {
        completedTasksReport.innerHTML = "امروز تسکی انجام ندادی."
    } else {
        completedTasksReport.innerHTML = `${completedTasks.length} تسک را انجام داده‌اید.`
    }

}