/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {

    let result = roman.split("");
    let totalsum = 0; 
    let prev = 0;
    let value = {

                'I': 1,
                'V': 5,
                'X': 10,
                'L': 50,
                'C': 100,
                'D': 500,
                'M': 1000

    };
    let alpha = ['I', 'V', 'X', 'L', 'C','D', 'M'];

        for (let index= result.length-1 ; index>=0;  index-- ) {


            if (alpha.indexOf(result[index])>= prev ) {

                    totalsum = totalsum + value[result[index]];




                
            } else {

                totalsum = totalsum - value[result[index]];
            }


            prev = alpha.indexOf(result[index]);

          
            
        }

        return totalsum ;


}

module.exports = romanToDecimal;
