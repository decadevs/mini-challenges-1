/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */


// STACK OVERFLOW

//  syntaxChecker = (str) => {
//   let arrayStore = [];
//   // For each char in the string
//   [...str].forEach(bracket => {
//     // opened char ? add to the arrayStore
//     if ('([{'.includes(bracket)){
//       arrayStore.push(bracket);
//     }
//     // closed char ? check if match the last opened
//     else if (')]}'.includes(bracket)){
//       let top = arrayStore.pop();
//       if (! (bracket === ')' && top === '('
//           || bracket === ']' && top === '['
//           || bracket === '}' && top === '{')){
//         arrayStore.push(bracket);
//       }
//     }
//   });
//   // arrayStore empty = correct
//   return arrayStore.length === 0;
// }
function isValid(str) {
let leftBracketArr = [];
let rightBracketArr = [];
for(let i=0; i < str.length; i++){
  let singleBracket = str[i];
  if(singleBracket === '(' || singleBracket === '[' || singleBracket === '{'){
    leftBracketArr.push(str[i]);
  }
  let arrLength = leftBracketArr.length - 1;

  if(singleBracket === ')' || singleBracket === ']' || singleBracket === '}'){
    rightBracketArr.push(str[i]);
    if(leftBracketArr[arrLength] === '[' && str[i] === ']'|| leftBracketArr[arrLength] === '('&& str[i] === ')'|| leftBracketArr[arrLength] === '{'&& str[i] === '}'){
      leftBracketArr.pop();
      rightBracketArr.pop();
    }
  }
}
if(leftBracketArr.length == 0 && rightBracketArr.length >0){
  return 'invalid';
}
else if(leftBracketArr.length > 0 && rightBracketArr.length == 0){
  return 'invalid';
}
else if(leftBracketArr.length == 0 && rightBracketArr.length == 0){
  return 'valid';
}
else if(leftBracketArr.length > 0 && rightBracketArr.length > 0){
  return 'invalid';
}

}


module.exports = isValid;
