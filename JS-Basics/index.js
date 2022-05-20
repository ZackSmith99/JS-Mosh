/* let name = 'Mosh';
let age = 30;

The Object below allows us to eliminate the two variables above

let person = {
    name: 'Mosh',
    age: 30
};

then add
console.log(person);

Now both of the person object properties display in the console.

//Dot Notation
person.name = 'John';

console.log(person);

This displays just John in the Console window, as we have defined the person object (displayed by the console) as merely the name property (using dot notation), which we also redefine.

Next, we also employ bracket notation to define the properties that will be displayed by the console, and its altered values.

let person = {
    name: 'Mosh',
    age: 30
};

//Bracket Notation
person ['name'] = 'Mary';
console.log(person.name);


So... the object is person.  
let person = {
    name: 'Mosh',
    age: 30};

Object has a name property.
name: 'Mosh',

The the variable Selection is created, with a value of name.
let selection = 'name';

The console will open the person object's name propery.
console.log(person.name);

The person object is defined with bracket notation as selection, with selection being set with the value of Mary.

The object Person = the value Name, 
The variable Selection = the value Name, 
The object Person = Selection, 
Selection = Mary

The Object display's the name Mary in the console.  
*/
let person = {
    name: 'Mosh',
    age: 30
};

//Bracket Notation
let selection = 'name';
person [selection] = 'Mary';
console.log(person.name);
