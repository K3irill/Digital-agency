"use strict";
const words = ["Создание", "Поддержание", "Развитие", "Продвижение"];
const textElement = document.getElementById("dynamic-text");

let currentWordIndex = 0;
let currentLetterIndex = 0;
let currentWord = "";

function typeText() {
    if(currentLetterIndex < words[currentWordIndex].length){
        currentWord += words[currentWordIndex][currentLetterIndex];
        textElement.textContent = currentWord;
        currentLetterIndex++
        setTimeout(typeText,200)
    }else{
        setTimeout(()=>{
            currentLetterIndex = 0;
            currentWord = '';
            currentWordIndex = (currentWordIndex + 1) % words.length;
            typeText()
        }, 1000)
    }
}

typeText()