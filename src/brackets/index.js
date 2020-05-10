/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let brackets = '()[]{}'
    let stack = []

    for (let bracket of str) {
        let bracketIndex = brackets.indexOf(bracket)

        if(bracketIndex === -1) {
            continue
        }

        if(bracketIndex % 2 === 0){
           stack.push(bracketIndex + 1)
        } else {
            if(stack.pop() !== bracketIndex) {
                return 'invalid'
            }
        }
    }
    return stack.length === 0 ? 'valid' : 'invalid'
}

module.exports = isValid;
