var menuIcon = document.querySelector(".menu-icon-wrapper");
var menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// references to the menu items
var home = document.querySelector(".home");
var about = document.querySelector(".about");
var services = document.querySelector(".services");
var contact = document.querySelector(".contact");

// references to the pages
var homePage = document.querySelector(".default-page");
var aboutPage = document.querySelector(".about-page");
var servicesPage = document.querySelector(".services-page");
var contactPage = document.querySelector(".contact-page");

home.addEventListener("click", () => {
  homePage.style.display = "block";
  aboutPage.style.display = "none";
  servicesPage.style.display = "none";
  contactPage.style.display = "none";
});

about.addEventListener("click", () => {
  homePage.style.display = "none";
  aboutPage.style.display = "block";
  servicesPage.style.display = "none";
  contactPage.style.display = "none";
});

services.addEventListener("click", () => {
  homePage.style.display = "none";
  aboutPage.style.display = "none";
  servicesPage.style.display = "block";
  contactPage.style.display = "none";
});

contact.addEventListener("click", () => {
  homePage.style.display = "none";
  aboutPage.style.display = "none";
  servicesPage.style.display = "none";
  contactPage.style.display = "block";
});
