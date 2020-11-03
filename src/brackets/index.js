/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
// function isValid(str) {
    // let map = {
    //     '(': ')',
    //     '[': ']',
    //     '{': '}'
    // }
    // let result = [];
    // for (let i = 0; i<str.length; i++){ // iterate through the string
    //     if(str[i]=== "(" || str[i]=== "[" || str[i]=== "{"){
    //         result.push(str[i])
    //     // let bindx = str.indexOf(str[i]) // to obtain the index of each opening bracket
    //     // if(bindx % 2 === 0){
    //     //     result.push(bindx + 1) // push the even bracket into result for comparism.
    //     }else{
    //         if(str[i] !== result.pop()){ // to check if we cannot find a bracket that match
    //             return "invalid"
    //         }
    //     }
    //     // if(result.length === 0){ // return true if there is no bracket left in result else return false.
    //     //     return "valid";
    //     // }
    // }
    // return (result === []) ? "valid": "invalid"
// }

const isValid = (str) => {
    let result = [];
    // let result2 = [];
    for(let i = 0; i<str.length; i++){
        if(str[i] === "(" || str[i] === "[" || str[i] === "{" ){
            result.push(str[i]);
      }
        if(str[i] === ")" || str[i] === "]" || str[i] === "}" ){
            if(result[result.length]-1 == "(" && str[i] == ")"){
                result.pop()
            }else if(result[result.length]-1 == "[" && str[i] == "]"){
                result.pop()
            }else if(result[result.length]-1 == "{" && str[i] == "}"){
                result.pop()
            }else{
                return "invalid"
            }

      }
    // return (result.length > result2.length || result.length < result2.length || result.length !== result2.length) ? "invalid" : "valid"
    }
    // result2.reverse();
    // for(let j = 0; j<result.length; j++){
    //     if(result[j] !== result2){
    //         return "invalid"
    //     }
    // }
    return result.length === 0 ? "valid" : "invalid";
}

module.exports = isValid;