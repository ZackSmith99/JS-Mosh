/*
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0); 

console.log(filtered);






const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0); 

filtered.map(n => '<li>' + n + '</li>')

console.log(filtered);






const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0); 

const items = filtered.map(n => '<li>' + n + '</li>')

const html = items.join('');

console.log(html);




const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0); 

const items = filtered.map(n => '<li>' + n + '</li>')

const html = '<ul>' + items.join('') + '</ul>'

console.log(html);




const numbers = [9, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0); 

const items = filtered.map(n => {
    const obj = { value: n };
    return obj;
})

console.log(items);




const numbers = [9, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0); 

const items = filtered.map(n => {
    const obj = { value: n };
})

console.log(items);








const numbers = [9, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0); 

const items = filtered.map(n => ({ value: n }));


console.log(items);





const numbers = [9, -1, 2, 3];

numbers.filter(n => n >= 0).map 

const items = filtered.map(n => ({ value: n }));


console.log(items);




const numbers = [9, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0); 

const items = filtered.map(n => ({ value: n }));

console.log(items);







const numbers = [9, -1, 2, 3];

numbers.filter(n => n >= 0).map 

const items = filtered.map(n => ({ value: n }));

console.log(items);



const numbers = [9, -1, 2, 3];

numbers.filter(n => n >= 0).map(n => ({ value: n }));


console.log(items);





const numbers = [9, -1, 2, 3];

numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }));

const items = filtered.map(n => ({ value: n }));

console.log(items);

*/
  
const numbers = [1, -1, 2, 3];

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value );
    
console.log(items);
