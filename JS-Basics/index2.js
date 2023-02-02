const numbers = [1, 3, -1, 2, 3];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum);
