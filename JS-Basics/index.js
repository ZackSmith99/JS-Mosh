/*
Suppose we want to determine the role of the current user i.e. guest, moderator, or an admin.

let role;

switch (role) {
case 'guest':
    console.log('Guest');
break;

case 'moderator':
    console.log('Moderator User');
    break;

    default:
        console.log('Unknown User');
The console is outputting unknown user because we have not initialized role and its default value is undefined, and it doesn’t match any of our case statements.



*/

let role = 'guest';

switch (role) {
case 'guest':
    console.log('Guest User');
break;

case 'moderator':
    console.log('Moderator User');
    break;

    default:
        console.log('Unknown User');
}

//We can also implement this exact logic using if and else statements.

if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator User');
else console.log('Unknown User');