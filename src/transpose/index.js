/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
// // passsed array
// var myArray = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ]

// function that perform the transpose
function transpose(array) {
    // declaration of transposed array
    let matrix = [];

    // Check for constaints
    if (array.length <= 1 || array.length >= 10 || array[0].length <= 1 || array[0].length >= 10) {
        return `Sorry! your array rows or columns is either below 2 or greater than 10`
    } else {
        for (let i = 0; i < array[0].length-1; i++) {
            let x = [];
            for(j in array) {
                x.push(array[j][i]);
            }
            matrix.push(x);
        }
    }
    return matrix;
 
    
}

transpose();


module.exports = transpose;
