/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
       
               const myTranspose = (col, c) => array.map((row, r) => array[r][c])
        
                return array[0].map(myTranspose );
}
console.log(transpose([
        [1, 2],
        [3, 4]]));
        
module.exports = transpose;
