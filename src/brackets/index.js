/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let strArray = str.split("");
  const STACK = [];
  const OPEN_BRACKET = "[";
  const OPEN_PARENTHESIS = "(";
  const OPEN_BRACE = "{";
  const CLOSE_BRACKET = "]";
  const CLOSE_PARENTHESIS = ")";
  const CLOSE_BRACE = "}";
  if (
    !strArray.includes(OPEN_BRACKET) &&
    !strArray.includes(OPEN_PARENTHESIS) &&
    !strArray.includes(OPEN_BRACE)
  ) {
    return "invalid";
  }
  for (let character of strArray) {
    if (
      character === OPEN_BRACKET ||
      character === OPEN_PARENTHESIS ||
      character === OPEN_BRACE
    ) {
      STACK.push(character);
    }
    if (
      (character === CLOSE_BRACKET &&
        STACK[STACK.length - 1] === OPEN_BRACKET) ||
      (character === CLOSE_PARENTHESIS &&
        STACK[STACK.length - 1] === OPEN_PARENTHESIS) ||
      (character === CLOSE_BRACE && STACK[STACK.length - 1] === OPEN_BRACE)
    ) {
      STACK.pop();
    }
  }
  if (STACK.length > 0) {
    return "invalid";
  }
  return "valid";
}

module.exports = isValid;
