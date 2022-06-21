let students = [ // array
    { // object with key:value pairs
        name: 'John', // object with key:value pairs
        subjects: ['maths', 'english', 'cad'], // array
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'}, // object with key:value pairs
        results: {maths: 90, english: 75, cad: 87}, // object with key:value pairs
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (array, subject) => {
        let total = 0; // need to declare the variable
        let count = 0; // need to declare the variable
    for (let item of array) { // of loop returns the :value of the array
        if (subject in item.results) { // in returns the key: of the object accessed by .property
            total += item.results[subject] // returns the value of an object and adds it to the total
            count ++ // increments the declared count value 
            } 
        }
    return total / count;
};
let resultEnglish = averagePoints(students, 'english');
console.log('Average English result:', resultEnglish)

let resultMath = averagePoints(students, 'maths');
console.log('Average Maths result:', resultMath)

let resultScience = averagePoints(students, 'science');
console.log('Average Science result:', resultScience)

let resultArt = averagePoints(students, 'art');
console.log('Average Arts result:', resultArt)

let resultCad = averagePoints(students, 'cad');
console.log('Average CAD result:', resultCad)

// to run = node challenge.js