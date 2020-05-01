/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(romanNumeral)
{
    //create an object with the basic roman numeral to be referenced
    const romanDecimal = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
    
    //collect the keys i.e the roman letters and store it for reference
    const romanKeys = Object.keys(romanDecimal);
    
	let resultInNumber = 0;//initialize placeholder to hold result as the conversion is  been made.
	
    //make sure all user input is in uppercase, if not, convert it to uppercase
    const romanNumerals = romanNumeral.toUpperCase();
	
	for (let letter of romanNumerals)
	{

		if (romanKeys.indexOf(letter) === -1)
		{
            //if any of the letter in the input string parameter is not contained in the roman keys
            return `invalid roman figure ${letter}`;
            
		}
	}
	
	for (let i = 0; i < romanNumerals.length; i++)
	{
	
		let num1 = romanDecimal[romanNumerals[i]];
			
		if ((i + 1) < romanNumerals.length)//ensure input string length is morethan the ith value before this operation
		{
            
			let num2 = romanDecimal[romanNumerals[i + 1]];
				
			if(num1 >= num2)
			{

                resultInNumber += num1;
                
			}			
			else
			{
                //subtract from the higer value the smaller one 
				resultInNumber += num2 - num1;
                i++; //start from the next inline not the current i + 1
                
            }
            
		}
		else
		{

            resultInNumber += num1;
            
        }
        
	}
	
	return resultInNumber;

}

module.exports = romanToDecimal;
