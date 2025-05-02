import { data as tasks } from "./data.js";
import updatePage from "./update.js";

export default function completeTaskEventListener() {
    document.addEventListener("click", function(e) {
        if (e.target.closest(".complete-task-btn")) {
            completeTask(e.target.closest(".active-task"));
        }
    });
} 


function completeTask(activeTask) {
    const taskName = activeTask.querySelector(".task-name").innerText;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].name === taskName) {
            tasks[i].done = true;
        }
    }

    updatePage();
}