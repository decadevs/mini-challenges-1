/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid(str) {

    let openNormalBracket = "(";
    let closeNormalBracket = ")";

    let openCurlyBracket = "{";
    let closeCurlyBracket = "}";

    let openSquareBracket = "[";
    let closeSquareBracket = "]";
    let thicker = "["

    let splitString = str.split("");

    let countOpenNormalBracket = 0;
    let countCloseNormalBracket = 0;

    let countOpenCurlyBracket = 0;
    let countCloseCurlyBracket = 0;

    let countOpenSquareBracket = 0;
    let countCloseSquareBracket = 0;



    for(i = 0; i < splitString.length; i++){
        if(openNormalBracket == splitString[i]){
            countOpenNormalBracket += 1;      
        }
    }

    for(i = 0; i < splitString.length; i++){
        if(closeNormalBracket == splitString[i]){    
            countCloseNormalBracket += 1;  
        }
    }

    for(i = 0; i < splitString.length; i++){
        if(openCurlyBracket == splitString[i]){
            countOpenCurlyBracket += 1;      
        }
    }

    for(i = 0; i < splitString.length; i++){
        if(closeCurlyBracket == splitString[i]){    
            countCloseCurlyBracket += 1;  
        }
    }
    
    for(i = 0; i < splitString.length; i++){
        if(openSquareBracket == splitString[i]){
            countOpenSquareBracket += 1;      
        }
    }

    for(i = 0; i < splitString.length; i++){
        if(closeSquareBracket == splitString[i]){    
            countCloseSquareBracket += 1;  
        }
    }
    

    if( countOpenNormalBracket === countCloseNormalBracket && countOpenCurlyBracket === countCloseCurlyBracket && 
    countOpenSquareBracket === countCloseSquareBracket ){
        return "valid";
    }else{
        return "invalid";
    }


}


module.exports = isValid;
