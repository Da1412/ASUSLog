const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const openMenuButton = document.querySelector("#open-menu-button");
const closeMenuButton = document.querySelector("#menu-close-button");

openMenuButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close menu is clicked
closeMenuButton.addEventListener("click", () => openMenuButton.click());

navLinks.forEach((link) => {
  link.addEventListener("click", () => openMenuButton.click());
});

// Navbar scrolling
document.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav-bar");
  if (window.scrollY > 5) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

/* Swiper JS */
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
