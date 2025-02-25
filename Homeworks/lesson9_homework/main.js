//#8Nmt60ZT
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
{
    let block = document.createElement('div');
    block.classList.add('wrap', 'collapse', 'alpha', 'beta');
    block.style.backgroundColor = 'black';
    block.style.color = 'pink';
    block.style.fontSize = '45px';
    block.innerText = 'Lorem ipsum dolor sit amet.'; // just to display on page
    document.body.appendChild(block);
    let blockCopy = block.cloneNode(true);
    document.body.appendChild(blockCopy);
}

//#OPLI89c9G
// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
{
    let arr = ['Main','Products','About us','Contacts'];
    let ulNav = document.createElement('ul');
    for (const liContent of arr) {
        let li = document.createElement('li');
        li.innerText = liContent;
        ulNav.appendChild(li);
    }
    document.body.appendChild(ulNav);
}

//#jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
{
    for (const course of coursesAndDurationArray) {
        let div = document.createElement('div');
        div.innerText = `title: ${course.title}, monthDuration: ${course.monthDuration}`;
        document.body.appendChild(div);
    }
}

//#Kx1xgoKy8
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
{
    for (const course of coursesAndDurationArray) {
        let div = document.createElement('div');
        div.classList.add('item');
        let h1 = document.createElement('h1');
        h1.classList.add('heading');
        h1.innerText = course.title;
        let p = document.createElement('p');
        p.classList.add('description');
        p.innerText = course.monthDuration;
        div.append(h1, p);
        document.body.appendChild(div);
    }
}

// ADDITIONAL TASKS--------------------------------------------------------------------------------
//Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
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
    for (const course of coursesArray) {
        let wrapper = document.createElement('div');
        let divTitle = document.createElement('div');
        divTitle.innerText = course.title;
        let divMonths = document.createElement('div');
        divMonths.innerText = course.monthDuration + ' months; ';
        divMonths.style.display = 'inline';
        let divHours = document.createElement('div');
        divHours.innerText = course.hourDuration + ' hours';
        divHours.style.display = 'inline';
        let ulModules = document.createElement('ul');
        for (const module in course.modules) {
            let liModule = document.createElement('li');
            liModule.innerText = course.modules[module];
            ulModules.appendChild(liModule);
        }
        wrapper.append(divTitle, divMonths, divHours, ulModules);
        document.body.appendChild(wrapper);
    }
}

//створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.
{
    let div1 = document.createElement('div');
    div1.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur dicta dolor doloremque ea earum, itaque libero molestias odio quos unde veritatis voluptate? Earum, id.';
    let div2 = document.createElement('div');
    div2.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti iste minima qui reiciendis. Aliquam aliquid asperiores autem consequatur dolorem dolores, ea eos esse est fugiat fugit hic ipsam laborum modi molestiae necessitatibus nisi officiis optio perferendis quaerat quos ratione sapiente sequi sint ullam, velit veniam! Deleniti itaque praesentium quas reprehenderit!';
    let div3 = document.createElement('div');
    div3.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae, commodi consequatur debitis delectus dolore doloremque dolorum eum impedit in incidunt ipsam itaque magni maxime minima nulla obcaecati porro provident quasi qui quisquam ratione recusandae sint, sit totam veritatis voluptas! A ad alias autem cumque dolores eius eligendi error esse est eveniet id illum ipsa, laboriosam magnam necessitatibus officia optio placeat quia quibusdam ratione suscipit totam velit voluptatum! Accusamus ad distinctio doloribus molestiae nemo quam?Lorem ipsum dolor sit amet';

    document.body.append(div1, div2, div3);
    const divs = [div1, div2, div3];
    let maxHeight = 0;
    divs.forEach(div => {
        const height = div.offsetHeight;
        if(height > maxHeight){
            maxHeight = height;
        }
    });
    divs.forEach(div => div.style.height = `${maxHeight}px`);
}