
// Given a string, return a string where for every char in the original, there are two chars.

// Examples

// doubleChar('The') → TThhee
// doubleChar('AAbb') → AAAAbbbb
// doubleChar('Hi-There') → HHii--TThheerree


function doubleChar(str){
    let res = ""
    for(let i = 0; i < str.length; i++){
        if(typeof(str) === "string"){
            res+=str.charAt(i) + str.charAt(i)
        }
    } return res
}console.log(doubleChar('The'));

  