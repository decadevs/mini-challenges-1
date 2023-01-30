/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    
 let stck = []

 for(let i = 0; i < str.length; i++){
        let char = stck[stck.length - 1]
        if(str[i] == "(" || str[i] == "{" || str[i] == "[") {
            stck.push(str[i]);

        } else if ((char == "(" && str[i] == ")") || (char == "{" && str[i] == "}" || (char == "[" && str[i] == "]"))){
            stck.pop();
        }else{
            return "invalid";
        }
 }
return stck.length ? "invalid" : "valid";
}

module.exports = isValid;
