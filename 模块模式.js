var checkingEmail = (function(){
  function isEmail(str){
    var reg = /^\w+@\w+(\.\w+){1,}$/
    if (reg.test(str)) {
      return '输入的邮箱正确'
    }else {
      return '请输入正确的邮箱'
    }
  }
  return {
    init: isEmail
  }
})()
checkingEmail.init('qdjuehh@yahoo.co.jp')
// function isEmail(str){
//     var reg = /^\w+@\w+(\.\w+){1,}$/
//     if (reg.test(str)) {
//       return '输入的邮箱正确'
//     }else {
//       return '请输入正确的邮箱'
//     }
//   }
//   var str = isEmail('qdjuehh@yahoo.co.jp')
//   console.log(str)