let crypto = require("crypto");
let data = "Welcome to crypto module";

let haxFormat256 = crypto.createHash("sha256").update(data).digest('hex');
let base64256 = crypto.createHash("sha256").update(data).digest('base64');
let utf8256 = crypto.createHash("sha256").update(data).digest('utf8');

console.log(haxFormat256)
console.log(base64256)
console.log(utf8256)


let haxFormat512 = crypto.createHash("sha512").update(data).digest('hex');
let base64512 = crypto.createHash("sha512").update(data).digest('base64');
let utf8512 = crypto.createHash("sha512").update(data).digest('utf8');

console.log(haxFormat512)
console.log(base64512)
console.log(utf8512)
