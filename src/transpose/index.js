/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 function transpose(array) {
    let result = [];
    for (let j = 0; j < array[0].length; j++) {
      let subArray = []
      
      for (let i = 0; i < array.length; i++) {
        let val = array[i][j]
        subArray.push(val)
      }
      result.push(subArray)
    }
    return result
  }

module.exports = transpose;
