// String-2 -- endOther
// Given two strings, return true if either of the strings appears at the very end of the other string,
//  ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). 
//  Note: str.toLowerCase() returns the lowercase version of a string.

// Examples

// endOther('Hiabc', 'abc') → true
// endOther('AbC', 'HiaBc') → true
// endOther('abc', 'abXabc') → true

function endOther(a, b){
    const strA = a.toLowerCase()
    const strB = b.toLowerCase()
    if(strB.endsWith(strA) || strA.endsWith(strB) ){
        return true
    }return false

  }console.log(endOther('AbC', 'HiaBc'));