/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const result = [];
    for (let row = 0; row < array.length; row++){
       // console.log(row)
        for(let column = 0; column < array[row].length; column++){
            //console.log(column)
            if(!result[column]){
                result.push([column])
            
            }
                result[column][row] = array[row][column]
           
        }
    }
    return result
}

console.log(transpose([
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21],
  ]))

module.exports = transpose;
