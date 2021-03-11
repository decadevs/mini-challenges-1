/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    individualRoman = roman.split('').reverse();

    n = individualRoman.length;

    decimalExv = 0;
    var x=[];

    individualRoman.forEach(y => {
    switch(y){
        case 'I' : 
            x.push(1);
        break;
        case 'V' :
             x.push(5);
        break;
        case 'X' :
            x.push(10);
        break;
        case  'L' :
            x.push(50);
        break;
        case 'C' :
            x.push(100);
        break;
        case 'D' :
            x.push(500);
        break;
        case 'M':
            x.push(1000);
        break;
        }})

        var xold = x[0];
        x.forEach((xnew,i) =>{
            if(xnew>=xold){
                decimalExv += xnew;
            } else{
                decimalExv -= xnew;
            }
            xold = xnew;
        })
return decimalExv
}

module.exports = romanToDecimal;
