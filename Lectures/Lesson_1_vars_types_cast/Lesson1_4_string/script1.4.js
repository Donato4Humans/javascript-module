let greeting = 'hello';
let intro = "my name is bogdan"; // default string declaration

let msg = greeting + ' ' + intro; // these strings are easier interpreted by browser
console.log(msg);

let tmpl_str = `${greeting} ${intro}`; // more functional string(template) with simpler syntax for concatenation
// used with ${} - called interpolation for other strings that must be concatenated
// but more complex for browser to work with, so no need to use this all time
console.log(tmpl_str);