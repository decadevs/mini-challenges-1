/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let arr = 0;
    let bracketStr = {"(": ")", "[": "]", "{": "}"}
        for(let i = 0; i < str.length; i++){
if(str[i] === "(" || str[i] === "[" || str[i] === "{"){
    arr.push(str[i]);
}else if (bracketStr[arr.pop()] !== str[i]){
    return "invalid";
}
        }
    return arr.length > 0 ? "invalid" : "valid";
}

module.exports = isValid;
