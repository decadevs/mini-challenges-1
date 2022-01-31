/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let stack = [];
    let ans = "valid";
    const brackets = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    if (!str || str.length % 2 !== 0) {
        return "invalid"
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] in brackets) {
            // Check if it is an open bracket
            stack.push(str[i]);
        } else if (stack.length > 0 && str[i] === brackets[stack[stack.length - 1]]) {
            // Check if the closing bracket is not starting the string
            // And check if the current item closes with value in the brackets
            stack.pop();
        } else { ans = "invalid" }
    }
    if (stack.length === str.length) {
        // To confirm if all input are not open bracket
        return "invalid"
    } else return ans
}

module.exports = isValid;