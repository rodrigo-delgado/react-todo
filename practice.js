
var numbers = [1,2,3,4,5,77,88]

function isEven(number) {
  return number % 2 === 0
}

// I want an array which has only the even numbers
var evens = numbers.filter(isEven)

console.log(evens);


saleAmounts = [123.50, 100.00, 2.00]

function addTax(amount) {
  return amount * 1.15
}

// I want a new array which has taxes added
var afterTaxAmounts = saleAmounts.map(addTax)

console.log(afterTaxAmounts);


//part 1
var complexObj = {
  people: [{
    name: 'piet',
    accounts: [
      {name: 'savings', balance: 1.50},
      {name: 'cheque', balance: 12.00}
    ]
  }, {
    name: 'mix',
    accounts: [
      {name: 'savings', balance: 1.50},
      {name: 'cheque', balance: 12.00}
    ]
  }, {
    name: 'joseph',
    accounts: [
      {name: 'savings', balance: 1.50},
      {name: 'cheque', balance: 12.00}
    ]
  }]
}


// I want a command which will fetch out piets cheque balance
var pietsChequeBalance = complexObj.people[0].accounts[1].name
console.log(pietsChequeBalance);
