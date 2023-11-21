// Warmup-1 -- stringE
// Return true if the given string contains between 1 and 3 'e' chars.

// Examples

// stringE('Hello') → true
// stringE('Heelle') → true
// stringE('Heelele') → false

function stringE(str){
    const letter = "e"
    let letterCount = 0
    for(let i = 0; i < str.length;i++){ 
        let chara = str.charAt(i)
        if(letter.includes(chara)){ 
        letterCount++
    } 
   
} if(letterCount >= 1 && letterCount <=3){
    return "true"
} 
return "false"
  }console.log(stringE('Heelele'));