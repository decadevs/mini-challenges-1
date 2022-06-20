/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 function transpose(array) {
    let transposedArr = [];
    let x = 0, y = 0;
    for(let i = 0; i < array[0].length; i++) {
      let individualArr = [];
      while (individualArr.length !== array.length) {
        individualArr.push(array[x][y])
        x++
      }
      transposedArr.push(individualArr);
      x = 0;
      y++;
    }
    return transposedArr;
  }

module.exports = transpose;
