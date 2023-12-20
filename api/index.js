import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to DB")
})
.catch((error)=>{
    console.log(error)
})
const app=express()




app.listen(3000,()=>{
    console.log("Server is running on 3000")
})

app.use("/user",userRouter)