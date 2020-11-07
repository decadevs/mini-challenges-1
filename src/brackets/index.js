/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    const err = /\(\]|\(\}|\[\)|\[\}|\{\)|\{\]/;
    const startErr = (/\)|\]|\}/).test(str[0]);
    const endErr =  (/\(|\[|\{/).test(str[str.length-1]);
    let result = "valid";
    let parentesis = [[],[]];
    let brack = [[],[]];
    let curl = [[],[]];
    if (err.test(str)||startErr||endErr) {
        result = "invalid";
    } else {
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i)==='(') parentesis[0].push(str.charAt(i));
            if (str.charAt(i)===')') parentesis[1].push(str.charAt(i));
            if (str.charAt(i)==='[') brack[0].push(str.charAt(i));
            if (str.charAt(i)===']') brack[1].push(str.charAt(i));
            if (str.charAt(i)==='{') curl[0].push(str.charAt(i));
            if (str.charAt(i)==='}') curl[1].push(str.charAt(i));
        }
    }
    if(parentesis[0].length!==parentesis[1].length||brack[0].length!==brack[1].length||curl[0].length!==curl[1].length) result = "invalid";
    return result;
}
module.exports = isValid;