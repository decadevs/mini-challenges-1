/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let dict = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    let limit = str.length / 2;
    let arr = str.split("");
    if (arr.length !== 2 && arr.length % 2 !== 0) return 'invalid';
    for (let i = 0; i < limit; i++) {
        if (!dict.hasOwnProperty(arr[0])) return 'invalid';

        let closer = dict[arr[0]];
        let indexOfOpn = arr.lastIndexOf(arr[0]);
        let indexOfCls = arr.indexOf(closer, indexOfOpn);

        if (indexOfOpn === arr.length - 1) return 'invalid';

        let inBtwn = (indexOfCls + 1 !== arr.length)
            ? arr.slice(indexOfOpn, indexOfCls + 1)
            : arr.slice(indexOfOpn);
        if ((inBtwn.length !== 2) && (inBtwn.length % 2 !== 0)) return 'invalid';

        if (indexOfCls < 0) return 'invalid';

        arr.splice(indexOfCls, 1);
        arr.splice(indexOfOpn, 1);
    }
    return 'valid'
}

module.exports = isValid;
