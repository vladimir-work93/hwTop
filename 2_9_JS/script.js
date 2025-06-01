/**
 * Подсчитать сумму всех чисел в заданном пользователем
диапазоне.
 */

function task1() {
    let start = +prompt("Введите начало диапазона в виде целого числа");
    let end = +prompt(`Введите конец диапазона в виде целого числа больше числа ${start}`);
    let summa = 0;

    for (let start2 = start; start2 <= end; start2++) {
        summa += start2;
    }
    console.log(`Сумма чисел в диапазоне от ${start} до ${end} равна ${summa}`);
}

// task1();

/**
 * Запросить 2 числа и найти только наибольший общий
делитель.
 */

function task2() {
    let number1 = +prompt("Введите 1-ое число");
    let number2 = +prompt("Введите 2-ое число");
    let rest = 0; // остаток от деления

    let workNumber1 = number1;
    let workNumber2 = number2;

    if (workNumber2 > workNumber1) {
        [workNumber1, workNumber2] = [workNumber2, workNumber1];
    }
         
    while (workNumber1 % workNumber2 != 0) {
        rest = workNumber1 % workNumber2;
        [workNumber1, workNumber2] = [workNumber2, rest];
    }
    console.log(`НОД чисел ${number1} и ${number2} равен ${Math.abs(workNumber2)}`)
}

// task2();

/**
 * Запросить у пользователя число и вывести все делители
этого числа.
 */

function task3() {
    let number = +prompt("Введите целое число");
    let numberABS = Math.abs(number);

    for (let i = 1; i <= numberABS; i++) {
        if (number % i == 0) {
            console.log(i);
        }
    }
}

// task3();

/**
 * Определить количество цифр в введенном числе.
 */

function task4() {
    let number = +prompt("Введите целое число");
    let count = 0;
    let currentNumber = number;

    while (currentNumber != 0) {
        currentNumber /= 10;
        currentNumber = Math.floor(currentNumber);
        count++;
    }
    console.log(`В числе ${number} количество цифр = ${count}`);
}

// task4();

/**
 * Запросить у пользователя 10 чисел и подсчитать, сколько
он ввел положительных, отрицательных и нулей. При этом
также посчитать, сколько четных и нечетных. Вывести
статистику на экран. Учтите, что достаточно одной пере-
менной (не 10) для ввода чисел пользователем.
 */

function task5() {
    let number;
    let plus = 0, minus = 0, zero = 0;

    for (let i = 1; i <= 10; i++) {
        number = +prompt(`Введите ${i}-ое число`);
        if (number > 0) {
            plus++;
        } else if (number < 0) {
            minus++;
        } else {
            zero++;
        }
    }
    console.log(`Вы ввели ${plus} положительных чисел, ${minus} отрицательных чисел и ${zero} нулей`);
}

// task5();

/**
 * Зациклить калькулятор. Запросить у пользователя 2 числа
и знак, решить пример, вывести результат и спросить, хо-
чет ли он решить еще один пример. И так до тех пор, пока
пользователь не откажется.
 */

function task6() {
    let number1;
    let mark;
    let number2;
    let result;
    let exit = true;

    do {
        number1 = +prompt("Введите 1-ое число");
        mark = prompt("Введите действие");
        number2 = +prompt("Введите 2-ое число");

        if (number2 == 0 && mark == "/") {
            result = "На ноль делить нельзя";  
        } else {
            switch (mark) {
                case "+": result = number1 + number2; break;
                case "-": result = number1 - number2; break;
                case "*": result = number1 * number2; break;
                case "/": result = number1 / number2; break;
            }        
        }
        console.log(`Результат ${number1} ${mark} ${number2} = ${result}`)
        exit = confirm("Вы желаете продолжить?");
    } while (exit);
}

// task6();

/**
 * Запросить у пользователя число и на сколько цифр его
сдвинуть. Сдвинуть цифры числа и вывести результат (если
число 123456 сдвинуть на 2 цифры, то получится 345612).
 */

function task7() {
    let number = +prompt("Введите целое положительное число");
    let shift = +prompt("Введите количество знаков смещения (целое положительное)");
    let numDigits = 0; // количество цифр
    let currentNumber = +number;
    let firstNumber;
    let baseNumber;

    // находим количество цифр
    while (currentNumber != 0) {
        currentNumber /= 10;
        currentNumber = Math.floor(currentNumber);
        numDigits++;
    }

    currentNumber = number;

    // Если одна цифра, возвращаем число
    if (numDigits === 1) {
        return console.log(`Было ${number}, стало ${currentNumber}`);
    } 

    // перемещаем одну цифру влево
    for (let i = 0; i < shift; i++) {
        firstNumber = Math.floor(currentNumber / Math.pow(10, numDigits - 1)); // первая цифра
        baseNumber = currentNumber % Math.pow(10, numDigits - 1); // неизменное тело
        baseNumber *= 10;
        currentNumber = baseNumber + firstNumber;
    }
    
    console.log(`Было ${number}, стало ${currentNumber}`);
}

// task7();

/**
 * Зациклить вывод дней недели таким образом: «День недели.
Хотите увидеть следующий день?» и так до тех пор, пока
пользователь нажимает OK.
 */

function task8() {
    let day;
    let month;
    let year;
    let next = true;

    let leapYear = false; // в феврале 28 дней или 29 дней
    let evenMonth = false; // в месяце 30 дней или 31 день

    day = +prompt("Введите день в формает DD");
    month = +prompt("Введите месяц в формате цифр MM");
    year = +prompt("Введите год в формате YYYY");

    while (next) {        

        if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
            leapYear = true;
        }

        if ((month % 2 != 0 && month <= 7) || (month % 2 == 0 && month >= 8)) {
            evenMonth = true;
        }

        if (month == 12 && day == 31) {
            day = 1;
            month = 1;
            year += 1;
            alert("Следующий день это " + day + "." + month + "." + year);
            return;
        }

        if ((leapYear && month == 2 && day == 29)) {
            day = 1;
            month += 1;
        } else if (evenMonth == false && day == 30) {
            day = 1;
            month += 1;
        } else if (evenMonth && day == 31) {
            day = 1;
            month += 1;
        } else {
            day += 1;
        }

        alert("Следующий день это " + day + "." + month + "." + year);

        next = confirm("Выхотите узнать следующий день?");
    }

    
}

// task8();

/**
 * Вывести таблицу умножения для всех чисел от 2 до 9.
Каждое число необходимо умножить на числа от 1 до 10.
 */

function task9() {
    const rangeStart = 2;
    const rangeEnd = 9;
    for (let i = rangeStart; i <= rangeEnd; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ` + (i * j));
        }
    }
}

// task9();

/**
 * Игра «Угадай число». Предложить пользователю загадать
число от 0 до 100 и отгадать его следующим способом:
каждую итерацию цикла делите диапазон чисел пополам,
записываете результат в N и спрашиваете у пользователя
«Ваше число > N, < N или == N?». В зависимости от того
что указал пользователь, уменьшаете диапазон. Начальный
диапазон от 0 до 100, поделили пополам и получили 50.
Если пользователь указал, что его число > 50, то изменили
диапазон на от 51 до 100. И так до тех пор, пока пользова-
тель не выберет == N.
 */

function task10( ){    
    let rangeStart = 0;
    let rangeEnd = 100;
    let number;
    let next = true;

    alert("Загадайте целое число от 0 до 100");

    while (next) {

        number = Math.floor((rangeEnd + rangeStart) / 2);

        sign = prompt(`Ваше число ${number}? Введите >, < или =`);

        switch (sign) {
            case ">": 
                rangeStart = number + 1; break;
            case "<": 
                rangeEnd = number - 1; break;
            case "=": 
                next = false;
                console.log(`Ваше число ${number}`); break;
        }        
    }

    console.log("Конец игры");
}

// task10();

