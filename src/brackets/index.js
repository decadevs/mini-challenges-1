/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str){
    const brackets = '(){}[]'. split('');
    // console.log(brackets)
    let output = [];
    for(let bracket of str){
        let index = brackets.indexOf(bracket);
        if(index % 2 == 0){
            output.push(index+1);

        }else{
            if(output.pop() !== index){
                return 'invalid';
            }
        }
    }

    return output.length == 0 ? 'valid' : 'invalid';
}

  console.log(isValid('({})'));
 module.exports = isValid;