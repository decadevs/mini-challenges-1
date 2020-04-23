/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let value = 0;

    roman.split('').forEach((element, i, array) =>{
        let prev = roman[i-1], next = array[i+1];


        // I
        if ((element == "I") && (next !== "V") && (next !== "X")) {
            value+=1;
        } 
        // V
        else if (element == "V"){
            value+=5;
            if(prev == "I"){
                value-=1;
            }
        } 
        // X
        else if ((element == "X") && (next !== "L") && (next !== "C")) {
            value+=10;
             if (prev == "I") {
               value -= 1;
             }
        } 
        //L
        else if (element == "L"){
            value+=50
             if (prev == "X") {
               value -= 10;
             }
        } 
        // C
        else if ((element == "C") && (next !== "D") && (next !== "M")) {
            value+=100;
            if (prev == "X") {
              value -= 10;
            }
        } 
        // D
        else if (element == "D") {
            value+=500;
            if (prev == "C") {
              value -= 100;
            }
        } 
        // M
        else if (element == "M") {
            value+=1000;
            if (prev == "C") {
              value -= 100;
            }
        }
    });

    return value;
}

module.exports = romanToDecimal;
