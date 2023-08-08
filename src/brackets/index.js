/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str){
    let pack = []
    for (let i=0; i<str.length;i++){
        let x = pack.length-1
        if(str[i] =='(' || str[i]=='[' || str[i]=='{'){
            pack.push(str[i])
        }
        else{
        if(str[i]==')' && pack[x]=='('){
            pack.pop()
        }
        else if (str[i]=='}' && pack[x]== '{'){
            pack.pop()
        }
        else if(str[i]== ']' && pack[x]=='['){
            pack.pop()

        }
        else {
            return 'invalid'
        }
    }


    }
    return pack.length > 0 ? 'invalid' : 'valid'
}

module.exports = isValid;


