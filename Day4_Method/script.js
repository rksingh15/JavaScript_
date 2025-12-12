
/*
//function
function myFunction(){
    console.log("Hello World");
    console.log("Welcome to JavaScript");
}
//calling function
myFunction();


//parameterized function
function addNumbers(num1, num2){
    var sum = num1 + num2;
    console.log("Sum is: " + sum);
}
addNumbers(5, 10);
addNumbers(20, 30);

// --------------------------------------------
function callingFunction(msg){
    console.log("Message: " + msg);
}
callingFunction("This is a parameterized function example.");

// --------------------------------------------
//function with return type
console.log("Function with Return Type Example:------------------");
function multiplyNumbers(a, b){
    console.log("Multiplying " + a + " and " + b);
    return a * b;
}
var result = multiplyNumbers(4, 5);
console.log("Multiplication Result: " + result);

// --------------------------------------------
//function expression
console.log("Function Expression Example:------------------");
var divideNumbers = function(x, y){
    console.log("Dividing " + x + " by " + y);
    return x / y;
};
var divisionResult = divideNumbers(20, 4);
console.log("Division Result: " + divisionResult);

// --------------------------------------------
//arrow function
console.log("Arrow Function Example:------------------");
let Number=(a,b) =>{
    console.log("Dividing " + a + " by " + b);
    return a/b ;
}

let res=Number(10,2);
console.log("Division Result using Arrow Function: " + res);

// --------------------------------------------
//immediately invoked function expression (IIFE)
console.log("IIFE Example:------------------");
(function greet(){
    console.log("Hello from IIFE!");
})();
(function(name){
    console.log("Hello, " + name + " from IIFE with parameter!");
})("Alice");

*/

//
//create a function using keyword that string as argument and return vowel in the string

// function Vowel(takeString) {
//     let oo = takeString.toLowerCase();
//     let result = "";  // vowels collect karne ke liye

//     for (let ch of oo) {
//         if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
//             result += ch + " ";
//         }
//     }

//     console.log(result.trim());
// }

// Vowel("Ritik");

// -----------------------------------------------------
/*let Vowel = "Apple";
console.log("Given String: " + Vowel[0]);
*/

//Square of number 

// let array = [1,2,3,4,5];

// array.forEach(element => {
//     console.log( element**2);
// });

// ------------------------------------
//map
// let array = [1,2,3,4,5];

// let square = array.map( (element) => {
//     return element**2;
// });

// console.log("Square of Array is: " + square);

// ------------------------------------
//filter
let numbers = [23,45,67,89,90,91,92,93,94,95];

let evenNumbers = numbers.filter( (num) => {
    return num > 90;
});

console.log("Greater than 90: " + evenNumbers);

// ------------------------------------
//reduce { ye ek single value return karta hai jo sare elements pe operate karta hai}
let vals = [1,2,3,4,5];
let sum = vals.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 is initial value of accumulator

console.log("Sum of Array Elements is: " + sum);