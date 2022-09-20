const bodyParser = require("body-parser");
const express=require("express")
const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.set("views","./views");
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    //res.send("okkkk")
    res.render("user.ejs")
})
var stat=""
var mes=""
function message(num1,num2,result){
    if(num1>1000000||num2>1000000||result>1000000){
        stat="error"
        mes= "overflow"
        return false
    }
    if(num1<-1000000||num2<-1000000||result<-1000000){
        stat="error"
        mes= "underflow"
        return false
    }
    if(isNaN(num1)||isNaN(num2)){
        stat="error"
        mes= "Invalid data type"
        return false
    }
    return true

}
app.post("/add",(req,res)=>{
   
    if(false==message(req.body.num1,req.body.num2,parseInt(req.body.num1)+parseInt(req.body.num2))){
        return res.json({
            status:stat,
            message:mes
        })
    }
    
    res.json({
         status: "success",
         message: "the sum of given two numbers", 
         sum: parseInt(req.body.num1)+parseInt(req.body.num2)

    })
})



app.post("/multiply",(req,res)=>{
    if(false==message(req.body.num1,req.body.num2,parseInt(req.body.num1)*parseInt(req.body.num2))){
        return res.json({
            status:stat,
            message:mes
        })
    }
    
    res.json({
         status: "success",
         message: "The product of given numbers", 
         result: parseInt(req.body.num1)*parseInt(req.body.num2)

    })
})
app.post("/sub",(req,res)=>{
    if(false==message(req.body.num1,req.body.num2,parseInt(req.body.num1)-parseInt(req.body.num2))){
        return res.json({
            status:stat,
            message:mes
        })
    }
    
    res.json({
         status: "success",
         message: "the difference of given two numbers", 
         difference: parseInt(req.body.num1)-parseInt(req.body.num2)

    })
})
app.post("/divide",(req,res)=>{
    if(req.body.num2==0){
        return res.json({
            status:"erroe",
            message:"Cannot divide by zero"
        })

    }
    if(false==message(req.body.num1,req.body.num2,parseInt(req.body.num1)/parseInt(req.body.num2))){
        return res.json({
            status:stat,
            message:mes
        })
    }
    
    res.json({
         status: "success",
         message: "The division of given numbers", 
         result: parseInt(req.body.num1)/parseInt(req.body.num2)

    })
})
app.listen(3000,()=>console.log("server set up"))