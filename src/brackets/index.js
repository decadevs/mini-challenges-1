/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    const strAr = str.split("");
    const result = [];
    for (let i = 0; i < str.length; i++) {
      if (strAr[i] == "{" || strAr[i] == "[" || strAr[i] == "(") {
        result.push(strAr[i]);
      }
      if (strAr[i] == "}" || strAr[i] == "]" || strAr[i] == ")") {
        if (result[result.length - 1] == "{" && strAr[i] == "}") {
          result.pop();
        } else if (result[result.length - 1] == "[" && strAr[i] == "]") {
            result.pop();
        } else if (result[result.length - 1] == "(" && strAr[i] == ")") {
            result.pop();
        } else {
          return "invalid";
        }
      }
    }
    return result.length === 0 ? "valid" : "invalid";
  }

// const isValid = (str) => {
//     let result = [];
//     let result2 = [];
   
//     for(let i = 0; i<str.length; i++){
//         if(str[i] === "(" || str[i] === "[" || str[i] === "{" ){
//             result.push(str[i]);
//       }
//         if(str[i] === ")" || str[i] === "]" || str[i] === "}" ){
//             result2.push(str[i]);

//       }
//     return (result.length > result2.length || result.length < result2.length || result.length !== result2.length) ? "invalid" : "valid"
//     }
//     let newResult = result2.reverse();
//     for(let j = 0; j<result.length; j++){
//         if(result[j] !== newResult[j]){
//             return "invalid"
//         }
//     }
//     return "valid"
// }

module.exports = isValid;