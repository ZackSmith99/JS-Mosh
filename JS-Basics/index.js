/*




const array = [0, null, undefined, '', 1, 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
return (array.length,)  
}





const array = [0, null, undefined, '', 1, 2, 3, 4];

console.log(countTruthy(array));

function countTruthy(array) {

    let count = 0;

    

}






const person = {
    name: 'Mosh',
    age: 30

};

for (let bob in person)
console.log(person[bob]);


const colors = ['red', 'green', 'blue', 3, 5];

for (let dave in colors)
console.log(colors[dave]);

for (let color of colors)
if (typeof color == 'string')
console.log(color)

for (let color if colors)
console.log(color);






I have come up with this, so far.  
const colors = ['red', 'green', 'blue', 3, 5];


for (let color of colors)
if (typeof color == 'number')
console.log(color.length)


*/













const array = [0, null, undefined, '', 1, 2, 3, 4];

console.log(countTruthy(array));

function countTruthy(array) {
    
    let bob = 0;
    for (let value of array)
    if (value === 'number' || value !== false || value !== 0 || value !== null || value !== undefined || value !== '') 
    
     
    
    bob++;
    return bob;



}
