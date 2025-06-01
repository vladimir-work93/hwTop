/*
Задание 5
Создать html-страницу со списком книг.
При щелчке на книгу, цвет фона должен меняться на оранжевый.
Учтите, что при повторном щелчке на другую книгу, предыдущей - 
необходимо возвращать прежний цвет.
*/

let bookEl = document.querySelectorAll('.book');

// debugger;

bookEl.forEach((book) => {
    book.addEventListener('click', () => {
        book.classList.toggle('active-book');
    })
})

