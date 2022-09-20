const readline=require("readline")
const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
r1.question("Please enter your name",(answer)=>{
    console.log("Hello "+answer)
    r1.close()
})