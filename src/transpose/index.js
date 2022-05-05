/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    /**
     * [1,2]
     * [7,3]
     * [9,5]
     */


     let row = array[0].length
     
     let output = []
     for (let j = 0; j < row; j++) {
         let temp = []
        for (let i = 0; i < array.length; i++) {
             temp.push(array[i][j])
             console.log(`i: ${i} - j: ${j}`);
         }
         output.push(temp)
     }

    //  console.log(output);
}

const arr = [
    [9, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 7],
    [1, 3, 1, 5],
  ];
  /**
   * [9, 4, 8, 1],
      [1, 5, 9, 3],
      [2, 6, 10, 1],
      [3, 7, 7, 5],
   */

transpose(arr)

module.exports = transpose;
