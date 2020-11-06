/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let transposed = [];
    for(let i = 0; i < array[0].length; i++) {
      transposed[i] = [];
      for(let m = 0; m < array.length; m++) {
          transposed[i][m] = array[m][i];
        }   
     } 
    return transposed;
}


module.exports = transpose;
