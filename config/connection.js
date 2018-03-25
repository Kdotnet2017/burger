var mysql=require("mysql");
var connection=mysql.createConnection({
    host:process.env.MySQL_Host,
    user: process.env.MySQL_User,
    password: process.env.MySQL_Password,
    database: process.env.MySQL_database
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

