/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
/**
 * Implement the solution to brackets
 *
//  * @param {string} str The string of brackets.
//  * @returns {"valid" | "invalid"} Whether or not the string is valid.
//  */
function isValid(str) {
    let newTestArr = [] 

    let testObj = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    

    for (let i = 0; i < str.length; i++) {
        
        if (testObj[str[i]]) {
            newTestArr.push(testObj[str[i]]);
        }
        else {
            
            
            if (newTestArr.pop()!== str[i]) {
                return "invalid";
            }
        } 
    
    }
    return (newTestArr.length !== 0) ? "invalid" : "valid";
}
console.log(isValid("{}"))

module.exports = isValid;




