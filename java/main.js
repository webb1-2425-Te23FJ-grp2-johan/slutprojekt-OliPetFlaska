const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");
const navLinks = navMenu.querySelectorAll("a");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  navMenu.classList.toggle("hidden");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    navMenu.classList.add("hidden");
  });
});

let lightbox = new SimpleLightbox('.gallery a', { /* options */ });