/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
     if(array.length < 1 || array.length > 10) {
      return;
    } 
    if(array[0].length < 1 || array[0].length > 10) {
      return;
    }
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
