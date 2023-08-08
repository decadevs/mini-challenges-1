/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {

    const count = [];

    //  create a correct pairing with key:value pairs
    const correctPairing = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
        
        for (let char of str) {

            // iterate through the characters in the string
          if (char in correctPairing) {

            // push consecutive opening brackets to the count variable

            count.push(char);
          } else if (Object.values(correctPairing).includes(char)) {

            // remove most current occurence of opening brackets (key) if a closing bracket (value) is met

            const lastOpeningBracket = count.pop();

            //  if the popped value does not match the key, return invalid;

            if (!lastOpeningBracket || correctPairing[lastOpeningBracket] !== char) {
              return "invalid";
            }
          }
        }
        // check the length of remaining characters in the count variable, if 0, all brackets have succesfully paired, else it is invalid

    return count.length === 0 ? "valid" : "invalid";    
}

module.exports = isValid;
