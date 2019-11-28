// var os=require('os');
// console.log(os.freemem());//free memory
// console.log(os.totalmem());//total memory
// console.log(os.homedir());//get home direactory
// console.log(os.hostname());///get host name 
// console.log(os.type());///type of os

// console.log(__filename)/// globel variable to get path 
// console.log(__dirname)////globle variable to get path
////console.log(require);

// const path=require('path');
// var pathobj=path.parse(__filename);///converts __filename to object
// console.log(pathobj);

/// oprations with files

// const fs=require('fs')
// //sychronous
//   console.log("synch")
//   const n= fs.readdirSync('./')
//    console.log(n);

// //asych
//   console.log("asynch")
//   fs.readdir('./',(err,val)=>{
//     if(err)console.log(err);
//     else
//     console.log(val)
// });

// /* readin file */
// //synch
// const fs1=require('fs');
// var data=fs1.readFileSync('read.txt','utf8');
// console.log(data)

// //asych
// const fs=require('fs');
// fs.readFile('read.txt','utf8', (err, data) => {
//     if (err) throw err;
    
//     console.log(data);
//   });

/* write to file*/

// const fs=require('fs');
// var data="this data get writed  file"


// fs.writeFile('new.txt',data,(err)=>{
//  if(err)
//  console.log(err);
//  else
//  console.log("write file success");
// });

