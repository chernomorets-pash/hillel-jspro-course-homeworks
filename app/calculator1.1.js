"use strict";
// calculator v1.1 with connection to html
function plus() {
    let numOne, numTwo, result;
    numOne = document.getElementById('numOne').value;
    numOne = Number(numOne);
    numTwo = document.getElementById('numTwo').value;
    numTwo = Number(numTwo);
    result = numOne + numTwo;
    document.getElementById('output').innerHTML = result;
}
function minus() {
    let numOne, numTwo, result;
    numOne = document.getElementById('numOne').value;
    numOne = Number(numOne);
    numTwo = document.getElementById('numTwo').value;
    numTwo = Number(numTwo);
    result = numOne - numTwo;
    document.getElementById('output').innerHTML = result;
}
function multiply() {
    let numOne, numTwo, result;
    numOne = document.getElementById('numOne').value;
    numOne = Number(numOne);
    numTwo = document.getElementById('numTwo').value;
    numTwo = Number(numTwo);
    result = numOne * numTwo;
    document.getElementById('output').innerHTML = result;
}
function divide() {
    let numOne, numTwo, result;
    numOne = document.getElementById('numOne').value;
    numOne = Number(numOne);
    numTwo = document.getElementById('numTwo').value;
    numTwo = Number(numTwo);
    result = numOne / numTwo;
    document.getElementById('output').innerHTML = result;
}
function pow() {
    let numOne, numTwo, result;
    numOne = document.getElementById('numOne').value;
    numOne = Number(numOne);
    numTwo = document.getElementById('numTwo').value;
    numTwo = Number(numTwo);
    result = Math.pow(numOne, numTwo);
    document.getElementById('output').innerHTML = result;
}
function cos() {
    let numOne, numTwo, result;
    numOne = document.getElementById('numOne').value;
    numOne = Number(numOne);
    numTwo = document.getElementById('numTwo').value;
    numTwo = Number(numTwo);
    result = Math.cos(numOne);
    document.getElementById('output').innerHTML = result;
}
function sin() {
    let numOne, numTwo, result;
    numOne = document.getElementById('numOne').value;
    numOne = Number(numOne);
    numTwo = document.getElementById('numTwo').value;
    numTwo = Number(numTwo);
    result = Math.sin(numOne);
    document.getElementById('output').innerHTML = result;
}

