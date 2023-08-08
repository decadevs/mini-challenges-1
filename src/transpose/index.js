/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */

let numberArr = [
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21],
  ];

let newArr = transpose(numberArr);

function transpose(array) {
return array[0].map((col, i) => array.map(row =>row[i]));
}
console.log(newArr)
module.exports = transpose;
