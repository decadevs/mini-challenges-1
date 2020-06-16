/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  if(typeof roman !== "string"){
    throw TypeError("Not a valid entry, check input again");
  }
  let arrOfRoman = roman.split("");
  let map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  let decimal = 0;
  for(let i = 0; i < arrOfRoman.length; i++){
    decimal += map[arrOfRoman[i]];
    let prev = i - 1;
    if(arrOfRoman[prev] && map[arrOfRoman[i]] > map[arrOfRoman[prev]] ){
        decimal -= map[arrOfRoman[prev]];
        decimal -= map[arrOfRoman[prev]];
    }
  }
  return decimal;
}

module.exports = romanToDecimal;
