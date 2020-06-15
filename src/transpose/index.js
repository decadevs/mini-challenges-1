/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */

const transpose = array => {
  const rows = array.length;
  const cols = array[0].length;
  let grid = [];

  for (let i = 0; i < cols; i++) {
    grid[i] = []
  };

  for (let j = 0; j < rows; j++) {
    for (let k = 0; k < cols; k++) {
      grid[k][j] = array[j][k]
    };
  };

  return grid;
};

module.exports = transpose
