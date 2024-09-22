let express = require("express");
let ProductRouter = require("./routes/ProductRoutes");
let sequelize = require("./config/dbConfig")

let app = express();

app.use(express.json());
// http://localhost:9090/api/products/*
app.use("/api/products/",ProductRouter);


// sync for the database to create connect and create the table. 
sequelize.sync().then(result=> {
        console.log("connected "+result)
}).catch(error=> {
    console.log(error)
});


app.listen(9090,()=>console.log("Server running on port number 9090"));




