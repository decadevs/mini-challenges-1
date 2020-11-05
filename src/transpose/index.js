/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  var trans = new Array (array[0].length);
  for (var i = 0; i < trans.length; i++){
      trans[i] = new Array(array.length);
      for(var j = 0; j < trans[i].length; j++){
       trans[i][j] = array[j][i];
      }
  }
  return trans;
}

module.exports = transpose;
