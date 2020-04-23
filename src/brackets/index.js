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

    const bracket_validator=[];
    let i = 0;

    while(i<str.length){
        if(bracket_box.hasOwnProperty(str[i])){
            if(bracket_validator.length===0){
                bracket_validator.push(bracket_box[str[i]])
            }
            else{
                bracket_validator.push(bracket_box[str[i]])
                //check if bracket_validator has more than one str
                if(bracket_validator.length>1){
                    if((bracket_validator[bracket_validator.length-1].type===bracket_validator[bracket_validator.length-2].type) && (bracket_validator[bracket_validator.length-1].style==='close' && bracket_validator[bracket_validator.length-2].style==='open')){
                        bracket_validator.pop()
                        bracket_validator.pop()
                    }
                }
            }

        }
        else{
            return "invalid"
        }

        i+=1;

    }

    //if bracket_validator has zero length and str has length greater than zero, then Valid else Invalid

    if(bracket_validator.length===0 && str.length>0){
        return 'valid'
    }
    else{
        return 'invalid'
    }
}

module.exports = isValid;
