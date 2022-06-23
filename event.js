var events = require('events');

//create an object of EventEmitter class
var myEmmitter = new events.EventEmitter();

myEmmitter.on('anEvent',function(msg){
    console.log(msg);
});

//anEvent is anything name we can take

myEmmitter.emit('anEvent','The event is absolutely emmited');