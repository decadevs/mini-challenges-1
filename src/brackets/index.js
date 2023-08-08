/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
    function isValid(str){
      let arrBracket = [];
        for(let i = 0; i < str.length; i++){
            let bra = arrBracket.length - 1
            if (str[i] == '(' || str [i] =='{' || str[i] == '['){
                arrBracket.push(str[i]);
            }else{
                if(str[i] == ')' && arrBracket[bra] == '('){
                     arrBracket.pop();
    
                }else if( str[i] == '}' && arrBracket[bra] == '{'){
                    arrBracket.pop();
    
                }else if(str[i] ==']' && arrBracket[bra] =='['){
                    arrBracket.pop();
                } else{
                    return 'invalid'
                }
            }
          }
        return arrBracket.length > 0? 'invalid': 'valid';
    }

module.exports = isValid;
