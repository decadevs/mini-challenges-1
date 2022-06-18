/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let tempArr = [];
    for(let i =0; i <= array.length; i++){
        let tempArr[i] = [];
    }console.log(tempArr);
    // for(let i = 0; i <= array.length; i++){
    //     for(let j = 0; j <= array[0].length; j++){
    //         tempArr[j][i] = arr[i][j];
    //     }
    // }
    // return tempArr;
}        
    


console.log(transpose([1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]));
module.exports = transpose;
