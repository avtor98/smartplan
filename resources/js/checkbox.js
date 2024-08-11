// Получаем элементы
const privacyBlock = document.querySelector('.smart-plan__privacy');
const checkbox = document.getElementById('custom-checkbox');

// Добавляем обработчик события на весь блок
privacyBlock.addEventListener('click', function() {
    // Переключаем состояние чекбокса
    checkbox.checked = !checkbox.checked;
});
