function tukarBesarKecil(kalimat) {
  // you can only write your code here!
   kalimat = kalimat.split("");
    var kecil = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var besar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    for(j=0;j<26;j++){
      var i = 0;
      while(i<=kalimat.length-1){
      if(kalimat[i]===kecil[j])
        {
         kalimat[i] = besar[j];
        }
        else if(kalimat[i]===besar[j])
        {
         kalimat[i] = kecil[j]
        }
        i = i + 1;
      }
    }
  return kalimat.join("");
}


// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"