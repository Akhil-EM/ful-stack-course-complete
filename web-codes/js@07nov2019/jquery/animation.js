// ////show and hide
// $(document).ready(function () {
//   $("#hide").click(function () { 
//       $("#para").hide();
//   }); 
//   $("#show").click(function () { 
//     $("#para").show();
// }); 
// });
for(var i=0;i<=9;i++)
{
    document.write(`<input value="fruits"type="checkbox" >check box ${i+1}&nbsp;`)
}
$(document).ready(function () {
    var cnt=0;
    $("input").change(function () { 
        var n=document.getElementsByTagName("input");
        for(i=0;i<=n.length;i++)
        {
            
        }

        function add()
        {
            cnt=cnt+1;
        }
        function sub()
        {
            cnt=cnt-1;
        }
    });
});