const letters = ['b', 'c', 'd', 'a','f', 'g'];
console.log(letters.sort());


const numbers = [1,4,2,3,2,10];
console.log(numbers.sort((a, b) => { return (a-b) }));

const strings = ['orange', 'apple', 'pineapple', 'banana', 'mango'];
console.log(strings.sort((a, b) => { return a.localeCompare(b)}));