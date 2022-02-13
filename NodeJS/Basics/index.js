const express=require('express');
var bodyParser = require('body-parser')
const app=express();
const router=express.Router();


const usersDB=[{userName:"utkarsh",password:"qwerty"}];

//Middlewares 

const myLogger=(req,res,next)=>{
    req.requestTime=Date.now();
    next();
}

app.use(myLogger);


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




router.get('/home',(req,res)=>{
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText)
});

router.get('/profile',(req,res)=>{
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested from profile route at: ' + req.requestTime + '</small>'
    res.send(responseText)
});

router.post('/login',(req,res)=>{

    const {userName,passWord}=req.body;

    //check if the user exits in db or not 

    const isUserPresent=usersDB.find(user=>user.userName===userName);

    if(!isUserPresent)
    {
        res.status(404)
        .send("User Invalid");
    }


     //generate the hash for the password 
     //Get the encrypted password from DB from usrName 
     //comapre both values 


    const isEqual=isUserPresent.password===passWord;

    if(isEqual)
    {
        res.send("Correct User");   
    }
    else
    {
        res.status(400).send("Incorrect Password");
    }


});

router.get('/logout',(req,res)=>{
    res.send("Hello, This is a logout router");
});




app.use('/',router);

app.listen( process.env.port || 3000,()=>{
    console.log(`web server is running at port ${process.env.port || 3000} `);
});
