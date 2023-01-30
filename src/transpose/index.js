/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

        for (var i = 0; i < array.length; i++) {

          for (var j = 0; j < i; j++) {

            const temp = array[i][j];

            array[i][j] = array[j][i];
            
            array[j][i] = temp;
          }
        }
      
}

module.exports = transpose;
