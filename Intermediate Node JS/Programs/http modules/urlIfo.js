let url = require("url");
let urlInfo = "http://localhost:9090/login?name=raj&pass=123"
//let urlRef = url.parse(urlInfo); // query property consider as string 
let urlRef = url.parse(urlInfo,true);// query consider as reference 
console.log(urlRef)
console.log(urlRef.pathname)
let data = urlRef.query;
console.log(data)
console.log("name "+data.name)
console.log("password "+data.pass)
console.log(urlInfo)
