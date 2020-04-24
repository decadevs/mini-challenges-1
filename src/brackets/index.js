/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let openingBraces = { '{': 0, '[': 0, '(': 0, '<': 0 };
    let closingBraces = { '}': 0, ']': 0, ')': 0, '>': 0 };
    let bracePairs = ['{}', '[]', '()', '<>'];
    let braceArray = [];
    
    for (let i = 0; i < str.length; i++) {
        if (openingBraces[str[i]] !== undefined) {
            braceArray.push(str[i]);
        
        }else if (closingBraces[str[i]] !== undefined) {
            if (bracePairs.some(val => val === braceArray[braceArray.length - 1] + str[i])) {
                braceArray.pop();
            } else {
                return "invalid";
            }
                
        }
          
    }
    return braceArray.length !== 0 ? 'invalid' : 'valid';
}

module.exports = isValid;
