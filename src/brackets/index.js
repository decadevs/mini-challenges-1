/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let arr_bracket = []
  let arr_bracket2 = []
  for (let index = 0; index < str.length; index++) {

    if(str[index] === '[' || str[index] === '{'|| str[index] === '('){
      arr_bracket.push(str[index])
    }


    let arrLength = arr_bracket.length - 1;

    if(str[index] === ']' || str[index] === '}'|| str[index] === ')'){
      arr_bracket2.push(str[index])

      if(arr_bracket[arrLength] === '[' && str[index] === ']' || arr_bracket[arrLength] === '{' && str[index] === '}' || arr_bracket[arrLength] == '(' && str[index] === ')'){
      arr_bracket.pop()
      arr_bracket2.pop()
    }
  }


  }
  if(arr_bracket.length == 0 && arr_bracket2.length > 0){
    return 'invalid'
  }else if(arr_bracket.length > 0 && arr_bracket2.length == 0){
     return 'invalid'
  }else if(arr_bracket.length == 0 && arr_bracket2.length == 0){
    return 'valid'
 }else if(arr_bracket.length > 0 && arr_bracket2.length > 0){
  return 'invalid'
}

}


module.exports = isValid;


