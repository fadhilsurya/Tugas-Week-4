function deepSum(arr) {
    // Code disini
    if (arr.length === 0) {
        return 'No Number'
    }
    var flatArr = FlatArr(arr);
    var result = 0;
    for (var x = 0; x < flatArr.length; x++) {
        result += flatArr[x];
    }
    return result;
}

function FlatArr(arr) {
    var result = []
    for (var i = 0; i < 2; i++) { //karena kedalaman array always 3, jadi cuma butuh 2 loop
        for (var x = 0; x < arr.length; x++) {
            for (var y = 0; y < arr[x].length; y++) {
                result.push(arr[x][y]);
            }
        }
        arr = result;
        result = [];
    }
    return arr;
}
//TEST CASE
console.log(deepSum([
    [
        [4, 5, 6],
        [9, 1, 2, 10],
        [9, 4, 3]
    ],
    [
        [4, 14, 31],
        [9, 10, 18, 12, 20],
        [1, 4, 90]
    ],
    [
        [2, 5, 10],
        [3, 4, 5],
        [2, 4, 5, 10]
    ]
])); // 316

console.log(deepSum([
    [
        [20, 10],
        [15],
        [1, 1]
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [2],
        [9, 11]
    ],
    [
        [3, 5, 1],
        [1, 5, 3],
        [1]
    ],
    [
        [2]
    ]
])); // 156

console.log(deepSum([])); // No number