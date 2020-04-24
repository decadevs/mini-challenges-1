/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
const transpose = array => {
    const mLength = array[0].length;
    const nLength = array.length;
    const transposedArr = [];
    for (let j = 0; j < mLength; ++j) {
        const transVal = [];
        for(let k = 0; k < nLength; ++k){
        let val = array[k].shift();
        transVal.push(val);
        }
        transposedArr.push(transVal); 
        
    }
    return transposedArr
}

module.exports = transpose;
