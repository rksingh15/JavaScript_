//Comparioson Operators
// ==  Equal to
// === Strictly Equal to
// !=  Not Equal to
// !== Strictly Not Equal to
// >   Greater than
// <   Less than
// >=  Greater than or equal to
// <=  Less than or equal to

let a = 10;
let b = '10';

console.log(a == b);  // true
console.log(a === b); // false
console.log(a != b);  // false
console.log(a !== b); // true
console.log(a > 5);   // true
console.log(a < 5);   // false
console.log(a >= 10); // true
console.log(a <= 5);  // false

// Logical Operators
// &&  Logical AND
// ||  Logical OR
// !   Logical NOT

let x = 5;
let y = 10;

console.log(x > 0 && y > 0);
console.log(x > 0 || y < 0);
console.log(!(x > 0));