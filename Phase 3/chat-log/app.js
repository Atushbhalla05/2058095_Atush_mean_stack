let express = require("express");
let app = express();
let http = require("http").Server(app);
let cors = require("cors");
let bodyParser = require("body-parser");

let url = "mongodb://localhost:27017/tcsmean";

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

let mongoose = require("mongoose");
mongoose.pluralize(null);

mongoose.connect(url).
then(res=>console.log("connected")).
catch(err=>console.log(err))

let db = mongoose.connection;
let io = require("socket.io")(http);

db.once("open",()=> {

    let msgSchema = mongoose.Schema({
        name:String,
        msg: String
    });

    let msgModel = mongoose.model("Message",msgSchema);

    io.on("connection", (socket) => {
        console.log("Client Connected");
        socket.on("obj1", (value) => {
            let val = JSON.parse(value);
            let message = new msgModel({name: val.name, msg: val.msg});
            msgModel.insertMany(message, (err,result)=> {
                if(!err){
                    console.log(result)
                } else {
                    console.log(err);
                }
            })
        })
    })
    
})



app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})

http.listen(9090,()=>console.log("Server running on port number 9090"));