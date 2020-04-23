/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {

  let matchingOpeningBracket, ch;
  let stack = []

  let openingBrackets = ['[', '{', '(']
  let closingBrackets = [']', '}', ')']

  for (let i = 0; i < str.length; i++) {
    ch = str[i]

    if (closingBrackets.indexOf(ch) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
      if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
        return false
      }
    } else {
      stack.push(ch)
    }
  }

  // var parenCount, bracketCount, curlyCount = 0;

  // for (var i = 0; i < str.Length; i++) {

  //     var checkChar = str[i];

  //     if (checkChar === '(') parenCount++;
  //     if (checkChar === ')') parenCount--;
  //     if (checkChar === '[') bracketCount++;
  //     if (checkChar === ']') bracketCount--;
  //     if (checkChar === '{') curlyCount++;
  //     if (checkChar === '}') curlyCount--;

  //     if (parenCount < 0 || bracketCount < 0 || curlyCount < 0)
  //         return 'invalid';
  // }

  // if (parenCount != 0) return 'invalid';
  // if (bracketCount != 0) return 'invalid';
  // if (curlyCount != 0) return 'invalid';
  // if (parenCount === 0) return 'valid';
  // if (bracketCount === 0) return 'valid';
  // if (curlyCount === 0) return 'valid';
  return stack.length === 0 ? 'valid' : 'invalid';
  // return 'valid';

}

module.exports = isValid;
