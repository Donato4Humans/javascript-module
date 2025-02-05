{
    let a = 'hello world'
    console.log(a);
    var b = 123;
}
// console.log(a); cant address to 'a' variable because of it`s local-scoped declaration by "let" keyword
console.log(b); // you can call 'b' variable because it is global-scoped, but var mostly is outdated and rarely used
// because of safety(name collision maybe) issues with global variables

const PI = 3.14; //const declaration
console.log(PI);

let c; // declaration of variable
c = 'asd'; // initialisation of variable