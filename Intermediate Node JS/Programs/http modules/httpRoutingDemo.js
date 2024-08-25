let http = require("http");
let url = require("url");
let fs = require("fs");
let msg = "Welcome to Node JS Server Application"
let indexPage =`
    <html>
        <head>
        </head>
        <body>
        <h2>${msg}</h2>
        <a href="aboutus">About us</a>|
        <a href="contactus">Contact us</a>|
        <a href="login">Login</a>
        </body>
    </html>
`
let about_us = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>About Us Page</h2>
    <a href="/">Back </a>
</body>
</html>
`
let contact_us =`

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Contact us</h2>
    <a href="/">Back </a>
</body>
</html>
`

http.createServer((req,res)=> {
let urlRef = url.parse(req.url,true)
    //console.log(req)
    //console.log(req.method)
    //console.log(req.headers)
    res.setHeader("content-type","text/html");  // added response type as html default plain text 
    if(urlRef.pathname=="/"){
        res.write(indexPage)
    }else if(urlRef.pathname=="/aboutus"){
        res.write(about_us)
    }else if(urlRef.pathname=="/contactus"){
        res.write(contact_us)
    }else if(urlRef.pathname=="/login"){
        let loginPage = fs.readFileSync("login.html");
        let loginPageData = loginPage.toString();
        //console.log(loginPageData)
        res.write(loginPageData)
    }else if(urlRef.pathname=="/checkLoginDetails"){
            let data = urlRef.query;
            if(data.emailid=="akash@gmail.com" && data.pass=="123"){
                res.write("<h2>Successfully login</h2>")
            }else {
                res.write("<h2>Failure try once again</h2>")
                res.write(indexPage)
            }
    }else {
        res.write("Page not found")
    }
    res.end();

}).listen(9090);
console.log("server running on port number 9090")