let express = require("express");
let router = express.Router();          // to get router reference 
let productController = require("../controller/productController")

router.get("/find",productController.findAllProducts);
router.post("/store",productController.storeProduct);
router.put("/update_price",productController.updateProductPrice);
router.delete("/delete/:pid",productController.deleteProduct)




module.exports=router;
