/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(a) {


  return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
  // or in more modern dialect
  // return a[0].map((_, c) => a.map(r => r[c]));
}
console.log(transpose([
  [1, 3],
  [2, 4],
]));

module.exports = transpose;
