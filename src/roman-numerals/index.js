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



    let arr = roman.split('');
    let total = 0;
    for (let i = 0; i < arr.length; i++)
    {
        switch(arr[i])
        {
            case 'M':
                if(arr[i - 1] == 'C')
                {
                    total = total
                }
                else
                {
                    total = total + 1000;
                }
                
            case 'D':
                if(a)
                total = total + 500;
            case 'C':
                if(a)
                total = total + 100;
            case 'L':
                if(a)
                total = total + 50;
            case 'X':
                if(a)
                total = total + 10;
            case 'V':
                if(a)
                total = total + 5;
            case 'I':
                if(a)
                total = total + 1;
        }
    }

}

// const numberKeys = 
// {
//     I : parseInt('1'),
//     V : parseInt('5'),
//     X : parseInt('10'),
//     L : parseInt('50'),
//     C : parseInt('100'),
//     D : parseInt('500'),
//     M : parseInt('1000')
// };

module.exports = romanToDecimal;



    // let total = 0;
    // let temp;

    // for(let i = 0; i < roman.length; i++)
    // {
    //     let currentNumberIndex = roman.indexOf(roman[i]);
    //     let succeedingNumberIndex = roman.indexOf(roman[i + 1]);
    //     total += roman[i];
    //     for (const numberKey in numberKeys)
    //     {
    //         if(roman[currentNumberIndex] == numberKey)
    //         {
    //             for (const secondNumberKey in numberKeys)
    //             {
    //                 if ((roman[succeedingNumberIndex] == secondNumberKey) && (numberKeys[secondNumberKey] > numberKeys[numberKey]))
    //                 {
    //                     total = total - numberKeys[numberKey];
    //                     total = total + (numberKeys[secondNumberKey] - numberKeys[numberKey]);
    //                     i = succeedingNumberIndex;
    //                     continue;
    //                 } 

    //             }
    //         }
    //             // total += roman[i];
    //     }
      
    // }