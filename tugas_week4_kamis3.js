function countProfit(shoppers) {
    var listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];

    // you can only write your code here!
    var result = [];
    for (var x = 0; x < listBarang.length; x++) {
        var items = {
            product: '',
            shoppers: [],
            leftOver: 0,
            totalProfit: 0
        }
        var currentItem = listBarang[x][0];
        var buyer = [];
        var amount = 0;
        items.product = currentItem;
        for (var y = 0; y < shoppers.length; y++) {
            if (shoppers[y].product === currentItem) {
                if (listBarang[x][2] >= shoppers[y].amount) {
                    buyer.push(shoppers[y].name);
                    amount += shoppers[y].amount;
                }
            }
        }
        items.shoppers = buyer;
        items.leftOver = listBarang[x][2] - amount;
        items.totalProfit = listBarang[x][1] * amount;
        result.push(items);
    }
    return result;
}

console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 2
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 3
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 2
}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]