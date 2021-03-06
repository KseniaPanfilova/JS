// 1. Создать переменную a

let a;

// 2. Создать переменную b

let b;

// 4. Присвоить a - число 50, b - число 20 

a=50;
b=20;

// 3. Создать переменную c и присвоить ей сумму a и b, деленную на произведение a и b

let c=(a+b)/(a*b);

// 4. Вывести c

console.log(c);

// 5. Вывести с, a и b в одну строку через запятую

console.log(a+", "+b+", "+c);

// 6. Вывести сумму a + b + с , разницу между a и b и остаток от деления a на b в одну строку, не используя других переменных в виде:
//   "Сумма a, b и с == ... , Дельта a и b == ... , Остаток от деления a на b == ... "

console.log("Сумма a, b и с == "+(a+b+c)+", Дельта a и b == "+(a-b)+", Остаток от деления a на b == "+(a%b));


// 1* Создать функцию, которая будет выводить утроенное значение остатка от деления произведения переменных "a" и "b" на их сумму.

function calculation(a, b) {
    console.log(((a*b)%(a+b))*3);
}
calculation(a, b);

// 2* Создать функцию, которая будет получать на вход число и на выходе будет писать - делится ли оно на 5 или делится ли оно на 11
// Если число не делится ни на 5, ни на 11 - вывести " ... - скучное число "

// 3*** Подумать и предусмотреть, какие случаи могут баговать предыдущую функцию и добавить проверки на невалидные вводы
// в таких случаях вывести в чем ошибка ввода

//вариант 1 (с использованием конструкции try-catch)
function funNumbers(num) {
    if (typeof num === "string")
        throw "Данная функция обрабатывает только числовые значения, Вы ввели строку. Введите, пожалуйста, число";
    if (typeof num === "boolean")
        throw "Данная функция обрабатывает только числовые значения, Вы ввели булевое значение. Введите, пожалуйста, число";
    if (typeof num === "object")
        throw "Данная функция обрабатывает только числовые значения, Вы ввели объект. Введите, пожалуйста, число";
    if (typeof num === "function")
        throw "Данная функция обрабатывает только числовые значения, Вы ввели функцию. Введите, пожалуйста, число";
    if (typeof num === "undefined")
        throw "Данная функция обрабатывает только числовые значения, Вы ввели данные неопределнного типа. Введите, пожалуйста, число";  
    if (num == 0) {
        console.log(num + " - скучное число.");
    } else if (num % 5 == 0) {
        console.log(num + " делится на 5.");
    } else if (num % 11 == 0) {
        console.log(num + " делится на 11.");
    } else {
        console.log(num + " - скучное число.");
    }
}
try {
    funNumbers(0); //введите значение в скобки
} catch(ex) {
    console.log(ex);
}

//вариант 2 (использование return для прерывания функции)
function funNumbers1(num) {
    if (typeof num === "string") {
        return (console.log("Данная функция обрабатывает только числовые значения, Вы ввели строку. Введите, пожалуйста, число"));
    } else if (typeof num === "boolean") {
        return (console.log("Данная функция обрабатывает только числовые значения, Вы ввели булевое значение. Введите, пожалуйста, число"));
    } else if (typeof num === "object") {
        return (console.log("Данная функция обрабатывает только числовые значения, Вы ввели объект. Введите, пожалуйста, число"));
    } else if (typeof num === "function") {
        return (console.log("Данная функция обрабатывает только числовые значения, Вы ввели функцию. Введите, пожалуйста, число"));
    } else if (typeof num === "undefined") {
        return (console.log("Данная функция обрабатывает только числовые значения, Вы ввели данные неопределнного типа. Введите, пожалуйста, число"));
    } else if (num == 0) {
        console.log(num + " - скучное число.");
    } else if (num % 5 == 0) {
        console.log(num + " делится на 5.");
    } else if (num % 11 == 0) {
        console.log(num + " делится на 11.");
    } else {
        console.log(num + " - скучное число.");
    }
}
funNumbers1(0); //введите значение в скобки
