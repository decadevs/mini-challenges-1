/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
        let newArr = str.split('');

        let nextArr =[];

        if (newArr[0]=== '}' || newArr[0]=== ']' || newArr[0]=== ')') {
            return 'invalid'
        }

        for(let i = 0; i < newArr.length;i++){


            if(newArr[i] === "{" || newArr[i] === "[" || newArr[i] === "("){
                nextArr.push(newArr[i]);
            };
            if(nextArr[nextArr.length - 1] === '{' && newArr[i] === '}'){
                nextArr.pop();
            }else if(nextArr[nextArr.length - 1] === '(' && newArr[i] === ')'){
                nextArr.pop()
            }else if(nextArr[nextArr.length - 1] === '[' && newArr[i] === ']'){
                nextArr.pop()
            }


            
        }
    
        console.log(nextArr)
        if(nextArr.length === 0){
            return 'valid'
        }else{
            return 'invalid'
        }
    }  


module.exports = isValid;
