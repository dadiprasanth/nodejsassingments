const fs=require("fs")
const http=require("http")
const server=http.createServer((req,res)=>{
    fs.readFile("index.html",(err,data)=>{
        res.end(data)
    })
})
server.listen(3000,()=>console.log("server is set up"))