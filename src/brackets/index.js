/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    //Keep track of the length of the string
    let lenOfStr = str.length;
    
    //All strings of brackets must have even length, otherwise invalid
    if (lenOfStr % 2 !== 0) {
        return "invalid";
    }

    //Strings that begin with any of the closing js is invalid
    if (str[0] === "}" || str[0] === ")" || str[0] === "]") {
        return "invalid";
    }

    //Strings that end with an opening j is invalid
    if (str[lenOfStr - 1] === "{" || str[lenOfStr - 1] === "[" || str[lenOfStr - 1] === "(") {
        return "invalid";
    }
    
    let countCurl = 0;
    let countBrac = 0;
    let countSq = 0;

    for (let r of str) {
        if (r === "{") {
            countCurl += 1;
            continue;
        }
        if (r === "}") {
            countCurl -= 1;
            continue;
        }
        if (r === "(") {
            countBrac += 1;
            continue;
        }
        if (r === ")") {
            countBrac -= 1;
            continue;
        }
        if (r === "[") {
            countSq += 1;
            continue;
        }
        if (r === "]") {
            countSq -= 1;
            continue;
        }
    }
    if (countBrac === 0 && countCurl === 0 && countSq === 0) {
        return "valid";
    } else {
        return "invalid";
    }


}
module.exports = isValid;
