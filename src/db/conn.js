const mongoose=require("mongoose");
//connection creation and creatin a new db
mongoose.connect("mongodb://localhost:27017/foodpoint",{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=> console.log("connection successful...."))
.catch((err)=>console.log(err));

