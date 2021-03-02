/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    const holder=[];
    

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '{' || str[i] == '(' || str[i] == '[') {
            holder.push(str[i]);
        } else if (str[i] == '}' || str[i] == ')' || str[i] == ']') {
            if (holder.length != 0){
                let hold = holder.pop();
                if ((hold == '{' && str[i] == '}') || (hold == '(' && str[i] == ')') || (hold == '[' && str[i] == ']')) {
                    //Do not do anything here. Just continue.
                } else {
                    return 'invalid';
                }
            } else {
                return 'invalid';
            }
            
        }
    }
    if (holder.length == 0) {
        return 'valid';
    }
    return 'invalid';
}

module.exports = isValid;
