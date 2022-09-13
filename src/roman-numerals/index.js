/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
// Javascript program to convert Roman
// Numerals to Numberspublic
// This function returns value of
// a Roman symbol
function value(roman)
{
	if (roman == 'I')
		return 1;
	if (roman == 'V')
		return 5;
	if (roman == 'X')
		return 10;
	if (roman == 'L')
		return 50;
	if (roman == 'C')
		return 100;
	if (roman == 'D')
		return 500;
	if (roman == 'M')
		return 1000;
	return -1;
}

// Finds decimal value of a given
// romal numeral
function romanToDecimal(str)
{
	// Initialize result
	var res = 0;

	for (i = 0; i < str.length; i++)
	{
		// Getting value of symbol s[i]
		var s1 = value(str.charAt(i));

		// Getting value of symbol s[i+1]
		if (i + 1 < str.length)
		{
			var s2 = value(str.charAt(i + 1));

			// Comparing both values
			if (s1 >= s2)
			{
				// Value of current symbol
				// is greater or equalto
				// the next symbol
				res = res + s1;
			}
			else
			{
				// Value of current symbol is
				// less than the next symbol
				res = res + s2 - s1;
				i++;
			}
		}
		else
		{
			res = res + s1;
		}
	}
	return res;
}

// Driver Code
// Considering inputs given are valid
var str = "DCCCXLVIII";
console.log(
"Integer form of Roman Numeral" +
" is " + romanToDecimal(str));


module.exports = romanToDecimal;
