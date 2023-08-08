/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let arrBracket = [];

    for (let i in str) {
        if (str[i] == '(' || str[i] == '[' || str[i] == '{') {
            arrBracket.push(str[i]);
        } else {
            let braInd = arrBracket.length - 1;

            if (str[i] == ')' && arrBracket[braInd] == '(') {
                arrBracket.pop();
            } else if (str[i] == ']' && arrBracket[braInd] == '[') {
                arrBracket.pop();
            } else if (str[i] == '}' && arrBracket[braInd] == '{') {
                arrBracket.pop();
            } else {
                return 'invalid';
            }
        }
    }
    return arrBracket.length == 0 ? 'valid' : 'invalid';
}

module.exports = isValid;
