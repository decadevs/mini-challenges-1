/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
const isValid = str => {
    const bracketsStack = [];
    str = str.split('');
    const bracket = '[';
    const para = '(';
    const brace = '{';
    const brktClose = ']';
    const paraClose = ')';
    const brcClose = '}';
    if(!(str.includes(bracket)) && !(str.includes(para)) && !(str.includes(brace))){
        return 'invalid'
    }else{
    for (let char of str) {
        if(char === bracket || char === para || char === brace) {
            bracketsStack.push(char);
        }else if(char === brktClose && bracketsStack[bracketsStack.length - 1] === bracket || char === paraClose && bracketsStack[bracketsStack.length - 1] === para || char === brcClose && bracketsStack[bracketsStack.length -1] === brace) {
            bracketsStack.pop();
        }
    }
    if(bracketsStack.length > 0) {
        return 'invalid'
    }else {
        return 'valid'
    }
}
}

module.exports = isValid;
