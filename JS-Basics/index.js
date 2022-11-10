/*

*/
  
const numbers = [1, 2, 3, 4];

const output = move(numbers, 3, 0);

console.log(output);

function move(array, index, offset) { 

    let numbersTwo = [...numbers];
    
    function countArray(numbersTwo) { 
        let count = 0;
            for (let value of numbersTwo)
            count++
            return count;
}

    if ( (index + offset) < 0 || ( index + offset ) >= (countArray(numbersTwo)) )
        return console.error('Invalid Offset');

console.log(countArray(numbersTwo))

let deletes = numbers.splice(index, 1);
let convert = deletes.pop();
let move = numbers.splice( (index + offset), 0, convert);
return numbersTwo;
}