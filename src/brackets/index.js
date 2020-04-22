/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
/**
 * MY ALGORITHM
 * 1. create an empty stack
 * 2. create  an obj with key value pairs made up of the various opening and closing of the brackets
 * 3. loop through the string
 *      1. if a particular char is an open bracket push it to the stack
 *      2. else pop-off the last char in the stack and compare it with the current char in the loop
 *      3. if they dont match as key value pair return 'invalid'
 * 4. After the iteration, if there is any char left in the stack return 'invalid'
 * 5. Else return 'valid'
 * 
 */
function isValid(str) {
      let stack = []
    let map = {'(':')', '{':"}",'[':']'};

    for(let i = 0; i < str.length; i++){
        let char = str[i]
        if(char === '('||char === '['||char === '{'){
            stack.push(i)
        }
        else{
            let last = stack.pop();
            if(char !== map[str[last]]){
                return 'invalid';
            }
            }
        }
        if(stack.length !== 0){
           return 'invalid'
        }
        return 'valid';
        
       
}
     

module.exports = isValid;
