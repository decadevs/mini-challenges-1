/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    const stack = [];
    const open = "({[";
    const close = ")}]";

    for(let char of str) {
        if(open.includes(char)) {
            stack.push(char);
        } else if(close.includes(char)) {
            const lastOpenBracket = stack.pop();
            if(!lastOpenBracket || open.indexOf(lastOpenBracket) !== close.indexOf(char)) {
                return "invalid";
            }
        }  
    }
    return stack.length === 0 ? "valid" : "invalid";
}


module.exports = isValid;
