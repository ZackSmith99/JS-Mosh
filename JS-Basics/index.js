/*
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
Don't be dumb.


this is how you do it.  
for (let i = 0; i < 5; i++) {
    console.log ('Hello World');
}


note the value of the statement displayed on conosole
for (let i = 0; i < 5; i++) {
    console.log ('Hello World', i);
}


We can start i with a value of 1
for (let i = 1; i <= 5; i++) {
    console.log ('Hello World', i);
}
*/


for (let i = 5; i >= 1; i--) {
   if (i % 2 !== 0) console.log(i);
}