function task1() {
    first_name = prompt("Введите Ваше имя");
    alert("Привет, " + first_name + "!");
}

// task1();

function task2() {
    let current_year = 2025;
    let birthyear = +prompt("Введите год своего рождения");
    let age = current_year - birthyear;
    alert("В " + current_year + " году Ваш возраст есть/будет " + age);
}

// task2();

function task3() {
    let squareLength = +prompt("Введите длину стороны квадрата");
    let perimeterSquare = 4 * squareLength;
    alert("Периметр квадрата равен " + perimeterSquare);
}

// task3();

function task4() {
    let radiusCircle = +prompt("Введите радиус окружности");
    let areaCircle = Math.PI * radiusCircle ** 2;
    alert("Радиус окружности равен " + areaCircle);
}

// task4();

function task5() {
    let distance = +prompt("Введите расстояние в км между пунктами назначений");
    let time = +prompt("Введите время в часах, за которое хотите проехать " + distance + " км");
    let speed = distance / time;
    alert("Вам необходимо двигаться со скоростью не менее " + speed + " км/ч");
}

// task5();

function task6() {
    let courseDolEuro = 0.88;
    let money = +prompt("Введите количество долларов");
    let converter = courseDolEuro * money;
    alert("Ваши " + money + " долларов равны " + converter + " евро")
}

// task6();

function task7() {
    let oneFile = 850; // в Мб
    let spaceFlash = +prompt("Укажите объем флешки в Гб");
    let number = Math.floor(spaceFlash * 1024 / oneFile);
    alert("На флешку " + spaceFlash + " Гб поместится " + number + " файлов объемом " + oneFile + " Мб");
}

// task7();

function task8() {
    let moneyWallet = +prompt("Введите доступную сумму денег в формате *руб.коп*");
    let priceChocolate = +prompt("Введите стоимость одной шоколадки в формате *руб.коп*");
    let numberChocolate = Math.floor(moneyWallet / priceChocolate); // кол-во шоколадок
    let cashback = (moneyWallet - (numberChocolate * priceChocolate)).toFixed(2);
    alert("Вы сможете купить " + numberChocolate + " шок. Ваша сдача равна " + cashback + " руб.");
}

// task8();

function task9() {
    let number3 = +prompt("Введите трехзначное число");
    let n1 = Math.floor(number3 / 100);
    let n2 = Math.floor(number3 / 10) % 10;
    let n3 = number3 % 10;
    alert("Ваше число " + number3 + " наоборот " + n3 + n2 + n1);
}

// task9();

function task10() {
    let userNumber = +prompt("Введите целое число");
    let result = !(userNumber % 2);
    alert("Число " + userNumber + " является четным? " + result);
}

// task10();