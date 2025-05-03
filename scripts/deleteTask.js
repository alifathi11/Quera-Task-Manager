import { data as tasks } from "./data.js";
import updatePage from "./update.js";

export default function deleteTask(task) {
    const taskName = task.querySelector('.task-name').innerText;
    let targetTaskIndex;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].name == taskName) {
            targetTaskIndex = i;
            break;
        }
    }
    
    tasks.splice(targetTaskIndex, 1);
    updatePage();
}
