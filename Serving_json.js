var http = require('http');
var fs =require ('fs');


var server = http.createServer(function(req,res){
console.log('request was made :' +req.ulr);
res.writeHead(200,{'content-type':'application/json'});
  
   //this is an object
var myObj={
    name:'MSW',
    job:'Engg',
    age:47
};
res.end(JSON.stringify(myObj));
});


 server.listen(3000,'127.0.0.1');
 console.log('listening to port 3000 ');


 //(JSON.stringify(myObj)) is the string type in json