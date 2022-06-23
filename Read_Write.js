var fs = require('fs');

           //one way to readfile

var sample = fs.readFileSync('sample.txt','utf8');
console.log(sample);

       //command is used to write the file

fs.writeFileSync('write.txt',sample);  //automatically creates the write.txt


    
             //second way to read the file

// fs.readFile('sample.txt','utf8',function(err,data){
//     console.log(data);
// });
// console.log('test');



               // Another way to read_write file

// fs.readFile('sample.txt','utf8',function(err,data){
//     fs.writeFileSync('write.txt',data);
// });