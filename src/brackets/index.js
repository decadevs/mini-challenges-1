/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
//  */
 function isValid (str) {
    const  obj = {"(" : ")", "{" : "}", "[": "}"}
    const newArray= []
    for(let char of str){
        if(obj[char]){
            newArray.push(obj[char])
        }else if(newArray.length > 0 ){
            newArray.pop()
        }else{
            return "invalid"
        }
    }
    return "valid"
   
 }

console.log(isValid("(([)])]"));
 module.exports = isValid;