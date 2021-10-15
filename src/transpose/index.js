/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 * [
  [5, 12, 17, 9, 3],
  [13, 4, 8, 14, 1],
  [9, 6, 3, 7, 21],
];
 */
function transpose(array) {



  let newArr = [];
  for (let i = 0; i < array[0].length; i++) {
    newArr.push([])
    console.log(newArr)

  }

  for (let i=0; i < array[0].length; i++){
      for(let j=0; j< array.length; j++){
      newArr[i].push(array[j][i])
      console.log(newArr);
      }
  }

return newArr;
}

module.exports = transpose;
