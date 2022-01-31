/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  // Change the array using object.key
  let ArrObj = Object.keys(array[0]);

  // loop through the array object using high order array method (choose the column first)
  let ArrObjMap = ArrObj.map(col => {

    // loop through again with map (this time using the row)
    let colMap = array.map(row => {

      // Change the row to col and vice versa.
      let colRow = row[col];

      // Return the row and column
      return colRow;
    });

    // Return the col map
    return colMap;
  });

  // Return array object map
  return ArrObjMap;
}

module.exports = transpose;
