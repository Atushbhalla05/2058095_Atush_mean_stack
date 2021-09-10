let mongoClient = require("mongodb").MongoClient;

let mongoUrl ="mongodb://localhost:27017";

mongoClient.connect(mongoUrl,(err,client)=> {
    if(!err){
        console.log("Connected");
        let db = client.db("mongoDbConnect");
        let id = document.getElementById("id");
        let name = document.getElementById("name");
        let description = document.getElementById("description");
        let amount = document.getElementById("amount");

        let course = {_id: id, name: name, description: description, amount: amount};
        db.collection("Courses").insertOne(course,(err,result)=> {
            if(!err){
                console.log("Record inserted successfully")
                console.log(result);
            }else {
                console.log(err);
            }
        })
    }
    else{
        console.log(err);
    }
})