const {Sequelize,DataTypes} = require("sequelize");
// It hold db information 
const sequelize = new Sequelize("my_new_db","postgres","postgres",{
    host:"localhost",
    port:5432,
    dialect:"postgres"
});
// define model for login 
const Login = sequelize.define("login",{
    email: {
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false
    },
    role: {
        type:DataTypes.STRING,   //admin or user 
        allowNull:false
    }
},{
    tableName:"login"
});
module.exports={sequelize,Login}

