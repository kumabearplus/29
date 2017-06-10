var Person = function(name,age){
  this.name = name
  this.age = age
}
Person.prototype.isPeople = function(){
  console.log(this.name + 'is people')
}
var Kuma = function (name,age,sex){
  Person.call(this,name,age)
  this.sex = sex
}
Kuma.prototype = Object.create(Person.prototype)
Kuma.prototype.isWalking = function(){
  console.log(this.name + 'is walking')
}
//   isSpeaking: function(){
//     console.log(this.name + 'is speaking')
//   }
// }
var person = new Kuma('kuma','24','men')
console.log(person)