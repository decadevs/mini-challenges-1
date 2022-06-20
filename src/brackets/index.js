/**
 * Implement the solution to brackets
 *
//  * @param {string} str The string of brackets.
//  * @returns {"valid" | "invalid"} Whether or not the string is valid.
//  */

  function isValid(str){
    //declare an object
    const brackets = {
      '(' : ')',
      '{' : '}',
      '[' : ']'
    };
  let store = [];
  let stack;
  for (let i = 0; i < str.length; i++){
  if(str[i] == '(' || str[i] == '{' || str[i] == '['){
    store.push(str[i]);
  }
  else{
stack = store.pop();

if (str[i] !== brackets[stack]){
  return 'invalid';
}

   };
  };

  if (store.length !== 0) {
    return 'invalid';
  }
  else return 'valid'
};

console.log(isValid('{()}'));

module.exports = isValid;
