/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(strings) {
    const brackets = ["()", "[]", "{}"]; //telling the system the pair we are working with
    let bracketstack = []; //created an empty arrary to store the covers

    const strlength = strings.length; // we want to check the length of the input or strings

    // if (strlength % 2 !== 0) {
    if (strings[0] == "}" || strings[0] == ")" || strings[0] == "]") {
        return "invalid";
    }
    for (let i = 0; i < strings.length; i++) {
        if (strings[i] == "(" || strings[i] == "[" || strings[i] == "{") {
            bracketstack.push(strings[i]);
            //the first condition on line 28 - 29 is checking if the string at any position is an
            // open bracket it should push it into
            //the empty stack
        } else if (strings[i] == "}" || strings[i] == "]" || strings[i] == ")") {
            //the second condition on line 32 is checking if the bracket is a closing bracket if

            const bracketPair = bracketstack[bracketstack.length - 1] + strings[i]
                //if the string meets the condition on 32, the created a variable to store

            if (brackets.includes(bracketPair)) {
                bracketstack.pop()
            }
            //{}
        }

    }
    if (bracketstack.length > 0) {
        return "invalid";

    } else {
        return "valid";
    }
}



module.exports = isValid;
console.log(isValid("]]"))
