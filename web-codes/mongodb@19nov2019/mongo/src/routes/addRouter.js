var express = require('express');
var {StudentModel}=require('../models/StudentModel');

var addRouter = express.Router();
function route(nav) {

    addRouter.route('/')
    .post((req,res)=>{
        //console.log(req.body);
        ////passing value to db
        var student=new StudentModel(req.body);
            student.save();
            res.send(req.body);

    })


    return addRouter;
}
module.exports = route;