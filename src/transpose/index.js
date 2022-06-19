/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */

function transpose(array) {
  let newArray = [];
  for (let i = 0; i < array[0].length; i++) {
    let newRow = [];
    for (let j = 0; j < array.length; j++) {
      newRow.push(array[j][i]);
    }
    newArray.push(newRow);
  }
  return newArray;
}

module.exports = transpose;
