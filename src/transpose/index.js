/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 function transpose(array) {
    return array.reduce((prev, next) => next.map((item, i) =>
      (prev[i] || []).concat(next[i])
    ), []);
}

module.exports = transpose;

console.log(transpose([
    [1, 7, 9],
    [2, 3, 5],
]))

console.log(transpose([
      [9, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 7],
      [1, 3, 1, 5],
]))
