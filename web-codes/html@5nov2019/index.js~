//old way of usage
/*function mul(num1,num2)
{
    return num1*num2;
}

let result=mul(2,5);
console.log(result);
*/


//assign to a variable from ecma-5
// var mul =function (num1,num2)
// {
//     return num1*num2;
// }

// let value=mul(2,50);
// console.log(value);

//from ecma 6 

// let mul=(num1,num2)=>
// {
//     return num1*num2;
// }
// console.log(mul(10,25));

// squre function
// let squre=(num)=>
// {
//     return Math.pow(num,2);
// }
// console.log("squre is "+squre(2))

// call back function

// let getvalue=function(id,callback1,val)
// {
//     console.log("inside get value");
//     console.log(`id is ${id}`);
//     callback1(2);
//     console.log(`value is ${val}`)
    
// }
// getvalue(1,function(num)
//     {

//         console.log(`inside callback 1`);
//         console.log("squre is "+num*num)
//     },78
//   );
// let getvalue=function(id,callback)
// {
//     console.log("inside get value");
//     console.log(`id is ${id}`);
//     callback({id:id,name:"meera"});
// }
// getvalue(1,function(person)
// {
//  console.log(person);
//  console.log("finised callback");
// });

//sych

// console.log("first");
// console.log("second");
// console.log("third")

//asych

// console.log("first");
// setTimeout
//     (
//     () => {
//         console.log("second");
//     }, 2000//2 seconds delayed 
//     );
// console.log("third");

// function getuserid()
// {
//     setTimeout(()=>
//     {
//         return({id:id,name:"meera"})
//     },2000)
    
// }

// console.log("before");
// const user=getuserid(1);
// console.log(user);
// console.log("after");

////to solve this

// function getvalue(id,callback)
// {
//     setTimeout(()=>
//     {
//         callback({id:id,name:"meera"});
//     }
//     ,2000);
    
// }
// console.log("before");
// getvalue(1,function(user)
// {
//   console.log(user);
// });
// console.log("after");

//object

// let person = new Object();
// person.name = "abhin";
// person.age = 35;
// person.set_value = (n, a) => {
//     this.name = n;
//     this.age = a;
// };
// person.get_value = () => {
//     console.log(`name is ${this.name}`);
//     console.log(`age is ${this.age}`)
// };

// person.set_value("akhil", 25);
// person.get_value();


////using of constructor

// function person(first_name,last_name)
// {
//   this.first_name=first_name;
//   this.last_name=last_name;
// }
// //prototype is key word madidatory
// person.prototype.getvalue=function ()
// {
//     console.log("name of person is "+this.first_name);
// }
//  let person1=new person("babu","raj");
//  let person2=new person("amal","babu");
 
//  person1.getvalue();
// person2.getvalue();

////using create word

// const coder=
//             {
//              isStuding:false,
//              printvalue:function()
//                                 {
//                                     console.log(`my name is ${this.name} .Am I studing?:${this.isStuding}`);
//                                 }
//             }
// const m1=Object.create(coder);
// ////name set on m1
// m1.name="akhil";
// m1.isStuding="true";
// m1.printvalue();

////object with the help of class from ecma 6

// class Person
// {
//     ////constructor also act as setter
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age;
//     }
//     get_values()
//     {
//         return`name is ${this.name} . age is ${this.age}`;
//     }
// }

// let ob1=new Person("akhil",25);
// let ob2=new Person("lalu",23);

// console.log(ob1.get_values());
// console.log(ob2.get_values());


////inheritance example

// class Person
// {
//     constructor(name)
//     {
//         this.name=name;
//     }
// }

// class Student extends Person
// {
//     constructor(name,id)
//     {
//         ////super user to set value in name
//         super(name);
//         this.id=id;
//     }

//     printer()
//     {
//         return`name is ${this.name} .id is ${this.id}`;
//     }
// }
// ////creating object for Student
// let ob1=new Student("ajay",007);
// console.log( ob1.printer());

//try catch

// try {
//     adddlert("Welcome guest!");
//   }
//   catch(err) {
//     document.getElementById("demo").innerHTML = err.message;
//   }

//promise

// var promise1=new Promise(function (success,reject)
//   {
//        const x=10;
//        const y=10;
//        if(x==y)
//        {
//            success();
//        }
//        else
//        {
//            reject();
//        }
//   });
//   promise1.
//          then(function ()
//          {
//              console.log("x=y");
//          },
//          ()=>
//          {
//              console.log("x and y not equle");
//          }   
//          );

////promise witch catch block

// var promise1=new Promise(function (success,reject)
//   {
//        const x=10;
//        const y=10;
//        if(x==y)
//        {
//            success("success");
//        }
//        else
//        {
//            reject("rejected");
//        }
//   });
//   promise1
//        .then(function(msg) { 
//           console.log(msg+" x==y"); 
//            }) 
//          .catch(function(msg) { 
//           //error handler function is invoked 
//          console.log(msg); 
//           });
         

////promise with asych and await

async function f()
{
    let promise=new Promise((resolve,reject)=>
     {
         var x=10;
         var y=10;
         setTimeout(()=>
            {
                if(x==y)
                {
                    resolve("success");
                }
                else
                {
                    reject("rejected");
                }
            }
         ,1000);
     });
     ////asynch function only return a promise    
await promise.
           then((msg)=>
           {
             console.log(msg);
           }).
           catch(function(err)
           {
              console.log(err);
           })
}

f();           