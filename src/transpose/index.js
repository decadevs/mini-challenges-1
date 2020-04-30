/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const newArray = [];
    
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            if(newArray.length < array[i].length){
                newArray.push([]);
            }
            newArray[j].push(array[i][j]);
        }
    }

    return newArray;
}

module.exports = transpose;
