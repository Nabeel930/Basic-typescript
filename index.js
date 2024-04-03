"use strict";
// print 'hello world'
let greeting = "Hello, World!";
console.log(greeting);
// performing arithmetic operations on two variables
let num1, num2;
num1 = 5;
num2 = 8;
console.log(`after performing calculations sum = ${num1 + num2}, sub = ${num1 - num2}, product = ${num1 * num2}, quotient = ${num1 / num2}`);
// swaping values without third variable
let a = 1, b = 2;
a = a + b; // a=3
b = a - b; // b=1
a = a - b; // a=2
console.log(`after swaping a = ${a}, b = ${b}`);
// changing variable type
let message = "Showing error while assigning a number to string.";
console.log(message);
// finding remainder using modulus operator
let num3 = 6, num4 = 3;
let mod = num3 % num4;
console.log(`modulus of ${num3} and ${num4} is ${mod}`);
// increment a variable by one using two different ways
let counter = 0;
counter++;
console.log(`Increment using first method, counter = ${counter}`);
counter += 1;
console.log(`Increment using second method, counter = ${counter}`);
// logical expression for three variables
let A = true, B = false, C = true;
console.log(`(AND) a && b && c = ${A && B && C} -- (OR) a || b || c = ${A || B || C} -- (NOT) !A = ${!A} !B = ${!B} !C = ${!C}`);
// using compound assignment operator
let num = 10; // Use +=, -=, *=, and /= on this variable.
num += 3;
console.log(`adding 3 in 10 using compound assignment operator= ${num}`);
num -= 3;
console.log(`subtracting 3 in it using compound assignment operator= ${num}`);
num *= 3;
console.log(`multiplying 3 in it using compound assignment operator= ${num}`);
num /= 3;
console.log(`dividing 3 in it using compound assignment operator= ${num}`);
// to determine a number is even or odd
let numb = 5;
if (numb % 2 == 0) {
    console.log(`${numb} is even`);
}
else {
    console.log(`${numb} is odd`);
}
// checking if a person is elligible for voting
let age = 20;
if (age >= 18) {
    console.log(`${age} is elligible for voting`);
}
else {
    console.log(`${age} is not elligible for voting`);
}
// assigning grades based on the score
let score = 76;
if (score >= 90 && score <= 100) {
    console.log('grade = A');
}
else if (score >= 80 && score <= 89) {
    console.log('grade = B');
}
else if (score >= 70 && score <= 79) {
    console.log('grade = C');
}
else if (score >= 60 && score <= 69) {
    console.log('grade = D');
}
else if (score >= 50 && score <= 59) {
    console.log('grade = E');
}
else {
    console.log('grade = F');
}
// finding maximum of three numbers
let x = 2, y = 8, z = 5;
if (x > y && x > z) {
    console.log(`${x} is maximum among ${y} and ${z}`);
}
else if (y > x && y > z) {
    console.log(`${y} is maximum among ${x} and ${z}`);
}
else {
    console.log(`${z} is maximum among ${x} and ${y}`);
}
// checking year is leap or not
let year = 2024;
if (year % 4 == 0) {
    console.log(`${year} is a leap year`);
}
else {
    console.log(`${year} is not a leap year`);
}
// fahrenheit to celsius
let fahrenheit = 46;
let celsius = (fahrenheit - 32) / (9 / 5);
console.log(`${fahrenheit} fahrenheit in celsius is ${celsius}`);
// determine a number is positive, negative or zero
let number = 3;
if (number > 0) {
    console.log(`${number} is positive`);
}
else if (number < 0) {
    console.log(`${number} is negative`);
}
else {
    console.log(`${number} is a zero number`);
}
// multiplication of a number
let n = 2;
for (let i = 1; i <= 10; i++) {
    console.log(`2 * ${i} = ${i * 2}`);
}
