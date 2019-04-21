function highestScore(students) {
    // Code disini
    var result = {};
    var classes = [];
    for (var x = 0; x < students.length; x++) {
        var currentClass = students[x].class;
        var exist = false;
        for (var y = 0; y < classes.length; y++) {
            if (currentClass === classes[y]) {
                exist = true;
            }
        }
        if (!exist) {
            classes.push(students[x].class);
        }
    }
    for (var x = 0; x < classes.length; x++) {
        var currentClass = classes[x]
        var dataHighest = {
            name: '',
            score: 0
        }
        for (var y = 0; y < students.length; y++) {
            if (students[y].class === currentClass && students[y].score > dataHighest.score) {
                dataHighest.name = students[y].name;
                dataHighest.score = students[y].score;
            }
        }
        result[currentClass] = dataHighest;
    }
    return result;
}

// TEST CASE
console.log(highestScore([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
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
    },
    {
        name: 'Dimas',
        score: 100,
        class: 'foxes'
    }
]));

//   {
//     foxes: { name: 'Dimitri', score: 90 },
//     wolves: { name: 'Alexei', score: 85 }
//   }


console.log(highestScore([{
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

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}