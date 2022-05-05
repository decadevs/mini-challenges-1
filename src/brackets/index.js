/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let strArr = str.split("");
    let openBrackets = [];

    let firstChar = str[0]
    if (firstChar === ')' || firstChar === '}' || firstChar === ']') {
        openBrackets.push(firstChar)
    } else {
        strArr.forEach(char => {
            if (char === '(' || char === '{' || char === '[') {
                openBrackets.push(char)
            } else {
                if (openBrackets[openBrackets.length - 1] === '(' && char === ')') {
                    openBrackets.pop()
                }

                if (openBrackets[openBrackets.length - 1] === '{' && char === '}') {
                    openBrackets.pop()
                }

                if (openBrackets[openBrackets.length - 1] === '[' && char === ']') {
                    openBrackets.pop()
                }
            }
        })
    }
    
    console.log((openBrackets.length == 0) ? "valid" : "invalid");
    return (openBrackets.length == 0) ? "valid" : "invalid";
}

isValid("()")
isValid("[]")
isValid("{}")

isValid("(}")
isValid("{(")
isValid("]]")
isValid("{)")

isValid("(())")
isValid("(()()())")
isValid("()()()()()")
isValid("((())(())(())(()))")

isValid("[[]]")
isValid("[][][[]]")
isValid("[][[[]]]")
isValid("[[[[[]]]]]")

isValid("{{{{{{{{{{{{{}}}}}}}}}}}}}")
isValid("{}{{}}{{{}}}{{{{}}}}{}{}{}")

isValid("({()}[()]}")
isValid("[](){{{}}")
isValid("{{{{{{{{{{{{}}}}}}}}}}}()[]")
isValid("}{{{{}}}}{([])(((()))){")

isValid("(([))]")
isValid("[{}]({}){[[[}]]]")
isValid("{{{{{{{{{{{{}}}}}}}}}}}()[}]")

isValid("{[()[]]()}()")
isValid("{{{(())}}[[()]]}")
isValid("[{()}({[]})(){}[]]")
isValid("(){}[](([][]){})")
isValid("{{[][()]}{[][()]}{[][()]}}")



module.exports = isValid;
