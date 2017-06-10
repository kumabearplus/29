var Peopel = (function(){
  var instance
  function init(){
    var kuma = 1
    return {
      init: kuma
    }
  }
  return {
    createPeople: function(){
      if (!instance) {
        instance = init()
      }
      return instance
    }
  }
})()

var obj1 = Peopel.createPeople()
var obj2 = Peopel.createPeople()
console.log(obj1)
console.log(obj2)