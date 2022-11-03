/*
const numbers = [1, 2, 2, 3, 4];

function includes(array, searchElement) { 
  let booleanz = false;
  
  for (let number of array ) { 
    if (number === searchElement) {
      booleanz = true;
      }
    }
  return booleanz
}

console.log(includes(numbers, 2))
*/
  

const numbers = [1, 2, 2, 3, 4];

console.log(includes(numbers, 1));

function includes(array, searchElement) { 
  for (let element of array)
    if (element === searchElement)
      return true;
  return false;
}

