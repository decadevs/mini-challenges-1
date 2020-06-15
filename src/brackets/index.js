/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

const isValid = (str) => {
  const bracketMatch = {
    '[': ']',
    '{': '}',
    '(': ')'
  };
  const temporaryStore = [];

  for (bracket of str) {
    if (bracketMatch[bracket]) {
      temporaryStore.push(bracket);
    } else {
      const pushedOutBracket = temporaryStore.pop();

      if (bracketMatch[pushedOutBracket] !== bracket) {
        return 'invalid'
      };
    };
  };

  return temporaryStore.length == 0 ? 'valid' : 'invalid'
};

module.exports = isValid;
