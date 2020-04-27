/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    //create an empty array to hold all the opening brackets
    let arr = [];
    //create an empty array to hold the current bracket if no matching open pair
    let notFound = [];
    //create object pairs to know which closing bracket goes with which opening bracket
    let bracketObj = {
        '}': '{',
        ')': '(',
        ']': '[',
    };
    //Loop through the str
    for (let index = 0; index < str.length; index++) {
        let currentBracket = str[index]
            //if there are open brackets, push them into the empty arr
        if (currentBracket === '{' || currentBracket === '(' || currentBracket === '[') {
            arr.push(currentBracket);
            //if there are closed brackets, remove the corresponding opening bracket from arr
        } else if (currentBracket === '}' || currentBracket === ')' || currentBracket === ']') {
            // but look for the last index of the current bracket in the object, if it isn't there push the current bracket in the array to the empty notFound array
            if (arr.lastIndexOf(bracketObj[currentBracket]) === -1) notFound.push(currentBracket)
                // also, if the bracket at the end of the arr is the same as the currrent bracket, it should be removed from the empty array
            if (arr[arr.length - 1] === bracketObj[currentBracket]) {
                const removed = arr.splice(arr.lastIndexOf(bracketObj[currentBracket]), 1)
                    // console.log(removed);
            }
        }
    }
    // console.log(arr, notFound);
    return arr.length || notFound.length ? "invalid" : "valid";
}

module.exports = isValid;