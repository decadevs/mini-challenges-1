/**
 * Christopher-moses
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 function getValue(rom)
 {
     if (rom == 'I')
         return 1;
     if (rom == 'V')
         return 5;
     if (rom == 'X')
         return 10;
     if (rom == 'L')
         return 50;
     if (rom == 'C')
         return 100;
     if (rom == 'D')
         return 500;
     if (rom == 'M')
         return 1000;
     return -1;
 }

 // to get the decimal value of a given roman numeral pass the above function into the main function and write the logic
 function romanToDecimal(roman)
 {
     // Initialize resultIn
     var resultIn = 0;

      for (i = 0; i < roman.length; i++)
      {
          // Assign the values at given point to r1 and r2 for the value of symbol rom[i]
          var r1 = getValue(roman.charAt(i));

          // Getting value of symbol rom[i+1]
          if (i + 1 < roman.length)
          {
              var r2 = getValue(roman.charAt(i + 1));

              // Comparing both values
              if (r1 >= r2)
              {
                  // Value of current symbol
                  // is greater or equalto
                  // the next symbol
                  resultIn = resultIn + r1;
              }
              else
              {
                  // Value of current symbol is
                  // less than the next symbol
                  resultIn = resultIn + r2 - r1;
                  i++;
              }
          }
          else
          {
              resultIn = resultIn + r1;
          }
      }
      return resultIn;
 }


module.exports = romanToDecimal;
