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
          document.getElementById("mydiv").innerHTML=this.responseText;
      } 
    }
    xhttp.open("GET","ajax.txt",true);
    xhttp.send();
}
function clear_ajax()
{
    document.getElementById("mydiv").innerHTML="";
}
