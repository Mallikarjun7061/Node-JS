var http = require('http');
var fs =require ('fs');


var server = http.createServer(function(req,res){
console.log('request was made :' +req.ulr);
res.writeHead(200,{'content-type':'text/plain'});
var myReadStreams=fs.createReadStream(__dirname + '/readMe.txt','utf8');
myReadStreams.pipe(res);
});
 server.listen(3000,'127.0.0.1');
 console.log('listening to port 3000 ');
