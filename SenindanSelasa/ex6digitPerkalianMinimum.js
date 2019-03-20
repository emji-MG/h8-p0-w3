function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var arrAngka = ['1'];
    if(angka >1){
      for(var i=2; i<=angka; i++){
        if(angka % i == 0) {
            i = i.toString();
            arrAngka.push(i)
        }
      }//console.log(arrAngka)
    }
  if(angka<10)
  {
    arrAngka.push(angka)
  }
  // var convertString = [];
  // convertString = arrAngka.toString();
  // console.log(convertString)
  var gabungan = '';
  var jumlahDigit;
  var arrResult = [];

  // console.log(arrAngka)

  for(i=0; i<arrAngka.length/2;i++)
    {
      gabungan = arrAngka[i] + arrAngka[arrAngka.length-1- i];
      console.log(gabungan)
      jumlahDigit = gabungan.length;
      arrResult.push(jumlahDigit);
      gabungan = '';
      jumlahDigit = 0;
    }

  console.log(arrResult)
  var digitTerkecil = arrResult[0];
  for (var j=0; j<=arrResult.length-1; j++) {
        if(arrResult[j] < digitTerkecil){
          digitTerkecil = arrResult[j];
        }
  }
  return digitTerkecil;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2