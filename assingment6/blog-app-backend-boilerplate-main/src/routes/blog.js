const router = require('express').Router();
const Blog = require('../models/Blog');
const body=require("body-parser")
// Your routing code goes here
router.post("/blog",async (req,res)=>{
    try{
    const data=await Blog.create(req.body)
    console.log(data)
    res.status(200).json({
        status:"success",
        result:{data}
    })
    }catch(e){
        res.status(400).json({
            status:"erreor",
            meaasge:e.message
        })
    }

})
router.get("/blog",async (req,res)=>{
    let page=req.query.page*5
    try{
    const data=await Blog.find({"topic":req.query.search}).limit(page)
    console.log(req.query)
    //console.log(data)
    res.status(200).json({
        status:"success",
        result:data
    })
    }catch(e){
        res.status(400).json({
            status:"erreor",
            meaasge:e.message
        })
    }

})
router.put("/blog/:id",async (req,res)=>{
    console.log(req.params.id)
    
    try{
    await Blog.updateMany({"_id":req.params.id},req.body)
    const data=await Blog.find({"_id":req.params.id})
    
    //console.log(data)
    res.status(200).json({
        status:"success",
        result:data
    })
    }catch(e){
        res.status(400).json({
            status:"erreor",
            meaasge:e.message
        })
    }

})
router.delete("/blog/:id",async (req,res)=>{
    console.log(req.params.id)
    
    try{
    const data=await Blog.findOne({"_id":req.params.id})
    await Blog.deleteMany({"_id":req.params.id})
    
    
    //console.log(data)
    res.status(200).json({
        status:"success",
        result:data
    })
    }catch(e){
        res.status(400).json({
            status:"erreor",
            meaasge:e.message
        })
    }

})






// router.get('/blog',async(req,res)=>{
//     const data=await Blog.find()
//     res.status(200).json({data})
// })


module.exports = router;