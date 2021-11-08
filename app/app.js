// Scripts of visual part so on. 
// closing the window by pushing red button
let windowsCloser = document.querySelector('.js-wrapper');
let btnCloser = document.querySelector('#exit__btn');
btnCloser.addEventListener('click', function(){
    windowsCloser.classList.add('window-hide')
});
let history = [];
// Buttons functions
function plus() {
    let numOne, numTwo, result;
    numOne = document.getElementById('numOne').value;
    numOne = Number(numOne);
    numTwo = document.getElementById('numTwo').value;
    numTwo = Number(numTwo);
    result = `${numOne} + ${numTwo} = ${numOne+numTwo}`;
    document.getElementById('output').innerHTML = result;
    history.push(`${numOne} + ${numTwo} = ${numOne+numTwo}`);

}
function minus() {
    let numOne, numTwo, result;
    numOne = document.getElementById('numOne').value;
    numOne = Number(numOne);
    numTwo = document.getElementById('numTwo').value;
    numTwo = Number(numTwo);
    result = `${numOne} - ${numTwo} = ${numOne-numTwo}`;
    document.getElementById('output').innerHTML = result;
    history.push(`${numOne} - ${numTwo} = ${numOne-numTwo}`);
}
function multiply() {
    let numOne, numTwo, result;
    numOne = document.getElementById('numOne').value;
    numOne = Number(numOne);
    numTwo = document.getElementById('numTwo').value;
    numTwo = Number(numTwo);
    result = `${numOne} * ${numTwo} = ${numOne*numTwo}`;
    document.getElementById('output').innerHTML = result;
    history.push(`${numOne} * ${numTwo} = ${numOne*numTwo}`);
}
function divide() {
    let numOne, numTwo, result;
    numOne = document.getElementById('numOne').value;
    numOne = Number(numOne);
    numTwo = document.getElementById('numTwo').value;
    numTwo = Number(numTwo);
    result = `${numOne} / ${numTwo} = ${numOne/numTwo}`;
    document.getElementById('output').innerHTML = result;
    history.push(`${numOne} / ${numTwo} = ${numOne/numTwo}`);
}
function pow() {
    let numOne, numTwo, result;
    numOne = document.getElementById('numOne').value;
    numOne = Number(numOne);
    numTwo = document.getElementById('numTwo').value;
    numTwo = Number(numTwo);
    result = `${numOne}pow${numTwo} = ${Math.pow(numOne, numTwo)}`;
    document.getElementById('output').innerHTML = result;
    history.push(`${numOne}pow${numTwo} = ${Math.pow(numOne, numTwo)}`);
}
function cos() {
    let numOne, result;
    numOne = document.getElementById('numOne').value;
    numOne = Number(numOne);
    result = `cos of ${numOne} = ${Math.cos(numOne)}`;
    document.getElementById('output').innerHTML = result;
    history.push(`cos of ${numOne} = ${Math.cos(numOne)}`);
}
function sin() {
    let numOne, result;
    numOne = document.getElementById('numOne').value;
    numOne = Number(numOne);
    result = `sin of ${numOne} = ${Math.sin(numOne)}`;
    document.getElementById('output').innerHTML = result;
    history.push(`sin of ${numOne} = ${Math.sin(numOne)}`);
}
// History
let historyList = document.querySelector('.history');
let btnHistory = document.querySelector('#btn-his');
let historyItems = historyList.innerText;
let hiString;
// to show the windiw only when History clicked
let winHistory = document.querySelector('.history-wrapper');
btnHistory.addEventListener('click', function(){
    historyItems = hiString;
    hiString = history.join(`
    `);
    historyList.innerText = hiString;
    winHistory.classList.remove('window-hide');
})



