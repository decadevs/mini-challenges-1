/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */

function transpose(array) {
    const emptyArr = [];
    for (let i = 0; i < array.length; i++) {
        const hold = [];

        for (let j = 0; j < array.length; j++) {
            hold.push(array[j][i]);
        }
        emptyArr.push(hold);
    }
    return emptyArr;
}
console.log(transpose([
    [9, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 7],
    [1, 3, 1, 5],
  ]));

module.exports = transpose;
