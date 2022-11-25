/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    const myArray = str.split("");
    let squareBracCounter = 0;
    let parenthesesCounter = 0;
    let curlyBracCounter = 0;

    let arrayLength = myArray.length - 1;

    if (myArray[0] === "(" && myArray[arrayLength] === ")" || myArray[0] === "{" && myArray[arrayLength] === "}" || myArray[0] === "[" && myArray[arrayLength] === "]"){
      // validate if the expression is logical or illogical
        for (let i = 0; i < myArray.length; i++) {
            const e = myArray[i];
            if (e === "(") {
                parenthesesCounter++;
            } else if (e === ")") {
                parenthesesCounter--;
            } else if (e === "{"){
                curlyBracCounter++;
            } else if (e === "}"){
                curlyBracCounter--;
            }else if (e === "["){
                squareBracCounter++;
            }else if (e === "]"){
                squareBracCounter--;
            }
        }
        if (parenthesesCounter === 0 && squareBracCounter === 0 && curlyBracCounter ===0 ) {
            console.log("valid");
        } else {
            console.log("invalid");
        }
    } else {
        console.log("invalid");
    }
}

module.exports = isValid;
