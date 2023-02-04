const bodyParser = require("body-parser");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

mongoose.set('strictQuery', true);
// mongoose.connect("mongodb://localhost:27017/ContactAmaan", {useNewUrlParser:true} );
mongoose.connect("mongodb+srv://jsamaan:amaan123@cluster0.vz55wc0.mongodb.net/jsamaan?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



const Contacts = mongoose.Schema({
  name: String,
  email: String,
  messege: String,
});  

const contact = mongoose.model("contact", Contacts);

  

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");    
});

app.post("/", function(req,res){
    const name = req.body.name;
    const email = req.body.email;
    const messege = req.body.messege;
    console.log(name);
    console.log(email);
    console.log(messege);
     
    const contact1 = new contact({
        name:name,
        email:email,
        messege:messege
    });
    if(name.length===0 || email.length===0){
        res.sendFile(__dirname+"/index2.html");   
    }else{
    contact1.save(function(err){
        if(!err){
            console.log("Your work is saved.");
        }
    })}
})
app.get("/", function(req,res){
    res.sendFile(__dirname+"/index2.html");    
});
app.post("/", function(req,res){
    const name = req.body.name;
    const email = req.body.email;
    const messege = req.body.messege;
    console.log(name);
    console.log(email);
    console.log(messege);
     
    const contact1 = new contact({
        name:name,
        email:email,
        messege:messege
    });
    if(name.length===0 || email.length===0){
        res.sendFile(__dirname+"/index2.html");   
    }else{
    contact1.save(function(err){
        if(!err){
            console.log("Your work is saved.");
          res.sendFile(__dirname+"/index.html");
        }
    })}
})

app.listen("3000", function(req,res){
    console.log("port is under 3000");
})
