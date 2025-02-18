// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
{
    let strLength = (...strArr) => {
        for (const str of strArr) {
            console.log(`Length of ${str} = ${str.length} symbols`);
        }
    }
    strLength('hello world', 'lorem ipsum', 'javascript is cool');
}

//#8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
{
    let strLength = (...strArr) => {
        for (const str of strArr) {
            console.log(`${str} -> ${str.toUpperCase()}`);
        }
    }
    strLength('hello world', 'lorem ipsum', 'javascript is cool');
}

//#ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
{
    let strLength = (...strArr) => {
        for (const str of strArr) {
            console.log(`${str} -> ${str.toLowerCase()}`);
        }
    }
    strLength('HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL');
}

//#0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
{
    let dirtyString = ' dirty string   ';
    let newStr;
    newStr = dirtyString.replaceAll(' ', '');
    let index = newStr.indexOf('s', 1) - 1;

    let replace = (str, index, char) => str.substring(0, index + 1) + char + str.substring(index + 1);

    console.log(replace(newStr, index, ' '));
}

//#bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
{
    let str = 'Ревуть воли як ясла повні';
    let stringToArray = (str) => str.split(' ');
    let arr = stringToArray(str);
    console.log(arr);
}

//#Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
{
    let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
    let mappedArray = arr.map(function (value){
        return value.toString();
    });
    console.log(mappedArray);
}

//#5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
{
    let nums = [11,21,3];
    let sortNums = (array, direction) => {
        if(direction === 'ascending'){
            return array.sort((n1, n2) => n1 - n2);
        }
        if(direction === 'descending'){
            return array.sort((n1, n2) => n2 - n1);
        }
    };
    console.log(sortNums(nums, 'ascending'));
    console.log(sortNums(nums, 'descending'));
}

//#yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    let sortedArray = coursesAndDurationArray.sort((course1, course2) => {
        return course2.monthDuration - course1.monthDuration;
    });
    console.log(sortedArray);

    let filteredArray = coursesAndDurationArray.filter(value => {
        return value.monthDuration > 5;
    });
    console.log(filteredArray);

    let mappedArray = coursesAndDurationArray.map((value, index) => {
       return {id: index + 1, ...value};
    });
    console.log(mappedArray);
}

//#bolvdlhP
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
let deck = [
    {cardSuit: 'spade', value: '6',     color: 'black'},
    {cardSuit: 'spade', value: '7',     color: 'black'},
    {cardSuit: 'spade', value: '8',     color: 'black'},
    {cardSuit: 'spade', value: '9',     color: 'black'},
    {cardSuit: 'spade', value: '10',    color: 'black'},
    {cardSuit: 'spade', value: 'jack',  color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king',  color: 'black'},
    {cardSuit: 'spade', value: 'ace',   color: 'black'},
    {cardSuit: 'clubs', value: '6',      color: 'black'},
    {cardSuit: 'clubs', value: '7',      color: 'black'},
    {cardSuit: 'clubs', value: '8',      color: 'black'},
    {cardSuit: 'clubs', value: '9',      color: 'black'},
    {cardSuit: 'clubs', value: '10',     color: 'black'},
    {cardSuit: 'clubs', value: 'jack',   color: 'black'},
    {cardSuit: 'clubs', value: 'queen',  color: 'black'},
    {cardSuit: 'clubs', value: 'king',   color: 'black'},
    {cardSuit: 'clubs', value: 'ace',    color: 'black'},
    {cardSuit: 'heart', value: '6',     color: 'red'},
    {cardSuit: 'heart', value: '7',     color: 'red'},
    {cardSuit: 'heart', value: '8',     color: 'red'},
    {cardSuit: 'heart', value: '9',     color: 'red'},
    {cardSuit: 'heart', value: '10',    color: 'red'},
    {cardSuit: 'heart', value: 'jack',  color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king',  color: 'red'},
    {cardSuit: 'heart', value: 'ace',   color: 'red'},
    {cardSuit: 'diamond', value: '6',      color: 'red'},
    {cardSuit: 'diamond', value: '7',      color: 'red'},
    {cardSuit: 'diamond', value: '8',      color: 'red'},
    {cardSuit: 'diamond', value: '9',      color: 'red'},
    {cardSuit: 'diamond', value: '10',     color: 'red'},
    {cardSuit: 'diamond', value: 'jack',   color: 'red'},
    {cardSuit: 'diamond', value: 'queen',  color: 'red'},
    {cardSuit: 'diamond', value: 'king',   color: 'red'},
    {cardSuit: 'diamond', value: 'ace',    color: 'red'},
]
{
    let foundSpadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
    console.log(foundSpadeAce);

    let foundSixes = deck.filter(card => card.value === '6');
    console.log(foundSixes);

    let foundRed = deck.filter(card => card.color === 'red');
    console.log(foundRed);

    let foundDiamond = deck.filter(card => card.cardSuit === 'diamond');
    console.log(foundDiamond);

    let foundClubs = deck.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' && card.value !== '7'
        && card.value !== '8'));
    console.log(foundClubs);
}

//#EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
{
    let reducedDeck = deck.reduce((accumulator, card) => {
        switch (card.cardSuit) {
            case 'spade':
                accumulator.spades.push(card);
                break;
            case 'diamond':
                accumulator.diamonds.push(card);
                break;
            case 'heart':
                accumulator.hearts.push(card);
                break;
            case 'clubs':
                accumulator.clubs.push(card);
                break;
        }
        return accumulator;
    }, {spades: [], diamonds: [], hearts: [], clubs: []});
    console.log(reducedDeck);
}

//#4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
{
    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];
    let filteredArraySaas = coursesArray.filter(course => course.modules.includes('sass'));
    console.log(filteredArraySaas);

    let filteredArrayDocker = coursesArray.filter(course => course.modules.includes('docker'));
    console.log(filteredArrayDocker);
}