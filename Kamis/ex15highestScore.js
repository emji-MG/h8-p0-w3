function highestScore (students) {
  // Code disini
  result = {}
  for(var i = 0; i<students.length; i++)
    {
      if(result[students[i].class] === undefined)
      {
        result[students[i].class]= {
          name : students[i].name,
          score : students[i].score
        }
      }else if(students[i].score>=result[students[i].class].score)
      {
        result[students[i].class] =
      {
        name : students[i].name,
        score : students[i].score
      }
      }


    }
    return result;
}

// TEST CASE
console.log(JSON.stringify(highestScore([
  {
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
  }
]),null,4));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
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

// // {
// //   foxes: { name: 'Alexander', score: 100 },
// //   wolves: { name: 'Alisa', score: 76 },
// //   tigers: { name: 'Viktor', score: 80 }
// // }


console.log(highestScore([])); //{}