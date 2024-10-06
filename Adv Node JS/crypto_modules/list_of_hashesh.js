let crypto = require("crypto");

//console.log(crypto.getHashes())
//console.log(crypto.getCiphers())

for(let algorithm of crypto.getCiphers()){
    console.log(algorithm)
}
console.log("---------------------")
for(let algorithm of crypto.getHashes()){
    console.log(algorithm)
}