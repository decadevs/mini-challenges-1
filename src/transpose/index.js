/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */

function transpose(array) {
    const numRows = array.length;
    const numCols = array[0].length;
    
    const transposed = new Array(numCols).fill(null).map(() => new Array(numRows));
    
   for (let row = 0; row < numRows; row++) {
     for (let col = 0; col < numCols; col++) {
       transposed[col][row] = array[row][col];
     }
   }
    
   return transposed;
   }
  
  
  
  module.exports = transpose;
  