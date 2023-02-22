'use strict'

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