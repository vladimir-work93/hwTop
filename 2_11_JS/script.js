/*
Создать массив «Список покупок». Каждый элемент массива
является объектом, который содержит название продукта, необ-
ходимое количество и куплен или нет. Написать несколько функ-
ций для работы с таким массивом.
1. Вывод всего списка на экран таким образом, чтобы сначала
шли некупленные продукты, а потом – купленные.
2. Добавление покупки в список. Учтите, что при добавлении
покупки с уже существующим в списке продуктом, необ-
ходимо увеличивать количество в существующей покупке,
а не добавлять новую.
3. Покупка продукта. Функция принимает название продукта
и отмечает его как купленный.
*/

class Purchase {
    constructor(name, count, status) {
        this.name = name;
        this.count = count;
        this.status = status;
    }
}

let shoppingList = [
    new Purchase(`Хлеб`, 2, false),
    new Purchase(`Огурец`, 5, true),
    new Purchase(`Сливочное масло`, 1, false)
];

// console.log(shoppingList);

// Функция вывода всего списка
function viewList(list) {
    console.log(`Некупленные товары:`);
    for (let i = 0; i < list.length; i++) {
        if (list[i].status == false) {
            console.log(`${list[i].name} ${list[i].count} шт.`);
        }    
    }
    console.log(`Купленные товары:`);
    for (let i = 0; i < list.length; i++) {
        if (list[i].status == true) {
            console.log(`${list[i].name} ${list[i].count} шт.`);
        }    
    }
}

// viewList(shoppingList);

// Функция добавления покупки в список
function addProduct(productName, list) {
    let flag = false;
    for (let i = 0; i < list.length; i++) {
        if (productName == list[i].name) {
            list[i].count += 1;
            flag = true;
            break;
        }
    }
    if (!flag) {
        list.push(new Purchase(productName, 1, false));
    }
}

// viewList(shoppingList);
// addProduct(`Хлеб`, shoppingList);
// addProduct(`Яблоко`, shoppingList);
// viewList(shoppingList);

// Функция покупки продукта
function buyProduct(productName, list) {
    let flag = false;
    for (let i = 0; i < list.length; i++) {
        if (productName == list[i].name) {
            list[i].status = true;
            flag = true;
            console.log(`Продукт ${productName} успешно добавлен`);
            break;
        }
    }
    if (!flag) {
        console.log(`Такого продукта как ${productName} нет`);
    }
}

// viewList(shoppingList);
// buyProduct('Хлеб', shoppingList);
// buyProduct('Огурец', shoppingList);
// buyProduct('Яблоко', shoppingList);
// viewList(shoppingList);

/**
 Задание 2
Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за
единицу товара. Написать следующие функции.
1. Распечатка чека на экран.
2. Подсчет общей суммы покупки.
3. Получение самой дорогой покупки в чеке.
4. Подсчет средней стоимости одного товара в чеке. 
 */

class Good {
    constructor(name, count, price) {
        this.name = name;
        this.count = count;
        this.price = price;
    }
}

let checkShop = [
    new Good(`Хлеб`, 2, 20),
    new Good(`Огурец`, 5, 50),
    new Good(`Сливочное масло`, 1, 150)
];

// Функция вывода всего чека
function viewCheck(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(`${list[i].name} ${list[i].count} х ${list[i].price} = ${list[i].count * list[i].price} руб.`);
    }
}

// viewCheck(checkShop);

function sumCheck(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i].count * list[i].price;
    }
    console.log(`Общая сумма чека = ${sum}`);
    return sum;
}

// viewCheck(checkShop);
// sumCheck(checkShop);

function highPrice(list) {
    let highProduct = 0;
    let j = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].price > highProduct) {
            highProduct = list[i].count * list[i].price;
            j = i;
        }
    }
    console.log(`Самая дорогая позиция в чеке: ${list[j].name} ${list[j].count} х ${list[j].price} = ${list[j].count * list[j].price} руб.`);
}

// viewCheck(checkShop);
// highPrice(checkShop);

function avgPrice(list) {
    let sum = sumCheck(list);
    let count = list.length;
    console.log(`Средняя цена одной позиции в чеке = ${(sum / count).toFixed(2)}`);    
}

// viewCheck(checkShop);
// avgPrice(checkShop);

/**
 Задание 3
Создать массив css-стилей (цвет, размер шрифта, выравнива-
ние, подчеркивание и т. д.). Каждый элемент массива – это объ-
ект, состоящий из двух свойств: название стиля и значение стиля.
Написать функцию, которая принимает массив стилей и
текст, и выводит этот текст с помощью document.write() в тегах
<p></p>, добавив в открывающий тег атрибут style со всеми сти-
лями, перечисленными в массиве.
*/

// Примечание: document.write() устаревший метод

function writeText(styles, text) {
    let resString = `<p style="`;
    for (let key in styles) {
        resString += key + ":" + styles[key] + ";";
    }
    resString += `">` + text + `</p>`
    document.write(resString);
}

let styles = {
    "color": "blue",
    "font-size": "2rem",
    "text-align": "center",
    "text-decoration": "underline"
}

// writeText(styles, "Текст");

/**
 Задание 4
Создать массив аудиторий академии. Объект-аудитория со-
стоит из названия, количества посадочных мест (от 10 до 20) и
названия факультета, для которого она предназначена.
Написать несколько функций для работы с ним.
1. Вывод на экран всех аудиторий.
2. Вывод на экран аудиторий для указанного факультета.
3. Вывод на экран только тех аудиторий, которые подходят для
переданной группы. Объект-группа состоит из названия,
количества студентов и названия факультета.
4. Функция сортировки аудиторий по количеству мест.
5. Функция сортировки аудиторий по названию (по алфа-
виту).
 */

class Classroom {
    constructor(nameClass, countSeats, nameFaculty) {
        if (countSeats >= 10 && countSeats <= 20) {
            this.nameClass = nameClass;
            this.countSeats = countSeats;
            this.nameFaculty = nameFaculty;
        } else {
            console.log(`Количество мест в аудитории от 10 до 20. Вы ввели ${countSeats}`);
        }        
    }

    toString() {
        return "Аудитория " + this.nameClass + " с кол-вом мест " + this.countSeats + " в факультете " + this.nameFaculty;
    }
}

class Group {
    constructor(nameGroup, countStudent, nameFaculty) {
        this.nameGroup = nameGroup;
        this.countStudent = countStudent;
        this.nameFaculty = nameFaculty;
    }
}

let arrayClass = [
    new Classroom("Classroom_1", 10, "Faculty_1"),
    new Classroom("Classroom_2", 16, "Faculty_2"),
    new Classroom("Classroom_3", 20, "Faculty_3"),
    new Classroom("Classroom_4", 11, "Faculty_3")
]

let studentGroup = new Group("020", 12, "Faculty_3");

function getAllClassrooms(classrooms) {
    for (let element of classrooms) {
        console.log(element.toString());
    }
}

// getAllClassrooms(arrayClass);

function getClassroomsByFaculty(classrooms, nameFaculty) {
    let flag = false;
    for (let element of classrooms) {
        if (element.nameFaculty == nameFaculty) {
            console.log(element.toString());
            flag = true;
        }
    }
    if (!flag) {
        console.log(`Для факультета ${nameFaculty} аудитории отсутствуют`);
    }
}

// getClassroomsByFaculty(arrayClass, "Faculty_3");

function getClassroomsForGroup(classrooms, group) {
    let flag = false;
    for (let element of classrooms) {
        if (element.nameFaculty == group.nameFaculty && group.countStudent <= element.countSeats) {
            console.log(element.toString());
            flag = true;
        }
    }
    if (!flag) {
        console.log(`Для группы ${group.nameGroup} аудитории отсутствуют`);
    }
}

// getClassroomsForGroup(arrayClass, studentGroup);

function sortByCountSeats(classrooms) {
    let len = classrooms.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (classrooms[j].countSeats > classrooms[j + 1].countSeats) {
                let temp = classrooms[j];
                classrooms[j] = classrooms[j + 1];
                classrooms[j + 1] = temp;
            }
        }
    }
    getAllClassrooms(classrooms);    
}

// sortByCountSeats(arrayClass);

function sortByName(classrooms) {
    let len = classrooms.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (classrooms[j].nameClass > classrooms[j + 1].nameClass) {
                let temp = classrooms[j];
                classrooms[j] = classrooms[j + 1];
                classrooms[j + 1] = temp;
            }
        }
    }
    getAllClassrooms(classrooms);    
}

// sortByCountSeats(arrayClass);
// console.log("Новая строка");
// sortByName(arrayClass);
