"use strict";

const headerElement = document.querySelector(".header");
const headerHiddenMenu = document.querySelector(".header__hidden-menu");
const headerBtnMenu = document.querySelector("#headMenuBtn");

function makeActiveHHM() {
  if (headerHiddenMenu.classList.contains("hidden-menu_active")) {
    headerHiddenMenu.classList.remove("hidden-menu_active");
    headerElement.classList.remove("header_bgc-white-js");
  } else {
    headerHiddenMenu.classList.add("hidden-menu_active");
    headerElement.classList.add("header_bgc-white-js");
  }
}

headerBtnMenu.addEventListener("click", function (e) {
  makeActiveHHM(e);
});