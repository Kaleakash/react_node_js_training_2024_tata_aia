let express = require("express");
let sequelizeRef = require("sequelize");

let app = express();

// middleware 
app.use(express.json());            // enable json data from request body 

// database information 
                                    // 1st database, 2nd username, 3rd password 
let s_ref = new sequelizeRef.Sequelize("my_db","postgres","postgres",{
    host:"localhost",
    port:5432,
    dialect:"postgres"          // 
})

// define model 
let Product = s_ref.define("Product",{
    pname: {
        type:sequelizeRef.DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:sequelizeRef.DataTypes.FLOAT,
        allowNull:false
    }
},{
    tableName:"product"
})

// sync for the database to create connect and create the table. 
s_ref.sync().then(result=> {
        console.log("connected "+result)
}).catch(error=> {
    console.log(error)
});


app.listen(9090,()=>console.log("Server running on port number 9090"));