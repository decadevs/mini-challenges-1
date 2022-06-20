/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 function transpose(array) {
  const result = [];
  let len1 = array[0].length;
  for(let i = 0; i < len1; i++) {
    let newArr = [];
    let len = array.length;
    for(let j= 0; j < len; j++) {
      newArr.push(array[j][i]);
    }
    result.push(newArr);
  }
  return result;
};

module.exports = transpose;

