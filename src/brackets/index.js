/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str)
{
  const brackets = { '(': ')', '[': ']', '{': '}' };
  const openers = Object.keys(brackets);
  const closers = Object.values(brackets);

  let openBounds = [];
  for (let i = 0; i < str.length; i++)
  {
    if (openers.includes(str[i]))
    {
      openBounds.push(str[i]);
    }
    /* Not just checking for mismatch between closer and corresponding opener-
    also forgetting the last stored opener via pop() to 'clear' valid brackets */
    else if (closers.includes(str[i]) && brackets[openBounds.pop()] !== str[i])
    {
      return "invalid";
    }
  }
  return openBounds.length > 0 ? "invalid" : "valid";
}

module.exports = isValid;
