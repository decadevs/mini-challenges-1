/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array)
{
  //column count from array row count and row count from array column count
  let cols = array.length, rows = array[0].length;
  let transposed = [], buffer = [];
  for (let i = 0; i < rows; i++)
  {
    for (let j = 0; j < cols; j++)
    {
      buffer.push(array[j][i]);
    }
    transposed.push(buffer);
    buffer = [];
  }
  return transposed;
}

module.exports = transpose;
