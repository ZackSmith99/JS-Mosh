/*

showStars(20);

function showStars(rows) {
  
    showStars(20);

function showStars(rows) {
  
    let star = ''; 
    for (let i = 1; i <= rows; i++) 
       console.log(star += '*')




    
     let pattern = '';
     for (let i = 0; i < rows; i++)   
        pattern += '*',      
        console.log(pattern);
}

*/


showStars(20);

function showStars(rows) {
  
    
    for (let row = 1; row <= rows; row++) {
     let pattern = '';
     for (let i = 0; i < row; i++)   
        pattern += '*';      
        console.log(pattern);
    }
}
