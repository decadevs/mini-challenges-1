function transpose(array) {
  let col = array[0].length;
  let row = array.length;
  let transposedArr = new Array(col);

  for (let i = 0; i < col; i++) {
    transposedArr[i] = new Array(row);
    for (let j = 0; j < row; j++) {
      transposedArr[i][j] = array[j][i];
    }
  }

  return transposedArr;
}

/* 
[5, 13, 9],
  [12, 4, 6],
  [17, 8, 3],
  [9, 14, 7],
  [3, 1, 21],
*/

console.log(
  transpose([
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21],
  ])
);
