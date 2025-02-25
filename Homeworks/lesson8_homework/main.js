//#AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
{
    let obj = {
        name: 'max',
        skills: ['html', 'css'],
        greeting: function (){
            console.log(`say HI!`);
        }
    }
    let deepCopy = (obj) => {
        let resultObj;
        if(obj){
            let funcArr = [];
            for (let field in obj) {
                if(typeof obj[field] === "function"){
                    let funcCopy = obj[field].bind({});
                    funcArr.push({funcCopy, field});
                }
            }
            let str = JSON.stringify(obj);
            resultObj = JSON.parse(str);
            for (const func of funcArr) {
                resultObj[func.field] = func.funcCopy;
            }
            return resultObj;
        }else{
            console.log('Invalid obj!');
            return undefined;
        }
    }
    deepCopy(obj).greeting();
}

//#iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
{
    let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
    let courses = coursesAndDurationArray;
    let mappedArr = courses.map((value, index) => ({id: index + 1, ...value}));
    console.log(mappedArr);
}