export default function handleSideMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sideMenu = document.getElementById('side-menu');
    const sideMenuCloseBtn = document.getElementById('side-menu-close-btn');
    const cover = document.getElementById('cover');
    const header = document.getElementById('header');

    hamburgerBtn.onclick = () => {
        sideMenu.classList.add('open');
        cover.style.opacity = 1
        header.classList.remove('bg-[var(--background-light)]');
        header.classList.add('bg-[var(--neutral-4)]');

    };

    sideMenuCloseBtn.onclick = () => {
        sideMenu.classList.remove('open')
        cover.style.opacity = 0;
        header.classList.remove('bg-[var(--neutral-4)]');
        header.classList.add('bg-[var(--background-light)]');

    };
};