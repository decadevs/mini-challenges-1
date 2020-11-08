/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
    function romanToDecimal(roman) {let  mainStr = roman.toUpperCase()
        let map = {
            "I": "1",
            "V": "5",
            "X":"10",
            "L":"50",
            "C":"100",
            "D":"500",
            "M" : "1000"
                  }

        let sum = 0

            for(let j =0; j<mainStr.length; j++){
                sum += Number(map[mainStr[j]])}

            if(mainStr.includes("IV") || mainStr.includes("IX")){
            sum = sum-2}

            if(mainStr.includes("XL") || mainStr.includes("XC")){
            sum = sum-20}

            if (mainStr.includes("CD") || mainStr.includes("CM")){
            sum = sum-200}
            
            return sum
    }

module.exports = romanToDecimal;
