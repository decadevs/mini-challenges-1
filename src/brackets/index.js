/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
       /* if(str.length % 2 !== 0) return
        ;
        let i = 0;
        let arr = []

        
        while(i < str.length) {
            if(str[i]=== "{" || str[i]=== "(" || str[i]=== "[") {
               arr.push(str[i]);
            } else if(str[i] === "}" && arr[arr.length-1] === "{") {
                arr.pop()
            } else if(str[i] === ")" && arr[arr.length-1] === "(") {
                arr.pop()
            } else if(str[i] === "]" && arr[arr.length-1] === "[") {
                arr.pop()
            } else {
                return "invalid";
            }
            i++
        }
    return 'valid';
    */

   if (str.length % 2 !== 0) {
        return 'invalid'
    }
    while(str.includes('()') || str.includes('[]') || str.includes('{}')){
        str = str.replace('{}', '').replace('()', '').replace('[]', '')
    }
    return str =  'valid'
    
   };
    console.log(isValid("{[()[]]()}()"))
    console.log(isValid('[(])'))


module.exports = isValid;
