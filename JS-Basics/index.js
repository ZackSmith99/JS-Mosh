/*


const numbers = [1, -1, 2, 3];

let sum = 0;

for (let n of numbers )
    sum += n;
    
console.log(sum);

const sum = numbers.reduce((accumulator, currentValue) => acuumulator + currentValue
);





const numbers = [1, 2, 3, 4];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {

    let count = 0
    for (let number of array) {
        if (number === searchElement)
        count++
    }
    return count;
    

}
*/

// const count = countOccurrences(numbers, 1);

// console.log(count);

// function countOccurrences(array, searchElement) {

// }


const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}
