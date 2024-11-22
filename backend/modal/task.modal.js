const mongoose=require("mongoose");
const schema=mongoose.Schema({
    title:{type:String,require:true},
    descriptin:{type:String},
    priority:{type:String,enum:["low","high","mid"]}
});
const Task=mongoose.model("Task",schema);
module.exports=Task;