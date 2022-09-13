/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let strArr = str.split("");
    let openBrackets = [];

    let fristChara = str[0]
    if (fristChara === ')' || fristChara === '}' || fristChara === ']'){
        openBrackets.push(fristChara)
    }
    else{
        for(let i = 0; i < strArr.length; i++){
            if(strArr[i] === "(" || strArr[i] === "{" || strArr[i] === "["){
                openBrackets.push(strArr[i])
            }else{
                if(openBrackets[openBrackets.length - 1] === "(" && strArr[i] === ")"){
                    openBrackets.pop()
                }
                if(openBrackets[openBrackets.length - 1] === "{" && strArr[i] === "}"){
                    openBrackets.pop()
                }
                if(openBrackets[openBrackets.length - 1] === "[" && strArr[i] === "]"){
                    openBrackets.pop()
                }
            }
        }
        


    }
    if(openBrackets.length === 0){
        return "valid"
    }else{
        return "invalid"
    }
    }

console.log(isValid("{{{{{{{{{{{{{}}}}}}}}}}}}}"))
module.exports = isValid;
