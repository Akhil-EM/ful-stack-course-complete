console.log("before");
var promise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({id:1,name:"meera"});
    },1000);
})
promise1.
        then(function(user){
          console.log(user);
          console.log("first then");
          return "to second then";
        }).
        then(function(msg){
            console.log("second then")
            console.log(`messsage form first: ${msg}`)
                   
                   ////for agin time delay use another promise
                  return new Promise(function(resolve,reject){
                   
                        return "to second then";
                       
                   });
                  
               
                   
        }).
        then(function(msg2){
          console.log(`msg from second: ${msg2}`)
        }).
        catch(function(err){
            ////to call reject part
          console.log("erorr occured");
        });
console.log("after");        


////promise acced by fuction itself 
/*function myfun(id)
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
             resolve({id:id,name:"akhil"});
        },2000);
    })
}

myfun(4)
       .then(function(msg){
          console.log(msg);
       });*/