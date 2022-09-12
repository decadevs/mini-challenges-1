/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    //newarray= create an array filled with 0's such that no of cols = no of rows of array and no of rows= no of cols of array
    let arrayLength= array.length;
    let arrayElemLength= array[0].length
    let newArray= Array(arrayElemLength).fill("0".repeat(arrayLength));
    // for (let i=0; i<newArray; i++){
    //     newArray[i]= newArray[i].split("");
    // }
    newArray.forEach((x,i) => newArray[i]= newArray[i].split(""))
    for (let i=0; i<arrayElemLength; i++){
        for (let j=0; j<arrayLength; j++){
            newArray[i][j]=array[j][i];
        }
    }
    console.log(typeof(newArray[0]))
    return newArray
}

module.exports = transpose;
