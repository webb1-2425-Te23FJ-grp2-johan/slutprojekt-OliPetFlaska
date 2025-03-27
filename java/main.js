const hamburgerBtn = document.getElementById("hamburger-btn"); // Corrected ID.  querySelector also works
const navMenu = document.getElementById("nav-menu"); // Corrected ID
const navLinks = navMenu.querySelectorAll("a");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  navMenu.classList.toggle("hidden"); // added to hide.
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    navMenu.classList.add("hidden"); // added to hide.
  });
});
