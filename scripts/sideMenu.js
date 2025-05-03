export default function handleSideMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sideMenu = document.getElementById('side-menu');
    const sideMenuCloseBtn = document.getElementById('side-menu-close-btn');
    const cover = document.getElementById('cover');

    hamburgerBtn.onclick = () => {
        sideMenu.classList.add('open');
        cover.style.opacity = 0.5

    };

    sideMenuCloseBtn.onclick = () => {
        sideMenu.classList.remove('open')
        cover.style.opacity = 0;
    };
};