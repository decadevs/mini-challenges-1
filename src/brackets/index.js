/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
const isValid = (str) => {
    let result = [];
    str.split("").map(char => {
        result.push(char)
        if(result[result.length-2] == "(" && result[result.length - 1 ] == ")"){
            result.pop();
            result.pop();
        } else if (result[result.length - 2] == "{" && result[result.length - 1] == "}"){
            result.pop();
            result.pop()
        } else if(result[result.length - 2] == "[" && result[result.length - 1] == "]") {
            result.pop();
            result.pop();
        }   
    })
    return result.length === 0 ? "valid" : "invalid"
}

module.exports = isValid;
