/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 function transpose(array) {
  let finalArr=[]
for (let row=0; row<array.length; row++){
  for(let col=0; col<array[row].length; col++){
    if(!finalArr[col]) finalArr[col]= []

    finalArr[col][row]=array[row][col]
  }
}
return finalArr
}

module.exports = transpose;
