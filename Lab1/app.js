'use strict'

const readline = require('readline');
const fs = require('fs');
const path = require('path');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
const INTERACTIVE_MODE = 2;
const NON_INTERACTIVE_MODE = 3;

(function chooseMode() {
    if (process.argv.length === INTERACTIVE_MODE) {
        interactive();
    } else if (process.argv.length === NON_INTERACTIVE_MODE) {
        nonInteractive();
    } else {
        console.log("Wrong number of parameters")
        rl.close();
    }
})()

async function interactive() {
    const a = await askCoefficient('a');
    const b = await askCoefficient('b');
    const c = await askCoefficient('c');
    solveQuadraticEquation(a, b, c);
    rl.close();
}

function nonInteractive() {
    const file = path.resolve(process.argv[2]);
    try { 
        checkFileFormat(file);
        rl.close();
    } catch (e) {
        console.log(`file ${file} does not exist`);
        rl.close();
    }
}

function checkFileFormat(file) {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    const numbers = lines[0].split(' ').map(parseFloat);
    const strings = lines[0].split(' ');
    const [a, b, c] = lines[0].split(' ').map(parseFloat);
    if (lines.length !== 1 || numbers.length !== 3) {
        console.log('Invalid file format');
        return;
    } else if (!a) {
        console.log(`Error. a cannot be 0`);
        return;
    }
    for (let str of strings) {
        if (/^0x[0-9a-f]+$/i.test(str)) {
            console.log('Invalid data format');
            return;
        }
    }
    for (let num of numbers) {
        if (isNaN(num)) {
            console.log('Invalid data format');
            return;
        } 
    }
    solveQuadraticEquation(a, b, c);
}

function askCoefficient(coefficient) {
    return new Promise((resolve, reject) => {
        rl.question(`${coefficient}: `, (answer) => {
            const number = Number(answer);
            if (isNaN(number) || /^0x[0-9a-f]+$/i.test(answer)) {
                const error = `Error. Expected a valid real number, got ${answer} instead`;
                console.log(error);
                resolve(askCoefficient(coefficient));
            } else if (coefficient ==='a' && number === 0) { 
                console.log(`Error. a cannot be 0`);
                resolve(askCoefficient(coefficient));
            } else {
                resolve(number);
            }
        });
    });
}

function solveQuadraticEquation(a, b, c) {
    let rootsInfo;
    const equation = `Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`;
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
    console.log(rootsInfo);
  }