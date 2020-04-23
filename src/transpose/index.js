/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */


function transpose(array) {
    return array.reduce((prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])), []);
}


module.exports = transpose;








/*
return array.reduce((prev, next)=> 
    next.map((item, i)=> 
    (prev[i] || []).concat(next[i])), [])

*/