// const http=require('http');
// http.createServer(function(req,res){
//     res.write("hello from 3000");
//     res.end();
// }).listen(3000);

const htpp=require('http');
var ser=htpp.createServer(function(req,res){
    res.write("<h1>hello world chnaghed </h>");
    res.end();
})
ser.listen();
////1000 is port no used to load 
console.log(ser);
