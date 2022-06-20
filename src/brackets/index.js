/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
 function isValid(str) {

  if (str.length === 0 ) return 'invalid'
  if (str.length % 2 !== 0 ) return 'invalid'
  while(str.includes ('()') || str.includes('{}') || str.includes('[]')){
    str= str.replace('()','').replace('{}','').replace('[]','')

  }

  return str=== '' ?'valid':'invalid'

  }


  module.exports = isValid;
