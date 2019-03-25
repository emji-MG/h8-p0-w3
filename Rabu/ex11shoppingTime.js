  function shoppingTime(memberId, money) {
    // you can only write your code here!
  
  var result =
  {
    memberId : '',
    money : 0,
    listPurchased : [],
    changeMoney : 0
  }
  
  result.memberId = memberId;
  if( memberId === undefined || memberId.length === 0)
  {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }
  
  if(money < 50000)
  {
    return 'Mohon maaf, uang tidak cukup'
  }
  var sisa = 0;
    var product =
  [
    {
      name : 'Sepatu Stacattu',
      price : 1500000
    },

    {
      name : 'Baju Zoro',
      price : 500000
    },

    {
      name : 'Baju H&N',
      price : 250000
    },

    {
      name : 'Sweater Uniklooh',
      price : 175000
    },
    
    {
      name : 'Casing Handphone',
      price : 50000
    }
  ]

var belanja = [];
var spent = 0;

for(var i in product)
{
  if(money>=product[i].price)
  {
    belanja.push(product[i].name)
    spent = spent + product[i].price
  }
  sisa = money - spent;
}

result.memberId = memberId;
result.money = money;
result.listPurchased = belanja;
result.changeMoney = sisa;

/*
  var checkingSepatu = false;
  var checkingZoro = false;
  var checkingHnN = false;
  var checkingUniklo = false;
  var checkingHp = false;

  while(money>=50000)
  {
    //console.log(moneyUsed)
  if(money - 1500000 >= 0 && checkingSepatu === false)
  {
    money = money - 1500000;
    moneyUsed = moneyUsed + 1500000;
    result.listPurchased.push('Sepatu Stacattu')
    checkingSepatu = true;
  }else if(money - 500000 >= 0 && checkingZoro === false)
  {
    money = money - 500000
    moneyUsed = moneyUsed + 500000;
    result.listPurchased.push('Baju Zoro')
    checkingZoro = true;
  }else if(money - 250000>= 0 && checkingHnN === false)
  {
    money = money - 250000
    moneyUsed = moneyUsed + 250000;
    result.listPurchased.push('Baju HnN')
    checkingHnN = true;
  }else if(money - 175000 >= 0 && checkingUniklo === false)
  {
    money = money - 175000
    moneyUsed = moneyUsed + 175000;
    result.listPurchased.push('Sweater Uniklooh')
    checkingUniklo = true;
  }else if(money - 50000 >=0 && checkingHp === false)
  {
    money = money - 50000
    moneyUsed = moneyUsed + 50000;
    result.listPurchased.push('Casing Handphone')
    checkingHp = true;
  }else if(money < 175000 && checkingHp === true)
  {
    break;
  }
  } 
   result.changeMoney = uang - moneyUsed;
  */
  
  
  return result;
}
    

  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  // //{ memberId: '82Ku8Ma742',
  // // money: 170000,
  // // listPurchased:
  // //  [ 'Casing Handphone' ],
  // // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
