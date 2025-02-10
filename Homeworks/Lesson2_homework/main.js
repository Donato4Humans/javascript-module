// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
{
    let arr = [1, 2, 3, 4, 5, 'hello', 'world', true, false, 3.14];
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
    console.log(arr[4]);
    console.log(arr[5]);
    console.log(arr[6]);
    console.log(arr[7]);
    console.log(arr[8]);
    console.log(arr[9]);
}

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
{
    let book1 = {
        title: 'title1',
        pageCount: 123,
        genre: 'genre1'
    }
    let book2 = {
        title: 'title2',
        pageCount: 1234,
        genre: 'genre2'
    }
    let book3 = {
        title: 'title3',
        pageCount: 12345,
        genre: 'genre3'
    }
}

//#sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.Поле "автори"-являється масивом.
// Кожен автор має поля name та age.
{
    let book1 = {
        title: 'title1',
        pageCount: 123,
        genre: 'genre1',
        authors : [
            { name : 'name1', age : 23},
            { name : 'name2', age : 23}
        ]
    }
    let book2 = {
        title: 'title2',
        pageCount: 1234,
        genre: 'genre2',
        authors : [
            { name : 'name1', age : 23},
            { name : 'name2', age : 23}
        ]
    }
    let book3 = {
        title: 'title3',
        pageCount: 12345,
        genre: 'genre3',
        authors : [
            { name : 'name1', age : 23},
            { name : 'name2', age : 23}
        ]
    }
}

//#jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
{
    let users = [
        {name: 'name1', username: 'username1', password: 'password1'},
        {name: 'name2', username: 'username2', password: 'password2'},
        {name: 'name3', username: 'username3', password: 'password3'},
        {name: 'name4', username: 'username4', password: 'password4'},
        {name: 'name5', username: 'username5', password: 'password5'},
        {name: 'name6', username: 'username6', password: 'password6'},
        {name: 'name7', username: 'username7', password: 'password7'},
        {name: 'name8', username: 'username8', password: 'password8'},
        {name: 'name9', username: 'username9', password: 'password9'},
        {name: 'name10', username: 'username10', password: 'password10'}
    ]
    console.log(users[0].password);
    console.log(users[1].password);
    console.log(users[2].password);
    console.log(users[3].password);
    console.log(users[4].password);
    console.log(users[5].password);
    console.log(users[6].password);
    console.log(users[7].password);
    console.log(users[8].password);
    console.log(users[9].password);
}

//#coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
{
    let monday = {
        dayName : 'Monday',
        morning: 0,
        day: 5,
        evening: 2
    }
    let tuesday = {
        dayName : 'Tuesday',
        morning: 0,
        day: 5,
        evening: 2
    }
    let wednesday = {
        dayName : 'Wednesday',
        morning: 0,
        day: 5,
        evening: 2
    }
    let thursday = {
        dayName : 'Thursday',
        morning: 0,
        day: 5,
        evening: 2
    }
    let friday = {
        dayName : 'Friday',
        morning: 0,
        day: 5,
        evening: 2
    }
    let saturday = {
        dayName : 'Saturday',
        morning: 0,
        day: 5,
        evening: 2
    }
    let sunday = {
        dayName : 'Sunday',
        morning: 0,
        day: 5,
        evening: 2
    }
    let weekTemp = [
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday
    ]
}

//#bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
{
    let x = +prompt('enter number');
    if(x !== 0){
        console.log('Вірно');
    }else{
        console.log('Невірно');
    }
}

//#3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
{
    let time = +prompt('Enter minute from 0 to 59!');
    if(time >= 0 && time < 15){
        console.log('Перша чверть');
    }else if(time > 15 && time <= 30){
        console.log('Друга чверть');
    }else if(time > 30 && time <= 45){
        console.log('Третя чверть');
    }else if(time > 45 && time <= 59){
        console.log('Четверта чверть');
    }
}

//#UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
{
    let day = +prompt('Enter day from 1 to 31!');
    if(day >= 1 && day <= 10){
        console.log('Перша декада');
    }else if(day >= 11 && day <= 20){
        console.log('Друга декада');
    }else if(day >= 21 && day <= 31) {
        console.log('Третя декада');
    }
}

//#KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

{
    let dayNumber = +prompt('Enter week day number: from 1 to 7!');
    switch(dayNumber){
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
        default:
            console.log('You entered wrong week day number! Try again!');
            break;
    }
}

//#uwsz1RnTQJ1
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
{
    let number1 = +prompt('Enter first number!');
    let number2 = +prompt('Enter second number!');
    if(number1 > number2){
        console.log(`${number1} is max number!`);
    }else if(number2 > number1){
        console.log(`${number2} is max number!`);
    }else{
        console.log('Numbers are equal!');
    }
}

//#iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,буде присвоювати змінній х значення "default"
// якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
{
    let x = '';
    if(!!x === false){
        x = 'default';
    }else if(+x === false){
        x = 'default';
    }
}

//#awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    if(coursesAndDurationArray[0].monthDuration > 5){
        console.log('Супер');
    }
    if(coursesAndDurationArray[1].monthDuration > 5){
        console.log('Супер');
    }
    if(coursesAndDurationArray[2].monthDuration > 5){
        console.log('Супер');
    }
    if(coursesAndDurationArray[3].monthDuration > 5){
        console.log('Супер');
    }
    if(coursesAndDurationArray[4].monthDuration > 5){
        console.log('Супер');
    }
    if(coursesAndDurationArray[5].monthDuration > 5){
        console.log('Супер');
    }
}