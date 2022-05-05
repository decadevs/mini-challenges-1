/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    
    for(let i=0; i<str.length; i++){
        let tag = str[i];
        if(!check_balance_within_bracket(str,"{", i)){
            return "invalid";
        }
        if(!check_balance_within_bracket(str,"[",i)){
            return "invalid";    
        }
        if(!check_balance_within_bracket(str,"(", i)){
            return "invalid";
        }
        
        
    }
    return "valid";
}




function check_balance_within_bracket(str, bracket_type, str_cursor){
    let openings = ["{", "[", "("];
    let closings = ["}", "]", ")"];

    
    index_of_bracket_type = openings.findIndex(bracket_type);
    
    if(index_of_bracket_type != -1){

        let other_opening_brackets = openings.splice(index_of_bracket_type,1);
        let other_closing_brackets = closings.splice(index_of_bracket_type,1);
    
        let bracket_1_count = 0;
        let bracket_2_count = 0;

        let j = str_cursor;
        while(str[j] != closings[index_of_bracket_type]){
            if(str[j] == other_opening_brackets[0] || str[j] == other_closing_brackets[0]){
                bracket_1_count++;
            }

            if(str[j] == other_opening_brackets[1] || str[j] == other_closing_brackets[1]){
                bracket_2_count++;
            }
            j++;

        }
        if((bracket_1_count % 2 != 0) || (bracket_2_count % 2 != 0)){
            return false;
        }else{
            return true;
        }
        return false;
    }
}

module.exports = isValid;
