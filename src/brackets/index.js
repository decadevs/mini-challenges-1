/**
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

/* for the string of brackets to be valid:
→ the length must be even
→ if it is an open bracket, push to array.
  If it is a closing bracket, check if it is a match with last open bracket.
      If yes, pop both matching brackets and continue
      else, end
*/

function isValid(str) {
  if (str.length % 2 != 0) return "invalid"                    // for string of brackets to be valid, string length must be even

  const leftPairs = ['(', '[', '{'], rightPairs = [')', ']', '}']       // define known bracket entries

  let stack = [str[0]]                          // for storing opening brackets until they close

  for (let i=1; i<str.length; i++) {
      if (rightPairs.includes(str[0])) return "invalid"            // string of brackets is invalid if it begins with a closing bracket

      if (leftPairs.includes(str[i])) stack.push(str[i])         // if new character is an opening bracket, push to stack
      else {                                                     // otherwise, check to see if it's a matching closing bracket to last open bracket in stack
        if (stack[stack.length - 1] == leftPairs[rightPairs.indexOf(str[i])]) {
          stack.pop()                                           // if open and closing brackets match, pop them out of stack and continue
        }
        else return "invalid"                                                  // if open and closing brackets don't match, return invalid
      }
  }

  if (stack.length === 0) return "valid"                                    // if stack is empty and all brackets have been matched, return valid
  else return "invalid"
}

module.exports = isValid;
