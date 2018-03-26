var express=require("express");

var burger=require("../models/burger.js");

var router=express.Router();

router.get("/",function(req,res){
    console.log("1- burgers_controller.js : router.get(.....)")
    console.log("step 3 in loop controller route before calling orm.js");
    burger.selectAll(function(data){
        console.log("4- we got the data now pass to view index (router.get(...) ");
        var handlebarsObject={burgers:data};
        res.render("index",handlebarsObject);
        console.log("5-end in burger_controller.js----passed data to view----------index rendered-------------------");
    });
});
router.post("/api/burgers",function(req,res){
    console.log(req.body);
    burger.insertOne("burgers_name",req.body.name,function(data){
        res.json({id:data.insertId});
        //console.log(data);
    })
});
router.put("/api/burgers/:id",function(req,res){
    var id=req.params.id;
    burger.updateOne("devoured",req.body.devoured,id,function(data){
        console.log(data);
    })
});
module.exports=router;