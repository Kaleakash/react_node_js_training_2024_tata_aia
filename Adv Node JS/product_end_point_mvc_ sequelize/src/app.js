let express = require("express");
let ProductRouter = require("./routes/ProductRoutes");
let OrderRouter = require("./routes/OrderRoutes");
//let sequelize = require("./config/dbConfig")

let {sequelize:productSequalize}=require("./model/ProductModel");
let {sequelize:ordersSequalize}=require("./model/OrdersModel");
let app = express();

app.use(express.json());
// http://localhost:9090/api/products/*


app.use("/api/products/",ProductRouter);
app.use("/api/orders/",OrderRouter);

// sync for the database to create connect and create the table. 
// sequelize.sync().then(result=> {
//         console.log("connected "+result)
// }).catch(error=> {
//     console.log(error)
// });


(async()=> {
    try{
        await productSequalize.sync({logging:false});
        await ordersSequalize.sync({logging:false});
        console.log("Database with model synchronized done successfully!");
    }catch(error){
        console.log(error)
    }
})
()

app.listen(9090,()=>console.log("Server running on port number 9090"));




