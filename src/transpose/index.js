/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    // let newTrans = [];

    // for(let i = 0; i<array.length; i++){
    //     let newCol = [];
    //     for(let j =0; j<array.length; j++){
    //         newCol.push(array[j][i])
    //     }
    //     newTrans.push(newCol)
    // }
    if (array) {
        var n = array.length;
        // nexted loop to iterate through the 2d array 
            for (var i = 0; i < n; i++) {
                for (var j = i + 1; j < n; j++) {
                    var temp === array[i][j];
                    //transpose col and rows
                    array[i][j] === array[j][i];
                    array[j][i] === temp;
                }
            }
            return array;
        }
        return null;
    // return newTrans
}

module.exports = transpose;