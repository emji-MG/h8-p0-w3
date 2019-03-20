function checkAB(num) {
  // you can only write your code here!
  var arrA = [];
  var arrB = [];
  var jarak = [];
  var i = 0;
  for(i=num.length-1; i>=0;i--)
  {
    if(num[i] == 'a')
    {
      arrA.push(i);
    }else if(num[i] == 'b')
    {
      arrB.push(i)
    }
  }if(arrB.length == 0 || arrA.length == 0)
  {
    return false;
  }
  // console.log(arrA)
  // console.log(arrB)
  var checking = true;
  var h = 0;
  var k = 0;
  var pembanding = 0;
  for(h=0;h<arrA.length;h++)
  {
    for(k=0;k<arrB.length;k++)
    {
      pembanding = Math.abs(arrA[h]-arrB[k])-1;
      jarak.push(pembanding)
    }  
  }
  for(i=0; i<=jarak.length-1;i++)
  {
    if(jarak[i]==3)
    {
      checking = true;
      return true;
    }else{ checking = false;}
  }
  if(checking ===false)
  {
    return false;
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false