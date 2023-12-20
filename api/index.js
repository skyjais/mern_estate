import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to DB")
})
.catch((error)=>{
    console.log(error)
})
const app=express()

app.get("/",(req,res)=>{
    res.send("welcome to backend")
})

app.listen(3000,()=>{
    console.log("Server is running on 3000")
})