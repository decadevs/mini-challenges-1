/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const transpose = (array) => {
        let arr1 = []
        for(let i = 0; i<array[0].length; i++){
            arr2 = []
            for(let j = 0; j<array.length; j++){
            arr2.push(array[j][i])
     }
            arr1.push(arr2)
    }
        return arr1
  }
}


    // if (array) {
    //     var n = array.length;
    //     // nexted loop to iterate through the 2d array 
    //         for (var i = 0; i < n; i++) {
    //             for (var j = i + 1; j < n; j++) {
    //                 var temp = array[i][j];
    //                 //transpose col and rows
    //                 array[i][j] = array[j][i];
    //                 array[j][i] = temp;
    //             }
    //         }
    //         return array;
    //     }
    //     return null;
    

module.exports = transpose;