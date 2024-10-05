let express = require("express");
let app = express();

let ws = require("express-ws")(app);        // load the express-ws module and pass the reference of express module 

// http://localhost:3000

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})

// ws://localhost:3000/
app.ws("/",(socket,req)=> {
    console.log("Client connected...")
    // this function is ready to receive message from client 
    // display on server console. 
    socket.on("message",(msg)=> {
        console.log(msg)
    })

    // server send message to ws client 
    socket.send("From Server : Welcome Client for Web Socket Programming");
})


app.listen(3000,()=>console.log("Server running on port number 3000"));