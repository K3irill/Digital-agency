'use strict'

const surveyBonusCloseButton = document.querySelector('.d1-btn');
const surveyBonusBlock = document.querySelector('.survey__bonus');
const surveyBody = document.querySelector('.survey__body');

function closeSurveyBonusBlock() {
    surveyBonusBlock.classList.add('survey_closed');
    surveyBody.style.width = '100%'
}
surveyBonusCloseButton.addEventListener('click', closeSurveyBonusBlock)