const mongoose=require("mongoose");
const dbconnect=mongoose.connect("mongodb+srv://aabhhayy2010:rWQnKyU4UHpfM5Y4@cluster0.pxke5af.mongodb.net/?retryWrites=true&w=majority&appusername=Cluster0")

module.exports=dbconnect;