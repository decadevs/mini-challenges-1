/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let total = 0;
    let index = 0;
    let input = roman.toLowerCase()

let converter = {
    i:1,
    v: 5,
    x: 10,
    l:50,
    c:100,
    d:500,
    m:1000

}

while(index < input.length){
    let curr = input[index]
    let next = input[index + 1]
    if(converter[curr] < converter[next]){
        total += converter[next] - converter[curr]
         index += 2
    }else{
        total += converter[curr]
       index++
    }
}
return total
}
console.log(romanToDecimal('M'))
console.log(romanToDecimal('IXX'))
console.log(romanToDecimal("MCMXCIV"))


module.exports = romanToDecimal;
