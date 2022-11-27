/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let newArr = [];

  for (let i = 0; i < array[0].length; i++) {
    newArr.push([]);
  }
  newArr
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      newArr[j].push(array[i][j]);
    }
  }
  return newArr;
}

module.exports = transpose;
