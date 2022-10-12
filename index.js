const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");

// Function for getting a single element or element node list
const getElement = (selector) => {
  if (document.querySelectorAll(selector).length > 1)
    return document.querySelectorAll(selector);
  else return document.querySelector(selector);
};

// Getting elements for closing mobile nav when clicking a menu item
const closingMobileNavElements = [];
closingMobileNavElements.push(getElement(".mobile-nav .close"));
closingMobileNavElements.push(getElement(".mobile-nav .nav-brand"));
closingMobileNavElements.push(...getElement(".mobile-nav nav ul li a"));
closingMobileNavElements.push(getElement(".mobile-nav .btn"));
// Showing mobile nav on clicking burger button
burger.addEventListener("click", () => {
  mobileNav.classList.add("show");
});

// Closing navbar on clicking X button or any other links
closingMobileNavElements.forEach((element) => {
  element.addEventListener("click", () => closeNav());
});
document.querySelector(".mobile-nav .nav-brnad");

const closeNav = () => mobileNav.classList.remove("show");

// Category change active item on click
const categoryParent = document.querySelector(".categories__type");
categoryParent.addEventListener("click", (e) => {
  categoryParent
    .querySelectorAll(".category")
    .forEach((element) => element.classList.remove("active"));
  if (
    e.target.nodeName === "BUTTON" ||
    e.target.nodeName === "I" ||
    e.target.nodeName === "SPAN"
  ) {
    e.target.nodeName === "BUTTON"
      ? e.target.classList.add("active")
      : e.target.parentElement.classList.add("active");
  }
});

// Sticky navbar
const nav = document.querySelector(".nav");
nav.classList.add("test");
window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

// Slider
const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1000: {
      slidesPerView: 4,
    },

    768: {
      slidesPerView: 3.2,
    },
    500: {
      slidesPerView: 2.5,
    },
    280: {
      slidesPerView: 1.2,
    },
  },
});
