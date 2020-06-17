/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let copy = []
  for(var row = 0; row < array.length; row++) {
    for(var col = 0; col < array[row].length; col++) {
      if(array[row][col] === undefined)
      continue
      if(copy[col] === undefined)
      copy[col] = []
      copy[col][row] = array[row][col]
    }
  }
  return copy
}

module.exports = transpose;
