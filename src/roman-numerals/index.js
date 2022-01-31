/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

const converter = {
 I: 1,
 V: 5,
 X: 10,
 L: 50,
 C: 100,
 D: 500,
 M: 1000,
};

function romanToDecimal(roman) {

  let final = 0;

 for(let i = 0; i < roman.length; i++) {
    if(roman[i] === "I" && roman[i + 1] === "V") {
      final += 4;
      i++;
   } else if(roman[i] === "I" && roman[i + 1] === "X") {
      final +=9;
      i++;
   } else if(roman[i] === "X" && roman[i + 1] === "L") {
      final +=40;
      i++;
  } else if (roman[i] === "X" && roman[i + 1] === "C") {
      final +=90;
      i++;
  } else if (roman[i] === "C" && roman[i + 1] === "D") {
      final +=400;
      i++;
  } else if (roman[i] === "C" && roman[i + 1] === "M") {
      final +=900;
      i++;
  } else {
      final += converter[roman[i]]
  }
 }  return final;
}


module.exports = romanToDecimal;
