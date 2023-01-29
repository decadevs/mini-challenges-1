/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
// declare the array name - A
  let A = array;
  // declare the rows and columns. the array has m-rows, and n columns
  let m = A.length;
  let n = A[0].length;
  // declare a new array, to store the transposed array
  const transArr = [];
  // iterate through the columns of the array and assign it into an empty array as the rows of the new array
  for (let i = 0; i < n; i++){
    transArr[i] = [];
// iterate through the rows of the array and assign the reverse matrix of array to new array
    for (let j = 0; j < m; j++){
      transArr[i][j] = A[j][i];
    }
  }
  // return new array
  return transArr;
}
module.exports = transpose;
