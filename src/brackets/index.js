/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    while(str.includes("()") || str.includes("[]") || str.includes("{}")){
        str = str.replace("()", "")
        str = str.replace("[]", "")
        str = str.replace("{}", "")
    }

    if(str === ""){
        return "valid"
    }
    else{
        return "invalid"
    }
}

module.exports = isValid;
