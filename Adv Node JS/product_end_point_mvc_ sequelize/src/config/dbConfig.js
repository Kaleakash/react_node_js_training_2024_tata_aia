let {Sequelize} = require("sequelize");
// PostGres DB pg 
let sequelize =  new Sequelize("my_new_db","postgres","postgres",{
    host:"localhost",
    port:5432,
    dialect:"postgres"
})

// MySQL  DB ie mysql2
// let sequelize =  new Sequelize("my_new_db","root","root@123",{
//     host:"localhost",
//     port:3306,
//     dialect:"mysql"
// })
module.exports=sequelize;

