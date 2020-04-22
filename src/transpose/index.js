/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  const rowLength = array[0].length;
  const colLength = array.length;
  const totalRows = [];
  for (let k = 0; k < rowLength; k++) {
    totalRows.push(`rowNum${k}`);
  }
  let output = totalRows.map((item) => (item = []));
  for (let i = 0; i < colLength; i++) {
    for (let j = 0; j < rowLength; j++) {
      output[j].push(array[i][j]);
    }
  }
  return output;
}

module.exports = transpose;
