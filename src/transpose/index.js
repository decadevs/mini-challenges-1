/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
   let hold = [];
   let a = 0;
   let result = [];
   for (let i = 0; i < array[a].length; i++) {
      for (let j = 0; j < array.length; j++) {
         hold.push(array[j][i]);
      }
      result.push(hold);
      hold = [];
   }
   return result;
}

module.exports = transpose;
