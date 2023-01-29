/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let arr = [];
    const hashMap = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] === "(" || str[i] === "[" || str[i] === "{"){
            arr.push(str[i])
        } else if (hashMap[arr.pop()] !== str[i]){
            return "invalid"
        }
    }
    return arr.length ? "invalid" : "valid"
}

module.exports = isValid;
