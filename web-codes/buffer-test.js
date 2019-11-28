/// allocate memory to buffer
var buf=new  Buffer.alloc(150);
///ading data to buffer string 
var b=buf.write("new string");
console.log(String(buf));