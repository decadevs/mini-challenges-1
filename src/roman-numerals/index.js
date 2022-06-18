/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman)
{
  const numerals = {
    'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000
  }
  const negatives = ['I','X','C'];

  let numeric = 0;
  for (let i = 0; i < roman.length; i++)
  {
    //check up to penultimate numeral for an increasing order of numerals
    if (i < roman.length - 1 && numerals[roman[i]] < numerals[roman[i + 1]])
    {
      //order of numerals signifies subtraction. Confirm with known subtractors
      if (negatives.includes(roman[i]))
      {
        numeric -= numerals[roman[i]];
      }
    }
    else
    {
      //default behavior- add corresponding numeric value
      numeric += numerals[roman[i]];
    }
  }
  return numeric;
}

module.exports = romanToDecimal;
