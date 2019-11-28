const express= require('express');
const chalk=require('chalk');
const bodyParser=require('body-parser');
const cors=require('cors');
var path= require('path');
var mongoose=require('mongoose');
var app=new express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));


var nav=[{link:"/",title:'Add'},
            {link:"/view",title:'ViewAll'},
            {link:"/search",title:'Search'},
            {link:"/edde",title:'Edit/Delete'}
           ];




const viewRouter=require('./src/routes/viewRouter')(nav);//passing nav to booksRouter
const addRouter=require('./src/routes/addRouter')(nav);
const eddeRouter=require('./src/routes/eddeRouter')(nav);
const searchRouter=require('./src/routes/searchRouter')(nav);

app.use(express.static(path.join(__dirname,"/public")));
app.use('/add',addRouter);
////establising connection 
mongoose.connect("mongodb://localhost:27017/Mydbnew");
app.use('/view',viewRouter);
app.use('/search',searchRouter);
app.use('/edde',eddeRouter);



app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/',function(req,res){ 
res.render('add.ejs',
{
nav,
title:"Library"
}
)});
app.listen(8085,()=>{
    console.log("listening to port "+chalk.green('8085') );
})