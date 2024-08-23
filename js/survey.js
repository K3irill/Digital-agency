"use strict";

const surveyBonusCloseButton = document.querySelector(".d1-btn");
const surveyBonusBlock = document.querySelector(".survey__bonus");
const surveyBody = document.querySelector(".survey__body");
const surveyWrapper = document.querySelector(".survey__survey-wrapper");
const surveySubtitle = document.querySelector('.survey__title-wrapper_subtitle')
const surveyEndForm = document.querySelector('.surveyEndForm')
const surveyNumber = document.getElementById('survey-number')
const fillingLines = document.querySelectorAll('.survey__body__filling-line-wrapper_filling-line')


function closeSurveyBonusBlock() {
  surveyBonusBlock.classList.add("survey_closed");
  surveyBody.style.width = "100%";
}
surveyBonusCloseButton.addEventListener("click", closeSurveyBonusBlock);

function addSurveyEndForm() {
  surveyBody.classList.add("hidden");
  surveySubtitle.classList.add("hidden");
  surveyEndForm.classList.remove("hidden")
}
//---------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  let currentBlock = 1;
  const totalBlocks = 4;
  const selections = {}; // Массив для хранения выбранных карточек
  const nextBtn = document.getElementById("next-btn");

  // Функция для показа следующего блока
  function showNextBlock() {
    const currentBlockEl = document.getElementById(`block-${currentBlock}`);
    currentBlockEl.classList.add("hidden");
    
    currentBlock++; // Переход к следующему блоку
    if (currentBlock <= totalBlocks) {
      const nextBlockEl = document.getElementById(`block-${currentBlock}`);
      nextBlockEl.classList.remove("hidden");
      surveyNumber.textContent = currentBlock;
      fillingLines[currentBlock - 1].classList.add('survey__body__filling-line-wrapper_filling-line_active')
      if (currentBlock === totalBlocks) {
        nextBtn.textContent = "ЗАКОНЧИТЬ"; // Изменить текст кнопки
        nextBtn.addEventListener("click", () => {
          addSurveyEndForm();
        });
      }
    } else {
    //   sendDataToServer(); // Отправка данных при завершении
    }
  }

  // Функция для выделения карточки и сохранения выбора
  function selectCard(cardEl) {
    const blockId = cardEl.closest(".block").id; // id блока, в котором находится карточка
    const blockNumber = blockId.split("-")[1];

    // Снимаем выделение с других карточек в текущем блоке
    document.querySelectorAll(`#${blockId} .card`).forEach((card) => {
      card.classList.remove("selected");
    });

    // Добавляем выделение текущей карточке
    cardEl.classList.add("selected");

    // Сохраняем выбранную карточку
    selections[blockNumber] = cardEl.getAttribute("data-id");
  }

  // Обработчик нажатий на карточки
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", function () {
      selectCard(this);
    });
  });

  // Обработчик нажатия кнопки "Далее"
  nextBtn.addEventListener("click", function () {
    if (selections[currentBlock]) {
      showNextBlock(); // Переход к следующему блоку
    } else {
      alert("Выберите карточку перед переходом!");
    }
  });

  // Функция для отправки данных на сервер
//   function sendDataToServer() {
//     console.log("Selected cards:", selections);

    // AJAX запрос на сервер
//     fetch("/send-selections", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(selections),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//         alert("Данные успешно отправлены!");
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }
});
