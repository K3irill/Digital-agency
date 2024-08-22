"use strict";

const numberOfImgEl = document.getElementById("number-changer-img");
const sliderButtonUp = document.getElementById("sliderButtonUp");
const sliderButtonDown = document.getElementById("sliderButtonDown");

// increase number of slide by click
function changeDownSliderNumber(num) {
  num = Number(num);
  let resultNum = num;

  if (resultNum >= 15 || resultNum < 0) {
  } else resultNum += 1;

  if (resultNum === 0 || resultNum > 9) {
    resultNum = resultNum.toString();
  } else resultNum = "0" + resultNum;

  return (numberOfImgEl.innerText = resultNum);
}

console.log(numberOfImgEl);

sliderButtonDown.addEventListener("click", function () {
  changeDownSliderNumber(numberOfImgEl.innerText);
});

// decrease number of slide by click
function changeUpSliderNumber(num) {
  num = Number(num);
  let resultNum = num;

  if (resultNum > 15 || resultNum <= 1) {
  } else resultNum -= 1;

  if (resultNum === 0 || resultNum > 9) {
    resultNum = resultNum.toString();
  } else resultNum = "0" + resultNum;

  return (numberOfImgEl.innerText = resultNum);
}

sliderButtonUp.addEventListener("click", function () {
  changeUpSliderNumber(numberOfImgEl.innerText);
});

// filling of sliderScales
const sliderFillScales = document.getElementById("sliderFillScales");

function decreaseSliderFillScales(value) {
  let result = +value;
  if (result > 149) {
  } else result += 9.5;

  sliderFillScales.style.height = result + "px";
}

console.log(sliderFillScales.clientHeight);

sliderButtonDown.addEventListener("click", function () {
  decreaseSliderFillScales(sliderFillScales.clientHeight);
});

function increaseSliderFillScales(value) {
  let result = +value;
  if (result < 16) {
  } else result -= 9.5;

  sliderFillScales.style.height = result + "px";
}

sliderButtonUp.addEventListener("click", function () {
    increaseSliderFillScales(sliderFillScales.clientHeight);
});


