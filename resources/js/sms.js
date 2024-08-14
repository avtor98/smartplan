document.addEventListener("DOMContentLoaded", function() {
    const phoneForm = document.getElementById("phone-form");
    const smsForm = document.getElementById("sms-form");
    const registerForm = document.getElementById("register-form"); // Добавляем переменную для формы регистрации
    const getCodeBtn = document.getElementById("get-code-btn");
    const submitButton = document.getElementById("submit-code-btn");

    const fields = document.querySelectorAll("#sms-form .smart-plan__box-input");
    const correctCode = "1234"; // Пример правильного кода

    function handleInputField({ target }) {
        const value = target.value.slice(0, 1);
        target.value = value;

        const fieldIndex = [...fields].findIndex((field) => field === target);
        const focusToIndex = value ? fieldIndex + 1 : fieldIndex - 1;

        if (focusToIndex >= 0 && focusToIndex < fields.length) {
            fields[focusToIndex].focus();
        }

        checkCodeAutomatically();
    }

    function checkCodeAutomatically() {
        const code = Array.from(fields).map(field => field.value).join('');
        if (code.length === fields.length) { // Проверяем только если все поля заполнены
            if (code === correctCode) {
                smsForm.classList.add("animate-success");
                setTimeout(() => {
                    smsForm.classList.remove("animate-success");
                    showRegistrationForm(); // Показ формы регистрации вместо редиректа
                }, 500);
            } else {
                smsForm.classList.add("animate-failure");
                setTimeout(() => smsForm.classList.remove("animate-failure"), 500);
            }
        }
    }
    function showRegistrationForm() {
        // Скрываем форму SMS с анимацией
        smsForm.classList.add("slide-out");
        smsForm.classList.remove("slide-in");

        // Показываем форму регистрации с анимацией
        setTimeout(() => {
            smsForm.classList.add("hidden");
            registerForm.classList.remove("hidden");
            registerForm.classList.add("slide-in");
        }, 1000); // Даем время на завершение анимации скрытия формы SMS
    }

    function focusOnFirstField() {
        if (fields.length > 0) {
            fields[0].focus(); // Устанавливаем фокус на первое поле ввода при отображении формы
        }
    }

    getCodeBtn.addEventListener('click', function() {
        if (document.getElementById('custom-checkbox').checked) {
            phoneForm.classList.add('hidden');
            phoneForm.classList.remove('visible');
            smsForm.classList.remove('hidden');
            smsForm.classList.add('visible');
            focusOnFirstField(); // Устанавливаем фокус на первое поле после показа формы
        }
    });

    fields.forEach((field) => {
        field.addEventListener("input", handleInputField);
    });
});
