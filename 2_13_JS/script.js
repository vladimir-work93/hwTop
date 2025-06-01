/*
Задание 3
Создать html-страницу с футбольным полем, которое зани-
мает всю ширину и высоту экрана, и мячом размером 100 на 100
пикселей.
Сделать так, чтобы при клике мышкой по полю, мяч плавно
перемещался на место клика. Учтите: необходимо, чтобы центр
мяча останавливался именно там, где был совершен клик мышкой.
Также предусмотрите, чтобы мяч не выходил за границы поля.
 */

let ballEl = document.querySelector('#ball');
let fieldEl = document.querySelector('#field');

fieldEl.addEventListener('click', (e) => {
    const ballWidth = ballEl.offsetWidth;
    const ballHeight = ballEl.offsetHeight;
    
    // Получаем координаты клика относительно поля
    const rect = fieldEl.getBoundingClientRect();
    const clickX = e.clientX - rect.left; // X клика внутри поля
    const clickY = e.clientY - rect.top;  // Y клика внутри поля
    
    // Рассчитываем позицию центра мяча
    let x = clickX;
    let y = clickY;
    
    // Границы, чтобы мяч не выходил за поле (учитываем радиус мяча)
    const minX = ballWidth / 2;          // Мяч не заходит за левый край
    const minY = ballHeight / 2;         // Мяч не заходит за верхний край
    const maxX = fieldEl.offsetWidth - ballWidth / 2;  // Мяч не заходит за правый край
    const maxY = fieldEl.offsetHeight - ballHeight / 2; // Мяч не заходит за нижний край
    
    // Ограничиваем координаты
    x = Math.max(minX, Math.min(x, maxX));
    y = Math.max(minY, Math.min(y, maxY));
    
    // Устанавливаем позицию центра мяча
    ballEl.style.left = x + 'px';
    ballEl.style.top = y + 'px';
})

