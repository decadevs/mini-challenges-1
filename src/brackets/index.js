/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let brackets = "[]{}()<>"
    let stack = []
    for(let bracket of str) { 
        let bracketsIndex = brackets.indexOf(bracket) 
        if (bracketsIndex === -1){ 
            continue
}

if(bracketsIndex % 2 === 0) {
     stack.push(bracketsIndex + 1) 
    } else {
        if(stack.pop() !== bracketsIndex) {
             return false;
            }
            }
}
return stack.length === 0 ? "valid" : "invalid";
}
module.exports = isValid;



