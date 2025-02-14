// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
{
    let a = +prompt('Enter length of first rectangle side!');
    let b = +prompt('Enter length of second rectangle side!');

    let sRectangle = (a, b) => a * b;

    console.log(`${sRectangle(a, b)} = area of square`);
}

//#ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
{
    const PI = 3.14;
    let r = +prompt("Enter circle radius!");

    let sCircle = (r) => PI * (r * r);

    console.log(`${sCircle(r)} = area of circle`);
}

//#Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
{
    const PI = 3.14;
    let r = +prompt("Enter cylinder radius!");
    let h = +prompt("Enter cylinder height!");

    let sCylinder = (r,h) => (2 * PI * r * h) + 2 * (PI * (r * r));

    console.log(`${sCylinder(r,h)} = area of cylinder`);
}

//#SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
{
    let arr = [1, 2, 3, 4, 5, 'asdf', true];
    let arrayPrint = (arr) => {
        for (const item in arr) {
            console.log(arr[item]);
        }
    }
    arrayPrint(arr);
}

//#59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
{
    let text = prompt('Enter text!');
    let pPrint = (text) =>  document.write(`<p>${text}</p>`);
    pPrint(text);
}

//#hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
{
    let text = prompt('Enter text!');
    let listPrint = (text) => {
        document.write(`<ul>`);
        for(let i = 0; i < 3; i++){
            document.write(`<li>${text}</li>`);
        }
        document.write(`</ul>`);
    }
    listPrint(text);
}

//#0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
{
    let text = prompt('Enter text!');
    let liCount = +prompt('Enter number of li!');
    let listArgPrint = (text, liCount) => {
        document.write(`<ul>`);
        for(let i = 0; i < liCount; i++){
            document.write(`<li>${text}</li>`);
        }
        document.write(`</ul>`);
    }
    listArgPrint(text, liCount);
}

//#gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
{
    let arrPrint = (...arr) => {
        document.write(`<ul>`);
        for (const item in arr) {
            document.write(`<li>${arr[item]}</li>`);
        }
        document.write(`</ul>`);
    }
    arrPrint(123, 456, 789, 'asd', 'qwe', 'zxc', true, false);
}

//#bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
{
    let users = [
        {id: 1, name: 'name1', age: 18},
        {id: 2, name: 'name2', age: 19},
        {id: 3, name: 'name3', age: 20}
    ]
    let objArrPrint = (users) => {
        for (const user of users) {
            document.write(`<ul>`);
            for (const fieldName in user) {
                document.write(`<li>${user[fieldName]}</li>`);
            }
            document.write(`</ul>`);
        }
    }
    objArrPrint(users);
}

//#pghbnSB
// - створити функцію яка повертає найменьше число з масиву
{
    let findMin = (...arr) => {
        let min = arr[0];
        for (const number in arr) {
            if(arr[number] < min){
                min = arr[number];
            }
        }
        return min;
    }
    console.log(`${findMin(1, 5, 3, 9, 0, -1, -5)} - minimal number from array`);
}

//#EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
{
    let sumArr = (...arr) => {
        let result = 0;
        for (const number in arr) {
            result += arr[number];
        }
        return result;
    }
    console.log(`${sumArr(1, 5, 3, 9, 0, -1, -3)} - sum of array`);
}

//#kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
{
    let arr = [1, 5, 3, 9, 0, -1, -6];

    let swap = (arr, index1, index2) => {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    swap(arr, 0, arr.length - 1)
    console.log(`${arr} - swapped array`);
}

//#mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
{
    let currencyValues = [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}];
    let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
        for (const item in currencyValues) {
            if(currencyValues[item].currency === exchangeCurrency){
                return sumUAH / currencyValues[item].value;
            }
        }
        return 0;
    }
    let result = exchange(10000, currencyValues,'USD');
    console.log(result);
}