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

// Conditional Statements
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
}

else {
    console.log("You are a minor.");
}

// if-else if-else ladder
let score = 85;

if (score >= 90) {
    console.log("Grade A");
} 
else if (score >= 80) {
    console.log("Grade B");
} 
else if (score >= 70) {
    console.log("Grade C");
} 
else {
    console.log("Grade F");
}

// Ternary Operator
let isMember = true;
let discount = isMember ? 0.1 : 0.05;
console.log("Discount:", discount);

