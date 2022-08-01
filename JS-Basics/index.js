/*
const person = {
    name: 'Mosh',
age: 30
};

for (let key in person)
console.log(key, person[key]);

const colors = ['red', 'green', 'blue']; 

for (let index in colors)
console.log(index, colors[index]);

for (let color of colors)
console.log(color);

//with the for of loop, the color variable will 'hold' an item in the array as it iterates through.  It won't also display the index number, like with you use a for-in loop.


*/

//for-in
const person = {
    name: 'Mosh',
age: 30
};

for (let key in person)
console.log(key, person[key]);

//for-of
const colors = ['red', 'green', 'blue']; 

for (let color of colors)
console.log(color);

//We use the for-in loop to iterate over the properties of an object. 
//And the for-of loop to iterate over the elements, or items in an array.
