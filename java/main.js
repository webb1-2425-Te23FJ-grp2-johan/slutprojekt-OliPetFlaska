const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  navMenu.classList.toggle("hidden");
});