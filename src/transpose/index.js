/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

  let recentArr = [];

  for (j = 0; j < array[0].length; j++) {
    recentArr.push([]);
    console.log(recentArr);
  }
  for (j = 0; j < array.length; j++) {
    console.log(array[j][4]);
    for (k = 0; k < array[0].length; k++) {
      console.log(array[0]);
      recentArr[k].push(array[j][k]);
    }
  }
  return recentArr;
}

module.exports = transpose;
