/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let transposedArr = [];
    for (let i = 0; i < array[0].length; i++) {
        let arrChild = [];
        for (let j = 0; j < array.length; j++) {
            arrChild.push(array[j][i]);
        }
        transposedArr.push(arrChild);
    }
    return(transposedArr);
}
module.exports = transpose;
