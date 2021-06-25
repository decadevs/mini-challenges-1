/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    // For example, `{[()[]]()}()` is valid, but `[(])` is not. Given a string, your function should determine if it is valid or not.
    
    let brackets = {
    "}":"{",
    ")":"(",
    "]":"["
 }
 let closedBracketsCollection = Object.keys(brackets);//Create an array using the keys in the object
 let openBracketsSaver = []  //create an array that will hold open brackets,parenthesis and open square brackets(comments where i use brackets i mean square,parenthesis, and braces )

 for(let elem of str){//loop through the string given in the function
     if(closedBracketsCollection.indexOf(elem) == -1 ){//if the elements in the string doesnt exist in closedBracketsCollection...
         openBracketsSaver.push(elem)// push it to openBracketsSaver, which keeps the open brackets
     }
     else if(openBracketsSaver[openBracketsSaver.length-1] == brackets[elem]){//if a closed bracket is encountered.. 
        //check the value of the closed bracket in the "brackets" object...(the value ought to be an open bracket right??)..now compare the value with the last element in the Open bracket collection.e.g the value of ")" should be "(". if the last element of the open bracket array is "(" and the value of ")" is "(" remove it from our array
         openBracketsSaver.pop()

     }else{
         return "invalid"//if non of the conditions above is met return invalid
     }
 }
 if(openBracketsSaver.length == 0){//if everything has been popped from the openBrackets then return valid
     return "valid"
 }else{
     return "invalid"//if everything wasnt popped out return invalid
 }

}

console.log(isValid("{[()[]]()}()"))

module.exports = isValid;


/** Always check for patterns between input and outputs to assist in creating the algorithms that will lead to the desired output*/ 