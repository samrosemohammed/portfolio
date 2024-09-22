"use-stict";

const iconBtn = document.querySelector(".icon-btn");
const iconOpen = document.querySelector(".icon-open");
const iconClose = document.querySelector(".icon-close");
const mobileNav = document.querySelector(".mobile-nav");
const copyRightDate = document.querySelector(".copyright-date");
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
/* For sticky nav */
////////////////////////////////
const heroEl = document.querySelector(".hero-section");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    } else {
      document.body.classList.add("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-64px",
  }
);
observer.observe(heroEl);

const date = new Date();
const currentYear = date.getFullYear();
copyRightDate.textContent = currentYear;
