/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let biggestArr = [];
  for (let index = 0; index < array[0].length; index++) {
    biggestArr.push([]);
   // console.log(biggestArr);
  }
  for (let rows = 0; rows < array.length; rows++) {
    for (let cols = 0; cols < array[rows].length; cols++) {
      biggestArr[cols].push(array[rows][cols]);
    }
  
}
return biggestArr;
}
console.log(
  transpose([
    [1, 7, 9],
    [2, 3, 5],
  ])
);

module.exports = transpose;
