var orm=require("../config/orm.js");

var burger={
 selectAll:function(cb){
     console.log("2- calling orm method in models/burger.js");
    orm.selectAll("burgers",function(res){
        cb(res);
    });
 },
 insertOne:function(col1,val1,cb){
    orm.insertOne("burgers",col1,val1,function(res){
        cb(res);
    });
 },
 updateOne:function(col1,val1,id,cb){
     orm.updateOne("burgers",col1,val1,id,function(res){
        cb(res);
     });
 }
};
module.exports=burger;