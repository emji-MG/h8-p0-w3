function changeVocals (str) {
  //code di sini
   var huruf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
   var hurufBesar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  
var result = [];
for(i=0; i<=str.length-1; i++)
{
  for(j=0; j<=25; j++)
  {
    if(str[i]==huruf[j])
    {
      console.log(str[i])
      result.push(huruf[j+1])
    }else if(str[i]==hurufBesar[j])
    {
      console.log(str[i])
      result.push(hurufBesar[j+1])
    }
  }
}//console.log(result)
  return result
}

console.log(changeVocals('Sergei Dragunov'));