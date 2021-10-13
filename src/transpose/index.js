/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const tArr = [];
    
    for(let i=0; i < array[0].length; i++){
        let newArr = [];
        for(let j=0; j<array.length; j++){
           newArr.push(array[j][i]);
        }
        tArr.push(newArr);
    }
    return tArr
}

const arr = [
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21],
  ]
console.log(transpose(arr));
module.exports = transpose;
