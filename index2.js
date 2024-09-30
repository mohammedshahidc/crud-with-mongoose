const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Item = require("./itemmodel"); // Import the Mongoose model
const port = 5000;
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB", err);
  });

app.use(bodyParser.json());


app.post("/items",async(req,res)=>{
   try {
   
    const newItem=new Item(req.body)
    await newItem.save()
    res.status(201).json(newItem)
   } catch (error) {
    res.status(400).json({error:error.message})
   }
})


app.get("/items",async(req,res)=>{
  try {
    const items=await Item.find()
    res.status(201).json(items)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
})


app.get("/items/:id",async(req,res)=>{
   try {
    const itembyid=await Item.findById(req.params.id)
    if(!itembyid){
        return res.status(404).json("item not found")
    }
    res.json(itembyid)
   } catch (error) {
    res.status(500).json({error:error.message})
   }
})

app.put("/items/:id",async (req,res)=>{
    try {
        const updateditem=await Item.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        if(!updateditem){
            res.status(404).json("itemnot found")
        }
        res.json(updateditem)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
})

// DELETE: Remove an item by ID
app.delete("/items/:id", async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id); // Delete the item by ID
    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "Item deleted", item: deletedItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log("Server running on port", port);
});









