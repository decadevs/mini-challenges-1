/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) 
{
    
    for(let i=0; i<str.length; i++)
    {
        let tag = str[i];
        let openings = ["{", "[", "("];
        if(openings.indexOf(str[i]) == -1)
        {
            continue;
        }
        if(!check_balance_within_bracket(str, tag, i))
        {
            return "invalid";
        }
        
        
    }
    return "valid";
}




function check_balance_within_bracket(str, bracket_type, str_cursor)
{
    let openings = ["{", "[", "("];
    let closings = ["}", "]", ")"];
    
    // check if element is in opening bracket 
    index_of_bracket_type = openings.indexOf(bracket_type.toString());
    if(index_of_bracket_type != -1)
    {
        
        let closings_2 = closings;
        let openings_2 = openings;
        
        // To Delete the element from the arrays;
        // Found out array.splice changes the value of the original array
        // So i convert to string; Str.replace element with ""; and reconvert to array
        let other_opening_brackets = openings_2.join("+").replace(openings_2[index_of_bracket_type] + "+", "").split("+");
        let other_closing_brackets = closings_2.join("+").replace(closings_2[index_of_bracket_type] + "+", "").split("+");
        
        let opening_bracket_1_count = 0;
        let closing_bracket_1_count = 0;
        let opening_bracket_2_count = 0;
        let closing_bracket_2_count = 0;

        //Collating the number of ecch type of brackets within the opening and closing of a bracket
        let j = str_cursor;
        while(str[j] != closings[index_of_bracket_type])
        {
            // Collating opening or closing brackets for other opening bracket 1;
            if(str[j] == other_opening_brackets[0])
            {
                opening_bracket_1_count++;
            }
            if(str[j] == other_closing_brackets[0])
            {
                closing_bracket_1_count++;
            }

            // Collating opening or closing brackets for other opening bracket 2;
            if(str[j] == other_opening_brackets[1])
            {
                opening_bracket_2_count++;
            }
            if(str[j] == other_closing_brackets[1])
            {
                closing_bracket_2_count++;
            }
            j++;

        }
        
        //if opening and closing brackets are equal for both other brackets
        if((opening_bracket_1_count == closing_bracket_1_count) && (opening_bracket_2_count == closing_bracket_2_count))
        {
            return true;
        }

    }
    else
    {

        return false;
    }
}

console.log(isValid(`{[()[]]()}()`));
module.exports = isValid;
