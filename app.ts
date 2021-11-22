import express from "express";

const app = express()

// Opstarten server
app.listen({port: 4000}, ()=> {
    console.log('server running')
})

// Main route wijst naar de home page
app.get('/', (_req,res) =>{
    res.sendFile(__dirname+"/index.html");
})



