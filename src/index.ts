import express from "express"
import mongoose from "mongoose"
import userRoute from "./routes/userRoute"
const app =express()
const port = 3002

app.use(express.json())
mongoose.connect(("mongodb://localhost:27017/mern-ecommerce")).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log("failed connect " , err)
})

app.use('/user', userRoute)
app.listen(port ,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})