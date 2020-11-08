/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let bracketsMap = {
        '[': ']',
        '{': '}',
        '(': ')'
    };

    var foundBrackets = str.replace(/[^\[\](\){}]/g, "").split("");

    if (foundBrackets.length === 0) return "valid";
    else if (/[\])}]/g.test(foundBrackets[0]) ||
        /[\[{(]/g.test(foundBrackets[foundBrackets.length - 1])) {
        return "invalid";
    }

    var openBrackets = [];

    for (var i = 0; i < foundBrackets.length; i++) {
        var bracket = foundBrackets[i];
        if (/[\[{(]/g.test(bracket)) {
            openBrackets.push(bracket);
        } else {
            if (openBrackets.length !== 0 &&
                foundBrackets[i] === bracketsMap[openBrackets[openBrackets.length - 1]]) {
                openBrackets.pop();
                continue;
            } else return "invalid";
        }
    }

    return (openBrackets.length === 0)? "valid" : "invalid";
}

module.exports = isValid;
