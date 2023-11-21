// String-2 -- countCode
// Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter 
// for the 'd', so "cope" and "cooe" count.

// Examples

// countCode('aaacodebbb') → 1
// countCode('codexxcode') → 2
// countCode('cozexxcope') → 2

function countCode(str){
    let result = 0
  for(let i = 0; i < str.length; i++){
    const alphabet = ["a","b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y", "z"]
    if(str.charAt(i) === "c" && str.charAt(i+ 1) === "o"&& alphabet.includes(str.charAt(i+ 2)) && str.charAt(i+ 3) === "e" || str.charAt(i) === "c" && str.charAt(i+ 1) === "o"&& str.charAt(i+ 2) === "d" && str.charAt(i+ 3) === "e"){
        result++
    }
  }return result
}console.log(countCode('ccodexxcode'));