function createPeople(opts){
  var kuma = {
    name: opts.name || 'kuma'
  }
  kuma.isWalking = function(){
    console.log(this.name + ' is walking')
  }
  return kuma
}



var person1 = createPeople({name:'kuma'})
var person2 = createPeople({name:'jirengu'})
console.log(person1)
console.log(person2)