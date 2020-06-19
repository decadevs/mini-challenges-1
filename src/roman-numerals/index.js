/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
   acc = 0;
   for (let i = 0; i < roman.length; i++) {
      switch (roman[i]) {
         case "I":
            if (roman[i+1] == "V") {
               acc += 4;
               i++
            } else if (roman[i+1] == "X") {
               acc += 9; 
               i++
            } else acc+= 1;
            break;
         case "V":
            acc += 5;
            break;
         case "X":
            if (roman[i+1] == "L") {
               acc += 40;
               i++
            } else if (roman[i+1] == "C") {
               acc += 90; 
               i++
            } else acc+= 10;
            break;
         case "L":
            acc += 50;
            break;
         case "C":
            if (roman[i+1] == "D") {
               acc += 400;
               i++
            } else if (roman[i+1] == "M") {
               acc += 900; 
               i++
            } else acc+= 100;
            break;
         case "D":
            acc += 500;
            break;
         case "M":
            acc += 1000;
            break;
      }
   }
   return acc;
}

module.exports = romanToDecimal;
