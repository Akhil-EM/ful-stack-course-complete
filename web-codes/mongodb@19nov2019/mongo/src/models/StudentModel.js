const mongoose=require('mongoose');

////create a model class
////mode('collection name','data columns')
var StudentModel=mongoose.model('Students',{
    name:String,
    admno:String,
    rollno:Number,
    college:String
});

////exporting module 
module.exports={StudentModel};
