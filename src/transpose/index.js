/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

        let newArray = [];
        for(let i = 0; i < array.length && i <= 9; i++){
            newArray.push([]);
        };
    
        for(let i = 0; i < array.length  && i <= 9; i++){
            for(let j = 0; j < array[i].length && j <= 9; j++){
                newArray[j].push(array[i][j]);
            };
        };
    
        return newArray;
}

module.exports = transpose;
