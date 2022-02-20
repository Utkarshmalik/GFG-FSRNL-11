const express=require('express');
var bodyParser = require('body-parser')
const mongoose= require('mongoose');
const foodRouter=require('./app/routes/foodRoutes');
const app=express();


mongoose.connect('mongodb://localhost:27017/foodDB');


var db=mongoose.connection;

db.on('error',()=>{
    console.log("DB unable to connect")
});

db.on('open',()=>{
    console.log("connection successful")
})


// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(foodRouter);


app.listen( process.env.port || 3000,()=>{
    console.log(`web server is running at port ${process.env.port || 3000} `);
});
