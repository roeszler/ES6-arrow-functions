let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = (array, student) => {
    let calledList = []; // declaring the list
    for(let i in array){ // for ...in to loop through the array
        if(student === array[i].name) { // logical test to check value of name: in object
            calledList = [...array[i].subjects]; // creates matched data into declared list
        }
    }
    return calledList;
};
let [first, second, ...rest] = makeList(students, 'John'); // (array, student)
console.log(first, second, rest) // logs the values assigned from makeList() function

// >> art cad [ 'english', 'maths', 'science' ]