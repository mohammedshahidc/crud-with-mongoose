const mongoose=require("mongoose")

const itemschema=new mongoose.Schema({
    
    name:String,
    description:String

})
const Item=mongoose.model("Item",itemschema)
module.exports=Item