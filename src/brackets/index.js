/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {

  // CREATE ARRAY OF BRACKETS
  const bracketArr = str.split('');

  //DECLARE ARRAYS OF ALL OPENING AND CLOSING BRACKET TYPES
  const openingBrackets = ['{', '(', '['];
  const closingBrackets = ['}', ')', ']'];

  //CREATE MATCHING BRACKET PAIRS
  const bracketMap = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  let store = [];

  //RETURN INVALID IF BRACKET ARRAY STARTS WITH A CLOSING BRACKET OR IF THE LENGTH IS ODD
  if (closingBrackets.includes(bracketArr[0]) || bracketArr.length % 2 !== 0) {
    return `invalid`
  }

  bracketArr.map(bracket => {

    //CHECK FOR OPENING BRACKETS AND PUSH TO BRACKET STORE
   openingBrackets.includes(bracket) ? store.push(bracket): false

    // IF BRACKET IS A CLOSING BRACKET, CHECK IF IT MATCHES WITH THE LAST ELEMENT IN THE BRACKET STORE
    closingBrackets.includes(bracket)? (bracket === bracketMap[store[store.length - 1]] ? store.pop(): false ) : false;
  });


//RETURN VALID IF STORE IS EMPTY ELSE RETURN INVALID
return store.length === 0 ? `valid`: `invalid`
};

console.log(isValid('{]'))
module.exports = isValid;
