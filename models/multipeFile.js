const mongoose=require("mongoose");

const Shema=mongoose.Schema;

const multipfilesShema=new Shema({
    title:{
        type:String,
        required:true
    },
    files:[Object]

},{timestamps:true});

module.exports=mongoose.model("Multipefile",multipfilesShema);