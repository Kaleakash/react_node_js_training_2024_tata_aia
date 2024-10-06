let data = "Welcome to Node JS";
let dataBuffer = Buffer.from(data);
let hexFormat = dataBuffer.toString("hex")
let base64Format = dataBuffer.toString("base64")
let base64FormatUrl = dataBuffer.toString("base64Url")
console.log(data)
console.log(dataBuffer)
console.log(hexFormat)
console.log(base64Format)
console.log(base64FormatUrl)