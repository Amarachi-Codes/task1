Warmup-1 -- stringE
Return true if the given string contains between 1 and 3 'e' chars.

Examples

stringE('Hello') → true
stringE('Heelle') → true
stringE('Heelele') → false

function stringE(str){
    const letter = "e"
    if(letter.includes(str) >=1 || letter.includes(str) <=3){
    return true
    } return false 
  }