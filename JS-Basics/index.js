/*
const person = {
    name: 'Mosh',
age: 30
};

for (let key in person)
console.log(key);
//this displays "name" and then "age" in the second iteration



const person = {
    name: 'Mosh',
age: 30
};

for (let key in person)
console.log(key, person.key);
//dot notation ((e.g., person.key)) does not work.  There is no property called key in //the person object.






const person = {
    name: 'Mosh',
age: 30
};

for (let key in person)
console.log(key, person[key]);

//this 'passes' key as the name of the target property.  I think this means key stands in for or pretends to be the property of the person object, and it runs/iterates through them.  Now both the property, And the property's value is displayed.



*/


const person = {
    name: 'Mosh',
age: 30
};

for (let key in person)
console.log(key, person[key]);

const colors = ['red', 'green', 'blue']; 

for (let index in colors)
console.log(index, colors[index]);

//with console.log(index), the numerical values, i.e., the index varialbe is set to the index of one of the elements in the array... will be displayed.  Whereas, when colors[index] is included, the Element at a given index will be displayed  