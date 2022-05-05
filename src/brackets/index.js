/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let lengthOfString = str.length
    // Test only strings with even length
    if ((lengthOfString % 2) == 0)
    {
        for (let i = 0; i <= lengthOfString - 1; i++)
        {
            let j = lengthOfString - i;
            for(j; j >= 1; j - 2)
            {
                if (((str[i] == '{' && str[j] == '}') || (str[i] == '{' && str[i + 1] == '}')) 
                    || ((str[i] == '[' && str[j] == ']') || (str[i] == '[' && str[i + 1] == ']')) 
                    || ((str[i] == '(' && str[j] == ')') || (str[i] == '(' && str[i + 1] == ')')))
                {
                    return 'valid';
                }
                else 
                {
                    return 'invalid';
                }
            }

        }
    }
    return 'invalid'; 

}

module.exports = isValid;
