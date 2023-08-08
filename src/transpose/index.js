/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

        //  create new Parent and Child Arrays
        const newRowLength = array.length;
        const newColLength = array[0].length;
      
        const transposedArray = [];
      
        // iterate over array to create new rows and column
        for (let col = 0; col < newColLength; col++) {
          const newRow = [];
          for (let row = 0; row < newRowLength; row++) {
            newRow.push(array[row][col]);
          }
          transposedArray.push(newRow);
        }
      
    return transposedArray;
}

module.exports = transpose;
