/*
1. Написать функцию, которая принимает 2 числа и возвра-
щает -1, если первое меньше, чем второе; 1 – если первое
больше, чем второе; и 0 – если числа равны.
*/
function compareNumbers(number1, number2) {
    if (number1 < number2) {
        return -1;
    } else if (number1 > number2) {
        return 1;
    } else {
        return 0;
    }
}

// console.log(compareNumbers(3, 2));

/*
2. Написать функцию, которая вычисляет факториал пере-
данного ей числа.
*/
function factorialNumber(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

// console.log(factorialNumber(4));

/*
3. Написать функцию, которая принимает три отдельные
цифры и превращает их в одно число. Например: цифры
1, 4, 9 превратятся в число 149.
*/
function concatenationNumbers(number1, number2, number3) {
    return number1 + "" + number2 + "" + number3;
}

// console.log(concatenationNumbers(1, 2, 3));

/*
4. Написать функцию, которая принимает длину и ширину
прямоугольника и вычисляет его площадь. Если в функцию
передали 1 параметр, то она вычисляет площадь квадрата.
*/
function rectangleArea(length, width = 0) {
    if (width != 0) {
        return length * width;
    } else {
        return length * length;
    }
}

// console.log(rectangleArea(5));

/*
5. Написать функцию, которая проверяет, является ли пере-
данное ей число совершенным. Совершенное число – это
число, равное сумме всех своих собственных делителей.
*/
function perfectNumber(number) {
    let result = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            result += i;
        }
    }
    if (result == number) {
        return true;
    } else {
        return false;
    }
}

// console.log(perfectNumber(5));

/*
6. Написать функцию, которая принимает минимальное и
максимальное значения для диапазона, и выводит только
те числа из диапазона, которые являются совершенными.
Используйте написанную ранее функцию, чтобы узнавать,
совершенное число или нет.
*/
function perfectNumberInRange(start, end) {
    for (let i = start; i <= end; i++) {
        if (perfectNumber(i)) {
            console.log(i);
        }
    }
    return;
}

// console.log(perfectNumberInRange(1, 1000));
/*
7. Написать функцию, которая принимает время (часы, мину-
ты, секунды) и выводит его на экран в формате «чч:мм:сс».
Если при вызове функции минуты и/или секунды не были
переданы, то выводить их как 00.
*/
function watchLook(hour = 0, min = 0, sec = 0) {
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    console.log(`${hour}:${min}:${sec}`);
    return;
}

// console.log(watchLook(11, 2, 0));

/*
8. Написать функцию, которая принимает часы, минуты и
секунды и возвращает это время в секундах.
*/
function convertToSeconds(hour = 0, min = 0, sec = 0) {
    return hour * 3600 + min * 60 + sec;
}

// console.log(convertToSeconds(2, 2, 2));

/*
9. Написать функцию, которая принимает количество секунд,
переводит их в часы, минуты и секунды и возвращает в
виде строки «чч:мм:сс».
*/
function convertSecondstoWatch(sec = 0) {
    let hour = Math.floor(sec / 3600);
    let min = Math.floor((sec % 3600) / 60);
    sec = sec % 3600 % 60;

    console.log(watchLook(hour, min, sec));
    return;
}

// console.log(convertSecondstoWatch(3661));

/*
10. Написать функцию, которая считает разницу между датами.
Функция принимает 6 параметров, которые описывают 2
даты, и возвращает результат в виде строки «чч:мм:сс». При
выполнении задания используйте функции из предыду-
щих 2-х заданий: сначала обе даты переведите в секунды,
узнайте разницу в секундах, а потом разницу переведите
обратно в «чч:мм:сс». 
*/

function differenceTime(hour1 = 0, min1 = 0, sec1 = 0, hour2 = 0, min2 = 0, sec2 = 0) {
    let second1 = convertToSeconds(hour1, min1, sec1);
    let second2 = convertToSeconds(hour2, min2, sec2);
    let second = Math.abs(second1 - second2);
    return convertSecondstoWatch(second);
}

// console.log(differenceTime(3, 3, 3, 2, 2, 2));
