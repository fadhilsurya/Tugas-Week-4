function changeMe(arr) {
    var data = {}

    for (var x = 0; x < arr.length; x++) {
        var age = arr[x][3];
        if (age < 2019) {
            age = 2019 - age;
        } else {
            age = 'invalid birth year'
        }

        data.firstName = arr[x][0]
        data.lastName = arr[x][1]
        data.gender = arr[x][2],
            data.age = age

        console.log(x + 1 + '. ' + data.firstName, data.lastName, ':\n', data);
        data = {};
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }