/*
const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {

    let sum = 0;
   

    for (let average of marks)
    sum += average
    
    if ( [sum / marks.length]  < 59)
    {return 'F'}

    else if (   [sum / marks.length] >= 60  && [sum / marks.length] <= 69  )
    {return 'D'}

    else if ( (sum / marks.length) >= 70 && (sum / marks.length) <= 79 )
    {return 'C'}

    else if (  (sum / marks.length) > 80 && (sum / marks.length) <= 89 )
    {return 'B'}
 
    {return 'A'}

}

const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {

    let sum = 0;
   

    for (let average of marks)
    sum += average
    
    let points = (sum / marks.length)

    if ( points  < 59)
    {return 'F'}

    else if (points >= 60  && points <= 69  )
    {return 'D'}

    else if (points >= 70 && points <= 79 )
    {return 'C'}

    else if (points > 80 && points <= 89 )
    {return 'B'}

    {return 'A'}



    const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    let sum = 0;
    for (let mark of marks)
        sum += mark;
    let average = sum / marks.length;

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}
}


*/

const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A'; 
}


 function calculateAverage(array)  {
        let sum = 0;
        for (let value of array)
            sum += value;
        return sum / array.length;
}