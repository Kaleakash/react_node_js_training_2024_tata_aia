let crypto = require("crypto");
let data = "Welcome to crypto module";
let secret_key="my_key";
let haxFormatOriginalData = crypto.createHmac("sha256",secret_key).update(data).digest('hex');

//haxFormatOriginalData=haxFormatOriginalData+123;

let haxFormatVerifyData = crypto.createHmac("sha256",secret_key).update(data).digest('hex');
console.log(haxFormatOriginalData)
console.log(haxFormatVerifyData)

if(haxFormatOriginalData==haxFormatVerifyData){
    console.log("original data present")
}else {
    console.log("data modified")
}

//let base64256 = crypto.createHmac("sha256",secret_key).update(data).digest('base64');
//let utf8256 = crypto.createHmac("sha256",secret_key).update(data).digest('utf8');

//console.log(haxFormatOriginalData)
//console.log(base64256)
//console.log(utf8256)


// let haxFormat512 = crypto.createHash("sha512").update(data).digest('hex');
// let base64512 = crypto.createHash("sha512").update(data).digest('base64');
// let utf8512 = crypto.createHash("sha512").update(data).digest('utf8');

// console.log(haxFormat512)
// console.log(base64512)
// console.log(utf8512)
