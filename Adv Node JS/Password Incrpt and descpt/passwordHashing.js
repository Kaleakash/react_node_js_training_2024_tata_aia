let bcrypt_ref = require("bcryptjs");
let password1 = "abc@123";

let password2 = "abc@12345";
// ES5 style 
// bcrypt_ref.hash(password1,5,(err,hash)=> {
//         if(err){
//             console.log(err.message)
//         }elsse {
//             console.log("text format password "+password1)
//             console.log("hash format password "+hash);      // it will help use to convert in hash store in db. 
//         }
//         // verify password 
//         bcrypt_ref.compare(password2,hash,(err,isMatch)=> {
//             if(err){
//                 console.log(err.message)
//             }else {
//                 console.log("Password match "+isMatch)
//             }
//         })
// })



// ES6 style 
let hashPassword= async(password)=>{
    let hash = await bcrypt_ref.hash(password1,5);
    return hash;
}

let comparePassword = async(password,hash)=>{
        let result = await bcrypt_ref.compare(password,hash);
        return result;
}
(async()=> {
    let hashConvertedPassword = await hashPassword(password1);
    console.log("Plain Text format password "+password1)
    console.log(hashConvertedPassword)
    let result = await comparePassword(password2,hashConvertedPassword)
    console.log(result)
})()
