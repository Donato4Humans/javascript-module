let b = true;
console.log(typeof b, b); // default boolean data type

// < <= > >= == === != !== - default logical compare operators

// == != - so called not strict compare that includes dynamic type cast

// < <= > >= === !== - strict compare without type casting(mostly used)

console.log(10 > 20);
console.log(10 < 20);
console.log(10 === 10);
console.log(10 !== 20);

console.log(5 == '5'); // number 5 will be cast into string 5 and then compared
console.log('asd' === 'asd'); // lexicographic comparison of string by summary of its ASCII codes and length


