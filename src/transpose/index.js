/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let totalArr = []// create empty
    let i=0//initilize a while loop
    while(totalArr.length < array[0].length){//condition to create first column
         totalArr.push([array[0][i]])
         i++
    }
    for(let i = 1 ; i<array.length;i++){//loop through remaining array that wasnt used to create the column
        for(let j=0; j<array[i].length; j++){//loop through element in the picked array
            totalArr[j].push(array[i][j])//push the picked element to a postion in totalArr that is in same position as the element in the chosen array

        }
    }
     return totalArr
}

transpose([
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21],
  ])


module.exports = transpose;
