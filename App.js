const studentName = `Tyo`;
let studentAge = `22`;
let studentGrade = undefined;

let studentNewFormat = `Nama = ${studentName} Usia = ${studentAge}`;

// string
let courseName = "JavaScript 101";
// number
let score = 95.5;
// boolean
let isPassing = true;
// undefined
let nextCourse;
// null
let certificateNumber = null;

// Array
let courseModules = ["Variabel", "Function", "Object", "Arrays"];
// Object
let student = {
  name: "Tyo",
  age: "22",
  grade: [80, 90, 85],
  contact: {
    email: "ahmadralrazi@gmail.com",
    phone: "085640803911",
  },
};

// Arithmetic Operators
let totalScore = 85 + 90; // Addition
let averageScore = totalScore / 2; // Division
let bonusPoints = score++; // Increment
let penaltyPoints = score--; // Decrement
let remainder = 10 % 3; // Modulus

// Assignment Operators
let currentScore = 85;
currentScore += 5; // Same as: currentScore = currentScore + 5
currentScore -= 2; // Same as: currentScore = currentScore - 2

// Comparison Operators
let isEqual = 5 == "5"; // true (loose equality)
let isStrictEqual = 5 === "5"; // false (strict equality)
let isGreater = 90 > 85; // true
let isLessOrEqual = 85 <= 90; // true

let homework = 90;
let midterm = 85;
let final = 95;

// Logical Operators
let hasPassingGrade = score >= 60;
let hasAttendance = true;
// AND operator (&&)
let willPass = hasPassingGrade && hasAttendance;

// OR Operator (||)
let attendance = 80;
let needsHelp = score < 60 || attendance < 80;

// NOT Operator (!)
let isFalling = !hasPassingGrade;

// Perulangan
// Basic for loop
console.log("--- Basic for Loop ---");
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}
// Loop through array
const fruits = ["apple", "banana", "orange", "mango"];
console.log("--- Looping through array ---");

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}
// For Of Loop
console.log("--- for...of loop ---");
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(`Color: ${color}`);
}
// For...In Loop
console.log("--- for... in lop ---");
const students = {
  name: "Tyo",
  age: 22,
  grade: "A",
};
// While Loop
console.log("--- While Loop ---");
let count = 1;
while (count <= 5) {
  console.log(`while count: ${count}`);
  count++;
}
// Do While Loop
console.log("--- Do While Loop ---");
let num = 1;
do {
  console.log(`Number: ${num}`);
  num++;
} while (num <= 3);

// Break and Continue
console.log("--- Break and Continue ---");
for (let i = 1; i <= 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log(`Number ${i}`);
}
console.log(isEqual);

// Basic If Statement
let studentScore = 85;
if (studentScore >= 80) {
  console.log("Excelent Work!");
}

// if-else statement
let age = 17;
if (age >= 18) {
  console.log("You can Vote!");
} else {
  console.log("Too Young to Vote");
}
// if-else if-else statement
let grade = 75;
if (grade >= 90) {
  console.log("Grade:A");
} else if (grade >= 80) {
  console.log("Grade:B");
} else if (grade >= 70) {
  console.log("Grade:C");
} else if (grade >= 60) {
  console.log("Grade:D");
} else {
  console.log("Grade:E");
}
// 4. Nested if statements
let isLoggedIn = true;
let isAdmin = true;
let hasPermission = true;
if (isLoggedIn) {
  if (isAdmin) {
    if (hasPermission) {
      console.log("Welcome to admin dashboard!");
    } else {
      console.log("Insufficient permissions");
    }
  } else {
    console.log("Welcome to user dashboard!");
  }
}
console.log("Please log in first");
// 5. Using logical operators with if statements
let username = "john_doe";
let password = "secret123";
if (username === "john_doe" && password === "secret123") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}
// 6. Ternary operator (shorthand if-else)
let isSubscribed = true;
let message = isSubscribed ? "Welcome back!" : "Please subscribe";

// Basic Function Declaration
function sayHello(name) {
  return `Hello, ${name}`;
}

console.log(sayHello("Tyo"));
// Function with Multiple Parameters
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log(calculateTotal(10, 5));
// Arrow Function
const add = (a, b) => {
  return a + b;
};
// Simple arrow function (one line)
const multiply = (a, b) => a * b;
// using arrow function
console.log(add(5, 3));
console.log(multiply(4, 2));
