const express = require('express')
let arr=require("./InitialData")
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
let newid=arr.length+1
app.get("/api/student",(req,res)=>{
    try{
        return res.status(200).json(arr)
    }
    catch(e){
        return res.status(400).json({
            status:"error"
        })
    }
})
app.get("/api/student/:id",(req,res)=>{
    try{
        const indexs=arr.findIndex(x=>x.id==req.params.id)
        if(indexs!=-1){
        return res.status(200).json({
            data:arr[indexs]}

        )
    }
    return res.status(404).json({
        message:"error id donesnt match",
    })
    }
    catch(e){
        return res.status(404).json({
            status:"error"
        })
    }
})
app.post("/api/student",(req,res)=>{
    try{
        if(req.body.name&&req.body.currentClass&&req.body.division){
        arr.push({
            id:newid,
            name:req.body.name,
            currentClass:req.body.currentClass,
            division:req.body.division

        })
        return res.status(200).json({
            id:newid++
        })
    }return res.status(400).json({
      message:"data is incomplete"  
    })
    }
    catch(e){
        return res.status(400).json({
            status:"error"
        })
    }
})
app.put("/api/student/:id",(req,res)=>{
    try{
        const indexs=arr.findIndex(x=>x.id==req.params.id)
        if(indexs!=-1){
        if(req.body.name){
            arr[indexs].name=req.body.name
        }
        if(req.body.currentClass){
            arr[indexs].currentClass=req.body.currentClass
        }
        if(req.body.division){
            arr[indexs].division=req.body.division
        }
        return res.status(200).json(arr[indexs])

        
    }
    return res.status(400).json({
        message:"id dosent match"  
      })
    }
        
    catch(e){
        return res.status(400).json({
            status:e.message
        })
    }
})
app.delete("/api/student/:id",(req,res)=>{
    try{
        let indexs=arr.findIndex(x=>x.id==req.params.id)
        if(indexs==-1){
            return res.status(404).json({
                message:"id not found"
            })

        
    }
    arr=arr.slice(0,indexs).concat(arr.slice(indexs+1))
    return res.status(200).json({
        message:"deleted"
    })
}
    catch(e){
        return res.status(404).json({
            status:e.message
        })
    }
})




app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   