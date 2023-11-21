// Warmup-1 -- lastDigit
// Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % 'mod' operator computes remainders, so 17 % 10 is 7.

// Examples

// lastDigit(7, 17) → true
// lastDigit(6, 17) → false
// lastDigit(3, 113) → true

function lastDigit(a, b){
    if(b % 10 === a || a % 10 === b){
    return true
    } return false
  }console.log(lastDigit(7, 17));