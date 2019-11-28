const express=require('express');
const chalk=require('chalk');
const path = require("path");
const bodyparser = require('body-parser');
const cors = require('cors');


var nav = [{
    link: "/",
    tittle: "Add Student"
},
{
    link: "/viewall",
    tittle: "View All"
},
{
    link: "/search",
    tittle: "Search"
},
{
    link: "/edit",
    tittle: "Edit"
}
];

var app = new express();

//  const  editrouter= require('./src/routers/editrouter')(nav);
//  const  searchrouter= require('./src/routers/searchrouter')(nav);
//  const viewallroute = require('./src/routers/viewallroute')(nav);
app.use(bodyparser.json());
app.use(cors())
app.use(bodyparser.urlencoded({ extented: true })); /////to get value of form data
// app.use('/viewall', viewallroute);
// app.use('/search', searchrouter);
// app.use('/edit', editrouter);
app.get('/', function(res, res) {
    res.render('index', {
        nav: nav
    });
});
app.use(express.static(path.join(__dirname, "/public")));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.listen(3000, function() {
    console.log(chalk.yellowBright(`port ${chalk.redBright("3000")} is active`));
});