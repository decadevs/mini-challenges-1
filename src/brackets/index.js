/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let x = str[i];

        if ( x == '[' || x == '{' || x == '(') {
            stack.push(x);
            continue;
        }

            if (stack.length === 0 )
              return "invalid"

        const poppedELEMENT = stack.pop();
        if (x == ']' && poppedELEMENT != '['){
          return "invalid"
        }
        if (x == '}' && poppedELEMENT != '{') {
          return "invalid"
        }
        if (x == ')' && poppedELEMENT != '(') {
          return "invalid"
        };


    };

    return stack.length === 0 ? "valid" : "invalid"
};


module.exports = isValid;
