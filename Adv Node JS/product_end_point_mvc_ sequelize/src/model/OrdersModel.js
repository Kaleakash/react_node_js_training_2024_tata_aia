let {DataTypes}= require("sequelize")
let sequelize= require("../config/dbConfig");
const ProductModel = require("./ProductModel");
// provide the definition for model 
let OrdersModel = sequelize.define("Orders",{
    oid:{                       // pk 
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    orderDate: {
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW              // insert current date/time information 
    },
    pid: {                              //FK in orders 
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model:"product",
            key:"pid"                   // PK       in products 
        }
    }
},{
    "tableName":"orders"
});
// create the relationship between orders and product table. 
OrdersModel.hasMany(ProductModel,{foreignKey:"pid"});
ProductModel.belongsTo(OrdersModel,{foreignKey:"pid"});

module.exports=OrdersModel;



