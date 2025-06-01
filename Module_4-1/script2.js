/**
Задание 2
Создать html-страницу для прохождения теста. Вопросы теста
имеют два варианта ответа (только 1 правильный). После прохож-
дения теста, вывести количество правильных ответов.
 */

document.addEventListener('DOMContentLoaded', function () {
    // Массив вопросов и правильных ответов
    const questions = [
        {
            question: "Какая столица России?",
            options: ["Москва", "Рязань"],
            correct: 0 // Индекс правильного ответа
        },
        {
            question: "Сколько будет 2 + 2?",
            options: ["3", "4"],
            correct: 1
        },
        {
            question: "Самый большой океан?",
            options: ["Атлантический", "Тихий"],
            correct: 1
        }
    ];

    const button = document.getElementById('buttonAct');
    const questionElement = document.querySelector('.question');
    const resultElement = document.querySelector('.result');
    const radioInputs = document.querySelectorAll('.form-check-input');
    const labels = document.querySelectorAll('.form-check-label');

    let currentQuestion = -1; // Текущий вопрос (-1 = не начат)
    let correctAnswers = 0;   // Счётчик правильных ответов

    radioInputs.forEach(radioInputs => radioInputs.disabled = true);
    radioInputs.forEach(input => input.checked = false);

    // Обработчик клика для кнопки
    button.addEventListener('click', function () {
        radioInputs.forEach(radioInputs => radioInputs.disabled = false);
        // Проверка предыдущего ответа (если вопрос активен)
        if (currentQuestion >= 0) {
            checkAnswer();            
        }

        // Переход к следующему вопросу
        currentQuestion++;

        // Если вопросы закончились
        if (currentQuestion >= questions.length) {
            radioInputs.forEach(radioInputs => radioInputs.disabled = true);
            showResults();
            return;
        }

        // Загрузка нового вопроса
        loadQuestion();

        // Обновление текста кнопки
        button.textContent = currentQuestion === questions.length - 1
            ? "Завершить"
            : "Следующий";
    });

    // Проверка правильности ответа
    function checkAnswer() {
        const selectedIndex = Array.from(radioInputs).findIndex(input => input.checked);

        if (selectedIndex === questions[currentQuestion].correct) {
            correctAnswers++;
        }
    }

    // Загрузка вопроса в интерфейс
    function loadQuestion() {
        const q = questions[currentQuestion];

        questionElement.textContent = q.question;

        labels.forEach((label, index) => {
            label.textContent = q.options[index];
        });

        // Сброс выбора радиокнопок
        radioInputs.forEach(input => input.checked = false);
    }

    // Показ результатов теста
    function showResults() {

        button.textContent = "Завершено";
        button.disabled = true;

        resultElement.style.display = 'block';

        resultElement.textContent =
            `Правильных ответов: ${correctAnswers} из ${questions.length}`
    }
});