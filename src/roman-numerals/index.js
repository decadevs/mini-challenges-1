/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {

    //summary of steps to convert roman numeral string to equiv decimal

    //declare roman numeral set of possible symbol and their decimal equiv
    //define the constraints of roman numeral manipulation
    //no any  successive symbol in roman numeral should have count above 3
    //if next symbol greater than previous symbol: subtract previous symbol from next symbol
    //if a symbol has count === 3 : sum up together as triple symbol sum
    //if a symbol has count ===2 : sum up together as double symbol sum
    //if next symbol less than previous symbol and count of next symbol greater than 1: keep only previous symbol
    //if next symbol less than previous symbol and count of next symbol less than 2: keep previous symbol
    //for cases where previous symbol is kept, loop counts by 1 for other cases where you need to compair pair, loop counts by 2
    //for cases where successive counts is 3, loop count by 3

    const roman_numeral_set = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
        }

    //define the constraint- if :I comes before V,X, :X comes before L,C :C comes before D,M
    const constraint = {
        "I": ["V", "X"],
        "X": ["L", "C"],
        "C": ["D", "M"]
    }

    let roman_numeral_map={}
    let greater_3=0;
    let j=0
    let decimalBox=[] //to keep the evaluated sums for later total sum up


    for(let i = 0; i<roman.length;i++){
        if(!roman_numeral_map.hasOwnProperty(roman[i])){
            roman_numeral_map[roman[i]]=1
        }
        else{

            if(roman[i]===roman[i-1] && roman_numeral_map[roman[i]]!==3){
            roman_numeral_map[roman[i]]+=1
            }
        }
    }

    // for (key in roman_numeral_map){
    //     if(roman_numeral_map[key]>3){
    //         greater_3+=1
    //     }
    //     else{
    //         greater_3+=0
    //     }
    // }

        while(j<roman.length){
             let sum_tri=0 //to sum related symbols with count equal to three
            let sum_dbl=0 //to sum related symbols with count equal to two
            let evaluator = 0 //to evaluate sums of symbols after comparision
            if(roman.length===1){
                evaluator=roman_numeral_set[roman[j]]
                    decimalBox.push(evaluator)
                    
                    j+=1;
            }

        if(j+1===roman.length){
            evaluator = roman_numeral_set[roman[j]]
            decimalBox.push(evaluator)

            j += 1;
        }

        if(j+1<roman.length){
            

            if(roman_numeral_set[roman[j+1]]>roman_numeral_set[roman[j]]){
                if(constraint[roman[j]].includes(roman[j+1])){
                    evaluator=roman_numeral_set[roman[j+1]]-roman_numeral_set[roman[j]]
                    decimalBox.push(evaluator)
                    j+=2;
                }
            }

            else if(roman_numeral_map[roman[j]]===3){
                let x = 0
                while(x<3){
                    sum_tri+=roman_numeral_set[roman[j]]
                    x+=1
                }

                decimalBox.push(sum_tri)
                j+=3
            }

            else if(roman_numeral_map[roman[j]]===2){
                
                let z = 0
                while(z<2){
                    
                    sum_dbl+=roman_numeral_set[roman[j]]
                    z+=1
                }
                

                //check if double is a valid double
                //valid doubles are those whose sum_dbl is not found among values of roman numeral set
                let is_valid_double=Object.keys(roman_numeral_set).every(function(k){
                    return roman_numeral_set[k]!==sum_dbl
                })
                

                if(is_valid_double){
                    
                    decimalBox.push(sum_dbl)
                }

                j+=2
            }

            else if(roman_numeral_set[roman[j+1]]<roman_numeral_set[roman[j]] && roman_numeral_map[roman[j+1]]>1){
                evaluator=roman_numeral_set[roman[j]]
                decimalBox.push(evaluator)
                j+=1
            }

            else if(roman_numeral_set[roman[j+1]]<roman_numeral_set[roman[j]] && roman_numeral_map[roman[j+1]]<2){
                evaluator=roman_numeral_set[roman[j]]
                decimalBox.push(evaluator)
                j+=1;
            }
        }

        }

        if(decimalBox.length>0){
            var sum=decimalBox.reduce(function(total,current){
                return total+current
            },)
        }

        return sum
    }

    

module.exports = romanToDecimal;
