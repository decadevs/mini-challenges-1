/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str)
{
  const brackets = { '(': ')', '[': ']', '{': '}' };
  const openers = Object.keys(brackets), closers = Object.values(brackets);

  let openBounds = [];
  for (let i = 0; i < str.length; i++)
  {
    if (openers.includes(str[i]))
    {
      //remember open bracket
      openBounds.push(str[i]);
    }
    //forget(pop) the last stored open bracket when a closer is found, catch mismatches
    else if (closers.includes(str[i]) && brackets[openBounds.pop()] !== str[i])
    {
      //a closing bracket didn't match the last stored open bracket
      return "invalid";
    }
  }
  //for brackets to be valid there must be no open brackets
  return openBounds.length > 0 ? "invalid" : "valid";
}

module.exports = isValid;
