let mongoClient = require("mongodb").MongoClient;

let mongoUrl ="mongodb://localhost:27017";

mongoClient.connect(mongoUrl,(err,client)=> {
    if(!err){
        console.log("Connected");
        let db = client.db("mongoDbConnect");
        let cid = document.getElementById("cid");

        let course = {_id: id, name: name, description: description, amount: amount};
        db.collection("Courses").deleteOne({_id: cid},(err,result)=> {
            if(!err){
                if(result.deletedCount>0){
                    console.log("Record deleted successfully")
                }else {
                    console.log("Record not present")
                }
            }else {
                console.log(err);
            }
            client.close();
        })
    }
    else{
        console.log(err);
    }
})