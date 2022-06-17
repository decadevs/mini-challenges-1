/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let i = 0;
  let col = array[i].length;
  let row = array.length;
  let transpose = [];
  if ((col >= 1 && col <= 10) && (row >= 1 && row <= 10)) {  //Constraint
    for (i = 0; i < col; i++) {
      let subArr =[];  //A new empty array is created on each loop run
      for (let j = 0; j < row; j++) {
        subArr.push(array[j][i]);  //Transposes for each instance of j (the arrays within the array)
      }
      transpose.push(subArr);
    }
    return transpose;
  }
};

/*console.log(transpose([
  [5, 12, 17, 9, 3],
  [13, 4, 8, 14, 1],
  [9, 6, 3, 7, 21],
]));*/
module.exports = transpose;
