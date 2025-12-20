"# JavaScript Learning Journey

## Overview
This repository documents your JavaScript learning progress from Day 1 to Day 6, covering fundamental concepts including objects, conditional statements, loops, methods, DOM manipulation, and events.

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

## **Day 4: Methods**

### Topics Covered:

#### 1. **Function Declaration**
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Ritik')); // Hello, Ritik!
```

#### 2. **Function Expression**
```javascript
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8
```

#### 3. **Arrow Functions**
```javascript
const multiply = (x, y) => x * y;
console.log(multiply(4, 5)); // 20
```

#### 4. **Returning Values**
```javascript
function square(num) {
    return num * num;
}
console.log(square(6)); // 36
```

#### 5. **Scope**
- **Global Scope:** Variables declared outside any function.
- **Local Scope:** Variables declared within a function.

### Key Concepts:
- Understanding function declarations vs expressions.
- Using arrow functions for concise syntax.
- Importance of scope in variable accessibility.

---

## **Day 5: DOM Manipulation**

### Topics Covered:

#### 1. **Selecting Elements**
- `document.querySelector()` - Selects the first element that matches a CSS selector
- `document.querySelectorAll()` - Selects all elements that match a CSS selector

#### 2. **Modifying Content**
- `element.innerText` - Gets or sets the text content of an element

#### 3. **Working with Attributes**
- `element.getAttribute(attr)` - Gets the value of an attribute
- `element.setAttribute(attr, value)` - Sets the value of an attribute

#### 4. **Styling Elements**
- `element.style.property` - Directly modify CSS styles (e.g., `color`, `backgroundColor`, `border`)

#### 5. **Creating and Inserting Elements**
- `document.createElement(tagName)` - Creates a new HTML element
- `element.append()` - Adds content to the end of an element
- `element.prepend()` - Adds content to the beginning of an element

### Key Code Example:
```javascript
// Selecting and modifying text
let h2 = document.querySelector("#myh2");
h2.innerText = h2.innerText + " singh Kushwaha";

// Changing attributes
let heading = document.querySelector("h2");
heading.setAttribute("id", "heading");

// Styling
heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.border = "2px solid black";

// Creating and inserting elements
let button = document.createElement("button");
button.innerText = "Click Me";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
button.style.color = "white";
button.style.backgroundColor = "blue";
document.querySelector("body").prepend(button);
```

### Key Concepts:
- DOM (Document Object Model) representation of HTML
- Selecting elements using CSS selectors
- Modifying element content and attributes
- Applying styles dynamically
- Creating new elements and adding them to the page

---

## **Day 6: Events**

### Topics Covered:

#### 1. **Event Handlers**
- Assigning functions to event properties (e.g., `element.onclick = function`)
- `onmouseenter` - Triggered when mouse enters an element
- `onmouseleave` - Triggered when mouse leaves an element

#### 2. **Event Object**
- Contains information about the event (e.g., `type`, `target`, `clientX`, `clientY`)

#### 3. **addEventListener()**
- `element.addEventListener(event, function)` - Attaches an event listener to an element
- More flexible than assigning to event properties

#### 4. **Practical Example: Toggle Background Color**
```javascript
let mode = "dark";
let btn = document.querySelector("#btn1");

function handleClick() {
  if (mode === "dark") {
    document.querySelector("body").style.backgroundColor = "blue";
    mode = "light";
  } else {
    document.querySelector("body").style.backgroundColor = "white";
    mode = "dark";
  }
}

btn.addEventListener("click", handleClick);
```

### Key Concepts:
- Responding to user interactions (clicks, mouse movements)
- Event object properties for event details
- Difference between event properties and `addEventListener`
- State management in event handlers

---

## **Day 7: Advanced Concepts & Asynchronous JS**

### Topics Covered:

#### 1. **Advanced Functions**
- **Callbacks:** Functions passed as arguments to other functions.
- **Closures:** Functions that retain access to variables from their outer scope even after the outer function has finished executing.

#### 2. **Array Methods**
- `map()` - Creates a new array by applying a function to every element.
- `filter()` - Creates a new array with elements that pass a test.
- `reduce()` - Reduces an array to a single value.

#### 3. **Error Handling**
```javascript
try {
    // Code that might throw an error
    let result = riskyOperation();
} catch (error) {
    console.error("An error occurred:", error);
} finally {
    console.log("This runs regardless of error.");
}
```

#### 4. **Asynchronous JavaScript**
- **Promises:** Objects representing the eventual completion or failure of an asynchronous operation.
- **Async/Await:** Syntactic sugar for working with Promises, making asynchronous code look synchronous.

#### 5. **Working with APIs**
- **Fetch API:** Used to make network requests.
```javascript
async function fetchData() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}
```

### Key Concepts:
- Handling asynchronous operations efficiently.
- Managing errors gracefully to prevent app crashes.
- Functional programming concepts with array methods.
- Understanding lexical scoping with closures.

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
✅ Function Declarations
✅ Function Expressions
✅ Arrow Functions
✅ Understanding Scope (Global & Local)
✅ DOM Selection (querySelector, querySelectorAll)
✅ DOM Content Modification (innerText)
✅ DOM Attributes (getAttribute, setAttribute)
✅ DOM Styling (element.style)
✅ Creating & Inserting DOM Elements
✅ Event Handlers (onclick, onmouseenter, onmouseleave)
✅ Event Object Properties
✅ addEventListener Method
✅ Advanced Functions (Callbacks, Closures)
✅ Advanced Array Methods (map, filter, reduce)
✅ Error Handling (try-catch)
✅ Asynchronous JavaScript (Promises, Async/Await)
✅ API Integration (Fetch API)

---

## **What's Next?**

Potential topics to explore:
- Modern JavaScript features (ES6+ Modules, Classes)
- JavaScript Frameworks (React, Vue, or Angular)
- TypeScript
- Backend Development (Node.js)
- Testing (Jest, Mocha)
