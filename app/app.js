
const express = require('express');
const cors = require('cors');
const app = express();
//use middleware to form our contract for incoming json payloads ONLY!
app.use(express.json());
//use middleware for url encoding
app.use(express.urlencoded({extended:true}));
//middleware to handle cors policy

app.use(cors());

/*** 
app.use((req , res , next) => {
    res.header("Access-Control-Allow-Origin ","*");
    res.header("Access-Control-Allow-Origin-Headers","Content-Type , Accept , Authorication,Origin,X-Requiest-With");

    if(req.method === "OPTIONS"){
      res.header("Access-Control-Allow-Origin-Methods","POST,PUT,PATCH,DELETE,GET")

    next();
    };
});
***/

app.get('/',(req,res,next) =>{

    res.status(200).json({message : 'Service is up'})
});
//routers
//build url or error we can handle
//with middleware

app.use((req , res,next) =>{
const error = new Error("Not Found");
error.status =404;
next(error);



});

    


app.use((error,req,res,next) =>{
   res.status(error.status || 500).json({
       error:{
           message: error.message,
           status: error.status


   },
   });
});



module.exports = app;