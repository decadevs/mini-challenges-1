/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    // Convert string to array
    let arr = str.split('')
    let result = "invalid"

    // Check if length of array is even
    if (arr.length % 2 !== 0) {
        return "invalid"
    }

    // TODO
    for (let i = 0; i < (arr.length); i++) {
        if (arr[i] === '[' && (arr.lastIndexOf(']') - i) % 2 === 1) {
            result = "valid"
        } else if (arr[i] === '{' && (arr.lastIndexOf('}') - i) % 2 === 1) {
            result = "valid"
        } else if (arr[i] === '(' && (arr.lastIndexOf(')') - i) % 2 === 1) {
            result = "valid"
        } else if (arr[i] === ']' && (arr.indexOf('[') + i) % 2 === 1) {
            result = "valid"
        } else if (arr[i] === '}' && (arr.indexOf('{') + i) % 2 === 1) {
            result = "valid"
        } else if (arr[i] === ')' && (arr.indexOf('(') + i) % 2 === 1) {
            result = "valid"
        } else {
            result = "invalid"
        }
    }

    return result
}

module.exports = isValid;
