//MUHAMAD FADHIL SURYA PUTRA

function tambahPenumpangBus(arr1, arr2) {
    var hasilBro = arr1
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr1; j++) {
            if (arr[i][j] == '') {
                hasilBro.push(arr2[i])
            }
        }
    }
    console.log(hasilBro)

}

console.log(tambahPenumpangBus([
    ['Hary', '', 'Miftah'],
    ['', 'Tony', ''],
    ['Udin', 'Paijo', 'Butet']
], ['Budi', 'Soleh', 'Miku']));
/*
[
  ['Hary', 'Budi', 'Miftah'],
  ['Soleh', 'Tony', 'Miku'],
  ['Udin', 'Paijo', 'Butet']
]
*/

console.log(tambahPenumpangBus([
    ['Udin', '', ''],
    ['', '', 'Dede'],
    ['Saiful', 'Paijo', 'Butet']
], ['Alucard', 'Balmond', 'Eudora', 'Nana', 'Miya', 'Zilong', 'Layla', 'Grock']))