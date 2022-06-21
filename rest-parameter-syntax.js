/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log('Sum:', sum)
// Sum: 6

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6); 
console.log('Sum 2:', sum)
/* 
Sum 2: 6
The last three will just be ignored. If I log  this to the console as sum2, the value is still 6!?
*/

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    /* 
    use a  for...of loop to iterate through the rest array
    and add each additional number to the  existing sum.
    */
    for (let i of rest) {
        sum += i;
    }

    return sum
};

let sum3 = sumRest(1, 2, 3, 4, 5, 6); // inputting values to the sumRest() function
console.log('Sum 3:', sum3);

// Sum 3: 21
