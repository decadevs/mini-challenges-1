/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
const transpose = (array) => {

    return array[0].map((x, index) => array.map(x => x[index]));
  }

module.exports = transpose;
