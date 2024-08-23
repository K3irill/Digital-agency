'use strict'

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.filter-cards');

function filterCards(category) {
    cards.forEach(card => {
        // Если выбран фильтр "Все", показываем все карточки
        if (category === 'all') {
            card.classList.remove('hidden');
        } else {
            // Сравниваем класс карточки с категорией и скрываем/показываем
            if (card.classList.contains(category)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });
}

filters.forEach(filter => {
    filter.addEventListener('click', () => {
        // Удаляем класс 'active' у всех кнопок
        filters.forEach(btn => btn.classList.remove('projects__options_button-active'));
        // Добавляем класс 'active' на нажатую кнопку
        filter.classList.add('projects__options_button-active');
        
        // Получаем ID нажатой кнопки и фильтруем карточки
        const filterId = filter.id.replace('filter-', '');
        filterCards(filterId === 'all' ? 'all' : filterId);
    });
});