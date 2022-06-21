/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4)
console.log('Second array:', arr2);
console.log('First array:', arr1);

/* 
Second array: [ 1, 2, 3, 4 ]
First array: [ 1, 2, 3, 4 ]

the 4 is also pushed into the first array!?
This is because the second array is  not actually a copy of the first, it's a new variable which points to the same object as the other variable. Because of this, anything we do to the second array will  be done to the first and vice versa. 
*/

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3]; // spread operator

arr4.push(7);
console.log('Third array:', arr3);
console.log('Fourth array:', arr4); 

/*
This ... operator “spreads” the values of the third array into the fourth, giving you a simple way to create an entirely new object without affecting the original:

Third array: [ 4, 5, 6 ]
Fourth array: [ 4, 5, 6, 7 ]

*/

// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4}; // spread operator
let obj3 = {...obj1, b: 5, d: 4}; // overriding b from 2 to 5
console.log('First Object:', obj1);
console.log('Second Object:', obj2);
console.log('Third Object:', obj3);

// First Object: { a: 1, b: 2, c: 3 }
// Second Object: { a: 1, b: 2, c: 3, d: 4 }
// Third Object: { a: 1, b: 5, c: 3, d: 4 }

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1}, ...arr3, 'x', 'y', 'z']
console.log(arr5);

// [ 1, 2, 3, 4, { a: 1, b: 2, c: 3 }, 4, 5, 6, 'x', 'y', 'z' ]