"use-stict";

const iconBtn = document.querySelector(".icon-btn");
const iconOpen = document.querySelector(".icon-open");
const iconClose = document.querySelector(".icon-close");
const mobileNav = document.querySelector(".mobile-nav");
const toggleMobileNav = () => {
  if (iconClose.classList.contains("hidden")) {
    iconOpen.classList.add("hidden");
    iconClose.classList.remove("hidden");
    mobileNav.classList.remove("hidden");
  } else {
    iconOpen.classList.remove("hidden");
    iconClose.classList.add("hidden");
    mobileNav.classList.add("hidden");
  }
};
document.querySelector(".icon-btn").addEventListener("click", toggleMobileNav);

/////////////////////////////////
/* For carousel */
////////////////////////////////
