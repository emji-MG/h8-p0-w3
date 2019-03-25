function sorting(arrNumber) {
  // code di sini
  var temp;


  for(j=0; j<=arrNumber.length-1;j++)
  {
    for(i=0;i<=arrNumber.length-1-j;i++)
    {
      if(arrNumber[i]>arrNumber[i+1])
      {
        temp = arrNumber[i]
        arrNumber[i]=arrNumber[i+1]
        arrNumber[i+1]=temp
      }
    }
  } return arrNumber
}

function getTotal(arrNumber) {
  // code di sini
    if(arrNumber.length == 0)
  {
    return "''"
  }
  var total = 0;
 largest = arrNumber[arrNumber.length-1]
 for(k=arrNumber.length-1; k>=0; k--)
 {
   if(arrNumber[k]==largest)
   {
     total = total + 1;
   }else{
     return 'angka paling besar adalah '+largest+' dan jumlah kemunculan sebanyak '+total+' kali'
   }
 }
 return 'angka paling besar adalah '+largest+' dan jumlah kemunculan sebanyak '+total+' kali'
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''