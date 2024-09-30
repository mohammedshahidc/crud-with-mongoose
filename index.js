
// const express = require("express")
// const port = 5000
// const app = express()
// const bodyParser = require("body-parser");
// // const data=require("./data")
// const mongoose=require("mongoose");
// // const Item = require("./index2");


// mongoose.connect("mongodb://localhost:27017/",{
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
// })
// .then(()=>{
//    console.log("connected");
// })
// .catch((error)=>{
//    console.log(error);
// })
// app.use(bodyParser.json())
// app.post("/items",async(req,res)=>{
//    try {
//       const newitem=new Item(req.body)
//       await newitem.save()
//       console.log(req.body);
//       res.status(201).json(newitem);
//    } catch (error) {
//       res.status(400).json({ error: error.message });
//    }
  
  
// })
// app.get("/items",async(req,res)=>{
//    try {
//       console.log(data);
//       const item= Item.find()
//        res.status(200).json(item)
//       console.log(item);
//    } catch (error) {
//       res.status(400).json({error:error.message})
//    }
  
// })
// app.get("/items/:id",async(req,res)=>{
//    const itembyid=await Item.findById(req.params.id)
   
//    if (!itembyid){
//       return res.status(404).json({message:"item not send"})
//    }
//    res.json(itembyid)
// })
// app.put("/items/:id",async (req,res)=>{
// const updatedItem=await Item.findByIdAndUpdate(parseInt(req.params.id),req.body)
// if(!updatedItem)return res.status(404).json({message:"item not found"})
//    res.json(updatedItem)
// })

// app.delete("/items/id",async (req,res)=>{
//    try {
//       const deleteditem= await Item.findByIdAndDelete(req.params.id)
//       if(!deleteditem)res.status(404).json({message:"item not found"})
//       res.json({message:"item deleted",Item:deleteditem})
//    } catch (error) {
//       res.status(500).json({ error: error.message });
//    }
// })



// app.listen(port, () => {
//    console.log("running sucessfully");
// })