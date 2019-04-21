// MUHAMAD FADHIL SURYA PUTRA

// SET function arrayMapper with 3 parameters targetArr, operator and effect
// SET variable hasil to empty arrays 
// SET for loop with var equals to 0 i smaller than target length and i plus plus
// SET IF operator equals to string plus
// SET hasil dot push targetArr i to plus effect
// SET else if operator equals to devide string
// SET hasil dot push targetArr i to devide effect
// SET else if operator equals to minus string
// SET hasil dot push to targetArr i to minus effect
// SET else if operator equals to equals string and target i equals to effect
// SET hasil dot push to true
// SET else if operator equals to equals string and target i equals to effect
// SET hasil dot push to false
// set return hasil


function arrayMapper(targetArr, operator, effect) {
    var hasil = [];
    for (var i = 0; i < targetArr.length; i++) {
        if (operator == '+') {
            hasil.push(targetArr[i] + effect)
        } else if (operator == '/') {
            hasil.push(targetArr[i] / effect)
        } else if (operator == '-') {
            hasil.push(targetArr[i] - effect)
        } else if (operator == '===' && targetArr[i] === effect) {
            hasil.push(true)
        } else if (operator == '===' && targetArr[i] !== effect) {
            hasil.push(false)
        }
    }
    return hasil;
}



console.log(arrayMapper([1, 5, 3, 4], '+', 1)); // [2, 6, 4, 5]
console.log(arrayMapper([8, 4, 2, 10], '/', 2)); // [4, 2, 1, 5]
console.log(arrayMapper([1, 2, 3, 4, 5], '-', 3)); // [-2, -1, 0, 1, 2]
console.log(arrayMapper([1, 3, 3], '===', 3)); // [false, true, true]