/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str){
    let openingBrace = [ '(', '[', '{']
    let closingBrace = [ ')', ']', '}']
    let array = []
    for (let index = 0; index < str.length; index++) {
        if (openingBrace.includes(str[index])) {
            array.push(str[index])
        } 
        else if (closingBrace.indexOf(str[index]) === openingBrace.indexOf(array[array.length - 1])) {
            array.pop()
        } 
        else{
          return "invalid"

        } 
    } 
    if(array.length === 0){
      return 'valid'
    }
    else{
      return 'invalid'
    }
}

module.exports = isValid;
