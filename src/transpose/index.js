/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let outcome = [];

  for (let row = 0; row < array.length; row++) {
    for (let column = 0; column < array[row].length; column++) {
      if (!outcome[column]) outcome[column] = [];
      outcome[column][row] = array[row][column];
    }
  }
  return outcome;
}

module.exports = transpose;
