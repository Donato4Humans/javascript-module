let i = 123; // integer(integral/whole number)
console.log(i);

let d = 3.14; // float/double(number with floating point or fractional number)
console.log(d);

console.log(10 + 20); // default operations with numbers
console.log(10 - 20); // default operations with numbers
console.log(10 * 20); // default operations with numbers
console.log(10 / 20); // default operations with numbers
console.log(10 % 21); //count modulo(remainder from division)

console.log(0.1 + 0.2); // wrong result with small fractional numbers without fixing

let bignum = 3123409173405982734059872345n; // big number with `n` sign to display it fully(but with some issues)
console.log(bignum);

let big = BigInt(1230984710234710928374); // wrong number because of stack overflow(not sure)
console.log(big);

let n1 = 100;
let n2 = 200;
console.log(n1 + n2); // just operation with variables
