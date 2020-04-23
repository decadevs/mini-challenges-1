/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  let myBinArr = roman.toUpperCase().split("");
  let outputArr = [];
  myBinArr.map((item, i, arr) => {
    switch (true) {
      case item == "M":
        outputArr.push(1000);
        break;
      case item == "D":
        outputArr.push(500);
        break;
      case item == "L":
        outputArr.push(50);
        break;
      case item == "V":
        outputArr.push(5);
        break;
      case item == "C":
        if (arr[i + 1] == "M") {
          outputArr.push(900);
          myBinArr.splice(0, 1);
        } else if (arr[i + 1] == "D") {
          outputArr.push(400);
          myBinArr.splice(0, 1);
        } else {
          outputArr.push(100);
        }
        break;
      case item == "X":
        if (arr[i + 1] == "M") {
          outputArr.push(900);
          myBinArr.splice(0, 1);
        } else if (arr[i + 1] == "C") {
          outputArr.push(90);
          myBinArr.splice(0, 1);
        } else if (arr[i + 1] == "L") {
          outputArr.push(40);
          myBinArr.splice(0, 1);
        } else {
          outputArr.push(10);
        }
        break;
      case item == "I":
        if (arr[i + 1] == "X") {
          outputArr.push(9);
          myBinArr.splice(0, 1);
        } else if (arr[i + 1] == "V") {
          outputArr.push(4);
          myBinArr.splice(0, 1);
        } else {
          outputArr.push(1);
        }
        break;
      default:
        return "error!!!";
    }
  });
  return outputArr.reduce((acc, item) => acc + item);
}

module.exports = romanToDecimal;
