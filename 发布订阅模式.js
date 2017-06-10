var Event = (function(){
  var events = {}
  function on(evt,handler){
    events[evt] = events[evt] || []
    events[evt].push({
      handler: handler
    })
  }
  function fire(evt,args){
    if (!events[evt]) {
      return
    }
    for (var i = 0; i < events[evt].length; i++) {
      events[evt][i].handler(args)
    }
  }
  return {
    on: on,
    fire: fire
  }
})()

Event.on('my_event',function(data){
  console.log('kuma')
})
Event.on('my_event',function(data){
  console.log('jirengu')
})
Event.fire('my_event')