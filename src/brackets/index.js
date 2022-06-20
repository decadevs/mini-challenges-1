/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
// function isValid(str) {
//   const box = { "{": "}", "(": ")", "[": "]" };
//   const newArray  = [];
//   for (let character of str){
//     if (box[character]){
//       newArray.push(box[character])
//     }else if (newArray.length > 0 && newArray[newArray.length -1] === character) {
//       newArray.pop()
//     }else { return "invalid" }
//   }
//   return "valid";
// }

// module.exports = isValid;

/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
  */
 function isValid(str) {

  let temporaryStack = [];
  for ( let i of str ){
    if ( i === '{' || i === '[' || i === '('){
      temporaryStack.push(i);
    }else if (temporaryStack.lenght !== 0 && i == '}' && temporaryStack[ temporaryStack.length - 1] === '{') {
      temporaryStack.pop();
    }else if (temporaryStack.length !== 0 && temporaryStack[temporaryStack.length - 1] === '[' && i === ']'){
      temporaryStack.pop();
    }else if (temporaryStack.length !== 0 && temporaryStack[temporaryStack.length - 1] === '(' && i === ')'){
      temporaryStack.pop();
    }else {
      return 'invalid';
    }
 }
  return temporaryStack.length ? 'invalid' : 'valid'
}

module.exports = isValid;
