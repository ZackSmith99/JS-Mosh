/*
Ff the hour is between 6 AM and 12 PM, we’ll display a “Good morning!” message.

If between 12 PM and 6 PM we’ll display Good afternoon!

Otherwise we will display Good evening!

let hour =  22;

if (hour >= 6 && hour < 12 ) {
    console.log('Good morning');
}

else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon!');
}

else if ((hour >= 18 && hour < 24) || (hour > 0 && hour < 6)) {
console.log('Good Evening!');
}


Works fine.  Let’s try splitting up the statement.



This also works:

let hour =  4;

if (hour >= 6 && hour < 12 ) {
    console.log('Good morning');
}

else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon!');
}

else if (hour >= 18 && hour < 24) {
console.log('Good Evening!');
}

else if (hour > 0 && hour < 6) {
    console.log('Good Evening!');
    }





let hour =  4;

if (hour >= 6 && hour < 12 ) {
    console.log('Good morning');
}


else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon!');
}

else 
console.log('Good evening');

*/

//Mosh says get rid of ugly brackets.  
let hour =  4;

if (hour >= 6 && hour < 12 ) 
    console.log('Good morning');
else if (hour >= 12 && hour < 18) 
    console.log('Good Afternoon!');
else 
console.log('Good evening');