/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let decimal = 0;
  let index = 0;

  const figure = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  while (index < roman.length) {
    // console.log(roman.length)
    let start = roman[index];
    // console.log(start)
    let next = roman[index + 1];
    // console.log(next)
    if(figure[start] < figure[next]) {
      decimal += figure[next] - figure[start]
      index += 2
    }
    // start = X, next = I... the if block will not run, the else block will run instead
    else {
      decimal += figure[start]
      index++;
    }
  }
  return decimal;
}

module.exports = romanToDecimal;
