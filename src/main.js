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

function hiddeMenu() {
    logo.style.transition = "opacity 1s, transform 1.5s";
    logo.style.transform = "translateY(-60px)";
    logo.style.opacity = 0;
    menuHamburguer.style.transition = "opacity 1s, transform 1.5s";
    menuHamburguer.style.transform = "translateY(-60px)";
    menuHamburguer.style.opacity = 0;
}

function showMenu() {
    logo.style.transition = "opacity .5s, transform .5s";
    logo.style.transform = "translateY(0)";
    logo.style.opacity = 1
    menuHamburguer.style.transition = "opacity .5s, transform .5s";
    menuHamburguer.style.transform = "translateY(0)";
    menuHamburguer.style.opacity = 1
}

function addLineDecoration() {
    const lineDecoration = document.createElement("div");
    lineDecoration.className = "line-decoration";

    leftHeaderSection.appendChild(lineDecoration);
}

const isScroll = () => window.scrollY >= 5 && window.innerWidth <= 599 ? hiddeMenu() : showMenu();

const body = document.body;
const header = document.getElementsByTagName("header")[0];

const leftHeaderSection = document.querySelector(".left-header-section");
const rightHeaderSection = document.querySelector(".right-header-section");
const logo = document.querySelector(".logo");

const menuHamburguer = document.querySelector(".menu-mobile-container");
const navMenu = document.querySelector(".nav-menu-container");
const closeIcon = document.querySelector(".menu-close-container");


menuHamburguer.addEventListener('click', showMobileMenu);
closeIcon.addEventListener('click', hiddenMobileMenu);
window.addEventListener('scroll', isScroll);

window.innerWidth >= 1024 ? addLineDecoration() : null;