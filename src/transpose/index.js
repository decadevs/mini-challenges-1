/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  /*
   * Transposing a 2D array
   */
  let transposedArray = []; // The resulting transposed array
  let rows = array.length; // checks for the number of rows of arrays
  let columns = array[0].length; // assumes that all inner arrays have the same number of elements
  for (let j = 0; j < columns; j++) {
    /*
     * for each row of array, push the element at the particular column index
     * into a new array and at the end of each iteration push this new array
     * into the transposedArray
     */
    let newArray = [];
    for (let i = 0; i < rows; i++) {
      /*
       * on first iteration, it goes as array[0][0],array[1][0],array[2][0]...array[n][0]
       */
      newArray.push(array[i][j]);
    }
    transposedArray.push(newArray); // update transposedArray before next iteration
  }
  return transposedArray;
}
module.exports = transpose;
