import addNewTask from "./addNewTask.js";
import handleSideMenu from "./SideMenu.js";
import handleTaskMenu from "./TaskMenu.js";
import completeTaskEventListener from "./completeTask.js";
import toggleDarkMode from "./ToggleDarkMode.js";
import updatePage from "./Update.js";


window.onload = function() {
    updatePage();
    addNewTask();
    handleSideMenu();
    handleTaskMenu();
    completeTaskEventListener();
    toggleDarkMode();
};