/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
const romanToDecimal = function(s) {
  let romanNumeral = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000,
  };
  let outcome = 0;
  // Iterating through the given roman Numerals
  for ( let i =0; i < s.length; i++) {
    let currentDecimal= romanNumeral[s.charAt(i)];
    let nextDecimal = romanNumeral[s.charAt(i + 1)];
//  checking if there is nextDecimal else add currentDecimal to outcome
    if (nextDecimal) {
// if currentDecimal is greater than nextDecimal Add, else subtract from currentDecimal and add to outcome
      if (currentDecimal >= nextDecimal) {
        outcome += currentDecimal ;
    } else {
      outcome += (nextDecimal - currentDecimal);
      i++;
    }
  }else {
    outcome += currentDecimal;
  }
}
return outcome;
};

module.exports = romanToDecimal;
