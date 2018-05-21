//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//Testing User Login
const routeuser = require('./routes/routeuser');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on database connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to Database@27017');
});

mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('Database connection error is '+err);
    }
});


//port no
const port = 3000;

//adding middleware - cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);

//Testing User Login routes
app.use('/api/login',routeuser);

//testing server
app.get('/',(req,res)=>{
    res.send('foobar');
});

app.listen(port,()=>{
    console.log('Server started at port '+port);
});