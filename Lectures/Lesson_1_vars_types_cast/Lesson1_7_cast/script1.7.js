console.log(typeof (100500 + ''));
console.log(100 + 200 + '');
console.log('' + 100 + 200); // casting to string when adding even empty string

console.log(+'1234234sdfg'); // NaN - not a number data type because of casting string with numbers and chars inside to number
console.log(parseInt('100500asdf')); // parseInt will cast to number and delete char symbols
console.log(parseInt('100500.123')); // will delete fractional part from integer
console.log(parseFloat('100500.123')); // parseFloat will cast to number with floating point

console.log(!!1000); // !! will cast to boolean type
console.log(!!0);

console.log(!!'asd');
console.log(!!''); // empty string equals/casts to false

console.log(+true); // bool casts to number (true=1)
console.log(+false); // false=0