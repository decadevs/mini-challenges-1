/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 const romanToDecimal = (str) => {
    //create object that maps the roman numerals to its integer equivalent
    const roman = {
      'I': 1,
      'V' : 5,
      'X' : 10,
      'L' : 50,
      'C': 100,
      'D' : 500,
      'M' : 1000   
    }
    let arr = []
  
    for(let i = 0; i < str.length; i++){
      if(roman[str[i]] < roman[str[i + 1]] ){
        //subtract
        arr.push(roman[str[i + 1]] - roman[str[i]]) 
        i++
        continue
      }else{
        //add
        arr.push(roman[str[i]])
      }
    }
    console.log(arr.reduce((total,current)=>total + current))
    return arr.reduce((total,current)=>total + current)
  }
  


module.exports = romanToDecimal;

