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
function changeSliderNumber(num) {
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
    changeSliderNumber(numberOfImgEl.innerText);
  });
  