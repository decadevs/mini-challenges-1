/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let containerArray = new Array(array.length);       //We create an empty array with number of columns =  length of
    for(let i = 0; i < array[0].length; i++) {          // the given array to be transposed.
        containerArray[i] = new Array(array.length);    //Next, we fill up each column of our empty array with  
    }                                                   //smaller arrays, each with length = length of given array.
                                                        //Number of smaller arrays = number of columns of given array
    for(let i = 0; i < containerArray.length; i++) {
        for(let j = 0; j < array.length; j++) {         //Here, we loop through our empty array, and the given array.
            containerArray[i][j] = array[j][i]          //Then, we transpose the indexes of our empty array, for that
        }                                               //of the given array, and assign the values in those indexes  
    }                                                   //to our empty array. This gives us the transposed array.
    
   return containerArray;
}

module.exports = transpose;