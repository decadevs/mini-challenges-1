/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
let finalArray = [];
let arrayCol = array[0].length;
let arrayRow = array.length;

for (var i = 0; i < arrayCol; i++) {
  let tempArray = [];
  for (var j = 0; j < arrayRow; j++) {
    tempArray.push(array[j][i]);

  }
  finalArray.push(tempArray);
}
}

module.exports = transpose;
