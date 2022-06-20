/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
 function isValid(str) {
    let container = [];
    let partners = {
        '{': '}',
        '(': ')',
        '[': ']'
    }

    for (let i = 0; i < str.length; i++) {
        let currentBracket = str[i];
        if (currentBracket === '(' || currentBracket === '{' || currentBracket === '[') {
            container.push(currentBracket);
            continue;
        }
        if (container.length === 0) return "invalid";
        let compare = container.pop();
        if (partners[compare] !== currentBracket) return "invalid";
    }
    if (container.length === 0) return "valid";
    return "invalid";
}


module.exports = isValid;
