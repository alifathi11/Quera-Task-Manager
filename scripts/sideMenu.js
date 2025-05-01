export default function handleSideMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sideMenu = document.getElementById('side-menu');
    const sideMenuCloseBtn = document.getElementById('side-menu-close-btn');

    hamburgerBtn.onclick = () => {
        sideMenu.classList.add('open');
    };

    sideMenuCloseBtn.onclick = () => {
        sideMenu.classList.remove('open')
    };
};