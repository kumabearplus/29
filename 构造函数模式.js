function Kuma(name,age,sex){
  this.name = name
  this.age = age
  this.sex = sex
}
Kuma.prototype = {
  isWalking: function(){
    console.log(this.name + 'is walking')
  },
  isSpeaking: function(){
    console.log(this.name + 'is speaking')
  }
}
var person = new Kuma('kuma','24','men')
console.log(person)