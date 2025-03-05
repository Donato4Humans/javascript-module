//#sH8c4er - 1
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
{
    let div = document.getElementById('text');
    let btn = document.getElementById('btn');

    btn.onclick = function (){
        div.style.display = 'none';
    }
}

//#j693ca8 - 2
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
{
    let input = document.getElementById('ageInput');
    let submitBtn = document.getElementById('sendAge');

    submitBtn.onclick = function (){
        let age = input.value;
        if(age < 18){
            console.log(`Your age is less than 18! AGE: ${age}`);
        }
    }
}

//#ymAmN2xJ - 3
// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
{
    const formUser = document.forms.userInfo;

    formUser.onsubmit = function (ev) {
        ev.preventDefault();
        let user = {name: formUser.name.value, surname: formUser.surname.value, age: formUser.age.value};
        let div = document.createElement('div');
        div.innerText = JSON.stringify(user);
        document.body.appendChild(div);
    }
}

//#2VaLt4vDczH - 4
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
{
    let numDiv = document.getElementById('numberDiv');
    let number = +localStorage.getItem('num');
    number += 1;
    localStorage.setItem('num', number.toString());
    numDiv.innerText = number.toString();
}

//#LhSfdhM3 - 5
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM
{
    let sessionList = JSON.parse(localStorage.getItem('sessions')) || [];
    sessionList.push(new Date());
    localStorage.setItem('sessions', JSON.stringify(sessionList));
    //other part of task in sessionsList.html
}

//#Jg0gPO00 - 6
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
{
    let input = document.getElementById('weightInKg');
    let divDisplay = document.getElementById('weightInPounds');
    input.oninput = function (){
        divDisplay.innerText = input.valueAsNumber * 2.205;
    }
}

//#RbQGnH5DuC - 7
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
{
    let testArray = [{testObj: 'test'}];
    localStorage.setItem('testArray', JSON.stringify(testArray));

    function addToLocalStorage(arrayName, objToAdd){
        if(typeof objToAdd === 'object' && localStorage.getItem(arrayName)){
            let neededArray = JSON.parse(localStorage.getItem(arrayName));
            neededArray.push(objToAdd);
            localStorage.setItem(arrayName, JSON.stringify(neededArray));
        }else{console.error('NO SUCH ARRAY OR INVALID OBJECT TO ADD!!!')}
    }
    addToLocalStorage('testArray', {name: 'name1', surname: 'surname1'});
}

//#kUSgFqWY - 8
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
{
    let sendBtn = document.getElementById('tableBtn');
    let tableWrap = document.getElementById('tableTarget');
    sendBtn.onclick = function (){
        tableWrap.innerHTML = '';
        let rows = document.getElementById('tableRows').valueAsNumber;
        let columns = document.getElementById('tableColumns').valueAsNumber;
        let content = document.getElementById('tableContent').value;

        for (let i = 0; i < rows; i++){
            let row = document.createElement('div');
            row.style.display = 'flex';
            for (let j = 0; j < columns; j++){
                let column = document.createElement('div');
                column.innerText = content;
                column.style.border = '1px solid';//for table-like look
                row.appendChild(column);
            }
            tableWrap.appendChild(row);
        }
    }
}

//#bq1zkx7WP - 9
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
{
    let div = document.getElementById('divUAH');
    let currency = 'грн';
    let number = +localStorage.getItem('money') || 100;
    div.innerText = number + currency;

    document.onreadystatechange = function (){
        if(document.readyState === 'complete'){
            if((Date.now() - JSON.parse(localStorage.getItem('date'))) / 1000 >= 10 && // divide buy 1000 to exclude milliseconds
                JSON.parse(localStorage.getItem('date'))){ // and check if timer exist in localStorage
                number += 10;
                localStorage.setItem('money', number);
                div.innerText = number + currency;
            }
            localStorage.setItem('date', JSON.stringify(Date.now()));
        }
    }
}

//#NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
{
    //get needed DOM-elements
    const target = document.getElementById('target');//wrapper for displayed objects
    target.style.padding = '10px';
    const prevBtn = document.getElementById('prevPage');// buttons to navigate
    const nextBtn = document.getElementById('nextPage');

    //Initialization
    const PAGE_SIZE = 10;
    const arr = [];
    for(let i = 1; i <= 100; i++){ // create array of objects
        arr.push(`OBJECT_${i}`);
    }
    const totalPages = Math.ceil(arr.length / PAGE_SIZE); // 10 pages total
    let currentPage = 0;

    //Main function to display objects on needed page
    function displayPage(page){
        target.innerHTML = '';
        const startIndex = page * PAGE_SIZE; //page 0->0, page 1->10...
        const endIndex = Math.min(startIndex + PAGE_SIZE, arr.length);
        for (let i = startIndex; i < endIndex; i++){ // display first 10 objects
            const div = document.createElement('div');
            div.style.border = '1px solid';
            div.innerText = arr[i];
            target.appendChild(div);
        }
    }

    //Display first page
    displayPage(currentPage);

    //Event handlers for navigation
    prevBtn.onclick = function (){
        currentPage = (currentPage - 1 + totalPages) % totalPages; // wrap around to last page if below 0
        displayPage(currentPage);
    }

    nextBtn.onclick = function (){
        currentPage = (currentPage + 1) % totalPages; // wrap around to first page if greater than last page
        displayPage(currentPage);
    }
}