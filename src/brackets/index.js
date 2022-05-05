/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let mapOfBrackets = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    let stackOfBrackets = []

    for (char of str) {
        if (mapOfBrackets[char]) {
            stackOfBrackets.push(mapOfBrackets[char])
        } else if (stackOfBrackets.length > 0 && stackOfBrackets[stackOfBrackets.length - 1] == char) {
            stackOfBrackets.pop()
        } else {
            return `invalid`
        }
    }

    return `valid`
}

console.log(isValid("([)]"))
isValid("(])]")
module.exports = isValid;
