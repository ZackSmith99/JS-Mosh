/*

Example of a bitwise or with a single vertical line: console.log(1 | 2);
(Logical ors have double vertical lines ||)

// Bitwise Or  If Either of the bits are 1, the result will be 1.
console.log(1 | 2);   
1 = 0000001
2 = 0000010
R = 0000011


// Bitwise And - If both numbers are one, one will be returned.  Otherwise, the result will be zero:

console.log(1 & 2); 
1 = 0000001
2 = 0000010
3 = 0000011
R = 0000000


console.log(1 | 2); 
console.log(1 & 2); 

The console outputs 3 and 0.

These are the fundamentals.  


//Read, Write, Exectute  (User features)
//00000 (the first five bits are irrelevant).  The remaining bits indicate that the user has permission if the value is one.

00000100 Read
00000010 Write
00000001


const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission =0;
myPermission = myPermission | readPermission | writePermission;

console.log(myPermission);
((console displays 6))




const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message =
 (myPermission & readPermission) ? 'yes': 'no';

 console.log(message);
Outputs to yes

*/

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;

let message =
 (myPermission & readPermission) ? 'yes': 'no';

 console.log(message);