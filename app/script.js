"use strict";
// Homework 3. Калькулятор V1.1
const userNumOne = +prompt ('enter first number:', 0);
const userNumTwo = +prompt ('enter second number', 0);
const userOperation = prompt('Enter operation: + - * / pow');

if (userOperation === '+') {
    alert(`${userNumOne}+${userNumTwo}=${userNumOne + userNumTwo}`);
} else if (userOperation === '-') {
    alert(`${userNumOne}-${userNumTwo}=${userNumOne - userNumTwo}`);
} else if (userOperation === '*') {
    alert(`${userNumOne}*${userNumTwo}=${userNumOne * userNumTwo}`);
} else if (userOperation === '/') {
    alert(`${userNumOne}/${userNumTwo}=${userNumOne / userNumTwo}`);
} else if (userOperation === 'pow'){
    alert (`(number ${userNumOne} in power of ${userNumTwo} = ${Math.pow(userNumOne, userNumTwo)}`);
} else {
    alert ('unknown error, please try again');
};

const userNumMath = +prompt ('Enter your number for Math operations', 0);
const userOperationMath = prompt('Enter what you like to perform: cos, sic');
if (userOperationMath === 'cos') {
    alert(`cos ${userNumMath} = ${Math.cos(userNumMath)}`);
} else if (userOperationMath === 'sin') {
    alert(`sin ${userNumMath} = ${Math.sin(userNumMath)}`)
} else {
    alert("wrong input value, try again");
}