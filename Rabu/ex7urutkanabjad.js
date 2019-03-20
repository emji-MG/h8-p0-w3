function urutkanAbjad(str) {
  // you can only write your code here!

 var huruf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
var result = [];
for(j=0;j<26;j++){
      var i = 0;
      while(i<=str.length-1){
      if(str[i]==huruf[j])
        {
        result.push(str[i])
        i = i + 1;
        }else if(str[i]!=huruf[j])
        {
          i = i + 1;
        }
      }
    }
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'