function urutkanAbjad(str) {
    var urutan = [];



    for (var i = 0; i < str.length; i++) {
        urutan.push(str[i])
    }

    for (var j = 0; j < urutan.length - 1; j++) {
        if (urutan[j] > urutan[j + 1]) {
            gabungan = urutan[j + 1]
            urutan[j + 1] = urutan[j];
            urutan[j] = gabungan;
            j -= 2
        }
    }

    return urutan.join('')
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'