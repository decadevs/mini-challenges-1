/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array)
{
  //column count from array row count and row count from array column count
  const cols = array.length;
  const rows = array[0].length;
  const transposed = [];
  let buffer = [];
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
