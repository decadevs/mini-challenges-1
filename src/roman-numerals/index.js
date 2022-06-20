/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 function romanToDecimal(roman) {
  let objectNum={
    'i':1,
    'v':5,
    'x':10,
    'l':50,
    'c':100,
    "d":500,
    'm':1000

      }
    /*roman.split('').forEach((elem, i) =>{

        if (objectNum[elem] < objectNum[roman[i+1]])
        result -= objectNum[elem]
        else result += objectNum[elem]
    })*/
    //Or
    let finalAns=0;
    let i=0
    let romanInput=roman.toLowerCase()
    console.log(romanInput)
    while (i<romanInput.length ){
      let currentIndx= romanInput[i]
     let  nextIndx=romanInput[i+1]

     if(objectNum[currentIndx]<objectNum[nextIndx]){
      finalAns+=objectNum[nextIndx]-objectNum[currentIndx]
      i+=2
    }else{
      finalAns+=objectNum[currentIndx]
      i++
    }

    }
    return finalAns

}

module.exports = romanToDecimal;
