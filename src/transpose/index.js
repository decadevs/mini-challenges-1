/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    const newArray = []
    for(let arr of array){
        newArray.push([])
    }

    for( let i = 0; i < array.length; i++){
        for(let x = 0; x < array.length; i++){
            newArray[x].push(array[i][x])
        }
    }

    return newArray
}

module.exports = transpose;
