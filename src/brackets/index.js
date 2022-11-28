/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
 function isValid(str) {
    var arr = [];
    var output = '';
    if (str.length % 2 !== 0) {
        return "invalid";
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            arr.push(')');
        }else if(str[i] == "["){
            arr.push(']');
        }else if(str[i] == '{'){
            arr.push('}');
        }else if(arr.pop() != str[i]){
            return "invalid";
        }
        
    }
    if(!str.length == false){
        return 'invalid'
    };
    return 'valid';
}

module.exports = isValid;
//console.log(isValid('{('))
