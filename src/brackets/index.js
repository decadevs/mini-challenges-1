/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    const match = {
        '(':')',
        '[':']',
        '{':'}'
    };
    let stack = [];
    for (let i = 0; i<str.length; i++){
      if (match[s[i]]){
        stack.push(s[i]);
      }else{
        let open = stack.pop();
        if (!match[open] || match[open] !== s[i]){
          return false;
        }
      }
    }
    return !stack.length;
};

module.exports = isValid;
