const express=require('express');
var bodyParser = require('body-parser')
const mongoose= require('mongoose');
const app=express();
const router=express.Router();


//mongodb : 27017 
mongoose.connect('mongodb://localhost:27017/TestDB');


var db=mongoose.connection;

db.on('error',()=>{
    console.log("DB unable to connect")
});

db.on('open',()=>{
    console.log("connection successful")
})


var BookSchema=mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number
});

var Book=mongoose.model('Book',BookSchema);


var book1= new Book({id:10,name:"Introduction to javascript",price:10,quantity:5});
var book2= new Book({id:11,name:"Introduction to NodeJS",price:100,quantity:3});



//Creation
book1.save()
.then(()=>{console.log("Book saved successfully")})
.catch(()=>{"Some error occured"});


//Reading 
Book.find({name:"Introduction to javascript"})
.then((books)=>{console.log(books)})
.catch((err)=>{console.log(err)});

//Update 
Book.updateOne({id:10},{price:50})
.then(()=>{console.log("DB updated")})
.err(()=>{console.log("error while updating")});



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



// //API to get all the books

router.get('/books',(req,res)=>{

    //return all the books from a DB 

    Book.find({}).then((books)=>{
        res.send(books);
    })
    .catch((err)=>{
        res.status(400).send({message:"Something went wrong"});
    })
})


// //API for creating a new Book 

router.post('/book',(req,res)=>{

    const {name,price,quantity}=req.body;
    const newBook=new Book({name:name,price:price,quantity:quantity});

    newBook.save()
    .then(()=>{
        res.status(201).send(newBook);
    })
    .catch((err)=>{
        res.status(400).send(err);
    })
})


//Read a single book with a given id

router.get('/book/:id',(req,res)=>{

    const id=req.params.id;

    Book.findOne({id:id})
    .then((book)=>{
        res.status(200).send(book);
    })
    .catch((err)=>{
        res.staus(400).send(err);
    })

})


//Updated a single book with a given id

router.put('/book/:id',(req,res)=>{

    const id=req.params.id;
    const {price}=req.body;

    Book.update(({id:id},{price:price}))
    .then((book)=>{
        res.status(200).send(book);
    })
    .catch((err)=>{
        res.staus(400).send(err);
    })
})




router.get('/home',(req,res)=>{
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText)
});

router.get('/profile',(req,res)=>{

    //whether the request contains the token or not 
    // If it contains , compare the token frmom DB 
    //if the token matches , the correct user is logged in


    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested from profile route at: ' + req.requestTime + '</small>'
    res.send(responseText)
});

router.post('/register',(req,res)=>{

    const {userName,passWord,name,email}=req.body;


    //store all things in DB except password 

    //generate a hash for that password 
    //store the generated hash in the DB
})

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
        //generate token 
        //store tokens in the DB 
        //send the token as a response back to the user 

        res.send({"token":"lkwnflnwfwnfnwjfnwlkfn2lk2p4j2"});   
    }
    else
    {
        res.status(400).send("Incorrect Password");
    }

});


router.get('/logout',(req,res)=>{

    //manually remove the token from a DB corresponding to user

    res.send("Hello, This is a logout router");
});




app.use('/',router);

app.listen( process.env.port || 3000,()=>{
    console.log(`web server is running at port ${process.env.port || 3000} `);
});
