/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers (a, b) {
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbersArrow = (a, b) => {
    return a + b;
}
let sumArrow = addTwoNumbersArrow(3, 5);
console.log(sumArrow);

// Single Line Arrow Function With Parameters
// const addTwoNumbersArrowSimple = (a, b) => (a + b); // also valid
const addTwoNumbersArrowSimple = (a, b) => a + b;
let sumArrowSimple = addTwoNumbersArrow(3, 5);
console.log(sumArrowSimple);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!!'); // doesn't need parenthesis if single, but required for double

// If you’ve got a function that takes no parameters at all, such as this one called sayHello,
// you must use an empty set of parentheses to tell JavaScript you’re declaring a function.
const sayHello = () => console.log('hello');
sayHello();

//** Returning Multiple Lines
// Whenever an arrow function needs to return multiple lines of code, such as this one which
// returns a multi-line string, the parentheses mentioned in the implicit return function above are required.

const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    </p>`
);
console.log(returnMultipleLines());



// you should be able to:
// * confidently define arrow functions that take parameters, 
// * arrow functions that take no parameters, and 
// * arrow functions that run complex logic in a code block and 
// * use the return statement.
// * You should also be able to explain briefly when curly braces are required and when they're not,
// * as well as when it's necessary to use parentheses in a function's return statement or around a function’s parameters.