const express = require("express");
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var tasks = [];
app.get("/", function(req, res){

    let day = date.getdate();
    res.render('list', {kindOfDay : day, newTask: tasks}); 
});

app.post("/", function(req, res){
    var task = req.body.item;
    tasks.push(task);
    // console.log(req);
    res.redirect("/");
});

app.listen(3000);







