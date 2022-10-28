const btn = document.querySelector(".menu-btn");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const menu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  //   Body Backgrond
  body.classList.toggle("menu-bg");
});
