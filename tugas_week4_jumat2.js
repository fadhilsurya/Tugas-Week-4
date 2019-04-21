function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var result = [];
    for (var x = 0; x < arrPenumpang.length; x++) {
        var data = {
            penumpang: '',
            naikDari: '',
            tujuan: '',
            bayar: 0
        }
        var start = 0,
            end = 0;
        data.penumpang = arrPenumpang[x][0];
        data.naikDari = arrPenumpang[x][1];
        data.tujuan = arrPenumpang[x][2];
        for (var y = 0; y < rute.length; y++) {
            if (data.naikDari === rute[y]) {
                start = y + 1
            }
            if (data.tujuan === rute[y]) {
                end = y + 1
            }
        }
        data.bayar = 2000 * (Math.abs(end - start))
        result.push(data)
    }
    return result;
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'F', 'B'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]