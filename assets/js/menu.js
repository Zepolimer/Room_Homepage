const btnMenu = document.querySelector(".btnMenu");
const menuNav = document.querySelector(".menuWrapper");
const closeMenu = document.querySelector(".closeMenu");

function toggMenu() {
    if(menuNav.style.display === 'none') {
        menuNav.style.display = "flex";
    } else {
        menuNav.style.display = "none";
    }
}
btnMenu.addEventListener('click', toggMenu)

function closeNav() {
    if(menuNav.style.display === 'flex') {
        menuNav.style.display = "none";
    } else {
        menuNav.style.display = "flex";
    }
}
closeMenu.addEventListener('click', closeNav);
