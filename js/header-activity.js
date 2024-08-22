"use strict";

// work with heart
const headerLikeImg = document.querySelector("#header-img-like");

function activeLikeHeaderImg() {
  if (headerLikeImg.getAttribute("imgactive") == "false") {
    headerLikeImg.src = "./img/header/like-active.svg";
    headerLikeImg.setAttribute("imgactive", "true");
    console.log("favorite");
  } else {
    headerLikeImg.src = "./img/header/like.svg";
    headerLikeImg.setAttribute("imgactive", "false");
    console.log("unfavorite");
  }
}

headerLikeImg.addEventListener("click", function (e) {
  activeLikeHeaderImg();
});

//--- work with seacth-input
const headerSearchInputWrapper = document.querySelector(
  ".header__interection__wrap-input"
);
const headerSearchButton = document.querySelector("#headerSearchButton");
const headerSearchInput = document.querySelector('#headerSearchInput')
const resetInputBtn = document.querySelector("#resetInputBtn");

function activeSeacrhField() {
  headerSearchInputWrapper.classList.toggle("active-wrap-input");
}

headerSearchButton.addEventListener("click", function (e) {
  activeSeacrhField(e);
});


// event for resetting the value of the search input
resetInputBtn.addEventListener("click", function () {
    headerSearchInput.value = '';
});
