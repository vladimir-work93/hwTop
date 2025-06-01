/**
Задание 1
Создать html-страницу для ввода имени пользователя.
Необходимо проверять каждый символ, который вводит пользователь. Если он ввел цифру, то не отображать ее в input.
 */

const inputText = document.querySelector('#inputText');
const warningText = document.querySelector('#warning');

inputText.addEventListener('input', (e) => {
    const regularText = /[^a-zа-я]/gi; // Разрешены только буквы
    // const regularText = /\D]/gi; // Разрешены только буквы и прочие знаки
    const hasDigits = /[0-9]/.test(e.target.value); // Проверяем наличие цифр
    e.target.value = e.target.value.replace(regularText, '');
    if (hasDigits) {
        warningText.textContent = 'Вы пытаетесь ввести цифры!';
    } else {
        warningText.textContent = '';
    }
    console.log(e);
    // debugger;
});

