let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);
// const updateSortReverse = (arr, letters, ...rest) => {
    // let reversedArray = [arr, letters, ...rest].sort().reverse();
const updateSortReverse = (arr, ...letters) => {
    let reversedArray = [...arr, ...letters].sort().reverse();

    return reversedArray;
};

// let reverseSort = updateSortReverse(...moreMixedLetters, 'n', 'm', 'o');
let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
console.log(reverseSort);
console.log(mixedLetters);