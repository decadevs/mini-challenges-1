/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let outerArraySize = array.length;
  let innerArraySize = array[0].length;
  let newArray = [];

  // Loop through the inner array
  for (let innerArrayCount = 0; innerArrayCount < innerArraySize; innerArrayCount++) {
    let tempArray = [];

    // Loop through the outer array
    for (let outerArrayCount = 0; outerArrayCount < outerArraySize; outerArrayCount++) {
      tempArray.push(array[outerArrayCount][innerArrayCount]);
    }

    // Push into the new array
    newArray.push(tempArray);
  }
  return newArray;
}

module.exports = transpose;

// let newArr = []
// for (let firstLoop = 0; firstLoop < array.length; firstLoop++) {

//   let temArr = []
//   let loopArr = 0
//  for (let secondLoop = 0; secondLoop < array[firstLoop].length; secondLoop++) {

//   for (loopArr  = 0; loopArr < array.length; loopArr++) {
//     temArr.push(array[loopArr][secondLoop])

//   }

//     newArr.push(temArr)
//     temArr = []

//   }

// return newArr

//  }

// old

// [[00,01,02,03,04], [10,11,12,13,14], [20,21,22,23,24]]
// [[ 5,12,17, 9, 3], [13, 4, 8,14, 1], [ 9, 6, 3, 7,21]]

// // new
// [[00,10,20,30,40], [01,11,21,31,41], [02,12,22,32,42]]
// [[ 5,12,17, 9, 3], [13, 4, 8,14, 1], [ 9, 6, 3, 7,21]]

//
// let i = arr.length

// let arr = [
//   [5, 12, 17, 9, 3],
//   [13, 4, 8, 14, 1],
//   [9, 6, 3, 7, 21],
// ];
