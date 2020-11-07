/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
	let newArray = [];
    if (array.length >= 1 && array.length <= 10){
    	for (let i = 0; i < array.length; i++) {
        	for (let j = 0; j < array[i].length; j++) {

	            if (array[i][j] === undefined) continue;
	           	
	            if (newArray[j] === undefined) newArray[j] = [];
	            
	            newArray[j][i] = array[i][j];
	        }
	    }  
    }
    return newArray;
}

module.exports = transpose;
