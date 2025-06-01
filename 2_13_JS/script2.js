/*
Задание 4
Создать html-страницу со светофором и кнопкой, которая
переключает светофор на следующий цвет.
*/

const buttonNext = document.querySelector('#next');
const signals = {
    red: document.querySelector('.signal-red'),
    yellow: document.querySelector('.signal-yellow'),
    green: document.querySelector('.signal-green')
};

let currentState = 0; // 0:red, 1:red+yellow, 2:green, 3:yellow

buttonNext.addEventListener('click', () => {
    // Сбрасываем все цвета
    signals.red.style.backgroundColor = 'gray';
    signals.yellow.style.backgroundColor = 'gray';
    signals.green.style.backgroundColor = 'gray';

    // Устанавливаем цвета для текущего состояния
    switch(currentState) {
        case 0: // Красный → Красный+Желтый
            signals.red.style.backgroundColor = 'red';
            signals.yellow.style.backgroundColor = 'yellow';
            currentState = 1;
            break;
        case 1: // Красный+Желтый → Зеленый
            signals.green.style.backgroundColor = 'green';
            currentState = 2;
            break;
        case 2: // Зеленый → Желтый
            signals.yellow.style.backgroundColor = 'yellow';
            currentState = 3;
            break;
        case 3: // Желтый → Красный
            signals.red.style.backgroundColor = 'red';
            currentState = 0;
            break;
    }
});

// Инициализация начального состояния (Красный)
signals.red.style.backgroundColor = 'red';
signals.yellow.style.backgroundColor = 'gray';
signals.green.style.backgroundColor = 'gray';