'use strict'

const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
interactive();

async function interactive() {
    const a = await askCoefficient('a');
    const b = await askCoefficient('b');
    const c = await askCoefficient('c');
    solveQuadraticEquation(a, b, c);
    rl.close();
}

function askCoefficient(coefficient) {
    return new Promise((resolve, reject) => {
        rl.question(`${coefficient}: `, (answer) => {
            const number = Number(answer);
            if (isNaN(number) || /^0x[0-9a-f]+$/i.test(answer) || number === 0) {
                const error = `Error. Expected a valid real number, got ${answer} instead`
                console.log(error);
                resolve(askCoefficient(coefficient));
            } else {
                resolve(number);
            }
        });
    });
}

function solveQuadraticEquation(a, b, c) {
    let rootsInfo;
    const equation = `Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0` ;
    const discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        rootsInfo = 'There are 0 roots';
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        rootsInfo = `There are 1 root\nx1 = ${x}`;
    } else {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        rootsInfo = `There are 2 roots\nx1 = ${x1}, x2 = ${x2}`;
    }
    printData(equation, rootsInfo);
  }

  function printData(equation, rootsInfo) {
    console.log(equation);
    console.log(rootsInfo)
  }