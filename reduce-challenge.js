let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

// const biggest = students.reduce((acc, curr) => {
//     let engResults = curr.results.english;
//     let bestResult = {};
//     if (engResults > acc) { 
//         acc = engResults;
//     }
//     return acc;
// }, 0);

// let studentHighest = students.filter(student => student.results.english === biggest).map(student => ({name: student.name, max: student.results.english}))[0];
// console.log(studentHighest);

const biggest = students.map(student => ({name: student.name, max: student.results.english})).reduce((acc, curr) => (acc.max > curr.max) ? acc : curr, {});

console.log(biggest)