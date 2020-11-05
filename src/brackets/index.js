/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    var check = [];
    var map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (i = 0; i < str.length; i++){
        if (str[i] === '(' || str[i] === '{' || str[i] === '['){
            check.push(str[i]);
        }   
        else if (str[i] === ')' || str[i] === '}' || str[i] === ']'){
            var lastOpened = check.pop();
            if (str[i] !== map[lastOpened]){return "invalid"};
        }
    }
    if (check.length !== 0) {return "invalid"};
    return "valid";
}

module.exports = isValid;
