function makanTerusRekursif(waktu) {
  // you can only write your code here!
  //console.log(waktu)
  if(waktu<=0)
  {
    return 0;
  }
 return makanTerusRekursif(waktu-15)+1
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0