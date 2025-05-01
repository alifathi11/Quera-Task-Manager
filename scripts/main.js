import addNewTask from "./addNewTask.js";
import handleSideMenu from "./sideMenu.js";
import handleTaskMenu from "./handleTasks.js";


window.onload = function() {
    addNewTask();
    handleSideMenu();
    handleTaskMenu();
};