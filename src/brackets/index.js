/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let result = [];
    for (let i = 0; i<str.length; i++){ // iterate through the string
        let bindx = str.indexOf(str[i]) // to obtain the index of each opening bracket
        if(bindx % 2 === 0){
            result.push(bindx + 1) // push the even bracket into result for comparism.
        }else{
            if(result.pop() !== bindx){ // to check if we cannot find a bracket that match
                return "invalid"
            }
        }
        // if(result.length === 0){ // return true if there is no bracket left in result else return false.
        //     return "valid";
        // }
    }
    return (result.length !== 0) ? "invalid": "valid"
}

module.exports = isValid;


