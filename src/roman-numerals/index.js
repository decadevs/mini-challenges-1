/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) 
{
    const numberKeys = 
    {
        I : parseInt('1'),
        V : parseInt('5'),
        X : parseInt('10'),
        L : parseInt('50'),
        C : parseInt('100'),
        D : parseInt('500'),
        M : parseInt('1000')
    };
    
    const numberStore = [];
    // Temporary value holder 
    const temp = [];
    for ( let i = 0; i < roman.length; i++){
        // Iterate over numberKeys
        for ( let element in numberKeys ){
            // Check for match
            if ( roman[i] == element ){
                temp.push(numberKeys[element]);
                // Temp with two digits
                if ( temp.length == 2){
                    // Test for reduction
                    if ( temp[0] < temp [1]){
                        // Store difference
                        let newValue = temp[1] - temp[0];
                        // Add to number store
                        numberStore.push(newValue);
                        // Reset temp
                        temp.splice(0, 2);
                    }
                    else{
                        let newValue = temp[0];
                        numberStore.push(newValue);
                        // Reduce temp
                        temp.splice(0,1);
                        // Check for last element
                        if ( i == roman.length - 1){
                           numberStore.push(temp[0]); 
                        }
                    }   
                }
                // No reduction possible at the last index
                else if ( (temp.length !== 2) && (i == roman.length - 1)){
                    // Get temp value
                    let newValue = temp[0];
                    // Add to numberArray
                    numberStore.push(newValue);
                }
            }

        }
    }
    let initialValue = 0;
    // Add values in numberStore
    let decimal = numberStore.reduce( (previousValue, currentValue)=> previousValue + currentValue, initialValue );


return decimal;
}

module.exports = romanToDecimal;

