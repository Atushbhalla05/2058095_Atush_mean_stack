let express = require("express");
let app = express();
let http = require("http").Server(app);

let io = require("socket.io")(http);

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})

io.on("connection", (socket) => {
    console.log("Client Connected");
    socket.on("obj", (msg) =>{
        console.log(msg);
    })

    socket.on("obj2", (msg) => {
        let ts = Date.now();
        let date_ob = new Date(ts);
        let hour = date_ob.getHours();
        let minutes = date_ob.getMinutes();
        let serverMsg = "";
        let tempMsg = msg.toLowerCase();
        if(tempMsg == "hello"){
            serverMsg = "Hi!";
        }
        else if(tempMsg == "how are you?"){
            serverMsg = "I am doing Great!";
        }
        else if(tempMsg == "are you helpful?"){
            serverMsg = "I can try to be helpful";
        }
        else{
            serverMsg = "I do not understand";
        }
        socket.emit("obj2", `Client Say: ${msg}<br>Server Say [${hour}:${minutes}]: ${serverMsg}<br>`);
    })
})


http.listen(9090,()=>console.log("Server running on port number 9090"));