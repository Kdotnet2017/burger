var mysql=require("mysql");
var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ChangeMe987",
    database:"burgers_db"
});
connection.connect(function(error){
    if(error){
        console.log(error);
        throw error;
    }
    console.log("step 2 - SQL connected id: "+connection.threadId);
    console.log("--------------------------------------");
});

module.exports=connection;