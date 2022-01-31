/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let stack = [];
    if (str.length % 2 !== 0) return 'invalid';

    for (let char of str) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if ((char === ')' && stack[stack.length - 1] === '(') ||
                    (char === '}' && stack[stack.length -1] === '{') ||
                    (char === ']' && stack[stack.length -1] === '[')) {
                stack.pop();
        } else return 'invalid';
    }
    return stack.length ? 'invalid' : 'valid'; 
}


module.exports = isValid;
