function shoppingTime(memberId, money) {
    // you can only write your code here!
    var data = [
        ['stacattu', 1500000, 0],
        ['zoro', 500000, 0],
        ['hnn', 250000, 0],
        ['uniklooh', 175000, 0],
        ['casing', 50000, 0]
    ];

    var member = {
        memberId: memberId,
        balance: money,
        listPurchased: [],
        changeMoney: money
    }

    if (!memberId) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    var listPurchased = [];
    var x = 0;
    for (var x = 0; x < data.length; x++) {
        if (member.changeMoney - data[x][1] < 0) {
            break;
        } else if (member.changeMoney - data[x][1] >= 0 && data[x][2] < 1) {
            listPurchased.push(data[x][0]);
            data[x][2]++;
            member.changeMoney -= data[x][1];
        }
    }
    if (listPurchased.length === 0) {
        return 'Mohon maaf, uang tidak cukup'
    }
    member.listPurchased = listPurchased;
    return member;
}

// TEST CASES

console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja