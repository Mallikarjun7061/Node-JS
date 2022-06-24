var http= require('http');
var fs = require('fs');

var myReadStreams = fs.createReadStream(__dirname + '/readMe.txt');
 
myReadStreams.on('data',function(chunk){
    console.log('new chunk received:');
    console.log(chunk);
});