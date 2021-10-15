/**
 * Implement the solution in this function
 *
 * @param {number[1,2,3]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 function transpose(array) {
    let keep=[]
    for (let i = 0; i < array[0].length; i++) {
        keep.push([])
    }
    for (let i = 0; i < array[0].length; i++) {
        for (let x = 0; x < array.length; x++) {
            keep[i].push(array[x][i])   
        }    
}
    return keep;
}; 

module.exports = transpose;