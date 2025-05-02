import addNewTask from "./addNewTask.js";
import handleSideMenu from "./sideMenu.js";
import handleTaskMenu from "./taskMenu.js";
import completeTaskEventListener from "./completeTask.js";
import updatePage from "./update.js";


window.onload = function() {
    updatePage();
    addNewTask();
    handleSideMenu();
    handleTaskMenu();
    completeTaskEventListener();
};