var Event = (function(){
  var events = {}
  function on(evt,fn){
    events[evt] = events[evt] || []
    events[evt].push(fn)
  }
  function fire(evt,args){
    if (!events[evt]) {
      return
    }
    
    for (var i = 0; i < events[evt].length; i++) {
      events[evt][i](args)
    }
    // events[evt].forEach(function(fn){
    //   fn(args)
    // })
  }
  function off(evt,fn){
    delete events[evt]
  }
  return {
    on: on,
    fire: fire,
    off: off
  }
})()

Event.on('change',function(val){
  console.log('change...  now val is ' + val)
})
Event.on('change',function(data){
  console.log('change2...  now data is ' + data)
})
Event.fire('change','饥人谷')
Event.off('change')
Event.fire('change','kuma')