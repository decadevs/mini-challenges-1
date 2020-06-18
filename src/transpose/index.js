/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let arrayTranspose = [];
  while (array[0].length > 0) {
    let newRow  = [];
    for (let i = 0; i < array.length; i++) {
      newRow.push(array[i].shift());
    }
    arrayTranspose.push(newRow);
  }
  return arrayTranspose;
}

module.exports = transpose;
