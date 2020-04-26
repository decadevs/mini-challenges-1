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
        if (str[i] === '{' || str[i] === '[' || str[i] === '('){
            count1++;
        } else {
            count2++;
        }
    }
    if (count1 === count2) {
        let halfLength = str.length / 2;
        loop1:
        for (let i = 0; i < halfLength; i++){
            for (let j = halfLength; j > 0; j--) {
                if ((str[i] ==='(' && str2[j] === ')') || (str[i] ===')' && str2[j] === '(')) {
                    continue loop1;
                } else if ((str[i] ==='{' && str2[j] === '}')|| (str[i] ==='}' && str2[j] === '{')) {
                    continue loop1;
                } else if ((str[i] ==='[' && str2[j] === ']') || (str[i] ===']' && str2[j] === '[')) {
                    continue loop1;
                } else {
                    return "invalid";
                }
            }
        }
        return "valid";
    }
    return "invalid";
}

module.exports = isValid;
// console.log(isValid("{[()[]]()}()"));