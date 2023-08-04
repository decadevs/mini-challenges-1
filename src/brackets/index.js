/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    const openBrackets = [];

    if(str.charAt(0) == '}' || str.charAt(0) == ')' || str.charAt(0) == ']'){
        return 'invalid';
    }else {
        for(let bracket of str){
            if(bracket == '{' || bracket == '(' || bracket == '['){
                openBrackets.push(bracket);
            }
 
            let lastElement = openBrackets[openBrackets.length - 1];

            if(bracket == '}' && lastElement == '{'){
                openBrackets.pop();
            }else if(bracket == ')' && lastElement == '('){
                openBrackets.pop();
            }else if(bracket == ']' && lastElement == '['){
                openBrackets.pop();
            }
            // else {
            //     return 'invalid'
            // }
        }
    }
    return openBrackets.length > 0 ? 'invalid' : 'valid';
}

module.exports = isValid;
