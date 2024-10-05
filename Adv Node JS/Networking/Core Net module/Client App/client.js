let net = require("net");

let readline = require("readline"); // it is use to take value using asynchronous manner 
// providing input and output reference details. 
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
}) 

let client = net.createConnection("3000","localhost",()=> {
    // this message display on client console 
    console.log("Client Application Running...")
    // From Client Machine we want to send the data to Server program or app
    // this message send to server console. 
    client.write("Hello, I Am client")


    // This code or function called to receive data from server application.  
    client.on("data",(msg)=> {
        console.log(`${msg}`)
    })
    // it will ask us value 
    r1.on("line",(input)=> {
        client.write(`From Client : ${input}`);
    })
});