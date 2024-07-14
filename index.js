const express = require('express');
const app =express();
app.use(express.json());

app.listen(3000 , ()=>{
    console.log("server running on port 3000");
});

app.get("/msg" , (req,res , next)=>{
    res.json({"message": "My first API"});
});



app.post("/msg" , (req,res,next)=>{
    const message = req.body.message;
    res.json({"receivedMessage": message});
});

