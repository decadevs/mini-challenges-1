/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
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
