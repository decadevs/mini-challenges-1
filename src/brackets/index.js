/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let stack = []
    for(let i in str){
        let x = stack.length -1
        if(str[i]=='(' || str[i]=='{' || str[i]=='['){
            stack.push(str[i])
        }
        else{
        if(str[i]==')' && stack[x]== '('){
            stack.pop()
        }
        else if(str[i]=='}' && stack[x]== '{'){
            stack.pop()
        }
        else if(str[i]==']' && stack[x]=='['){
            stack.pop()
        }
        else{
            return 'invalid'
        }
        
        }
    }
    return stack.length > 0 ? 'invalid' : 'valid'
}

module.exports = isValid;
