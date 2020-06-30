/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) 
{
    let matchingOpeningBracket, ch
  let stack = []

  let openingBrackets = ['[', '{', '(']
  let closingBrackets = [']', '}', ')']

  for (let i = 0; i < str.length; i++) 
  {
    ch = str[i]

    if (closingBrackets.indexOf(ch) > -1) 
    {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
      if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) 
      {
        return "invalid"
      }
    } else {
      stack.push(ch)
     return "valid"
    }
  }

  
};


module.exports = isValid;
