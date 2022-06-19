/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let total = 0;
  let input = roman.toLowerCase();
   let i = 0;

  const converter = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  }

  while (i < input.length) {
    let current = input[i];
    console.log(current)
    let next = input[i + 1];
    console.log(next)

    if (converter[current] < converter[next]) {
      total += converter[next] - converter[current]
      i += 2
    }
     else {
    total += converter[current]
      i++
  }
}
  return total;
}

module.exports = romanToDecimal;
