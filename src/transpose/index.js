/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 function transpose(array) {
  const resultArray = [];

  for (let i = 0; i < array[0].length; i++) {
    const columns = []
    for (let j = 0; j < array.length; j++) {
      columns.push(array[j][i]);
    }
    resultArray.push(columns)
  }

  return resultArray
};
module.exports = transpose;
