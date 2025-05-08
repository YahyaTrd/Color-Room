const menu = document.querySelector("#mobile__menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};
menu.addEventListener("click", mobileMenu);

// Highlight menu items
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const servicesMenu = document.querySelector("#services-page");
  let scrollPos = window.scrollY;

  // console.log(scrollPos);

  // adds 'highlight' class to menu items
  if (window.innerWidth > 960) {
    if (scrollPos < 600) {
      homeMenu.classList.add("highlight");
      aboutMenu.classList.remove("highlight");
      servicesMenu.classList.remove("highlight");
    } else if (scrollPos < 1400) {
      homeMenu.classList.remove("highlight");
      aboutMenu.classList.add("highlight");
      servicesMenu.classList.remove("highlight");
    } else if (scrollPos < 2345) {
      homeMenu.classList.remove("highlight");
      aboutMenu.classList.remove("highlight");
      servicesMenu.classList.add("highlight");
    }
  }

  if ((elem && window.innerWidth < 960) || !elem) {
    elem?.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);
