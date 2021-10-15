/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let x = 0;
  let output = [];
  let outputI = [];
  while (x < array[0].length) {
    for (let i = 0; i < array.length; i++) {
      outputI.push(array[i][x]);
    }

    output.push(outputI);
    outputI = [];
    x++;
  }
  return output;
}

module.exports = transpose;
