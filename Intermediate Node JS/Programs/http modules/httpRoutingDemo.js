let http = require("http");
let url = require("url");

http.createServer((req,res)=> {
let urlRef = url.parse(req.url,true)

    if(urlRef.pathname=="/"){
        res.write("Welcome to Index Page")
    }else if(urlRef.pathname=="/aboutus"){
        res.write("Welcome to About Us Page")
    }else if(urlRef.pathname=="/contactus"){
        res.write("Welcome to Contact Us page")
    }else {
        res.write("Page not found")
    }
    res.end();

}).listen(9090);
console.log("server running on port number 9090")