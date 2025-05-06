import checkSubmitBtn from "./CheckSubmitBtn.js";

export default function toggleDarkMode() {
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const lightModeBtn = document.getElementById('light-mode-btn');
    darkModeBtn.onclick = () => {
        document.documentElement.classList.add('dark');
        checkSubmitBtn();
    };
    lightModeBtn.onclick = () => {
        document.documentElement.classList.remove('dark');
        checkSubmitBtn();
    };
}