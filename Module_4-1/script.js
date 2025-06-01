/**
Задание 1
Создать html-страницу со списком сообщений на форуме и
формой для добавления нового сообщения. После заполнения
формы добавить сообщение к списку на экране.
 */

document.addEventListener('DOMContentLoaded', function () {
    const buttonSend = document.querySelector('#buttonSend');
    const forumContainer = document.querySelector('#forum');
    const template = document.querySelector('.message-in-forum');

    // Скрываем шаблон после загрузки страницы
    template.style.display = 'none';

    buttonSend.addEventListener('click', function () {
        // Получаем данные из полей ввода
        const nameInput = document.querySelector('#inputName');
        const messageInput = document.querySelector('#inputMessage');

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        // Проверка заполненности полей
        if (!name || !message) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }

        // Клонируем шаблон сообщения
        const newMessage = template.cloneNode(true);
        newMessage.style.display = ''; // Показываем элемент

        // Заполняем данные
        newMessage.querySelector('.name-sendler').textContent = name;
        newMessage.querySelector('.text-message').textContent = message;

        // Форматируем текущее время
        const now = new Date();
        const timeString = now.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        const dateString = ` ${now.getDate()}.${("0" + (now.getMonth() + 1)).slice(-2)}.${now.getFullYear()}`;
        newMessage.querySelector('.time-message').textContent = timeString + dateString;

        // Добавляем сообщение в форум
        forumContainer.appendChild(newMessage);

        // Очищаем поле сообщения (имя можно оставить для удобства)
        messageInput.value = '';
    });
});