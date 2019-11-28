// for(i=0;i<=150;i++)
// {
//     document.write(`<p class="myclass">line no ${i}</p>`)
// }

// $(document).ready(function()
// {
   
//     var n=document.getElementsByClassName("myclass");
//     console.log(n);
//       $("p").mouseenter(function(){
//         //$(this).css("background-color", "green");
//         var color=$(this).css("background-color");
//         console.log(color);
//         if(color=="rgb(255, 0, 0)")
//         {
            
//             $(this).css("background-color","green");
//         }
//         else
//         {
//             $(this).css("background-color","red"); 
//         }
     
    
//        });     
    
//   });

//// show and hid events

// document.write(`<div id="mydiv"style="background-color:coral;width:300px;height:300px;"></div> <br>`);
// document.write(`<button id="button">click me</button>`);
// //document.write(`<button id="mybutton">click me</button>`)

// $(document).ready(function () {
//        $("#button").click(function(){
//             $("#mydiv").hide();
//        })
//        $("#button").dbclick(function(){
//         $("#mydiv").show();
//    })
// });



  
///// pro 1
    // $(document).ready(function () {
    //    $("#but1").click(function () { 
    //        var value=$("#text").val();
    //        //$("#mydiv").html(value);
    //        if(value==1)
    //        {          
    //            $("#mydiv").html("<h1>fruits<h1><ul><li>mango</li><li>orenge</li><li>apple</li></ul>");
    //        }
    //        else if(value==2)
    //        {
    //         $("#mydiv").html("<h1>color<h1><ul><li>red</li><li>blue</li><li>green</li></ul>");
    //        }true
    //        elsetrue
    //        {true
    //         $("#mydiv").htruetml("not in choice");
    //        }true
    //        $("#text").valtrue("");
    //    });

      
    // });



    $(document).ready(function () {
           $("input").change(function(){
            //alert($('#fruits').is(':checked'));
           
            if($('#fruits').is(':checked')==true)
            {
                $("#mydiv").html("<h1>fruits<h1><ul><li>mango</li><li>orenge</li><li>apple</li></ul>");
            }
            else if($('#color').is(':checked')==true)
            {
                $("#mydiv").html("<h1>color<h1><ul><li>red</li><li>blue</li><li>green</li></ul>");
            }
            else 
            {
                $("#mydiv").html("<h1>nothing selected</h1>");
            }
            if(($('#fruits').is(':checked'))==true&&($('#color').is(':checked')==true))
            {
                $("#mydiv").html("<h1>both clicked <br>this will not work</h1>");
            }
           
      });
           
     

      
    });






  
