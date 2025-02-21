//#XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];
{
    function User(id, name, surname, email, phone){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
    for(let i = 0; i < 10; i++){
        users.push(new User(i+1, `${i+1}_name`, `${i+1}_surname`, `${i+1}_@email.com`, i+100));
    }
    console.log(users);
}

//#2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);

//#pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
{
    let sortedUsers = filteredUsers.sort((user1, user2) => user1.id - user2.id);
    console.log(sortedUsers);
}

//#nkMXISv
// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];
{
    function Client(id, name, surname, email, phone, ...order){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
    for(let i = 0; i < 10; i++){
        clients.push(new Client(i+1, `${i+1}_name`, `${i+1}_surname`, `${i+1}@email`, i + 38098000000, 'tovar1', 'tovar2', 'tovar3'));
        for (let j = 10; j > i; j--) {
            clients[i].order.push(`tovar${j-i}`); //adding to order array for next task
        }
    }
    console.log(clients);
}

//#8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
{
    let sortedClients = clients.sort((client1, client2) => client1.order.length - client2.order.length);
    console.log(sortedClients);
}

//#vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
{
    function Car(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    Car.prototype.drive = function () {
        console.log(`driving with speed ${this.maxSpeed}km per hour`);
    }
    Car.prototype.info = function () {
        for (const field in this) {
            console.log(`${field} - `, this[field]);
        }
    }
    Car.prototype.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    Car.prototype.changeYear = function (newValue) {
        this.year = newValue;
    }
    Car.prototype.addDriver = function (driver) {
        this.driver = driver;
    }

    let car = new Car('model S plaid', 'Tesla', 2025, 280, '1020hp');
    car.drive();
    car.increaseMaxSpeed(20);
    car.changeYear(2030);
    car.addDriver({name: 'vasya', surname: 'vasin'});
    car.info();
}

//#5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
{
    class Car{
        constructor(model, manufacturer, year, maxSpeed, engineVolume) {
            this.model = model;
            this.manufacturer = manufacturer;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.engineVolume = engineVolume;
        }

        drive(){ console.log(`driving with speed ${this.maxSpeed}km per hour`); }
        info(){
            for (const field in this) {
                console.log(`${field} - `, this[field]);
            }
        }
        increaseMaxSpeed(newSpeed){ this.maxSpeed += newSpeed; }
        changeYear(newValue) { this.year = newValue; }
        addDriver(driver) { this.driver = driver; }
    }
    let car = new Car('model S plaid', 'Tesla', 2025, 280, '1020hp');
    car.drive();
    car.increaseMaxSpeed(20);
    car.changeYear(2030);
    car.addDriver({name: 'vasya', surname: 'vasin'});
    car.info();
}

//#zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
{
    function Cinderella(name, age, footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
    let arrayOfCinderella = [];
    for(let i = 0; i < 10; i++){
        arrayOfCinderella.push(new Cinderella(`${i+1}_name`, i + 18, i + 35));
    }

    class Prince{
        constructor(name, age, slipperFoundSize) {
            this.name = name;
            this.age = age;
            this.slipperFoundSize = slipperFoundSize;
        }
    }
    let prince = new Prince('Charming', 18, 39);
//loop task
    for (let cinderella of arrayOfCinderella) {
        if(cinderella.footSize === prince.slipperFoundSize){
            console.log(cinderella,` must be with `, prince);
            break;
        }
    }
//find task
    prince.slipperFoundSize = 42;
    let foundCinderella = arrayOfCinderella.find(cinderella => cinderella.footSize === prince.slipperFoundSize);
    console.log(foundCinderella,` must be with `, prince);
}

//#gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
{
    Array.prototype.customForEach = function (callback) {
        for (const item of this) {
            callback(item);
        }
    }
    let arr = [1, 5, 19];
    arr.customForEach((item) => {
       console.log(item.toString());
    });

    Array.prototype.customFilter = function (callback){
        let newArr = [];
        for (const value of this) {
            if(callback(value)){
                newArr.push(value);
            }
        }
        return newArr;
    }
    let newArr = arr.customFilter((value) => value !== 5);
    console.log(newArr); // [1, 19]
}