let http = require("http");
let url = require("url");
let fs = require("fs");
let querystring = require("querystring");
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
        res.end();
    }else if(urlRef.pathname=="/aboutus"){
        res.write(about_us)
        res.end();
    }else if(urlRef.pathname=="/contactus"){
        res.write(contact_us)
        res.end();
    }else if(urlRef.pathname=="/login"){
        let loginPage = fs.readFileSync("login.html");
        let loginPageData = loginPage.toString();       // converting buffer to string format. 
        //console.log(loginPageData)        
        res.write(loginPageData)
        res.end();
    }else if(urlRef.pathname=="/checkLoginDetails" && req.method=="GET"){
            let data = urlRef.query;
            if(data.emailid=="akash@gmail.com" && data.pass=="123"){
                res.write("<h2>Successfully login</h2>")
            }else {
                res.write("<h2>Failure try once again</h2>")
                res.write(indexPage)
            }
            res.end();
    }else if(urlRef.pathname=="/checkLoginDetails" && req.method=="POST"){
       console.log("post method called")
       let body = ""
       req.on("data",(msg)=> {
            //console.log(msg)
            //console.log(msg.toString())
            body = body +msg.toString();
       })
       let result ="";
       req.on("end",()=> {
            console.log("all data loaded...")
            //console.log(body);
            //console.log(body.emailid);
            //console.log(body.pass);
            let parseBody = querystring.parse(body);        // this code convert string format body data in query reference. 
            //console.log(parseBody.emailid);
            //console.log(parseBody.pass);
            let emailid1 = parseBody.emailid
            let password1 = parseBody.pass
            console.log(emailid1+" "+password1)
            console.log(emailid1.length+" "+password1.length)
            if(emailid1=="akash@gmail.com" && password1=="123"){
               result="successfully login"
            }else {
                result = "failure try once again"
            }
            res.write(result)
            res.end();
       })
       
    }else {
        res.write("Page not found")
        res.end();
    }
    //res.end();

}).listen(9090);
console.log("server running on port number 9090")