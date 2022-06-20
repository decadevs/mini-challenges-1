/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    // declare open / close tags strings
    let items = '{}[]()';

    // declare empty stack
    let stack = [];

    // loop through str to ensure each element contains both openining and close branket
    for(let item of str){
      let itemsIndex = items.indexOf(item);
      if(itemsIndex % 2 === 0) {
        stack.push(itemsIndex + 1)
      } else {
        if(stack.pop() !== itemsIndex){
          return 'invalid';
        }
      }
    }
    if(stack.length === 0){
      return 'valid';
    } else {
      return 'invalid';
    }
}

module.exports = isValid;
