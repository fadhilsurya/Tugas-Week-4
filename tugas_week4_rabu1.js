function digitPerkalianMinimum(angka) {

    var tangkap = [];

    for (var i = 0; i <= angka; i++) {
        for (var j = 0; j <= angka; j++) {
            if ((i * j) == angka) {
                tangkap.push(i + '' + j)

            }
        }
    }
    tangkap.sort(function(a, b) {
        return a - b
    })

    return tangkap[0].length
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2