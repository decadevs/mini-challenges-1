/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
 function isValid(str) {
    const brackets = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    const bracketArray = []; 
    //lookup closing brackets in object and compare
    for (let i = 0; i < str.length; i++) {
        if (brackets[str[i]]) {
            bracketArray.push(brackets[str[i]]);
        } else if (str[i] != bracketArray.pop()) {
            return "invalid";
        }
    }
    return bracketArray.length ? "invalid" : "valid"; 
}

module.exports = isValid;
