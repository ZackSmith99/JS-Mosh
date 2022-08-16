/*

My solution:

checkSpeed(80);

function checkSpeed(speed) { if (speed <= 74) console.log('OK');

else if (speed >= 75  && speed < 130)
console.log('Point: '+ (Math.floor((speed -75)/5 + 1)) )

else return console.log('License Suspended')
}



*/
checkSpeed(70);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
   
    if (speed <= speedLimit + kmPerPoint) {
        console.log('OK');
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
    console.log('License suspended')
    else
    console.log('Points', points);
}
