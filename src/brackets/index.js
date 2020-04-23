/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let str2 = str.slice(0);
    let count1 = 0; 
    let count2 = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '{' && str[i] === '[' && str[i] === '('){
            count1++;
            for (let j = 0; j < str2.length; j++) {
                if (str2[j] === '}' && str2[j] === ']' && str2[j] === ')') {
                count2++;
                } else {
                    return "invalid";
                } 
            }
        } else {
            return "invalid";
        }
    }
    if (count1 === count2) {
        return "valid";
    } else {
        count1 = 0;
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < str2.length; j++) {
                if (str[i] === '{') {
                    if (str2[j] === '}') {
                        count1++;
                        delete str2[j];
                    }
                }
            }
        }
        if (count1 % 2 === 0) {
            return "valid";
        }
        console.log("invalid");
        return "invalid";
    }   
}
module.exports = isValid;
