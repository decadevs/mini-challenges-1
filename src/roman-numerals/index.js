/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 function romanToDecimal(roman) {
  let romanToDecimal = {
      I : 1,
      V : 5,
      X : 10,
      L : 50,
      C : 100,
      D : 500,
      M : 1000
  }
  let total = 0;
  for(i = 0; i < roman.length; i++) {
      let firstRoman = romanToDecimal[roman.charAt(i)];
      let secRom = romanToDecimal[roman.charAt(i + 1)];

      if(secRom) {
          if(firstRoman >= secRom) {
              total += firstRoman;
          } else {
              total += (secRom - firstRoman);
              i++;
          }
      } else {
          total += firstRoman;
      }
  }
      return total;
};

module.exports = romanToDecimal;
