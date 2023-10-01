const express = require('express');
const router = express.Router(); // 注意这里要调用 express.Router()

router.get("/", (req, res, next) => {
    res.status(200).json({
        message: "success - Get",
        metadata: {
            hostname: req.hostname,
            method: req.method
        }
    });
});

//id: https://localhost3001/users/34

router.get("/:id" , (req,res,next) => {

   res.status(200).json({

    message: "Successful Get by ID",
    metadata: {

        id:req.params.id,
        method:req.method,
        hostname:req.hostname ,

    },

   });

});

router.post("/", (req, res, next) => {
    const name = req.body.name;
    res.status(201).json({
        message: "Success-POST",
        metadata: {
            name : name,
            hostname: req.hostname,
            method: req.method
        }
    });
});


router.put("/:id" , (req,res,next) => {

    res.status(200).json({
 
     message: "Successful Put by ID",
     metadata: {
 
         id:req.params.id,
         method:req.method,
         hostname:req.hostname ,
 
     },
 
    });
 
 });

 router.delete("/:id" , (req,res,next) => {

    res.status(200).json({
 
     message: "Successful delete by ID",
     metadata: {
 
         id:req.params.id,
         method:req.method,
         hostname:req.hostname ,
 
     },
 
    });
 
 });



module.exports = router;


