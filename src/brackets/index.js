/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  if(str.length % 2 === 1) return "invalid";
  let main = []

  for (let i = 0; i < str.length; i++){
    let char = str[i]
    if (char === "{" || char === "[" || char === "("){
      main.push(char)
      //console.log(main)

    }else{
      if(main.length === 0){
        return "invalid"
      }
      const popped = main.pop()
      if (char === "}" && popped.indexOf("{") === -1 || char === "]" && popped.indexOf("[") === -1 || char === ")" && popped.indexOf("(")=== -1){
      return "invalid"
    }
    }
    }
    //console.log(main)

    if (main.length !== 0){
      return "invalid"
    }else {
      return "valid"
    }
}

module.exports = isValid;
