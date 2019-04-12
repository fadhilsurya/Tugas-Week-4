function ubahHuruf(kata) {
    var tangkapKata = ''
    alphabet = 'abcdefhijklmnopqrstuvwxyz'

    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < alphabet.length; j++) {
            if (kata[i] == alphabet[24]) {
                tangkapKata += alphabet[0]
                break;
            } else if (kata[i] == alphabet[j]) {
                tangkapKata += alphabet[j + 1]
            }

        }
    }
    return tangkapKata
}