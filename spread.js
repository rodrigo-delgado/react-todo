var person = ['Rodrigo', 31]
var personTwo = ['Georgia', 22]

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age );
}

greet(...person)
greet(...personTwo)


var names = ['Mike', 'Ben']
var final = ['Rodrigo', ...names]


final.forEach(function (name){
  console.log('Hi '+ name);
})
