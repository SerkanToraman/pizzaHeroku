//1. Imports

const express = require('express');
const server = express();
//const userRouter = require("./Users/users-router.js")

//2. Middlewares
server.use(express.json());

//3. Routers
server.get('/',(req,res)=>{
  res.json({message: process.env.message || "Server up and Running"})
})
//server.use("/api/users",userRouter);

//4.Error Middleware


//Exports

module.exports = server; 