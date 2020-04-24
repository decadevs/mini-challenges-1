/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  //create output arr
  let arr = [];
  //traverse through the rows
  for (let i = 0; i < array[0].length; i++) {
    //set new row
    arr[i] = [];
    //swap row and columns
    for (let j = 0; j < array.length; j++) {
      arr[i].push(array[j][i]);
    }
  }
  return arr;
}

module.exports = transpose;
