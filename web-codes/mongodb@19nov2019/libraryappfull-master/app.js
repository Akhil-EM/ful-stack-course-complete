const express = require('express');
const chalk = require('chalk');
const path = require("path");
const bodyparser = require('body-parser');
const cors = require('cors');


var nav = [{
        link: "/",
        tittle: "Add Student"
    },
    {
        link: "/books",
        tittle: "View All"
    },
    {
        link: "/books/addbook",
        tittle: "Search"
    },
    {
        link: "/authers",
        tittle: "Edit"
    },
    
];

var app = new express();

const bookrouter = require('./src/routes/bookroute')(nav);
const autherroute = require('./src/routes/autherroute')(nav);
const singnuproutr = require('./src/routes/loginroute')(nav);
const loginrouter = require('./src/routes/signup')(nav);
app.use(bodyparser.json());
app.use(cors())
app.use(bodyparser.urlencoded({ extented: true })); 
app.use('/authers', autherroute);
app.use('/books', bookrouter);
//app.use('/addbook', bookrouter);
app.use('/login', singnuproutr)
app.use('/signup', loginrouter);
app.get('/', function(res, res) {
    res.render('index', {
        nav: nav,
        tittle: "Library App"
    });
});

app.use(express.static(path.join(__dirname, "/public")));
app.set('views', './src/views');
app.set('view engine', 'ejs');

////set port 
app.listen(3001, function() {
    console.log(chalk.yellowBright(`port ${chalk.redBright("3001")} is active`));
});