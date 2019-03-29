function changeVocals (str) {
  //code di sini
   var huruf = ['a','e','i','o','u']
   var penggantiKecil = ['b','f','j','p','v']
   var hurufBesar = ['A','E','I','O','U']
   var penggantiBesar = ['B','F','J','P','V']

// var result = [];

var convert = [];
for(f=0; f<=str.length-1;f++){
  convert[f] = str[f]
}
for(i=0; i<=convert.length-1; i++)
{
  for(j=0; j<=4; j++)
  {
    if(convert[i]===huruf[j])
    {
      //  console.log(str[i]===huruf[j])
      // console.log(penggantiKecil[j])
      convert[i] = penggantiKecil[j]
    }else if(convert[i]===hurufBesar[j])
    {
      //console.log(str[i])
      convert[i] = penggantiBesar[j]
    }
  }
}
//console.log(convert)
  return convert;
}

function reverseWord (str) {
  //code di sini
  var temp = '';
    for (var k = str.length - 1; k >= 0; k--) {
        temp = temp + str[k];
    }
    return temp;
}

function setLowerUpperCase (str) {
  //code di sini
  str = str.split("");
    var kecil = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var besar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    for(x=0;x<26;x++){
      var y = 0;
      while(y<=str.length-1){
      if(str[y]===kecil[x])
        {
         str[y] = besar[x];
        }
        else if(str[y]===besar[x])
        {
         str[y] = kecil[x]
        }
        y = y + 1;
      }
    }
  return str.join("");
}

function removeSpaces (str) {
  //code di sini
  return str.split(' ').join('')
}

function passwordGenerator (name) {
  //code di sini
  var changeVocal = changeVocals(name)
  var reverse = reverseWord(changeVocal)
  var besarKecil = setLowerUpperCase(reverse)
  var removeSpace = removeSpaces(besarKecil)

  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  return removeSpace
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'