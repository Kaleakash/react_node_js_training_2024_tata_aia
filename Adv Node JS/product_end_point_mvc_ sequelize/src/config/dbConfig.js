let {Sequelize} = require("sequelize");

let sequelize =  new Sequelize("my_new_db","postgres","postgres",{
    host:"localhost",
    port:5432,
    dialect:"postgres"
})

module.exports=sequelize;

