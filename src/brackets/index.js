/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {

    const openBrackets = ['[','{','('];
    const closeBrackets = [']','}',')'];
    
    let stack = [];
    
    for(let i = 0; i < str.length; i++){
        if(str[0] == closeBrackets.includes(str[0]) || str.length % 2 !== 0){
           return('invalid')
            
        }
        if(closeBrackets.includes(str[str.length - 1]) == false){
            return ('invalid')
        }
       if(openBrackets.includes(str[i])){
            stack.push(str[i])
       }
       if(closeBrackets.includes(str[i])){
        let lastOpen = stack.pop()
        if(closeBrackets.indexOf(str[i]) !== openBrackets.indexOf(lastOpen)){
            return ('invalid')
            }
       }
    } return ('valid')

}

isValid('{{}');
module.exports = isValid;