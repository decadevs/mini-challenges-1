/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
    function isValid(str) {
        let block = []
        let pair = {
            "(":")",
            "{":"}",
            "[":"]",
            "<":">"}


        if(str.length % 2 !== 0){return "invalid"}
                // if the string of brackets are not even there's no way the code can be valid//

            for(let j=0; j< str.length; j++){

                if(str[j] == "(" || str[j] == "{" || str[j] == "[" || str[j] == "<"){
                    block.push(str[j])
                }
               
                else if(str[j] == ")" || str[j] == "}" || str[j] == "]" || str[j] == ">") {
                    let substr= block.pop()

                if( pair[substr] !== str[j]){return "invalid"}
                    } }
            if(block.length !== 0){ return "invalid"}
            
    return "valid"
                }

module.exports = isValid;

