/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    const validBrackets = [];
    const brackets = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    for (let i = 0; i < str.length; i++) {
        const result = str[i];
    }
    if (brackets[result] !== undefined) {
        validBrackets.push(result);
    } else {  
        let endingBracket = validBrackets.pop();
        let correctClosingBracket = brackets[endingBracket];
        if (result !== correctClosingBracket) {
            return invalid;
        }
    };

    return validBrackets.length === 0;

};

module.exports = isValid;
