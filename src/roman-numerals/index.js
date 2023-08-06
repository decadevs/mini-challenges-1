/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let stack = []
    let total = 0
    for (let i in roman){
        let num = 0
        if(roman[i] == 'I'){
            num = 1
        }
        else if(roman[i] == 'V'){
            num = 5
        }
        else if(roman[i] == 'X'){
            num = 10
        }
        else if(roman[i] == 'L'){
            num = 50
        }
        else if(roman[i] == 'C'){
            num = 100
        }
        else if(roman[i] == 'D'){
            num = 500
        }
        else if(roman[i] == 'M'){
            num = 1000
        }
        let x = stack.length - 1
        if(stack.length == 0){
            total += num
            stack.push(num)
        }
        else if (num > stack[x]){
            let dec = num - stack[x]
            total += dec
            total -= stack[x]
            stack[x] = dec
        }
        else{
            total += num
            stack.push(num)
        }
    }
    return total
}

module.exports = romanToDecimal;
