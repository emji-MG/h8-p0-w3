function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  // var jalur =
  // [
  //   {
  //     rute : 'A',
  //     index : 0
  //   },
  //   {
  //     rute : 'B',
  //     index : 1
  //   },
  //   {
  //     rute : 'C',
  //     index : 2
  //   },
  //   {
  //     rute : 'D',
  //     index : 3
  //   },
  //   {
  //     rute : 'E',
  //     index : 4
  //   },
  //   {
  //     rute : 'F',
  //     index : 5
  //   }
  // ]

  


  var temp =
  {
    penumpang : '',
    naikDari : '',
    tujuan : '',
    bayar : 0
  }
  
  var result = []
  //console.log(arrPenumpang[0].length)
  var j = 0;
  for(i = 0; i<= arrPenumpang.length-1; i++)
  {
    for(j=0; j<rute.length; j++)
    {
    var naik;
    var turun;
    if(arrPenumpang[i][1]==rute[j])
    {
      naik = j
    }
    if(arrPenumpang[i][2]==rute[j])
    {
      turun = j
    }
  }
    jarak = Math.abs(turun - naik)
    temp.penumpang = arrPenumpang[i][0]
    temp.naikDari = arrPenumpang[i][1]
    temp.tujuan = arrPenumpang[i][2]
    temp.bayar = jarak*2000
    //console.log(temp)
    result.push(temp)
    temp = {}
  }
  if(arrPenumpang === undefined)
  {
    return [];
  }
  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]