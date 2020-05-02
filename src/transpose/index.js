/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  const collection = []

  const column = array.length;
  const row = array[0].length;

  for (let i = 0; i < row; i++) {
    collection.push([])

  }

  var i = 0;
  var j = 0;
  var k = 1;
  var l = 0;


  while (i < row) {
    const data = Number(array[l].slice(j, k))
    collection[j].push(data)

    if (collection[j].length === column) {
      l = 0;
      j++;
      k++;
      i++;


    } else {
      l++;

    }


  }

  return collection;

}



module.exports = transpose;


