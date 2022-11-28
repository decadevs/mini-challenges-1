/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let order = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
  }

  // defining major characters for ref purpose

  let dec = 0;

  let romanSplit = roman.split("")



  romanSplit.forEach((dig, i) => {
    if(order[dig] < order[romanSplit[i+1]]){
           return dec = dec - order[dig]
    }
     else dec += order[dig]
  });

  return dec;
}

console.log(romanToDecimal("IV"))

module.exports = romanToDecimal;


// DEC = 1000
// DEC = -1
// DEC = 5
