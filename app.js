const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const hbs = require("express-handlebars");
var customRoutes = require('./routes');


// Initialize application
const app = express();
app.use(express.static(path.join(__dirname +'/public'))); // for routing in static dirs
app.use(bodyParser.urlencoded({extended:true}));

//templating Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
//const variables
const port = 3000;

//routes
app.use('/', customRoutes); 

app.listen(port, (error)=>{
    if(error)
        throw error;
    else
        console.log("The Server is listening at port " + port);
});