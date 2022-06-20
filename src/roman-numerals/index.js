/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

  function romanToDecimal(roman) {
    let input = roman.toUpperCase();
    let i = 0;
    let total = 0;

    const obj ={
      I : 1,
      V : 5,
      X : 10,
      L : 50,
      C : 100,
      D : 500,
      M : 1000,

    }

    while(i < input.length){
      let present = input[i]
      let next = input[i + 1]

      if(obj[present] < obj[next]) {
        total += obj[next] - obj[present];
        i += 2;

      }else{
        total += obj[present];
        i++;
      }
    }
    return total;
  }

console.log(romanToDecimal('mmm'));
module.exports = romanToDecimal;

