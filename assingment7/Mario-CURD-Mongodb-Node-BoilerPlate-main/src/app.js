const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here
app.get("/mario",async (req,res)=>{
    try{
        const data=await marioModel.find()
        
        return res.status(200).json(data)

    }catch(e){
        return res.json({
            status:"error",
            message:"either name or weight is missing"
        })
    }
})
app.get("/mario/:id",async (req,res)=>{
    try{
        req.params.id
        const data= await marioModel.findOne({"_id":req.params.id})
        if(!data){
            return res.status(200).json({message:"id not found"})
        }
        return res.status(200).json(data)

    }catch(e){
        return res.status(400).json({
            status:"error",
            message:e.message
        })
    }
})
app.post("/mario",async(req,res)=>{
    try{
    
        const data= await marioModel.create(req.body)
        console.log(data)
        return res.status(201).json(req.body)

    }catch(e){
        return res.status(400).json({
            status:"error",     
            message:"either name or weight is missing"
        })
    }
})
app.delete("/mario/:id",async (req,res)=>{
    try{
          
        const data= await marioModel.deleteMany({"_id":req.params.id})
        //throw new Error("error from delete block")
        if(!data){
            return res.status(200).json({message:"id not found"})
        }
        return res.status(200).json({message:"deleted"})

    }catch(e){
        return res.status(400).json({
            status:"error",
            message:e.message
        })
    }
})
app.patch("/mario/:id",async (req,res)=>{
    try{
        
         await marioModel.updateMany({"_id":req.params.id},req.body)
        const data=await marioModel.findOne({_id:req.params.id})
        return res.status(200).json(data)

    }catch(e){
        return res.status(400).json({
            status:"error",
            message:e.message
        })
    }
})
module.exports = app;  