let readline = require("readline");
let r1 = readline.createInterface({
            input:process.stdin,
            output:process.stdout
    })
// r1.question("Enter your data ",(data)=> {
//     console.log("your data is "+data)
//     r1.close();
// })

r1.question("Enter your id ",(id)=> {
    
   r1.question("Enter name ",(name)=> {
    console.log("your id is "+id)
    console.log("your name is "+name)
    r1.close();
   })


})

