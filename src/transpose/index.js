/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 let transpose = array => array[0].map( (column, columnIndex) => array.map(row => row[columnIndex]));
module.exports = transpose;
