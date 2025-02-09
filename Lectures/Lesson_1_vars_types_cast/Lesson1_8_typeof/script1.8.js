let n = 100;
let s = 'asdf';
let b = false;

console.log(typeof n); //number
console.log(typeof s); //string
console.log(typeof b); //boolean

let obj = {

}
console.log(typeof obj); // object

let array = [];
console.log(typeof array); // object

function f() {

}
console.log(typeof f); // function

let x;
console.log(typeof x); // undefined
console.log(typeof undefined); // undefined

console.log(typeof null, null); // null != object but js have bug inside that can`t be fixed
console.log(typeof NaN, NaN); // NaN = number but equals no number

// casting different false types to bool
console.log(!!0); //0=false
console.log(!!null); //null=false
console.log(!!undefined); //undefined=false
console.log(!!''); //''=false
console.log(!!NaN); //NaN=false