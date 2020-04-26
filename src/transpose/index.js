/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let lengthOfOuterArray = array.length;
    let newOuterArray = [];
    for (let i = 0; i < lengthOfOuterArray; i++){
        var lengthOfInnerArray = array[i].length;
        for (let j = 0; j < lengthOfInnerArray; j++){
            let p = array[i].shift();
            newOuterArray.push(p);
        }
    }
    lengthOfOuterArray = newOuterArray.length;
    let newArray = [];
    for (var i = 1; i < lengthOfInnerArray+1; i++){
        eval('var anotherArray'+ i + ' = [];');
    }
   
    for (let i = 0; i < newOuterArray.length; i++) {
        if (i % lengthOfInnerArray === 0) {
            anotherArray1.push(newOuterArray[i]);
        } else if (i % lengthOfInnerArray === 1) {
            anotherArray2.push(newOuterArray[i]);            
        } else if (i % lengthOfInnerArray === 2) {
            anotherArray3.push(newOuterArray[i]);            
        } else if (i % lengthOfInnerArray === 3) {
            anotherArray4.push(newOuterArray[i]);            
        } else if (i % lengthOfInnerArray === 4) {
            anotherArray5.push(newOuterArray[i]);            
        } else if (i % lengthOfInnerArray === 5) {
            anotherArray6.push(newOuterArray[i]);            
        } else if (i % lengthOfInnerArray === 6) {
            anotherArray7.push(newOuterArray[i]);            
        } else if (i % lengthOfInnerArray === 7) {
            anotherArray8.push(newOuterArray[i]);            
        } else if (i % lengthOfInnerArray === 8) {
            anotherArray9.push(newOuterArray[i]);            
        } else if (i % lengthOfInnerArray === 9) {
            anotherArray10.push(newOuterArray[i]);            
        } else if (i % lengthOfInnerArray === 10) {
            anotherArray11.push(newOuterArray[i]);            
        } 
    }
    if (lengthOfInnerArray === 1) {
        newArray.push(anotherArray1);
    } else if (lengthOfInnerArray === 2) {
        newArray.push(anotherArray1);
        newArray.push(anotherArray2);
    } else if (lengthOfInnerArray === 3) {
        newArray.push(anotherArray1);
        newArray.push(anotherArray2);
        newArray.push(anotherArray3);
    } else if (lengthOfInnerArray === 4) {
        newArray.push(anotherArray1);
        newArray.push(anotherArray2);
        newArray.push(anotherArray3);
        newArray.push(anotherArray4);
    } else if (lengthOfInnerArray === 5) {
        newArray.push(anotherArray1);
        newArray.push(anotherArray2);
        newArray.push(anotherArray3);
        newArray.push(anotherArray4);
        newArray.push(anotherArray5);
    } else if (lengthOfInnerArray === 6) {
        newArray.push(anotherArray1);
        newArray.push(anotherArray2);
        newArray.push(anotherArray3);
        newArray.push(anotherArray4);
        newArray.push(anotherArray5);
        newArray.push(anotherArray6);
    } else if (lengthOfInnerArray === 7) {
        newArray.push(anotherArray1);
        newArray.push(anotherArray2);
        newArray.push(anotherArray3);
        newArray.push(anotherArray4);
        newArray.push(anotherArray5);
        newArray.push(anotherArray6);
        newArray.push(anotherArray7);
    } else if (lengthOfInnerArray === 8) {
        newArray.push(anotherArray1);
        newArray.push(anotherArray2);
        newArray.push(anotherArray3);
        newArray.push(anotherArray4);
        newArray.push(anotherArray5);
        newArray.push(anotherArray6);
        newArray.push(anotherArray7);
        newArray.push(anotherArray8);
    } else if (lengthOfInnerArray === 9) {
        newArray.push(anotherArray1);
        newArray.push(anotherArray2);
        newArray.push(anotherArray3);
        newArray.push(anotherArray4);
        newArray.push(anotherArray5);
        newArray.push(anotherArray6);
        newArray.push(anotherArray7);
        newArray.push(anotherArray8);
        newArray.push(anotherArray9);
    } else if (lengthOfInnerArray === 10) {
        newArray.push(anotherArray1);
        newArray.push(anotherArray2);
        newArray.push(anotherArray3);
        newArray.push(anotherArray4);
        newArray.push(anotherArray5);
        newArray.push(anotherArray6);
        newArray.push(anotherArray7);
        newArray.push(anotherArray8);
        newArray.push(anotherArray9);
        newArray.push(anotherArray10);
    } else if (lengthOfInnerArray === 11) {
        newArray.push(anotherArray1);
        newArray.push(anotherArray2);
        newArray.push(anotherArray3);
        newArray.push(anotherArray4);
        newArray.push(anotherArray5);
        newArray.push(anotherArray6);
        newArray.push(anotherArray7);
        newArray.push(anotherArray8);
        newArray.push(anotherArray9);
        newArray.push(anotherArray10);
        newArray.push(anotherArray11);
    }
    return newArray;
}

module.exports = transpose;
