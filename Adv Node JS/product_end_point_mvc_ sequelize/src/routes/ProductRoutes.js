let express = require("express");
let router = express.Router();
let ProductController = require("../controller/ProductController");



router.post("/store",ProductController.storeProduct);
router.get("/find",ProductController.findProduct)



module.exports=router;