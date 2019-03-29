function changeMe(arr) {
  // you can only write your code here!
  var result = [];

  for(i=0; i<=arr.length-1;i++)
  {
    console.log((i+1)+'. '+arr[i][0] + ' '+ arr[i][1] + ':')
    var identity = {
    firstName : arr[i][0],
    lastName : arr[i][1],
    gender : arr[i][2],
     };
     if(arr[i][3]<0 || arr[i][3] === undefined)
      {
        identity.age = 'Invalid Birth Year'
      }
      else{
         identity.age = Number(2019 - arr[i][3])
      }
      if(identity.age < 0)
      {
        identity.age = 'Invalid Birth Year'
      }
    console.log(identity)
    // for(j=0; j<=arr.length-1; j++)
    // {
    //   //identity[j] = arr[i][j]
    //   identity.firstName = arr[i][0];
    //   identity.lastName = arr[i][1];
    //   identity.gender = arr[i][2]
    //   identity.age = 2019 - arr[i][3]
    // }
     // result.push(identity) 
  }//console.log(result)
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""