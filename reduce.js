  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
/*
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

Where: 
curr = current value
acc = the accumulator

Iteration		accumulated		current value	result
First Pass		0				0				0
Second Pass		0				1				1
Third Pass		1				2				3
Fourth Pass		3				3				6
Fifth Pass		6				4				10

										Output: 10
*/

const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
    console.log(
        "Accumulator: ", acc,
        "Current Value: ", curr,
        "Total: ", acc + curr
    );
    return acc + curr;
}, 2);
console.log(sum);

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    },
    {
        name: 'Mark',
        profession: 'Manager',
        yrsExperience: 10
      }
  ];
  
  // Totaling a specific object property
  
  let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
  console.log(totalExperience);
  
  /* 
  Grouping by a property, and totaling it.
  To group our team members by profession and find
  the total experience for each profession:
  */

// {developer: 12, designer: 4} // this is the result we want

let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession; 
    if (!acc[key]) { // to check whether the key already exists in the object we’re going to be accumulating into.  If it doesn’t yet exist, I’ll set it equal to curr.yrsExperience.
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
}, {})

console.log(experienceByProfession);

// >>
// { Developer: 12, Designer: 4 }
// <<