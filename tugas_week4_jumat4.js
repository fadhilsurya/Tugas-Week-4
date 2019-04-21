function graduates(students) {
    // Code disini
    var result = {};
    var classes = [];
    for (var x = 0; x < students.length; x++) {
        var exist = false;
        for (var y = 0; y < classes.length; y++) {
            if (students[x].class === classes[y]) {
                exist = true;
            }
        }
        if (!exist) {
            classes.push(students[x].class);
        }
    }
    for (var x = 0; x < classes.length; x++) {
        result[classes[x]] = [];
        for (var y = 0; y < students.length; y++) {
            if (students[y].class === classes[x] && students[y].score > 75) {
                var data = {
                    name: '',
                    score: 0
                };
                data.name = students[y].name;
                data.score = students[y].score;
                result[classes[x]].push(data);
            }
        }
    }
    return result;
}

console.log(graduates([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Dimas',
        score: 60,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

//   // {
//   //   foxes: [
//   //     { name: 'Alexander', score: 100 },
//   //     { name: 'Vladimir', score: 92 }
//   //   ],
//   //   wolves: [
//   //     { name: 'Alisa', score: 76 },
//   //   ],
//   //   tigers: [
//   //     { name: 'Viktor', score: 80 }
//   //   ]
//   // }


console.log(graduates([])); //{}