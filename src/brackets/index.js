/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    //Proposed step

    //declare empty bracket validator array
    //initialize loop pointer of str to 0
    //push each str into bracket validator
    //check current str with previous str properties that they conform with rules
    //rules are- type must be same and current str style must be close while previous str style must be open
    //pop out str that conform
    //continue


    //declare bracket type and style
    const bracket_box={
        "[":{type:"bracket",style:"open"},
        "]":{type:"bracket",style:"close"},
        "{":{type:"curly",style:"open"},
        "}":{type:"curly",style:"close"},
        "(":{type:"parenthesis",style:"open"},
        ")":{type:"parenthesis",style:"close"}
    }


 




}

module.exports = isValid;
