const express = require("express");
const bodyParser = require("body-parser");   
const date= require(__dirname + "/date.js");

console.log(Date);



const app = express();
var items = ["Beeresh", "25/06/2024", "All is Well"];
var workItems = [];

 app.use(bodyParser.urlencoded({extended:true}));// Becouse of get and post method run
app.use(express.static("public"))
app.set("view engine", "ejs");

app.get("/", function(req, res){

    let day = date.getDate();
   res.render("list", {listTitle:day, newListItems:items}); 
 
});

app.post("/", function(req, res){

    var item = req.body.newItem;

    if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work")
    } else {
    items.push(item);
    res.redirect("/");
    }
   
})

app.get("/work", function(req, res){
    res.render("list", {listTitle:"Work List", newListItems:workItems })
})

app.post("/work", function(req, res){                                                                  
    var items = req.body.newItem;
    workItems.push(items);
    res.redirect("/work")
})

app.get("/abouth",function(req, res){
    res.render("abouth");
})



app.listen("3000", function(){
    console.log("Server started on port 3000");
});