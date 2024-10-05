let express = require("express");
let router = express.Router();
let ProductController = require("../controller/ProductController");



router.post("/store",ProductController.storeProduct);
router.get("/find",ProductController.findProduct)
router.get("/find_by_id/:pid",ProductController.findProductById)
router.put("/update",ProductController.updateProduct);
router.delete("/delete_by_id/:pid",ProductController.deleteProductUsingPid);


module.exports=router;