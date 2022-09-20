/*
const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
};

for (let key in circle)
    console.log(key, circle[key]);

for (let key of circle)
    console.log(key);
*/

const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
};

for (let key in circle)
    console.log(key, circle[key]);

for (let entry of Object.keys(circle))
    console.log(entry);

    for (let entry of Object.entries(circle))
    console.log(entry);
  
    if ('radius' in circle) console.log('yes');