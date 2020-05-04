/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let listOfBrackets = "[]{}()";
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let bracketIndex = listOfBrackets.indexOf(str[i]);
        if (bracketIndex % 2 === 0) {
            stack.push(bracketIndex + 1);
        } else {
            if(stack.pop() !== bracketIndex) {
                return "invalid";
            }
        }
    }
    if (stack.length === 0) {
        return "valid";
    }
    return "invalid";
}

module.exports = isValid;
