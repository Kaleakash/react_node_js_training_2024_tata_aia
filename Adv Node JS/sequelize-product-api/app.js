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
let ProductModel = s_ref.define("Product",{
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

// Rest API 
// http://localhost:9090/store_product      
app.post("/store_product",async (req,res)=> {
    let product = req.body;
    //console.log(product);
    try{
    let result =  await ProductModel.create(product);           // asynchronous we are not writing insert query 
    //console.log(result)
    res.json({"msg":result}); 
    }catch(error){
        res.json({"msg":error.message})
    }
})


app.listen(9090,()=>console.log("Server running on port number 9090"));