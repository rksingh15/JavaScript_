"# JavaScript Learning Journey

## Overview
This repository documents your JavaScript learning progress from Day 1 to Day 3, covering fundamental concepts including objects, conditional statements, and loops.

---

## **Day 1: JavaScript Basics & Objects**

### Topics Covered:
- **Variables & Console Logging**
  - Used `let` and `const` keywords for variable declaration
  - `console.log()` for printing output to the console

- **JavaScript Objects**
  - Creating objects with properties
  - Accessing and modifying object properties
  - Example: Creating a student object with properties like name, age, mark, isPassed

### Key Code Example:
```javascript
const student = {
    name: "Ritik singh kushwaha",
    age: 20,
    mark: 25,
    isPassed: true
};

student.age = student.age + 1; // Modifying object property
console.log(student);
```

### Concepts Learned:
- Object literal syntax `{ key: value }`
- Accessing properties using dot notation (e.g., `student.age`)
- Modifying object properties
- Different data types: strings, numbers, booleans

---

## **Day 2: Conditional Statements**

### Topics Covered:

#### 1. **Comparison Operators**
- `==` - Equal to (loose equality)
- `===` - Strictly equal to (strict equality, type matters)
- `!=` - Not equal to
- `!==` - Strictly not equal to
- `>` - Greater than
- `<` - Less than
- `>=` - Greater than or equal to
- `<=` - Less than or equal to

#### 2. **Logical Operators**
- `&&` - Logical AND (both conditions must be true)
- `||` - Logical OR (at least one condition must be true)
- `!` - Logical NOT (negates the condition)

#### 3. **Conditional Statements**

**Simple if-else:**
```javascript
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

**if-else if-else ladder:**
```javascript
let score = 85;
if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade F");
}
```

**Ternary Operator (Shorthand if-else):**
```javascript
let isMember = true;
let discount = isMember ? 0.1 : 0.05; // condition ? trueValue : falseValue
```

#### 4. **Practical Example:**
```javascript
let a = prompt("Enter first number:");
if(a % 5 == 0) {
    console.log(a + " is divisible by 5");
} else {
    console.log(a + " is not divisible by 5");
}
```

### Key Concepts:
- Difference between `==` (loose equality) and `===` (strict equality)
- Combining conditions using logical operators
- Decision making in code
- User input with `prompt()`
- The modulo operator `%` for finding remainders

---

## **Day 3: Loops**

### Topics Covered:

#### 1. **For Loop**
```javascript
// Basic for loop
for (let i = 1; i <= 10; i++) {
    console.log("Iteration number: " + i);
}

// Practical example: Sum of first n natural numbers
let sum = 0;
let n = prompt("Enter a number:");
for (let j = 1; j <= n; j++) {
    sum += j;
}
console.log("Sum of first " + n + " natural numbers is: " + sum);
```

#### 2. **For...of Loop** (Iterates over values)
```javascript
let str = "Hello";
for (let char of str) {
    console.log(char); // H e l l o
}

let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color); // Red, Green, Blue
}
```

#### 3. **For...in Loop** (Iterates over indices/keys)
```javascript
let arr = [10, 20, 30, 40, 50];
for (let index in arr) {
    console.log("Index: " + index + ", Value: " + arr[index]);
}
```

#### 4. **Array Length Property**
```javascript
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("Number of fruits: " + fruits.length); // 4

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

#### 5. **String Length & Iteration**
```javascript
let str = "JavaScript";
console.log("Length of string: " + str.length); // 10

for (let i = 0; i < str.length; i++) {
    console.log(str[i]); // Print each character
}
```

### Key Concepts:
- **For Loop:** Execute code a specific number of times
- **For...of Loop:** Loop through values in arrays and strings
- **For...in Loop:** Loop through indices/keys in arrays and objects
- **Array.length:** Get the number of elements in an array
- **String.length:** Get the number of characters in a string
- Loop control: increment (`i++`), decrement, conditions

---

## **Skills Learned Summary**

✅ JavaScript Variables & Data Types
✅ Object Creation & Manipulation
✅ Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
✅ Logical Operators (&&, ||, !)
✅ Conditional Statements (if, else if, else)
✅ Ternary Operator (? :)
✅ For Loops
✅ For...of Loops
✅ For...in Loops
✅ Array Iteration & Manipulation
✅ String Properties & Iteration
✅ User Input with prompt()
✅ Console Output with console.log()

---

## **What's Next?**

Potential topics to explore:
- Functions and scope
- Arrays and array methods (map, filter, reduce, etc.)
- String methods
- Objects and methods
- DOM manipulation
- Error handling (try-catch)
- Asynchronous JavaScript (callbacks, promises, async/await)" 
