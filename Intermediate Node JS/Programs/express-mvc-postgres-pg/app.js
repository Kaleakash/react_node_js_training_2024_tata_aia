let express = require("express");
let app = express();
let port = 9090;
let productRouter= require("./router/productRouter");

// middleware 
app.use(express.json());

// http://localhost:9090/api/products/*
app.use("/api/products",productRouter);




app.listen(port,()=>console.log(`Server running on port number ${port}`));