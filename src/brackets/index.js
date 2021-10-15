/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid(str) {
    let arr = []
    let result = ""
    str.split("").forEach(elem => {
        if(elem === "(" || elem === "[" || elem === "{"){
            arr.push(elem)
        }
        if (arr.length === 0){
         result = "invalid"
        }
        if(arr[arr.length-1] === "(" && elem === ")") {
            arr.pop()
        } 
        else if(arr[arr.length-1] === "[" && elem === "]") {
            arr.pop()
        }
        else if(arr[arr.length-1] === "{" && elem === "}"){
            arr.pop()
        }
        else return;
        })
        if(result === "invalid") {
            return result;
        }
        return arr.length === 0 ? "valid" : "invalid";
}

console.log(isValid("{[]]"))

module.exports = isValid;