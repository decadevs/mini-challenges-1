/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
  // Declare an object of keys and values of each roman
  const values = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  }
//convert roman string to an array to access each element
  let array = roman.split('');
  let total = 0;
//loop through the array using for-loop
  for (let i=0; i<array.length; i++){
// check through the array to subtract first element from the second, if the value is greater than the first element
    if(values[array[i]] < values[array[i+1]]){
      total+= (values[array[i+1]] - values[array[i]]);
      i++;
    }else{
//and add the elements if the first element is greater than the second or equaL;
      total+= values[array[i]];
    }
  }
  return total;

}

module.exports = romanToDecimal;
