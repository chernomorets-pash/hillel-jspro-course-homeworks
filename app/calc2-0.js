"use strict";
// Calculator v 2.0
let operation;
let historyC = [];
let userNumberOne;
let userNumberTwo;
let result = true;
    // wrapper for loop operation
do {
    // checking if user enter correct operations, will repeat till correct one chosed
do {
    operation = +prompt(`Hello User, please chose one of the operations to perform (enter the number from the list):
        1. Plus +
        2. Munus -
        3. Multiply *
        4. Divide /
        5. POW **
        6. sin
        7. cos
        8. history
        `, 0);
        
} while (operation !== 1 && operation !== 2 && operation !== 3 && operation !== 4 && operation !== 5 && operation !== 6 && operation !== 7 && operation !== 8); 
    // simple calculations and adding results to history
if (operation < 6) {
    userNumberOne = +prompt('Enter operant #1');
    userNumberTwo = +prompt('Enter operant #2');
    if (operation == 1) {
        console.log(`Operation ${userNumberOne} + ${userNumberTwo} finished with result = ${userNumberOne+userNumberTwo}`);
        historyC.push(`Operation ${userNumberOne} + ${userNumberTwo} finished with result = ${userNumberOne+userNumberTwo}`)
    }else if (operation == 2) {
        console.log(`Operation ${userNumberOne} - ${userNumberTwo} finished with result = ${userNumberOne-userNumberTwo}`);
        historyC.push(`Operation ${userNumberOne} - ${userNumberTwo} finished with result = ${userNumberOne-userNumberTwo}`)
    }else if (operation == 3) {
        console.log(`Operation ${userNumberOne} * ${userNumberTwo} finished with result = ${userNumberOne*userNumberTwo}`);
        history.push(`Operation ${userNumberOne} * ${userNumberTwo} finished with result = ${userNumberOne*userNumberTwo}`)
    }else if (operation == 4) {
        console.log(`Operation ${userNumberOne} / ${userNumberTwo} finished with result = ${userNumberOne/userNumberTwo}`);
        historyC.push(`Operation ${userNumberOne} / ${userNumberTwo} finished with result = ${userNumberOne/userNumberTwo}`)
    }else if (operation == 5) {
        console.log(`Operation ${userNumberOne} ** ${userNumberTwo} finished with result = ${userNumberOne**userNumberTwo}`);
        historyC.push(`Operation ${userNumberOne} ** ${userNumberTwo} finished with result = ${userNumberOne**userNumberTwo}`)
    }
    // COS and SIN operations and adding to history
}else if (operation >= 6 && operation <= 7) {
    userNumberOne = +prompt('Enter operant for cos/sin calculations: ', 0);
    if (operation == 6) {
        console.log(`Operation cos of:${userNumberOne} finished with result = ${Math.cos(userNumberOne)}`)
        historyC.push(`Operation cos of:${userNumberOne} finished with result = ${Math.cos(userNumberOne)}`)
    } else if (operation == 7) {
        console.log(`Operation sin of:${userNumberOne} finished with result = ${Math.sin(userNumberOne)}`)
        historyC.push(`Operation sin of:${userNumberOne} finished with result = ${Math.sin(userNumberOne)}`)
    }
} else if (operation == 8){
    // calculationg number of loops and printingall operatio to console
    for (let i = 0; i < historyC.length; i++) {
        console.log(`
                    History [${i}]: ${historyC[i]}
        `);
    }
}
// Loop conformation
result = confirm('Would you like to continue?');
} while (result == true);
