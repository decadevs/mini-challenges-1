/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {

        let bracket =   str.split("");
        let open = [];
     
        let value = {
             '(' : ')',
             '[' : ']',
             '{' : '}'
        };
     
     
             for (let index = 0; index < bracket.length; index++) {
                 
                 if ( bracket[index] =='(' || 
                      bracket[index] == '{'|| 
                      bracket[index] == '[') {
     
                          open.push(bracket[index]);
     
     
     
                     
                 } else {
     
     
                     let last = open.pop();
                   
                     if ( bracket[index] !== value[last] ){
     
                         return "invalid";
                     }
                 }
                 
             }
     
             if ( open.length !== 0 ){
     
                 return "invalid";
     
             } else {
     
                 return "valid";
             }
     
       

}

module.exports = isValid;
