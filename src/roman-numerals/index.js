/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    const romanFigure = roman.toUpperCase()
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    //if(romanFigure.length == 1) return romanValues[romanFigure]
    

    let sum = 0 , count = 0
    for(let i = 0; i < romanFigure.length; i++){
        let tempValue = 0
        if(i === romanFigure.length - 1){
            sum+=romanValues[romanFigure[i]]
       
        }else if(romanValues[romanFigure[i]] > romanValues[romanFigure[i+1]]){
            sum+= romanValues[romanFigure[i]]
            
        }else if(romanValues[romanFigure[i]] < romanValues[romanFigure[i+1]]){
                 tempValue = romanValues[romanFigure[i+1]] - romanValues[romanFigure[i]]
                    sum += tempValue
                    i++

        } 
        else if(romanValues[romanFigure[i]] === romanValues[romanFigure[i+1]]){
            tempValue = romanValues[romanFigure[i+1]] + romanValues[romanFigure[i]]
            sum += tempValue
            i++
        }
        
    }
    
    return sum
    
}


module.exports = romanToDecimal;
