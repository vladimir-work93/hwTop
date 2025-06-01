/*
Запросить у пользователя его возраст и определить, кем он
является: ребенком (0–12), подростком (12–18), взрослым
(18-60) или пенсионером (60– ...).
*/

function task1() {
    let age1 = +prompt("Сообщите Ваш возраст");
    if (age1 >= 0 && age1 < 12) {
        alert("Возраст " + age1 + " относится к категории ребенок")
    } else if (age1 >= 12 && age1 < 18) {
        alert("Возраст " + age1 + " относится к категории подросток")
    } else if (age1 >= 18 && age1 < 60) {
        alert("Возраст " + age1 + " относится к категории взрослый")
    } else if (age1 >= 60) {
        alert("Возраст " + age1 + " относится к категории пенсионер")
    } else {
        alert("Вы ввели некорректный возраст");
    }
}

// task1();

/*
 Запросить у пользователя число от 0 до 9 и вывести ему
спецсимвол, который расположен на этой клавише (1–!,
2–@, 3–# и т. д). 
 */

function task2() {
    let digitalNumber = prompt("Введите число от 0 до 9, чтобы узнать спецсимвол");
    switch (digitalNumber) {
        case "0":
            alert("Цифре " + digitalNumber + " соответствует спецсимвол )");
            break;
        case "1": 
            alert("Цифре " + digitalNumber + " соответствует спецсимвол !");
            break;
        case "2": 
            alert("Цифре " + digitalNumber + " соответствует спецсимвол @");
            break;
        case "3": 
            alert("Цифре " + digitalNumber + " соответствует спецсимвол #");
            break;
        case "4": 
            alert("Цифре " + digitalNumber + " соответствует спецсимвол $");
            break;
        case "5": 
            alert("Цифре " + digitalNumber + " соответствует спецсимвол %");
            break;
        case "6": 
            alert("Цифре " + digitalNumber + " соответствует спецсимвол ^");
            break;
        case "7": 
            alert("Цифре " + digitalNumber + " соответствует спецсимвол &");
            break;
        case "8": 
            alert("Цифре " + digitalNumber + " соответствует спецсимвол *");
            break;
        case "9": 
            alert("Цифре " + digitalNumber + " соответствует спецсимвол )");
            break;
        default: 
            alert("Вы ввели некорретное число");
            break;
    }
}

// task2();

/*
 Запросить у пользователя трехзначное и число и проверить,
есть ли в нем одинаковые цифры.
 */

function task3() {
    let number = +prompt("Введите трехзначное число");
    let x1 = Math.floor(number / 100);
    let x2 = Math.floor(number / 10) % 10;
    let x3 = number % 10;

    // console.log(x1, x2, x3);

    if (x1 == x2 || x1 == x3 || x2 == x3) {
        alert("В числе " + number + " имеются одинаковые цифры");
    } else {
        alert("В числе " + number + " не имеется одинаковых цифр");
    }
}

// task3();

/*
 Запросить у пользователя год и проверить, високосный он
или нет. Високосный год либо кратен 400, либо кратен 4 и
при этом не кратен 100.
 */

function task4() {
    let year = +prompt("Введите год, который хотите проверить на високосность");
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
        alert("Год " + year + " является високосным");
    } else {
        alert("Год " + year + " не является високосным");
    }
}

// task4();

/*
 Запросить у пользователя пятиразрядное число и опреде-
лить, является ли оно палиндромом.
 */

function task5() {
    let number5 = +prompt("Введите пятиразрядное число");
    let n1 = Math.floor(number5 / 10000);
    let n2 = Math.floor(number5 / 1000) % 10;
    let n4 = Math.floor(number5 / 10) % 10;
    let n5 = number5 % 10;

    console.log(n1, n2, "null", n4, n5);

    if (n1 == n5 || n2 == n4) {
        alert("Число " + number5 + " является палиндромом");
    } else {
        alert("Число " + number5 + " не является палиндромом");
    }
}

// task5();

/*
 Написать конвертор валют. Пользователь вводит количе-
ство USD, выбирает, в какую валюту хочет перевести: EUR,
UAN или AZN, и получает в ответ соответствующую сумму.
 */

function task6() {
    let newMoney;
    let dolMoney = +prompt("Введите количество долларов");

    if (isNaN(dolMoney)) {
        alert("Вы ввели не цифру, начните заново");
        return;
    }

    let modeMoney = prompt("Введите валюту, в которую хотите перевести: EUR, UAN, AZN");
    modeMoney = modeMoney.toLowerCase();

    switch (modeMoney) {
    case "eur": 
        newMoney = dolMoney * 0.87;
        alert(dolMoney + " USD = " + newMoney + " EUR");
        break;
    case "uan": 
        newMoney = dolMoney * 7.29;
        alert(dolMoney + " USD = " + newMoney + " UAN");
        break;
    case "azn": 
        newMoney = dolMoney * 1.7;
        alert(dolMoney + " USD = " + newMoney + " AZN");
        break;
    default: 
        alert("Перевод в " + modeMoney + " не поддерживается");
        break;
}    
}

// task6();

/*
 Запросить у пользователя сумму покупки и вывести сумму
к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
до 500 – 5%, от 500 и выше – 7%.
 */

function task7() {
    let discountCost;
    let totalCost = +prompt("Введите общую сумму покупок");

    if (isNaN(totalCost)) {
        alert("Введите корректную стоимость покупки");
        return;
    } else {
        totalCost = -totalCost;
    }

    if (totalCost >= 200 && totalCost < 300) {
        discountCost = 0.03;
        totalCost = totalCost - totalCost * discountCost;
        alert("Ваша скидка равна " + Math.round(discountCost * 100) + "%" + ". Итоговая цена = " + totalCost);
    } else if (totalCost >= 300 && totalCost < 500) {
        discountCost = 0.05;
        totalCost = totalCost - totalCost * discountCost;
        alert("Ваша скидка равна " + Math.round(discountCost * 100) + "%" + ". Итоговая цена = " + totalCost);
    } else if (totalCost >= 500) {
        discountCost = 0.07;
        totalCost = totalCost - totalCost * discountCost;
        alert("Ваша скидка равна " + Math.round(discountCost * 100) + "%" + ". Итоговая цена = " + totalCost);
    } else {
        alert("Для стоимости покупок до 200 скидок не имеется")
    }
}

// task7();

/*
 Запросить у пользователя длину окружности и периметр
квадрата. Определить, может ли такая окружность поме-
ститься в указанный квадрат. 
 */

function task8() {
    let lengthCircle = +prompt("Введите длину окружности");
    let diameterCircle = lengthCircle / Math.PI;

    if (isNaN(lengthCircle)) {
        alert("Введите корректную длину окружности");
        return;
    } else {
        lengthCircle = -lengthCircle;
    }

    let perimeterSquare = +prompt("Введите периметр квадрата");
    let sideSquare = perimeterSquare / 4;

    if (isNaN(perimeterSquare)) {
        alert("Введите корректную длину квадрата");
        return;
    } else {
        perimeterSquare = -perimeterSquare;
    }

    if (diameterCircle <= sideSquare) {
        alert("Окружность поместится в квадрат");
    } else {
        alert("Окружность не поместится в квадрат");
    }
}

// task8();

/*
 Задать пользователю 3 вопроса, в каждом вопросе по 3 ва-
рианта ответа. За каждый правильный ответ начисляется 2
балла. После вопросов выведите пользователю количество
набранных баллов.
 */

function task9() {
    let userName;
    let count = 0;
    let answer1;
    let answer2;
    let answer3;

    userName = prompt("Введите Ваше имя");
    alert("Здравствуйте, " + userName + "! Добро пожаловать на викторину! Для ответа на вопрос достаточно ввести номер ответа");

    answer1 = +prompt("Как называется 3-я планета в Солнечной системе? Варианты ответа: 1 - Земля. 2 - Марс. 3 - Венера");
    if (answer1 == 1) {
        count += 2;
    }

    answer2 = +prompt("Сколько пальцев всего у человека? Варианты ответа: 1 - 5 пальцев. 2 - 20 пальцев. 3 - 21 палец");
    if (answer1 == 2) {
        count += 2;
    }

    answer3 = +prompt("Столица РФ? Варианты ответа: 1 - Москва. 2 - Париж. 3 - Георграфию в школе не проходил");
    if (answer1 == 1) {
        count += 2;
    }

    switch (count) {
        case 0:
            alert("К сожалению, вы набрали " + count + " баллов");
            break;
        case 2:
            alert("Поздравляем! Вы набрали " + count + " балла");
            break;
        case 4:
            alert("Поздравляем! Вы набрали " + count + " балла");
            break;
        case 6:
            alert("Поздравляем! Вы набрали " + count + " баллов");
            break;
    }

}

// task9();

/*
 Запросить дату (день, месяц, год) и вывести следующую
за ней дату. Учтите возможность перехода на следующий
месяц, год, а также високосный год.
 */

function task10() {
    let day;
    let month;
    let year;

    let leapYear = false; // в феврале 28 дней или 29 дней
    let evenMonth = false; // в месяце 30 дней или 31 день

    day = +prompt("Введите день в формает DD");
    month = +prompt("Введите месяц в формате цифр MM");
    year = +prompt("Введите год в формате YYYY");

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
}

// task10();

// этот код мне пригодится в будущем
/*
 var day = new Date('30 апреля 2000 года');  1
console.log(day);  // вывод «30 апреля 2000 года» 1
var nextDay = new Date(day);  1
nextDay.setDate(day.getDate() + 1);  1
console.log(nextDay);  // вывод «1 мая 2000 года» 1
 */