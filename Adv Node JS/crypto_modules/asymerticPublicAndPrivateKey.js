let crypto = require("crypto");
let {publicKey,privateKey}=crypto.generateKeyPairSync("rsa",{
    modulusLength:2048,
    publicKeyEncoding: {
        type:"pkcs1",                    // format public public key encoding
        format:"pem" 
    },
    privateKeyEncoding: {
        type:"pkcs1",
        format:"pem"
    }
});
console.log("Public Key "+publicKey)
console.log("Private Key "+privateKey)

let data = "Welcome to Crypto public and private key concept";

function encryptWithPublicKey(publicKey,data){
        let encryptData = crypto.publicEncrypt({
            key:publicKey,
            padding:crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash:"sha256"
        },
        Buffer.from(data))
        return encryptData.toString("base64");
}
function decryptWithPrivateKey(privateKey,encryptedData){
    let decryptedData = crypto.privateDecrypt({
        key:privateKey,
        padding:crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash:"sha256"
    },
    Buffer.from(encryptedData,"base64"))
    return decryptedData.toString("utf-8");
}

let encryptedData= encryptWithPublicKey(publicKey,data);
console.log(encryptedData)
console.log("-------------------------------")
let data1 = decryptWithPrivateKey(privateKey,encryptedData)
console.log(data1)