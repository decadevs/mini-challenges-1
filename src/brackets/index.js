/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let dummy = [];
    let lenParentheses = str.length;
    let match = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (var i = 0; i < lenParentheses; i++) {
        dummy.length > 0 && match[dummy[dummy.length - 1]] === str[i] ? dummy.pop() : dummy.push(str[i]);
    }
    return dummy.length === 0 ? "valid" : "invalid";
}

module.exports = isValid;