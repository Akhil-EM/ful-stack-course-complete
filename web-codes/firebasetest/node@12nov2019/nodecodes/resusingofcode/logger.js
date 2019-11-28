var url='http://ictkerala.org/';
function printmsg(msg)
{
 console.log(msg)
}
//module.exports=printmsg;
///in the case of exporting multiple files
module.exports.url=url;
module.exports.print=printmsg;

////export exports codes to avilable other functionsclear
