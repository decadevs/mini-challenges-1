/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
const transpose = (array)  => {
    // return Object.keys(a[0]).map(function(c) {
    //     return a.map(function(r) { return r[c]; });
    // });

    let width = array.length || 0;
    let height = array[0].length || 0;
    if(height === 0 || width === 0) return [];
    let result = [];
    for(let i = 0; i < height; i++ ){
         result[i] = [];
         for(let j = 0; j < width; j++) result[i][j] = array[j][i]
    }
    return result;
}


module.exports = transpose;
