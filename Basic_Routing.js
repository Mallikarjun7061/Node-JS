var http = require('http');
var fs =require ('fs');


var server = http.createServer(function(req,res){
 console.log('request was made :' +req.ulr);
 if(req.url === '/home' || req.url === '/'){
  res.writeHead(200,{'content-type':'text/html'});
  fs.createReadStream(__dirname + '/Index.html').pipe(res);
 } else if(req.url === '/contact'){
    res.writeHead(200,{'content-type':'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
 }else if(req.url === '/api/ninjas'){
    var ninjas =[{name:'King',age:22},{name:'Queen',age:22}];
    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify(ninjas));
 }else{
    res.writeHead(200,{'content-type':'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
 }
});
  
server.listen(3000,'127.0.0.1');
console.log('listening to port 3000 ');
