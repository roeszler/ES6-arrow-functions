  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

let nums = [1, 2, 3, 4, 5];

// Using a for loop

let forResults = [];
for (let num of nums) {
  forResults.push(num * 2);
}
console.log(forResults)

// Using map()
const multiplyByTwo = function (num) {
    return num * 2;
}

// .map() iterates over array and applies a function (multiplyByTwo) called at each instance:

const mapResults = nums.map(multiplyByTwo); 
console.log(mapResults)

// Simplified w/ map()
const simplified = nums.map(function (num) {return num * 2;});
console.log(simplified)

// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2);
console.log(arrow)

/*
Each student in the below array is an object with four properties:
id, name, profession, and skill. 
The goal with the map  method is to iterate through the array of students and return for each one an array containing their name and id.
*/

// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];
  
  // const resultingOutput = targetArray.map(instance => [instance.name, instance.id]);

  const studentsWithIds = students.map(student => [student.name, student.id]);
  console.log(studentsWithIds)

  /*
  For each student, we return an array containing student.name and student.id >> [ [ 'Mark', 1 ], [ 'Ariel', 2 ], [ 'Jason', 3 ] ]
  */

//   Return as objects
const studentsWithIdsObject = students.map(student => (
    { 
        id: student.id,
        name: student.name
    }
    ));
  console.log(studentsWithIdsObject)

// Add age 

let ages = [
    {
        age: 30,
        age: 25,
        age: 42
    }
];
let [age] = ages.age; // destructured array
let updateStudentsArray = students.map(students=> ({ ...students, age }));

// let updateStudentsArray = {...students, ...ages};
console.log(updateStudentsArray)

// const studentsWithIdsAge = students.map(student => (
//     { 
//         id: student.id,
//         name: student.name,
//         profession: student.profession,
//         skill: student.skill
//     }
//     ));
//   console.log(studentsWithIdsAge)