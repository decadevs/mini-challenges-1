/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    const openBrackets = ['(', '[', '{'];
    const closeBrackets = [')', ']', '}'];
    const checker = [];

    const bracketObject = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let bracket of str) {

        if (openBrackets.includes(bracket)) {
            checker.push(bracket);
        } else if (closeBrackets.includes(bracket)) {

            if (!checker.length) {
                return 'invalid';
            } else if (bracketObject[checker.pop()] !== bracket) {
                return 'invalid';
            }

        }

    }

    if (checker.length === 0) {
        return 'valid';
    } else {
        return 'invalid';
    }
}

module.exports = isValid;
