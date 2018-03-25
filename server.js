var express=require("express");
var bodyParser=require("body-parser");

var PORT=process.env.PORT || 8080;

var app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var exphbs=require("express-handlebars");

app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");
console.log("one time start server - in server.js");
var routes=require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT);