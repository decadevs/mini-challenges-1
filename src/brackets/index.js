/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */



        
function isValid(str) {
    
    const stack = [];
    let bracketsString = {
        '(':')',
        '{':'}',
        '[':']',
    };   

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (bracketsString[char]) {
            stack.push(char);
        } else if (char == ')' || char == '}' || char == ']') {
            let lastBracket = stack.pop();
        
            if (bracketsString[lastBracket] != char) {
                return "invalid";
                
            }
        }
    }

   return stack.length == 0 ? "valid" : "invalid"
    }

    // // Test cases
    // const testStrings = //"({()}[()]}";
    // "{{{()[]" ;
    //console.log(isValid(testStrings))
    
    


module.exports = isValid;
