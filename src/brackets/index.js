/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let arrBra = str.split("");

    if(arrBra[0] === "}" || arrBra[0] === ")" || arrBra[0] === "]") {
        return "invalid";
    }
    
    let openArr = [];

    for(let i = 0; i < arrBra.length; i++) {
      if(arrBra[i] === "[" || arrBra[i] === "(" || arrBra[i] === "{") {
          openArr.push(arrBra[i]);
      }
      
      if(openArr[openArr.length - 1] === "(" && arrBra[i] === ")") {
          openArr.pop();
      } else if(openArr[openArr.length - 1] === "[" && arrBra[i] === "]") {
        openArr.pop();
      } else if(openArr[openArr.length - 1] === "{" && arrBra[i] === "}") {
        openArr.pop();
      } 
    }
    
    if(openArr.length === 0) {
        return "valid"
    } else {
        return "invalid"
    }
}

module.exports = isValid;
