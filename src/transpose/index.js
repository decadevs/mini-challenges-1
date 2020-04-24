/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let k=array.length
 let l=array[0].length
 let arr1=[]
 for(var i=0;i<l;i++){
   arr2=[]
   for(var j=0;j<k;j++){
   arr2.push(array[j][i])
   }
   arr1.push(arr2)
 }
 return arr1
}

module.exports = transpose;
