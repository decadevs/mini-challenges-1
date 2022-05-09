/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    // Calculate the length of row and col
    let row = array.length - 1 ;
    let col = array[0].length - 1;
    // Define a new array
    let newArray = [];
    for (let i = 0; i <= col; i++)
    {
        // Define a temporary array to store new rows
        let temp = [];
        for (let j = 0; j <= row; j++)
        {
            temp.push(array[j][i]);
    
        }
        // Pust new rows into an array
        newArray.push(temp);
              
    }
    return newArray;
    
}


module.exports = transpose;
