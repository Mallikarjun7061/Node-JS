var express =require('express');

var app = express();

app.get('/',function(req,res){
    res.sendFile(__dirname +'/Index.html');
});
app.get('/contact',function(req,res){
    res.sendFile(__dirname +'/contact.html');
});
app.get('/profile/:name',function(req,res){
    res.send('you requested to see a profile with the id of' + req.params.name);
});


app.listen(3000);