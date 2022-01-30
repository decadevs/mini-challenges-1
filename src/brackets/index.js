/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    //first convert my string to array
    let strArr = str.split("");
    //initialize count
    let noOpcurl=0;
    let noClcurl=0;
    let noOpsq =0;
    let noclsq=0;
    let noOppa=0;
    let noclpa=0;
    //loop through strArr to extract count
    for(let item of strArr){
        if(item=="{"){
            noOpcurl++
            return noOpcurl
        }else if(item=="}"){
            noClcurl++
            return noClcurl
        }else if(item=="["){
            noOpsq++
            return noOpsq
        }else if(item=="]"){
            noclsq++
            return noclsq
        }else if(item=="("){
            noOppa++
            return noOppa
        }else if(item==")"){
            noclpa++
            return noclpa
        }
        //now use comparism operators to compare the counts
        if(noOpcurl===noClcurl&&noOpsq===noclsq&&noOppa===noclpa){
            return "valid"
        }else{
            return "invalid"
        }
        let conditionArr=["[)","(]","[}","{]","(}","{)"],

    }
}

module.exports = isValid;
