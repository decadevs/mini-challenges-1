/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let arr = []
    for(let i = 0; i < str.length; i++){
        let character = str.charAt(i)
        switch(character){
            case "(":
                arr.push(")")
                break;
            case "{":
                arr.push("}")
                break;
            case "[":
                arr.push("]") 
            default:
                if(character !== arr.pop()){
                    return "invalid"
                }
        }
    }
    if(arr.length == 0){
        return "valid"
    }
}

module.exports = isValid;
