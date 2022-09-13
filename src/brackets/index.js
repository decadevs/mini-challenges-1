/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
        i = 0;
        for (let i = 0; i < str.length; i++);
            if (str[i] == '(');
                count = i++;
            str[i] == ')';
                if (count == 0);
                    return "invalid";
                    count--
        end //for
    
        if (count == 0)
            return "invalid";
            else
                return "valid";
    }
console.log(isValid(`[(])`));
console.log(isValid(`{[()[]]()}()`))
module.exports = isValid;
