/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
let array = [[5, 12, 17, 9, 3], [13, 4, 8, 14, 1], [9, 6, 3, 7, 21]]
function transpose(array) {
    let transposedArr = [];

    for ( let i = 0; i < array[0].length; i++){
        transposedArr [i]= [];
        for (let j =0; j <  array.length; j++){
            transposedArr[i][j] = array[j][i]
        }
    }

    return transposedArr
}

module.exports = transpose;
