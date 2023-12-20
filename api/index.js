import express from "express"

const app=express()

app.get("/",(req,res)=>{
    res.send("welcome to backend")
})

app.listen(3000,()=>{
    console.log("Server is running on 3000")
})