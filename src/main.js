function showMobileMenu() {
    navMenu.classList.add("visible");
    menuHamburguer.style.opacity = 0;
    body.style.overflow = "hidden";
}

function hiddenMobileMenu() {
    navMenu.classList.remove("visible");
    menuHamburguer.style.opacity = 1;
    body.style.overflow = "visible";
}

const body = document.body;
const menuHamburguer = document.querySelector(".menu-mobile-container");
const navMenu = document.querySelector(".nav-menu-container");
const closeIcon = document.querySelector(".menu-close-container");

menuHamburguer.addEventListener('click', showMobileMenu);
closeIcon.addEventListener('click', hiddenMobileMenu);