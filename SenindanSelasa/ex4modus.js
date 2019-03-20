function cariModus(arr) {
  // you can only write your code here!

  var arrUnique = [];
  var arrCounter = [];
  arrUnique.push(arr[0]);
  var checking = true;
  var modusCounter = 0;

    for(var j = 1; j<=arr.length-1; j++)
    {
      var x = 0;
      checking = true;
      // for(var x = 0; x<=arrUnique.length-1; x++)
      while(x<=arrUnique.length-1 && checking == true)
        {
          if(arr[j]!=arrUnique[x])
        {
           //console.log(arr[j]!=arrUnique[x] + '' + x)
          checking = true;
        }else if(arr[j]==arrUnique[x])
        {
          checking = false;
          
        }
        //console.log(arrUnique[1])
        //console.log(arrUnique.length)
        x = x + 1
     }if(checking === true)
      {
      arrUnique.push(arr[j])
      //console.log(arrUnique)
      }
    }
    for(i=0; i<=arrUnique.length-1;i++)
    {
      modusCounter = 0
      for(h=0;h<=arr.length;h++)
      {
        if(arrUnique[i]==arr[h])
        {
          modusCounter = modusCounter + 1;
        }
        
      }
      arrCounter.push(modusCounter)
      //console.log(arrCounter)

    }
    
    if(arrCounter.length == arr.length)
    {
      return -1;
    }else if(arrCounter.length ==1)
    {
      return -1;
    }
    var terbesar = arrCounter[0];
    var indexTerbesar = 0;

    for(var k = 1; k<=arrCounter.length-1;k++)
    if(arrCounter[k]>terbesar)
    {
      terbesar = arrCounter[k]
     // console.log(terbesar)
      indexTerbesar = k;
     // console.log(indexTerbesar)
    // }else if(arrCounter[k]==terbesar)
    // {
    //   return arrUnique[indexTerbesar];
    }
      return arrUnique[indexTerbesar];
  }






// TEST CASES
 console.log(cariModus([10, 4, 5, 2, 4])); // 4
 console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
 console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1