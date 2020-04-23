/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let count_i, count_j, count;
    const dict = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let list = str.split('');
    let i = 0

    Loop1: //label of first for loop
    while (list.length > 0) {

        let value = list[i];
        list.shift();
        count_i = 1;
        count_j = 0;
        count = 0;

        Loop2:  // label of second for loop
        for (let j = 0; j < list.length; j++) {

            if (value === list[j]) {
                count_i++;
            } else if (dict[value] === list[j]) {
                count_j++;
            } else {
                count++;
            }

            if ((count_i === count_j) && !(count%2 === 0)) {
                //console.log('invalid1');
                return 'invalid';
            } else if ((count_i === count_j) && (count%2 === 0)) {
                //console.log(j)
                list.splice(j, 1);
                //console.log(`len ${list.length}`)
                continue Loop1
            }
        }

        if (count_i !== count_j) {
            //console.log('invalid2');
            return 'invalid';
        }

    }
    //console.log('valid');
    return 'valid';
}

//let str = "((())(())(())(())";

//isValid(str);


module.exports = isValid;
