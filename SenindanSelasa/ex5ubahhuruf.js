function ubahHuruf(kata) {
  // you can only write your code here!
  var huruf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
  var checking = true;
  var pecahKata = kata.split('')

  for(i = 0; i<=kata.length-1;i++)
  {
    var checking = true;
    for(j = 0; j<=huruf.length-1; j++)
    {
      // console.log(kata[i]==huruf[j]+ ' ' + j)
      // console.log(kata[i])
      if(pecahKata[i]==huruf[j] && checking == true)
      {
        if(pecahKata[i]=='z')
        {
          pecahKata[i] = huruf[0]
        }else{
        pecahKata[i] = huruf[j+1];
        checking = false;}
      }
    }  
  }var result = pecahKata.join('')
  return result; //langsung return pecahKata.join('')
}

// TEST CASES
console.log(ubahHuruf('zoz')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu