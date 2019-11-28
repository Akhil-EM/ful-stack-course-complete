function load_ajax()
{
    ////class required for ajax
    var xhttp=new XMLHttpRequest();
    ////to get state of data
    xhttp.onreadystatechange=function()
    {
        //alert(this.readyState+" "+this .status);
        ////readyState variable to check value,status to get satus 
        //// reffer https://www.w3schools.com/js/js_ajax_http.asp
      if(this.readyState==4 && this.status==200)
      {
          //// responseText has the value 
          var myObj = JSON.parse(this.responseText);
          ////chaging json to object
         var val=myObj.text_out;
          document.getElementById("mydiv").innerHTML=`<h1>Showing text from link </h1> ${val}`;
      } 
    }
    xhttp.open("GET","http://www.randomtext.me/api/lorem/ul-5/5-15",true);
    xhttp.send();
}
function clear_ajax()
{
    document.getElementById("mydiv").innerHTML="";
}