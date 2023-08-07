/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array: number[][]) {

    const newArr: number[][] = [];

    for(let i = 0; i < array[0].length; i++){
        newArr.push([]);
    }

    for(let i = 0; i < array[0].length; i++){
        for(let j=0; j < array.length; j++){

            newArr[i].push(array[j][i])
            
        }
    }
    return newArr;
}

module.exports = transpose;
