"use strict";

function checkPosition() {
  const height = document.body.offsetHeight;
  const screenHeight = window.innerHeight;
  const el = document;
  const hiddenByAllElements = document.querySelectorAll("[data-hiddenby]");
  const scrolled = window.scrollY ;

if(0 <= scrolled){
  hiddenByAllElements[0].style.cssText = `
  transition: 2s;
  opacity: 1;
  height: 100%`;
}
if(700 <= scrolled){
  hiddenByAllElements[1].style.cssText = `
  transition: 2s;
  opacity: 1;
  height: 100%`;
}
if(1600 <= scrolled){
  hiddenByAllElements[2].style.cssText = `
  transition: 2s;
  opacity: 1;
  height: 100%`;
}
if(3300 <= scrolled){
  hiddenByAllElements[3].style.cssText = `
  transition: 2s;
  opacity: 1;
  height: 600px`;
}
if(3500 <= scrolled){
  hiddenByAllElements[4].style.cssText = `
  transition: 2s;
  opacity: 1;
  height: 100%`;
}

}
(() => {
  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", checkPosition);
})();

function throttle(callee, timeout) {
  let timer = null;

  return function perform(...args) {
    if (timer) return;

    timer = setTimeout(() => {
      callee(...args);

      clearTimeout(timer);
      timer = null;
    }, timeout);
  };
}

(() => {
  window.addEventListener("scroll", throttle(checkPosition, 250));
  window.addEventListener("resize", throttle(checkPosition, 250));
})();
