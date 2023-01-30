/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let result = [];
  // The length of the inner array is the same as the length of of the outer array.
  for (let i = 0; i < array[0].length; i++) {
    let newArray = [];
    for (let j = 0; j < array.length; j++) {
      newArray.push(array[j][i]);
    }
    result.push(newArray);
  }
  return result;
}

module.exports = transpose;
