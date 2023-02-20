const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb+srv://fahad:fahad@cluster0.imntck1.mongodb.net/linkedin?retryWrites=true&w=majority");


module.exports={
 connection
}