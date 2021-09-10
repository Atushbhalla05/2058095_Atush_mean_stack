let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let app = express();

let mongoose = require("mongoose");
//url 
let url = "mongodb://localhost:27017/tcsmean";
mongoose.pluralize(null);

mongoose.connect(url).
then(res=>console.log("connected")).
catch(err=>console.log(err))

let db = mongoose.connection;
db.once("open",()=> {
    // We have to defined schema which provide the structure for collection 
    let courseSchema = mongoose.Schema({
        _id:Number,
        name:String,
        description:String,
        amount:Number
    });
    let courseModel = mongoose.model("Course",courseSchema);

    app.post("/add", (request,response)=> {
        let courseInfo = request.body;
        let course = new courseModel({_id: courseInfo.id, 
            name: courseInfo.name, description: courseInfo.description, amount: courseInfo.amount});

        courseModel.insertMany(course, (err,result)=> {
            if(!err){
                console.log(result)
            } else {
                console.log(err);
            }
        })
    })

    app.get("/delete", (request,response)=> {
        let cid = request.query.id;

        courseModel.deleteMany({_id:cid}, (err,result)=> {
            if(!err){
                console.log(result)
            } else {
                console.log(err);
            }
        })
    })
    app.get("/update", (request,response)=> {
        let cid = request.query.id;
        let camount = request.query.amount;
        console.log(camount);
        courseModel.updateOne({_id:cid},{$set:{amount:camount}}, (err,result)=> {
            if(!err){
                console.log(result)
                if(result.modifiedCount>0 || result.matchedCount>0){
                     console.log("Course updated successfully")
                }else {
                    console.log("Course didn't update");
                }
            }else {
                console.log(err);
            }
        })
    })
    app.get("/fetchCourse", (request,response)=> {
        //response.sendFile(__dirname+"/fetchCourse.html");
        courseModel.find({},(err,res)=> {
            if(!err){
                let startTable = `<table border = 1><tr><th>Course ID</th><th>Course Name</th><th>Description</th><th>Amount</th></tr>`;
                let endTable = `</table>`;
                let tableData = ``;
                 res.forEach(data => {
                    tableData += `<tr><td>${data.id} </td><td> ${data.name} </td><td> ${data.description} </td><td> ${data.amount} </td></tr>`;
                })
                response.write(startTable+tableData+endTable);
            }else {
                console.log(err);
            }
        })
    })
})

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.get("/",(request,response)=> {
    response.sendFile(__dirname+"/index.html");
})

app.get("/addCourse",(request,response)=> {
    response.sendFile(__dirname+"/addCourse.html");
})

app.get("/updateCourse",(request,response)=> {
    response.sendFile(__dirname+"/updateCourse.html");
})

app.get("/deleteCourse",(request,response)=> {
    response.sendFile(__dirname+"/deleteCourse.html");
})


app.listen(9090,()=>console.log("Server running on port number 9090"))

