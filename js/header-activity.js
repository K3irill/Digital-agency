'use strict'

const headerLikeImg = document.querySelector("#header-img-like");

function activeLikeHeaderImg() {
  if (headerLikeImg.getAttribute("imgactive") == "false") {
    headerLikeImg.src = "./img/header/like-active.svg";
    headerLikeImg.setAttribute("imgactive", "true");
    console.log('favorite');
    
  } else {
    headerLikeImg.src = "./img/header/like.svg";
    headerLikeImg.setAttribute("imgactive", "false");
    console.log('unfavorite');
  }
}

headerLikeImg.addEventListener("click", function (e) {
  activeLikeHeaderImg();
});
