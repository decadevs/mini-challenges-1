/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */


function transpose(arr) {
    
    let newArr = arr[0].map((item, index) => arr.map(cur => cur[index]))
    return newArr;

}