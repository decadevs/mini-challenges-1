/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
let arr = []
let check =(arr)=>{
    return  arr[arr.length -1]
}
for(let i = 0; i < str.length; i++)
{

    let initial = str.charAt(i)

    if(initial === "("){
        arr.push("(")
    }else if( initial === ")"){
        if(check(arr) === "("){
            arr.pop()
        }else{
            return "invalid"
        }
    } else if(initial === "["){
        arr.push("[")
    }else if( initial === "]"){
        if(check(arr) === "["){
            arr.pop()
        }else {
            return "invalid"
        }
    } else if(initial === "{"){
        arr.push("{")
    }else if( initial === "}"){
        if(check(arr) === "{"){
            arr.pop()
        }else{
            return "invalid"
        }
    } 
}
if(arr.length === 0){
    return "valid"
}else {
    return "invalid"
}
}

module.exports = isValid;
