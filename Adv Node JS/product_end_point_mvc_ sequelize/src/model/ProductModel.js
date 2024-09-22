let {DataTypes}= require("sequelize")
let sequelize= require("../config/dbConfig");

// provide the definition for model 

let ProductModel = sequelize.define("Product",{
    pid:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    pname: {
        type:DataTypes.STRING,
        allowNull:false
    },
    price: {
        type:DataTypes.FLOAT,
        allowNull:false
    }
},{
    "tableName":"product"
});


module.exports=ProductModel;



