/*
divisible by 3, => Fizz
divisibile by 5 => Buzz
divisible by both 3 and 5 => FizzBuzz
Not divisible by 3 or 5 => input
not a number => 'Not a number"


 (input % 3 === 0) 
    return 'fizz';


    const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
    
    
 
    



const output = fizzBuzz(7);
console.log(output);

function fizzBuzz(input) {if (input === true)
    return 'Not a number'

    else if (input === false)
    return 'Not a number'

    else if (input % 1 !== 0)
    return 'Not a number' 
    
    else if (input % 3 === 0 && input % 5 === 0) 
    return 'fizzBuzz'
    
    else if (input % 3 === 0)
    return 'fizz'

    else if (input % 5 === 0)
    return 'Buzz'

    else if (input % 3 !== 0 && input % 5 !== 0)  
    return (input)
}
*/
const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
   return NaN;
   
   if ((input % 3 === 0) && (input % 5 === 0))
   return 'FizzBuzz';
   
   if (input % 3 === 0)
   return 'Fizz';

   if (input % 5 === 0)
   return 'Buzz';

   return input;
}

