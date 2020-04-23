/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let brackets = ['(', ')', '[', ']', '{', '}'];
    let closedBracketOrder = [];

    for (let i = 0; i < str.length; i++) {
        let index = brackets.indexOf(str[i]);
        if (index % 2 === 0) {
            closedBracketOrder.push(brackets[index + 1]);
        } else {
            if (closedBracketOrder.pop() !== str[i]) {
                return 'invalid';
            }
        }
    }

    return closedBracketOrder.length > 0 ? 'invalid' : 'valid';
}

module.exports = isValid;