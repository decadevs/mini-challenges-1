/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let main = []
    for (let i = 0; i < array[0].length; i++){
      //console.log(main)
      main.push([])
      //console.log(main)

      for(let j = 0; j < array.length; j++){

        main[i].push(array[j][i])
        //console.log(array[j][i])
      }
    }
    return main
}

module.exports = transpose;
