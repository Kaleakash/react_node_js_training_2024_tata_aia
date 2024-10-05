let net = require("net");

let readline = require("readline"); // it is use to take value using asynchronous manner 
// providing input and output reference details. 
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
}) 

let server = net.createServer();

// this event occurs if any client application connect this program using port number 3000 with localhost 
server.on("connection",(socket)=> {
    console.log("Client connected our application");
    // this code or function help to receive the message data from client machine. 
    socket.on("data",(msg)=> {
        console.log(`From Client : ${msg}`)
    })

    // Server send the data to client console 
    socket.write(`From Server : Welcome to Networking module`)

    r1.on("line",(input)=> {
        socket.write(`From Server : ${input}`);
    })
})




server.listen(3000,()=>console.log("Server running on port number 3000"))