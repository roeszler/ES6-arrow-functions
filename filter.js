  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];
  
  const overTwentyOne = people.filter(person => person.age >= 21);
  console.log(overTwentyOne)
  
  // >> [ { name: 'Michael', age: 23 } ]

  const paul = people.filter(p => p.name === 'Paul'); // ensure capital P in 'Paul'
  console.log(paul);

  const paulObject = people.filter(p => p.name === 'Paul')[0]; // ensure capital P in 'Paul'
  console.log(paulObject);
  
  // Complex Filtering (the callback function that defines the filtering, defined outside the call to the filter method)
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

// To filter out those that have 5 years experience in at least one language
  const candidatesComplex = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5); // filter
    return strongSkills.length > 0; //to return a true or false result for the original filter is return whether the sub filter 'strongSkills.length' is greater than zero.
  });
  console.log(candidatesComplex);
  console.log('----- break -----');

//   Extract the above out into three separate functions
const has5YearsExperience = skill => skill.yrsExperience >= 5 // f1
const hasStrongSkills = student => student.skills.filter(has5YearsExperience).length > 0; // f2
const candidatesSplit = students.filter(hasStrongSkills); // f3
console.log(candidatesSplit);

const names = candidatesSplit.map(student => student.name);
console.log(names);