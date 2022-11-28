/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {}

module.exports = isValid;
let correct = 'my st(ring) [ok] {hello}';
let uncorrect = 'my st(ring)[0(k] {hello}';
syntaxChecker = (str) => {
  let stack = [];
  [...str]. forEach(c => {
    if ('([{'.includes(c)){
      stack.push(c);
    }
    else if (')]}'.includes(c)){
      let top = stack.pop();
      if(! (c=== ')' && top === '('
      || c === ']' && top === '['
      || c === '}' && top === '{')){
        stack.push(c);
      }
      }
      });
      return stack.length === 0;

    }
    console.log(syntaxChecker(correct));
    console.log(syntaxChecker(uncorrect));
