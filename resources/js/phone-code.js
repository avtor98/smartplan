import IMask from 'imask';
import { countries } from "./countries.js";

document.addEventListener('DOMContentLoaded', function() {
    const countrySelector = document.getElementById('country-selector');
    const countryDropdown = document.getElementById('country-dropdown');
    const countryMainDropDown = document.getElementById('country-dropdown-main');
    const selectedCode = document.getElementById('selected-code');
    const phoneInput = document.getElementById('phone-input');
    const selectedFlag = document.getElementById('selected-flag');

    const checkbox = document.getElementById('custom-checkbox');
    const privacyBlock = document.querySelector('.smart-plan__privacy');
    const getCodeBtn = document.getElementById('get-code-btn');
    const smsForm = document.getElementById('sms-form');
    const phoneForm = document.getElementById('phone-form');
    const infoWrapper = document.querySelector('.smart-plan__info-wrapper');

    let phoneMask;

    countries.forEach(country => {
        const div = document.createElement('div');
        div.className = 'smart-plan__phone-dropdown-item';
        div.innerHTML = `
            <div class="smart-plan__phone-dropdown-info">
                <div class="smart-plan__phone-dropdown-flag" style="background-image: url('images/country/${country.flag}');"></div>
                <span class="smart-plan__phone-dropdown-code">${country.code}</span>
            </div>
            <div class="smart-plan__phone-dropdown-name">
                <span>${country.name}</span>
            </div>
        `;
        div.addEventListener('click', () => {
            selectedFlag.style.backgroundImage = `url('images/country/${country.flag}')`;
            selectedCode.textContent = country.code;
            phoneInput.placeholder = country.mask;

            if (phoneMask) {
                phoneMask.destroy();
            }

            phoneMask = applyMask(phoneInput, country.mask);
            phoneMask.updateValue();
            countryDropdown.classList.remove('show');
            countryMainDropDown.classList.remove('show-main');
        });
        countryDropdown.appendChild(div);
    });

    countrySelector.addEventListener('click', () => {
        countryDropdown.classList.toggle('show');
        countryMainDropDown.classList.toggle('show-main');
    });

    document.addEventListener('click', function(event) {
        if (!countrySelector.contains(event.target) && !countryDropdown.contains(event.target)) {
            countryDropdown.classList.remove('show');
            countryMainDropDown.classList.remove('show-main');
        }
    });

    // Обработка нажатия блока с чекбоксом
    privacyBlock.addEventListener('click', function() {
        checkbox.checked = !checkbox.checked;
    });

    // Обработка нажатия кнопки "Получить код"
    getCodeBtn.addEventListener('click', function() {
        if (checkbox.checked) {
            // Скрываем форму телефона с анимацией
            console.log('Скрытие phoneForm');
            phoneForm.classList.add('hidden');
            phoneForm.classList.remove('visible');

            // Затемняем фон при переходе


            // Через 500ms убираем hidden у smsForm и добавляем анимацию slide-in
            setTimeout(() => {
                console.log('Появление smsForm');
                smsForm.classList.remove('hidden');
                smsForm.classList.add('slide-in');
            }, 500);

            // Анимация появления элементов внутри SMS формы
            setTimeout(() => {
                console.log('Анимация элементов внутри SMS формы');
                smsForm.querySelectorAll('.smart-plan__title, .smart-plan__subtext, .smart-plan__fieldset, .smart-plan__button, .smart-plan__subtext--small')
                    .forEach((el, index) => {
                        el.style.transitionDelay = `${index * 0.1}s`;
                        el.classList.add('slide-in');
                    });

                // Включаем видимость формы SMS
                smsForm.classList.add('visible');
            }, 800);
        }
    });
});

// Функция для применения маски
function applyMask(input, mask) {
    return IMask(input, {
        mask: mask
    });
}
