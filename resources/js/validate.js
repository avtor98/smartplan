document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name-data');
    const emailInput = document.getElementById('email-data');
    const passwordInput = document.getElementById('password-data');
    const confirmPasswordInput = document.getElementById('password-confirm-data');
    const submitButton = document.getElementById('get-code-btn');

    // Определение переменных для элементов подсказки
    const passwordHint = document.getElementById('password-hint');
    const lengthCheck = document.getElementById('length-check');
    const uppercaseCheck = document.getElementById('uppercase-check');
    const numberCheck = document.getElementById('number-check');
    const specialCheck = document.getElementById('special-check');

    // Состояние для таймера проверки при потере фокуса
    let validationTimeout;

    function validateName() {
        const value = nameInput.value.trim();
        const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]+$/; // Только буквы, пробелы и тире

        if (nameRegex.test(value) && value.length >= 2) {
            applyValidationStyle(nameInput, true);
            return true;
        } else {
            applyValidationStyle(nameInput, false);
            return false;
        }
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(value)) {
            applyValidationStyle(emailInput, true);
            return true;
        } else {
            applyValidationStyle(emailInput, false);
            return false;
        }
    }

    function validatePassword() {
        const value = passwordInput.value.trim();
        const lengthPassed = value.length >= 8;
        const uppercasePassed = /[A-Z]/.test(value);
        const numberPassed = /[0-9]/.test(value);
        const specialPassed = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        // Применяем стили к полю пароля
        if (lengthPassed && uppercasePassed && numberPassed && specialPassed) {
            applyValidationStyle(passwordInput, true);
            return true;
        } else {
            applyValidationStyle(passwordInput, false);
            return false;
        }
    }

    function validateConfirmPassword() {
        const value = confirmPasswordInput.value.trim();
        const isValid = value === passwordInput.value.trim() && value.length >= 8;
        applyValidationStyle(confirmPasswordInput, isValid);
        return isValid;
    }

    function applyValidationStyle(inputElement, isValid) {
        if (isValid) {
            inputElement.classList.add('valid');
            inputElement.classList.remove('invalid');
        } else {
            inputElement.classList.add('invalid');
            inputElement.classList.remove('valid');
        }
    }

    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        return isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
    }

    function checkPassword() {
        const value = passwordInput.value;
        const lengthPassed = value.length >= 8;
        const uppercasePassed = /[A-Z]/.test(value);
        const numberPassed = /[0-9]/.test(value);
        const specialPassed = /[!@#$%^&*(),.?":{}|<>]/.test(value);

        // Обновляем состояние элементов
        updateCheck(lengthCheck, lengthPassed);
        updateCheck(uppercaseCheck, uppercasePassed);
        updateCheck(numberCheck, numberPassed);
        updateCheck(specialCheck, specialPassed);

        // Показываем или скрываем подсказку в зависимости от выполнения условий
        if (lengthPassed && uppercasePassed && numberPassed && specialPassed) {
            passwordHint.classList.remove('active');
            applyValidationStyle(passwordInput, true);
        } else {
            passwordHint.classList.add('active');
            applyValidationStyle(passwordInput, false);
        }
    }

    function updateCheck(element, passed) {
        const label = element.previousElementSibling;
        if (passed) {
            label.classList.remove('not-passed');
            label.classList.add('passed');
        } else {
            label.classList.remove('passed');
            label.classList.add('not-passed');
        }
    }

    // Обработчики событий для валидации при вводе
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', function() {
        checkPassword(); // Проверяем пароль при вводе
    });
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);

    // Показываем подсказку при фокусе на поле
    passwordInput.addEventListener('focus', function() {
        passwordHint.classList.add('active');
        clearTimeout(validationTimeout); // Очистка таймера, если есть
        checkPassword(); // Проверяем состояние при фокусе
    });

    // Скрываем подсказку при потере фокуса, если поле пустое
    passwordInput.addEventListener('blur', function() {
        validationTimeout = setTimeout(() => {
            if (passwordInput.value === '') {
                passwordHint.classList.remove('active');
            }
        }, 300); // Задержка в 300 мс перед скрытием
    });
});
