/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let transposed = [];
  let rowLen = array[0].length;
  for(let row = 0; row < rowLen; row++){
    //Create a new row everytime
      let transposedRow = [];
    for(let col = 0; col < array.length; col++){
      transposedRow.push(array[col][row]);
    }
    //Push each row into the Overall new Matrix
    transposed.push(transposedRow);
  }
  return transposed;
}

module.exports = transpose;
