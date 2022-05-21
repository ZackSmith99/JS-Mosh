/*
function greet () {
    console.log('Hello World');
}

greet();

function greet (name) {
    console.log('Hello World');
}

greet();

Here we concatenated two strings (hello and name) with a plus, and provided an arguement/function Name
function greet (name) {
    console.log('Hello ' + name);
}
greet('John');

Here we copied our function, and put in a different argument.
function greet (name) {
    console.log('Hello ' + name);
}

greet('John');
greet('Mary');



Here we add a last name, parameter, but we did not pass an argument (assign a value) to it, which is why it is (and displays as) literally 'undefined' in the console.
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John');
greet('Mary');




Lastly, below, we have passed another argument, "Smith", which is assigned to the parameter lastName  
*/

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('John', 'Smith');


