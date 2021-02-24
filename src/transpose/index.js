/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    new_array = [];
    let m = array.length; // number of rows
    let n = array[0].length; // number of columns

    for (let i=0; i < n; i++) {
        new_array.push([])
    }

    for (let j=0; j < n; j++) {
        for (let k=0; k< m; k++) {
            new_array[j].push(array[k][j]);
        }
    }
    return new_array
}

module.exports = transpose;
