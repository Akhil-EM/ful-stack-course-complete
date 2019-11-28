// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// document.title="this is new tittle"
// console.log(document.title)
// document.all[7].node="khjkjk"

// console.log(document.getElementById("intro"))

// let store=document.getElementById("intro")
// console.log(store.textContent)
// store.innerHTML="<h1>changed text tittle</h1>"
//document.getElementById("div1").style.cssText="background-color: red";
//="<h1>changed text tittle</h1>";

// let idArray=document.getElementsByClassName("heading");
// idArray[0].textContent="hello man";
// idArray[0].style.border='solid 3px red';
// idArray[1].style.backgroundColor="green";

/*
// scrap project 
// for(var i=0;i<100;i++)
// {
//    document.write(`<h1 >content ${i+1}</h1>`);

    //idArray[i].style.border='solid 3px red';
//}
// let idArray=document.getElementsByTagName("h1");
//     console.log(idArray[5])
//     for(var n=0;n<idArray.length;n++)
//     {  
//         if(n%3==0)
//         {
//             idArray[n].style.border='solid 3px green';
//         }
//         else if(n%3==1)
//         {
//             idArray[n].style.border='solid 3px red'; 
//         }
//          else
//          {
//             idArray[n].style.border='solid 3px blue'; 
            
//          }

//     }
*/
// let area=document.querySelector('input[type="submit"]');
// area.value="fkjhkjgh";
// area.value='value of text added by tag';
// document.querySelector('#val').value="dummy value added by id"
// document.querySelector('.newclass').value="dummy value added by class"
// console.log(9%3)
//idArray[1].textContent="hello";

//qury selecter by class only taking first value
//   var li=document.querySelector('.lichild');
//   li.style.color="red";

//qury selecter by class only taking last value
//   var li=document.querySelector('.lichild:last-child');
//   li.style.color="red";

//qury selecter by class only taking specific value
//   var li=document.querySelector('.lichild:nth-child(4)');
//   li.style.color="red";


//
function newFun(value)
{
        var colo=value.style.backgroundColor;
         if(colo=="powderblue")
         {
            var li=document.getElementById('divstyle');
            li.style.backgroundColor="green";
         }
         else 
         {
            var li=document.getElementById('divstyle');
            li.style.backgroundColor="powderblue";
         }
         
      
    }

   function myfunction()
    {
        alert("page loaded");
    }
    function ondouble()
        {
            var li=document.getElementById('divstyle');
            li.style.backgroundColor="green";
        }
    


