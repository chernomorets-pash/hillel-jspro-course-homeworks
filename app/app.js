// Scripts of visual part so on. 
// closing the window
let windowsCloser = document.getElementsByClassName('js-wrapper');
document.getElementById('exit__btn').addEventListener('click', function(){
    this.classList.toggle('window-hide');
});

// Buttons 
// function plus() {
//     let numOne, numTwo, result;
//     numOne = document.getElementById('numOne').value;
//     numOne = Number(numOne);
//     numTwo = document.getElementById('numTwo').value;
//     numTwo = Number(numTwo);
//     result = numOne + numTwo;
//     document.getElementById('output').innerHTML = result;
// }
// function minus() {
//     let numOne, numTwo, result;
//     numOne = document.getElementById('numOne').value;
//     numOne = Number(numOne);
//     numTwo = document.getElementById('numTwo').value;
//     numTwo = Number(numTwo);
//     result = numOne - numTwo;
//     document.getElementById('output').innerHTML = result;
// }
// function multiply() {
//     let numOne, numTwo, result;
//     numOne = document.getElementById('numOne').value;
//     numOne = Number(numOne);
//     numTwo = document.getElementById('numTwo').value;
//     numTwo = Number(numTwo);
//     result = numOne * numTwo;
//     document.getElementById('output').innerHTML = result;
// }
// function divide() {
//     let numOne, numTwo, result;
//     numOne = document.getElementById('numOne').value;
//     numOne = Number(numOne);
//     numTwo = document.getElementById('numTwo').value;
//     numTwo = Number(numTwo);
//     result = numOne / numTwo;
//     document.getElementById('output').innerHTML = result;
// }
// function pow() {
//     let numOne, numTwo, result;
//     numOne = document.getElementById('numOne').value;
//     numOne = Number(numOne);
//     numTwo = document.getElementById('numTwo').value;
//     numTwo = Number(numTwo);
//     result = Math.pow(numOne, numTwo);
//     document.getElementById('output').innerHTML = result;
// }
// function cos() {
//     let numOne, numTwo, result;
//     numOne = document.getElementById('numOne').value;
//     numOne = Number(numOne);
//     numTwo = document.getElementById('numTwo').value;
//     numTwo = Number(numTwo);
//     result = Math.cos(numOne);
//     document.getElementById('output').innerHTML = result;
// }
// function sin() {
//     let numOne, numTwo, result;
//     numOne = document.getElementById('numOne').value;
//     numOne = Number(numOne);
//     numTwo = document.getElementById('numTwo').value;
//     numTwo = Number(numTwo);
//     result = Math.sin(numOne);
//     document.getElementById('output').innerHTML = result;
// }

// 

let buttonsSim = Array.from(document.querySelectorAll('.js__menu  .js__btn-spl'));
let buttonsCom = Array.from(document.querySelectorAll('.js__menu .js__btn-cx'));
// console.log(buttons[0].innerText);
console.log(buttonsSim);
console.log(buttonsCom);
