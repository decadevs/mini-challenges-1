/**
 * Implement the solution in this function
 *
 * @param {number[]} originalArrayay The originalArrayay to transpose
 * @returns {number[]} The transposed originalArrayay
 */
function transpose(originalArray) {
    let transposedArray = []
    for(let i = 0; i<originalArray[0].length;i++){
    let row = []
      for(let j =0;j<originalArray.length;j++){
          let element = originalArray[j]  // take the whole first originalArrayay
          row.push(element[i]) // take the first value and push to a row
      }
      transposedArray.push(row)
    }
return transposedArray
}

module.exports = transpose;

console.log(transpose([
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21],
  ]))
