export default function checkSubmitBtn () {

    const selectedLowPriority = document.getElementById('selected-low-priority');
    const selectedMediumPriority = document.getElementById('selected-medium-priority');
    const selectedHighPriority = document.getElementById('selected-high-priority');
    const taskNameInput = document.getElementById('task-name-input');
    const taskDescriptionInput = document.getElementById('task-description-input');
    const submitTaskBtn = document.getElementById('submit-task-btn');

    let tagSelected = false;

    if (selectedHighPriority.classList.contains('flex')
        || selectedMediumPriority.classList.contains('flex')
        || selectedLowPriority.classList.contains('flex')) {
            tagSelected = true;
        }

    let isDarkMode = document.documentElement.classList.contains('dark');
    if ((taskNameInput.value.trim() !== "") && (taskDescriptionInput.value.trim() !== "") && tagSelected) {

        submitTaskBtn.disabled = false;
        submitTaskBtn.classList.add('hover:cursor-pointer');

        if (!isDarkMode) {
            submitTaskBtn.classList.remove('bg-[var(--disabled-btn-blue)]');
            submitTaskBtn.classList.add('bg-[var(--primary-light)]');
            submitTaskBtn.classList.add('hover:bg-[var(--btn-hover-light)]');
            submitTaskBtn.classList.remove('hover:bg-[var(--btn-hover-dark)]');
        } else {
            submitTaskBtn.classList.remove('dark:bg-[var(--disabled-btn-dark)]');
            submitTaskBtn.classList.add('dark:bg-[var(--on-background-dark)]');
            submitTaskBtn.classList.remove('dark:text-[var(--dark-gray-text)]');
            submitTaskBtn.classList.add('dark:text-white');
            submitTaskBtn.classList.add('dark:hover:bg-[var(--btn-hover-dark)]');
            submitTaskBtn.classList.remove('dark:hover:bg-[var(--btn-hover-light)]');
        }
    } else {

        submitTaskBtn.classList.remove('hover:bg-[var(--btn-hover-dark)]');
        submitTaskBtn.classList.remove('hover:bg-[var(--btn-hover-light)]');
        submitTaskBtn.classList.remove('dark:hover:bg-[var(--btn-hover-dark)]');
        submitTaskBtn.classList.remove('dark:hover:bg-[var(--btn-hover-light)]');
        submitTaskBtn.classList.remove('hover:cursor-pointer');

        submitTaskBtn.disabled = true;

        if (!isDarkMode) {
            submitTaskBtn.classList.remove('bg-[var(--primary-light)]');
            submitTaskBtn.classList.add('bg-[var(--disabled-btn-blue)]');
        } else {
            submitTaskBtn.classList.remove('dark:bg-[var(--on-background-dark)]');
            submitTaskBtn.classList.add('dark:bg-[var(--disabled-btn-dark)]');
        }
    }
}