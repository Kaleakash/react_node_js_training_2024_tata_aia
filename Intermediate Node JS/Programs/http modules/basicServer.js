let http = require("http");
// http.createServer(function(req,res) {

// });


// http://localhost:9090

let server = http.createServer((req,res)=> {
    console.log("client send request")
    
    res.end("Welcome to Simple Http server app")
});

server.listen(9090)
console.log("Server running on port number 9090")