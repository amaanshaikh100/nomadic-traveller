const navLinks = document.querySelector(".navigation-links");
const menuIcon = document.querySelector(".menu-icon");

navLinks.classList.add('nav-hidden');

menuIcon.addEventListener("click", function(e) {
    navLinks.classList.toggle('nav-hidden');
});