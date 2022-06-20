
    /**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
  function transpose(arr) {
    let store = []

    for(let row = 0; row < arr[0].length; row++){
      let colarr = []
      for(let col = 0; col < arr.length; col++){

        colarr.push(arr[col][row])
        //store[col][row] = arr[row][col]

      }
      store.push(colarr)
    }

    return store;
    }

console.log(transpose([
  [1, 2, 4],
  [3, 4, 6],
]));

module.exports = transpose;

