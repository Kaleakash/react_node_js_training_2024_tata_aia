let http = require("http");
let url = require("url");

http.createServer((req,res)=> {
let urlRef = url.parse(req.url,true)
    //console.log(req)
    //console.log(req.method)
    //console.log(req.headers)
    res.setHeader("content-type","text/html");  // added response type as html default plain text 
    if(urlRef.pathname=="/"){
        res.write("<h2>Welcome to Index Page</h2>")
    }else if(urlRef.pathname=="/aboutus"){
        res.write("<h2>Welcome to About Us Page</h2>")
    }else if(urlRef.pathname=="/contactus"){
        res.write("<h2>Welcome to Contact Us page</h2>")
    }else {
        res.write("Page not found")
    }
    res.end();

}).listen(9090);
console.log("server running on port number 9090")