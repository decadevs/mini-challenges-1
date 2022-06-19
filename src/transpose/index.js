/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    
    // This defines that code should fail if column or row element is more than 10
    if (array[0].length > 10 || array.length > 10){ 
        return 'Not within scope'
    }

    let columnLength = array[0].length; // Number of element in first sub array

    rowArray = []; // Define an empty array to hold new row

    for(let i = 0; i < columnLength; i++){ // Loop over the column elements (Inner Elements)

        let columnArray = []; // Define empty array to hold new column

        for(let j = 0; j < array.length; j++){ // loop over the row elements
            // copy rows into columns 
            columnArray[j] = array[j][i];            
        }
        // Push the new column into the row Array
        rowArray.push(columnArray)
        
    }
    return rowArray;
}
    
module.exports = transpose;

