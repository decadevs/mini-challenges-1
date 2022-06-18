/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array)
{
  //getting columns from array row count and rows from array column count
  let cols = array.length, rows = array[0].length;
  let transposed = [], buffer = [];
  for (let i = 0; i < rows; i++)
  {
    for (let j = 0; j < cols; j++)
    {
      //switch indexes to transpose 2d array
      buffer.push(array[j][i]);
    }
    //buffer can fill a row. add it to result and clear it for next row
    transposed.push(buffer);
    buffer = [];
  }
  return transposed;
}

module.exports = transpose;
