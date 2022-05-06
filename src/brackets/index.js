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

    //Strings that begin with any of the closing braces is invalid
    if (str[0] === "}" || str[0] === ")" || str[0] === "]") {
        return "invalid";
    }

    //Strings that end with an opening brace is invalid
    if (str[lenOfStr - 1] === "{" || str[lenOfStr - 1] === "[" || str[lenOfStr - 1] === "(") {
        return "invalid";
    }
    

    for (let i in str) {
        if (str[i] === `{`) {
            
            if (foundClose(str, `}`, i)) {
                continue;
            } else {
                return `invalid`;
            }
        }

        if (str[i] === `(`) {
            
            if (foundClose(str, `)`, i)) {
                continue;
            } else {
                return `invalid`;
            }
        }

        if (str[i] === `[`) {
            
            if (foundClose(str, `]`, i)) {
                continue;
            } else {
                return `invalid`;
            }
        }
    }
    return `valid`;
}


function foundClose(arr, brac, ind) {
    let brace = arr.indexOf(brac, ind);
    
    do {
        if(brace - ind === 1) {
            return true;
        }
        if(arr[brace - 1] === arr[brace - 2] && arr[brace - 2] === arr[ind]) {
            brace = arr.indexOf(brac, brace + 1);
        } else if ((brace - ind) % 2 === 1) {
            if (arr[brace - 1] === `{` || arr[brace - 1] === `(` || arr[brace - 1] === `[`) {
               if (arr[brace - 2] === `{` || arr[brace - 2] === `[` || arr[brace - 2] === `(`) {
                    return false;
               }
            }
            return true;
        } else {
            brace = arr.indexOf(brac, brace + 1);
        }
    } while (brace > -1);
    if (brace < 0) {
        return false;
    }
}
console.log(isValid("((())(())(())(()))"));
module.exports = isValid;
