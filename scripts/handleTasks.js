export default function handleTaskMenu() {
    const addNewTaskBtn = document.getElementById('add-new-task-btn');
    const addNewTaskCloseBtn = document.getElementById('add-new-task-close-btn');
    const addNewTaskArea = document.getElementById('add-new-task-area');
    const openTagsBtn = document.getElementById('open-tags-btn');
    const tagsBar = document.getElementById('tags-bar');
    const tagImage = document.getElementById('tag-image');
    let imageToggleState = false;

    addNewTaskBtn.onclick = () => {
        addNewTaskBtn.classList.remove('flex');
        addNewTaskBtn.classList.add('hidden');
        addNewTaskArea.classList.remove('hidden');
        addNewTaskArea.classList.add('flex');
    };

    addNewTaskCloseBtn.onclick = () => {
        addNewTaskArea.classList.remove('flex');
        addNewTaskArea.classList.add('hidden');
        addNewTaskBtn.classList.remove('hidden');
        addNewTaskBtn.classList.add('flex');
        imageToggleState = false;
        tagImage.src = "./assets/images/tag-right.svg";
        tagsBar.classList.remove('open');
    };

    openTagsBtn.onclick = () => {
        tagsBar.classList.toggle('open');
        imageToggleState = !imageToggleState;
        tagImage.src = imageToggleState ? "./assets/images/tag-down.svg" : "./assets/images/tag-right.svg"
    };
};