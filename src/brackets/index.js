/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
let arr=[];
let list= {
'(':')',
'[':']',
'{':'}',
}

for(let iteration of str){
if(list[iteration]){
  arr.push(list[iteration])

}
else if(arr.length>0 && arr[arr.length-1] === iteration){
  arr.pop();
}
else{
  return 'invalid'
}


}
if( arr.length === 0){
  return "valid"
}
else{ return "invalid"}


}
console.log(isValid("(())"))
module.exports = isValid;
