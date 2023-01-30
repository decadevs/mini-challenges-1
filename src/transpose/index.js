/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let transposed = [];
  for (let i = 0; i < array[0].length; i++) {
    transposed.push([]);
  }
  for (let j = 0; j < array.length; j++) {
    for (let k = 0; k < array[j].length; k++) {
      transposed[k].push(array[j][k]);
    }
  }
  return transposed;
}
console.log(
  transpose([
    [9, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 7],
    [1, 3, 1, 5],
  ])
);
module.exports = transpose;
