# Quadratic Equation Solver
## Description

This is a console application for solving quadratic equations of the form:
ax^2 + bx + c = 0,
where a, b, and c are real numbers and a ≠ 0.
The quadratic equation can have 0 to 2 real roots. A real root or solution of the quadratic equation is a real number x such that substituting it into the equation results in a valid equality. More information on quadratic equations and methods for finding their solutions can be found, for example, at this link: https://en.wikipedia.org/wiki/Quadratic_equation

The application supports 2 modes of operation:
1. Interactive mode
2. Non-interactive (file) mode

## How to run the project

1. Clone the repository to your local machine
2. Navigate to the project directory in your terminal or command prompt
3. To run the application in interactive mode, simply execute the command 
```bash
$ node app.js
``` 
4. To run the application in non-interactive (file) mode, execute the command
 ```bash
$ node app.js coefs.txt
``` 

## Interactive Mode

In interactive mode, the application is launched when no arguments are passed to it. In this mode, the application prompts the user to enter 3 coefficients: a, b, and c, displays the resulting equation on the screen, and finds the roots.
If there are no real roots, the program should display a message indicating that there are no roots.
If an incorrect value is entered, the program should output an error message to standard output (stdout) and allow the user to enter the number again.

## Non-interactive (File) Mode

In non-interactive mode, the program accepts one argument - the path to a file containing the coefficients of the quadratic equation. The file should contain 3 numbers: a, b, and c separated by a single space.
When running in non-interactive mode, the program reads the file, displays the equation and its roots in standard output (stdout).
If the file does not match the specified format, the program should display an error message in standard output (stdout) and terminate with a non-zero exit code.

## Input file format for non-interactive mode

The input file for non-interactive mode should have the following format:
a b c
Where:
a is the coefficient of x^2 (a real number)
b is the coefficient of x (a real number)
c is the constant term (a real number)
Example input file contents:
1 4.241 -75

## Output of application

Interactive mode:

 ```bash
a: f
Error. Expected a valid real number, got f instead
a: 1
b: &
Error. Expected a valid real number, got & instead
b: 4.24
c: ///
Error. Expected a valid real number, got /// instead
c: -75
Equation is: (1) x^2 + (4.24) x + (-75) = 0
There are 2 roots
x1 = 6.795963212126886, x2 = -11.035963212126887
``` 

Non-interactive mode:

 ```bash
Equation is: (1) x^2 + (4.241) x + (-75) = 0
There are 2 roots
x1 = 6.795582113237854, x2 = -11.036582113237854
``` 

## Revert Commit

[The revert commit for this project](https://github.com/vladimirvikulin/Software-Development-Methodologies-Labs/commit/ed77766c65228686b5f717790c80c318e7676727)
