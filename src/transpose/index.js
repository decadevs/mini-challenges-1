/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let outerArr = [];

    for (let i = 0; i < array.length; i++) { 
        for (let j = 0; j < array[i].length; j++) { 
            if (outerArr.length < array[i].length)
                outerArr.push([]);

            outerArr[j][i] = array[i][j];
        }
    }
    return outerArr;
}

module.exports = transpose;
