/*

Falsy (false) :
Undefined
null
0
boolean false
empty string ''
Not a Number NaN

Anything that is not Falsy -> Truthy

E.g.:

 false || ‘Mosh’
returns: 'Mosh'

false || 1
We get an output of 1.

false || 1 || 2
The console outputs 1.  

With the logical/or operator, it will return a result as soon as it finds an operand that is truthy.  

You could have a dozen more operands… it will only return the first truthy operand it encounters.  This is called Short-Circuiting.



let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);
The output is Red, because user color is selected
*/

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);