const express=require("express");
const app=express();
const cors=require("cors");
const dbconnect = require("./config/connection");
const userRoute = require("./routes/user.route");
const auth = require("./middleware/auth");
app.use(cors());
app.use(express.json());
app.use("/auth",userRoute)
 app.get("/",auth,(req,res)=>{
    res.send("abhay")
 });

 app.listen(4000,async()=>{
    try {
        await dbconnect;
        console.log("Server is running on port 4000")
    } catch (error) {
        console.log(error)
    }
    
 })