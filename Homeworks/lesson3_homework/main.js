// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for(let i = 0; i < 10; i++){
    document.write(`<div>div</div>`);
}

// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for(let i = 0; i < 10; i++){
    document.write(`<div>div - ${i}</div>`);
}

// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
{
    let i = 0;
    const blockCount = 20;
    while(i < blockCount){
        document.write(`<h1>h1</h1>`);
        i++;
    }
}

// #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
{
    let i = 0;
    const blockCount = 20;
    while(i < blockCount){
        document.write(`<h1>h1 - ${i}</h1>`);
        i++;
    }
}

//#vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
{
    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
    document.write(`<ul>`);
    for (const key in listOfItems) {
        document.write(`<li>${listOfItems[key]}</li>`);
    }
    document.write(`</ul>`);
}

// #Hdjws7E
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
{
    let products = [
        {
            title: 'milk',
            price: 22,
            image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
        },
        {
            title: 'juice',
            price: 27,
            image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
        },
        {
            title: 'tomato',
            price: 47,
            image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
        },
        {
            title: 'tea',
            price: 15,
            image: 'https://m.media-amazon.com/images/I/513VDg+ageL._SL500_.jpg'
        },
    ];
    for (const product in products) {
        document.write(`<div class="product-card">`);
        document.write(`<h3 class="product-title">${products[product].title}. Price - ${products[product].price}</h3>
        <img src="${products[product].image}" alt="" class="product-image">`)
        document.write(`</div>`);
    }
}

// #4WrHwFTEop0 є масив users
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років
{
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
    ];
    for (const user in users) {
        if(users[user].status){ // print if true
            console.log(users[user]);
        }
    }
    console.log('----------');
    for (const user in users) {
        if(!users[user].status){ // print if false
            console.log(users[user]);
        }
    }
    console.log('----------');
    for (const user in users) {
        if(users[user].age > 30){
            console.log(users[user]);
        }
    }
}