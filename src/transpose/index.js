/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
	let tranArr = []
	for(let i = 0; i < array[0].length; i++) {
		// looping through to count amount of inner array needed;
		  let ar = []
			for(let j = 0; j < array.length; j++){
			      ar.push(array[j][i])
      // looping through column by column and pushing each column to rows
	}
		tranArr.push(ar)
    // pushing the final arrays with 3 elements to transArr
		}
	return tranArr;
}

module.exports = transpose;
