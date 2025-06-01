/**
Создать html-страницу с кнопкой Открыть и модальным окном.
На модальном окне должен быть текст и кнопка Закрыть.
Изначально модальное окно не отображается.
При клике на кнопку Открыть появляется модальное окно, на кнопку – исчезает.
 */

const buttonEl1 = document.querySelector('#btn1');
const buttonEl2 = document.querySelector('#btn2');
const divEl1 = document.querySelector('.overlay');
const windowModal1 = document.querySelector('#modal1');

buttonEl1.addEventListener('click', () => {
    windowModal1.style.display = 'block';
    divEl1.style.display = 'block';
})

buttonEl2.addEventListener('click', () => {
    windowModal1.style.display = 'none';
    divEl1.style.display = 'none';
})