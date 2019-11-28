$(document).ready(function () {
       
    $.ajax({method:"GET",
        url:"http://www.randomtext.me/api/lorem/ul-5/5-15",
        success:function(result,status,xhr){
        //console.log(result.text_out);
           $("#mydiv").html(result.text_out);
  }
})
     
});