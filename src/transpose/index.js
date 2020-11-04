/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let transposed = [];
    if(array.length < 1 || array.length > 10) {
        return
    } else {
        for(let i = 0; i < array.length; i++) {
            for(let m = 0; m < array[i].length; m++) {
              transposed.push(array[i][m]);
              console.log(transposed);
            }   
        }
    }
    return transposed;
}
console.log(transpose([
  [5, 12, 17, 9, 3],
  [13, 4, 8, 14, 1],
  [9, 6, 3, 7, 21],
]));
module.exports = transpose;
