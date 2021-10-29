"use strict";
// Homework 2. Калькулятор V1
// 1. Просим пользователя ввести одно число.
const firstUserNum = +prompt ("Hi, and welcome to second homework! Would you like to see some math? Please, enter first number: ");
const secondUserNum = +prompt ("Nice! and now enter your secont number: ");
console.log (`Calculations were finished!
    Sum: ${firstUserNum} + ${secondUserNum} = ${firstUserNum + secondUserNum}
    Diff: ${firstUserNum} - ${secondUserNum} = ${firstUserNum - secondUserNum}
    Mult: ${firstUserNum} * ${secondUserNum} = ${firstUserNum * secondUserNum}
    Div: ${firstUserNum} / ${secondUserNum} = ${firstUserNum / secondUserNum}
`);

