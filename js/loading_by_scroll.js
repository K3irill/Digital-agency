"use strict";

function checkPosition() {
  const height = document.body.offsetHeight;
  const screenHeight = window.innerHeight;
  const el = document;
  const hiddenByAllElements = document.querySelectorAll("[data-hiddenby]");

  console.log(height);
  console.log(screenHeight);
  // Они могут отличаться: если на странице много контента,
  // высота документа будет больше высоты экрана (отсюда и скролл).

  // Записываем, сколько пикселей пользователь уже проскроллил:
  const scrolled = window.scrollY ;
  console.log(window.scrollY);

  // Обозначим порог, по приближении к которому
  // будем вызывать какое-то действие.
  // В нашем случае — четверть экрана до конца страницы:
  const threshold = height - screenHeight / 4;
  console.log(threshold);
  // Отслеживаем, где находится низ экрана относительно страницы:
  console.log(hiddenByAllElements);
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
