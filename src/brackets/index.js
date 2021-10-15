/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
 function isValid(str){ 
    let isValid = "invalid";
    
    const openingBrackets = ["(", "{", "["];

    const pair = {
        "{": "}",
        "(": ")",
        "[": "]"
    }

    const brackets = []
    // []

    for ( let i = 0; i < str.length; i++ ) {
        if (openingBrackets.includes(str[i])) {
            brackets.push(str[i]);
            isValid = "invalid"
        } else {
            const lastBracket = brackets.pop();
            if (str[i] !== pair[lastBracket]) {
                return 'invalid'
            } else {
                isValid = "valid"
            }
        }
    }

    // 0 false
    if (brackets.length) {
        return 'invalid';
    }

    return isValid
}

console.log(isValid("[](){{{}}"));

module.exports = isValid;
