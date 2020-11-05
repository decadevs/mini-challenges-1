/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
        let transposedArray = [];
        array[0].forEach(element => transposedArray.push([]));

        for(let i=0;i<array.length;i++)
            for(let j =0;j<array[i].length;j++){
               transposedArray[j].push(array[i][j]);
            }
            return transposedArray;
}

module.exports = transpose;
