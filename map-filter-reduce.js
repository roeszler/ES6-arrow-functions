let nums = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];

// For Loop
let forResults = [];
for (let num of nums) {
  forResults.push(num * 2);
}
console.log(forResults)

// Map Method
const results = nums.map(num => num*2); 
console.log(results)

// * The map method is called on an array, and takes a single parameter: a callback function, which is a function you want to execute on every element in the array.
// * The map() method then iterates over the array, calls this callback function on every element,  
// and returns a new array containing all the results of that process. 

// Filer method
let evenNos = nums.filter(n => n % 2 === 0);
console.log(evenNos)
// Iterates over an array of items, and filters the array to only a specified set of results. 

let names = ['mike', 'jill', 'matt', 'jenny'];
let mNames = names.filter(name => name.charAt(0) === 'm');
console.log(mNames)

// Reduce Method
// reduces all the elements of an array into a single output value, according to a callback function you provide.

const rNums = [0, 1, 2, 3, 4];
let sum = rNums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);