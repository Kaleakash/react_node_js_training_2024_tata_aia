let crypto = require("crypto");
let key = crypto.randomBytes(32);
let iv1= crypto.randomBytes(16);
let iv2= crypto.randomBytes(16);
let data = "Welcome to crypto module";

console.log("original Data:  "+data);

let cipher = crypto.createCipheriv("aes-256-cbc",key,iv1);
let encrypted = cipher.update(data,"utf-8",'base64');
encrypted = encrypted+cipher.final('base64');
console.log("Encrypted Data : "+encrypted)

console.log("----------------------------")
let decipher = crypto.createDecipheriv("aes-256-cbc",key,iv1);
let decrypted = decipher.update(encrypted,'base64',"utf-8");
decrypted = decrypted+decipher.final('utf-8');
console.log("Decrypted Data : "+decrypted)