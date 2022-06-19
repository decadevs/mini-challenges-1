/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
 function transpose(array) {
    //check constraints
    if(array[0].length < 1 || array[0].length > 10 || array.length < 1 || array.length > 10 ){
        return false;
    }
    
    const transposedArray = [];
    //push rows extracted from columns
    for(let m = 0; m < array[0].length; m++){  
        tempArray = [];   
        for(let n = 0; n < array.length; n++){         
            tempArray[n] = array[n][m];  
        }
        transposedArray.push(tempArray);
    }

    return transposedArray;
}


module.exports = transpose;
