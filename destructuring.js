/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
/*
The following method does not use destructuring. 
We have to declare each variable individually on its own line of code, and we also need to reference the index of the item in the
array we want to assign to each variable.
*/
// let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
// console.log(john, mary, joe);
// >> 30 26 27

let ages = [30, 26, 27];
let [john, mary, joe] = ages; // destructured array
/*
ES6 automatically assigns the first value in the  array to the variable john, the second to the variable mary, and the third to the variable  joe, using ES6 destructuring.
*/
console.log(john, mary, joe);
// >> 30 26 27

// Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant',
};
let {mike, jill, alicia} = jobs; // destructured object
console.log(mike, jill, alicia);

// Destructuring only a subset of an array or object
let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);
// >> english french


let [,, maryNative, marySecondary] = languages; // two commas [, , ] to skip the first two indices of the array
console.log(maryNative, marySecondary);
// >> spanish german

// Destructuring only a subset of an object
languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese'
};
let {firstLanguage, thirdLanguage} = languages2; // destructure only the things i need:
console.log(firstLanguage, thirdLanguage);
// >> english german


// Using rest parameter syntax
let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits; // adding the ...rest syntax '...others'
console.log(favorite);
console.log(secondFavorite);
console.log(others);
// >>
// apple
// orange
// [ 'banana', 'peach', 'cherry' ]
// <<

let favoriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak'
};
let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);
// >>
// pizza
// pasta
// { sarah: 'vegetarian', andrea: 'steak' }
// <<