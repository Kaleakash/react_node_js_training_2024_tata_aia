let express = require("express");
let router = express.Router();          // to get router reference 
let productController = require("../controller/productController")

router.get("/find",productController.findAllProducts);
router.post("/store",productController.storeProduct);

//router.get("/findbyid/:pid",productController.findAllProducts);


module.exports=router;
