/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {

  let k = array.length   //This takes in length of the array passed in as argument
    let l = array[0].length//assign length of the first index of array
    let arr1=[]

    for(var i=0; i<l; i++){

    arr2=[]

    for(var j=0; j<k; j++){
    arr2.push(array[j][i]) //restructures the array by interchanging rows and columns
    }

   arr1.push(arr2) //push arr2 into the empty arr1
  }

  return arr1
}


module.exports = transpose;
