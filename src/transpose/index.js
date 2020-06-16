/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

        let arrayTranspose = [];
        for(let i = 0; i < array.length && i <= 9; i++){
            arrayTranspose.push([]);
        };
    
        for(let i = 0; i < array.length  && i <= 9; i++){
            for(let j = 0; j < array[i].length && j <= 9; j++){
                arrayTranspose[j].push(array[i][j]);
            };
        };
    
        return arrayTranspose;
}

module.exports = transpose;
 