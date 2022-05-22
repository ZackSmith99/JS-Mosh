/* 
//Logical AND (&&)
//Returns TRUE if both operands are TRUE

console.log(true && true)
We have two operands, and they are both true.  So, the result of evaluating this expression will be true.  


console.log(false && true)
The console outputs false.  The console output false if one or both are false.

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);
This outputs as true.


// Logical OR (||)
// Returns TRUE if one or both of the operands is TRUE
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan);




let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
//NOT (!)
let applicationRefused = !eligibleForLoan;
console.log(eligibleForLoan);
This will return the opposite value it receives.  In the above case, the applicant Is eligible for the loan, which means eligibleForLoan returns false, which means applicationRefused is Also false.

*/
// Logical OR (||)
// Returns TRUE if one or both of the operands is TRUE
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

//NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);

/* Basically, when highIncome and goodCreditScore are false, then eligibleForLOad is false.
And the console.log will display the value, along with a label.


If !eligibleforloan has a false input value, it will flip it to true, and applicationRefused will be true.  

Console.log will show the label string, and that applicationRefused is True. */