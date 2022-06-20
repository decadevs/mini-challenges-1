/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */


function isValid(str) {
let leftBracketArr = []; //will contain all left brackets
let rightBracketArr = []; //will contain all right brackets
for(let i=0; i < str.length; i++){
  let singleBracket = str[i]; //isolate single char in input string
  if(singleBracket === '(' || singleBracket === '[' || singleBracket === '{'){
    leftBracketArr.push(str[i]);
  }
  let arrLength = leftBracketArr.length - 1; //gets the first index of half part in a recursive manner

  if(singleBracket === ')' || singleBracket === ']' || singleBracket === '}'){
    rightBracketArr.push(str[i]);
    if(leftBracketArr[arrLength] === '[' && str[i] === ']'|| leftBracketArr[arrLength] === '('&& str[i] === ')'|| leftBracketArr[arrLength] === '{'&& str[i] === '}'){
      leftBracketArr.pop();
      rightBracketArr.pop();
    }
  }
}
 if(leftBracketArr.length == 0 && rightBracketArr.length == 0){
  return 'valid';
}
else{
  return 'invalid';

}

}


module.exports = isValid;
