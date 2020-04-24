/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let result = [];
    let pare = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {


        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            result.push(str[i]);
        } else {
            let last = result.pop();

            if (str[i] !== pare[last]) {
                return 'invalid';
            }
        }
    }
    if (result.length !== 0) {
        return 'invalid';
    };

    return 'valid';
}

module.exports = isValid;